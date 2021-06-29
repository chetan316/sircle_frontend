
import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Card from '../components/card'


export default function Plan({ handlePlan }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [step, setStep] = useState(1)

    const handleSteps = (num = 1) => {
        setStep(prevStep => parseInt(prevStep) + num)
    }

    return (
        // <View style={styles.containerPlan}>
        //     <View style={styles.cardHeader}>
        //         <Text style={styles.cardHeaderText}>Select Plan</Text>
        //     </View>
        //     <View style={styles.cardContainer}>
        //         <TouchableOpacity style={styles.cardBtn}>
        //             <Text style={styles.sectionTitle}>Standard</Text>
        //             <Text style={styles.planAmount}>{'\u20A8'} 100</Text>
        //         </TouchableOpacity>
        //         <TouchableOpacity style={styles.cardBtn}>
        //             <Text style={styles.sectionTitle}>Platinum</Text>
        //             <Text style={styles.planAmount}>{'\u20A8'} 500</Text>
        //         </TouchableOpacity>
        //         <TouchableOpacity style={styles.cardBtn}>
        //             <Text style={styles.sectionTitle}>Gold</Text>
        //             <Text style={styles.planAmount}>{'\u20A8'} 1000</Text>
        //         </TouchableOpacity >
        //     </View>
        // </View >
        <>
            <View style={styles.cardHeader}>
                <Text style={styles.cardHeaderText}>Select Plan</Text>
            </View>
            <View style={styles.cardContainer}>
                <Card style={styles.card} handlePress={handlePlan}>
                    <Text style={styles.sectionTitle}>Standard</Text>
                    <Text style={styles.planAmount}>{'\u20A8'} 100</Text>
                </Card>
                <Card style={styles.card} handlePress={handlePlan}>
                    <Text style={styles.sectionTitle}>Platinum</Text>
                    <Text style={styles.planAmount}>{'\u20A8'} 500</Text>
                </Card>
                <Card style={{ ...styles.card, ...styles.goldCard }} handlePress={handlePlan}>
                    <Text style={styles.sectionTitle}>Gold</Text>
                    <Text style={styles.planAmount}>{'\u20A8'} 1000</Text>
                </Card>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    containerPlan: {
        display: 'flex',
        // backgroundColor: '#9b2787',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        display: 'flex',
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-around',
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'center',
        margin: 15
    },
    cardHeaderText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: "#fff",
    },
    card: {
        height: 80,
        width: '100%',
        // backgroundColor: '#06bcee',
        backgroundColor: '#b685ff',
        margin: 0,
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
    },
    planAmount: {
        color: '#000',
        alignItems: "center",
        fontSize: 18

    },
    goldCard: {
        padding: 20
    }
    // cardBtn: {
    //     width: "40%",
    //     backgroundColor: "#c792ea",
    //     borderRadius: 10,
    //     height: 80,
    //     alignItems: "center",
    //     justifyContent: "center",
    //     // marginTop: 40,
    //     marginBottom: 10,
    // },
});