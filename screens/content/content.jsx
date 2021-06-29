import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Button } from 'react-native';

const DATA = [
    {
        id: '1',
        name: 'Snips',
        // field: 'Music',
        // photo: 'https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg'
    },
    {
        id: '2',
        name: 'Photo',
        // field: 'Music',
        // photo: 'https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg'
    }
]

function Item({ item }) {
    return (
        <TouchableOpacity>
            <View style={styles.listItem}>
                {/* <Image source={{ uri: item.photo }} style={{ width: 60, height: 60, borderRadius: 30 }} /> */}
                <View style={{ marginLeft: 20, flex: 1 }}>
                    <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default function Content({ handlePress }) {

    return (
        <View style={styles.container}>
            <FlatList
                style={{ flex: 1 }}
                data={DATA}
                renderItem={({ item }) => <Item item={item} />}
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