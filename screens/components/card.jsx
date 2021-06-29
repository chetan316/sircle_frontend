import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Card = props => {
    return (
        <View style={{ marginTop: 20, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity onPress={() => props.handlePress(1)} style={{ ...styles.card, ...props.style }}>
                <View style={{ padding: 10 }}>{props.children}</View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 0,
        marginBottom: 30
    }
});
export default Card;