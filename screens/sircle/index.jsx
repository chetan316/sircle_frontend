import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList, Image, ImageBackground } from 'react-native';
// import Constants from 'expo-constants';
// import Highlighter from 'react-native-highlight-words';

const size = 310;
const symbolSize = 16;


const radius = size / 2;
const center = radius;


export default class Sircle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            higightedTexts: '',
            x: 1, y: 1,
            x1: 1, y1: 1,
            x2: 1, y2: 1,
            x3: 1, y3: 1,
            x4: 1, y4: 1,
            x5: 1, y5: 1,
            x6: 1, y6: 1,
            x7: 1, y7: 1,
            x8: 1, y8: 1,
        }
    }

    componentDidMount() {
        this.setupA();
        this.setupB();
        this.setupC();
        this.setupD();
        this.setupE();
        this.setupF();
        this.setupG();
        this.setupH();
        this.setupI();
    }

    degToRad(deg) {
        return deg * Math.PI / 180;
    }

    setupA() {
        const angleRad = this.degToRad(0);
        const x = radius * Math.cos(angleRad) + center - symbolSize / 2;
        const y = radius * Math.sin(angleRad) + center - symbolSize / 2;
        this.setState({
            x: x,
            y: y
        })
    }

    setupB() {
        const angleRad = this.degToRad(90);
        const x = radius * Math.cos(angleRad) + center - symbolSize / 2;
        const y = radius * Math.sin(angleRad) + center - symbolSize / 2;
        this.setState({
            x2: x,
            y2: y
        })
    }

    setupC() {
        const angleRad = this.degToRad(180);
        const x = radius * Math.cos(angleRad) + center - symbolSize / 2;
        const y = radius * Math.sin(angleRad) + center - symbolSize / 2;
        this.setState({
            x3: x,
            y3: y
        })
    }

    setupD() {
        const angleRad = this.degToRad(270);
        const x = radius * Math.cos(angleRad) + center - symbolSize / 2;
        const y = radius * Math.sin(angleRad) + center - symbolSize / 2;
        this.setState({
            x4: x,
            y4: y
        })
    }


    setupE() {
        const angleRad = this.degToRad(320);
        const x = radius * Math.cos(angleRad) + center - symbolSize / 2;
        const y = radius * Math.sin(angleRad) + center - symbolSize / 2;
        this.setState({
            x5: x,
            y5: y
        })
    }

    setupF() {
        const angleRad = this.degToRad(50);
        const x = radius * Math.cos(angleRad) + center - symbolSize / 2;
        const y = radius * Math.sin(angleRad) + center - symbolSize / 2;
        this.setState({
            x6: x,
            y6: y
        })
    }

    setupG() {
        const angleRad = this.degToRad(140);
        const x = radius * Math.cos(angleRad) + center - symbolSize / 2;
        const y = radius * Math.sin(angleRad) + center - symbolSize / 2;
        this.setState({
            x7: x,
            y7: y
        })
    }

    setupH() {
        const angleRad = this.degToRad(230);
        const x = radius * Math.cos(angleRad) + center - symbolSize / 2;
        const y = radius * Math.sin(angleRad) + center - symbolSize / 2;
        this.setState({
            x8: x,
            y8: y
        })
    }

    setupI() {
        const angleRad = this.degToRad(200);
        const x = radius * Math.cos(angleRad) + center - symbolSize / 2;
        const y = radius * Math.sin(angleRad) + center - symbolSize / 2;
        this.setState({
            x9: x,
            y9: y
        })
    }



    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View
                    style={[{
                        backgroundColor: '#bd77b4',
                        width: size,
                        height: size,
                        borderRadius: size / 2,
                    }]}
                >
                    {/* <ImageBackground source={require('../../assets/logo_1.png')} style={styles.image}>

                    </ImageBackground> */}
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            left: this.state.x - 20,
                            top: this.state.y,
                            position: 'absolute'
                        }}
                        source={require('../../assets/images/ic6.png')}
                    />

                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            left: this.state.x2,
                            top: this.state.y2 - 20,
                            position: 'absolute'
                        }}
                        source={require('../../assets/images/ic3.png')}
                    />



                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            left: this.state.x3,
                            top: this.state.y3,
                            position: 'absolute'
                        }}
                        source={require('../../assets/images/ic5.png')}
                    />

                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            left: this.state.x4 - 10,
                            top: this.state.y4,
                            position: 'absolute'
                        }}
                        source={require('../../assets/images/ic4.png')}
                    />

                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            left: this.state.x5 - 20,
                            top: this.state.y5,
                            position: 'absolute'
                        }}
                        source={require('../../assets/images/ic6.png')}
                    />

                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            left: this.state.x6,
                            top: this.state.y6 - 20,
                            position: 'absolute'
                        }}
                        source={require('../../assets/images/ic3.png')}
                    />

                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            left: this.state.x7,
                            top: this.state.y7,
                            position: 'absolute'
                        }}
                        source={require('../../assets/images/ic5.png')}
                    />

                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            left: this.state.x8 - 10,
                            top: this.state.y8,
                            position: 'absolute'
                        }}
                        source={require('../../assets/images/ic4.png')}
                    />

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
});