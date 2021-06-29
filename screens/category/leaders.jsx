import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Button } from 'react-native';
import ThreeDotMenu from '../../utils/threeDotMenu';

const DATA = [
    {
        id: '9',
        name: 'Shailesh',
        field: 'Music',
        photo: 'https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg'
    },
    {
        id: '7',
        name: 'A.R. Rehman',
        field: 'Music',
        photo: 'https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg'
    },
    {
        id: '8',
        name: 'Arjit Singh',
        field: 'Music',
        photo: 'https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg'
    },
    {
        id: '1',
        name: 'Sachin Tendulkar',
        field: 'Sports',
        photo: 'https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg'
    },
    {
        id: '6',
        name: 'MS Dhoni',
        field: 'Sports',
        photo: 'https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg'
    },
    {
        id: '2',
        name: 'Sadguru',
        field: 'Spirutal',
        photo: 'https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg'
    },
    {
        id: '3',
        name: 'Amitabh Bacchan',
        field: 'Films',
        photo: 'https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg'
    },
    {
        id: '4',
        name: 'Ranvir Kappor',
        field: 'Films',
        photo: 'https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg'
    },
    {
        id: '5',
        name: 'Shahrukh Khan',
        field: 'Films',
        photo: 'https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg'
    },



]

function Item({ item, handlePress }) {
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.listItem}>
                <Image source={{ uri: item.photo }} style={{ width: 60, height: 60, borderRadius: 30 }} />
                <View style={{ marginLeft: 20, flex: 1 }}>
                    <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                    <Text>{item.field}</Text>
                </View>
                {/* <ThreeDotMenu /> */}
            </View>
        </TouchableOpacity>
    );
}

export default function Leaders({ handlePress, navigation }) {
    // React.useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerRight: () => (
    //             // <ThreeDotMenu
    //             //     //Menu Text
    //             //     menutext="Menu"
    //             //     //Menu View Style
    //             //     menustyle={{ marginRight: 20 }}
    //             //     //Menu Text Style
    //             //     textStyle={{ color: 'black' }}
    //             //     // navigation={navigation}
    //             //     // route={route}
    //             //     isIcon={true}
    //             // />
    //             <Button title="Update count" />
    //         ),
    //         headerRightContainerStyle: {
    //             marginRight: 20,
    //             color: '#000'
    //         }
    //     });
    // }, [navigation]);
    return (
        <View style={styles.container}>
            <FlatList
                style={{ flex: 1 }}
                data={DATA}
                renderItem={({ item }) => <Item item={item} handlePress={handlePress} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#F7F7F7',
        marginTop: 10
    },
    listItem: {
        margin: 1,
        padding: 10,
        backgroundColor: "#FFF",
        width: "100%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 5,
        alignItems: "center",
    }
});