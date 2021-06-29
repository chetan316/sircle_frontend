
import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Leaders from '../category/leaders'
import Card from '../components/card'
import Plan from '../plans/plan'


export default function Signup({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [step, setStep] = useState(1)
    const [registrationType, setRegistrationType] = useState('')
    const [leader, setLeader] = useState('')

    const handleSteps = (num = 1) => {
        setStep(prevStep => parseInt(prevStep) + num)
    }

    const handlePress = (type) => {
        setRegistrationType(type)
        handleSteps(1)
    }
    const handleLeader = (selectedLeader) => {
        setLeader(selectedLeader)
        handleSteps(1)
    }

    const handleSubmit = () => {
        navigation.navigate('Home')
    }
    return (

        <View style={styles.container}>
            {step === 1 &&
                <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollviewContainer}>
                    {/* <Text>Sign up</Text> */}
                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="First Name"
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setEmail(text)} />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="Last Name"
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setEmail(text)} />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            keyboardType="email-address"
                            style={styles.inputText}
                            placeholder="Email"
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setEmail(text)} />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            keyboardType="number-pad"
                            style={styles.inputText}
                            placeholder="Mobile Number"
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setEmail(text)} />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            secureTextEntry
                            style={styles.inputText}
                            placeholder="Password..."
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setPassword(text)} />
                    </View>
                </ScrollView>
            }
            {step && step === 2 &&
                <>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardHeaderText}>Register As</Text>
                    </View>
                    <View style={styles.cardContainer}>
                        <Card style={styles.card} handlePress={() => handlePress('leader')}>
                            <Text style={styles.sectionTitle}>Leader</Text>
                        </Card>
                        <Card style={styles.card} handlePress={() => handlePress('partner')}>
                            <Text style={styles.sectionTitle}>Partner</Text>
                        </Card>
                    </View>
                </>
            }
            {step && step === 3 && registrationType === 'partner' &&
                <>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardHeaderText}>Select Leader</Text>
                    </View>
                    <Leaders handlePress={handleLeader} />
                </>
            }
            {step && ((step === 3 && registrationType === 'leader') || step === 4 || step > 4) &&
                <Plan handlePlan={handleSubmit} />
            }
            {step && (step === 1) &&
                <TouchableOpacity style={styles.nextBtn}
                    onPress={() => handleSteps(1)}>
                    <Text style={styles.loginText}>Next</Text>
                </TouchableOpacity>
            }
            {step && step > 1 &&
                <TouchableOpacity style={styles.backBtn}
                    onPress={() => handleSteps(-1)}>
                    <Text style={styles.loginText}>Back</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#9b2787',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollviewContainer: {
        width: '100%',
        marginLeft: 70,
        marginTop: 20,
        backgroundColor: "#fff",
    },
    logo: {
        fontWeight: "bold",
        // fontSize: 50,
        // color: "#fb5b5a",
        marginBottom: 40
    },
    inputView: {
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#ad93e2"
    },
    inputText: {
        height: 50,
        color: "black"
    },
    forgot: {
        color: "white",
        fontSize: 14
    },
    nextBtn: {
        width: "80%",
        backgroundColor: "#b685ff",
        // backgroundColor: "#7336f1",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10,
    },
    backBtn: {
        width: "80%",
        backgroundColor: "#b685ff",
        // backgroundColor: "#d78afe",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10,
    },
    loginText: {
        color: "#fff"
    },
    // card
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        height: 130,
        width: '100%',
        // backgroundColor: '#c792ea',
        backgroundColor: "#b685ff",
        margin: 10,
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
    }
});