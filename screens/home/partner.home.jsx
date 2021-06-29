import React, { Component, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    RefreshControl
} from "react-native";
import posts from '../../utils/posts';
import Post from '../components/post';

import { Colors } from "react-native/Libraries/NewAppScreen";
// import SvgUri from "expo-svg-uri";
import { colors } from "../../utils/colors";
import CameraButton from "../components/CameraButton";
// import StoryItems from "../../components/storyItems";
// import AvatarInput from "../components/AvatarInput";
// import RoundedActionButton from "../components/RoundedActionButton";
import avatars from "../../utils/avatars";


export default function PartnerHome({ props }) {
    const [refreshing, setRefreshing] = useState(false)

    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    };


    const onRefresh = () => {
        setRefreshing(true)
        wait(2000).then(() => {
            setRefreshing(false);
        });
    };

    const handleClick = () => {
        props.navigation.navigate('Profile')
    };
    return (
        <View style={styles.fragment}>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView></SafeAreaView>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                {
                    posts.map(post => (
                        <Post key={post.id} likeCount={`${post.likeCount} Likes`} commentCount={`${post.commentCount} Comments`} shareCount={`${post.shareCount} Shares`}
                            author={post.author} time={post.time} avatar={post.avatar}
                            image={post.image} text={post.text} isImage={post.isImage} isText={post.isText} isVideo={post.isVideo} />
                    ))
                }


            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    paddingContainer: {
        flexDirection: 'column',
        padding: 16
    },
    marginContainer: {
        marginTop: 16
    },
    playAllText: {
        color: colors.filterBlue,
        marginLeft: 5,
        fontWeight: "400",
        marginTop: 3
    },
    flexAlignedStart: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    flexAlignedEnd: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    HeaderStories: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },

    storiesContainer: {
        flexDirection: 'row'
    },


    fragment: {
        flex: 1,
        flexDirection: 'column'
    },
    storieTitle: {
        fontWeight: "bold",
        fontSize: 16
    },
    touchableMask: {
        position: "absolute",
        top: 5,
        left: 10,
        width: 30,
        height: 30,
        zIndex: 9,
        padding: 5
    },
    scrollView: {
        backgroundColor: "#fff",
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: "#fff",
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: "#000",
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: "grey",
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: "grey",
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

