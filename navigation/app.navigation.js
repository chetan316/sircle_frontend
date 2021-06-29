import React from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, Entypo } from '@expo/vector-icons'
import { Button, Text, TouchableOpacity } from 'react-native'

import Login from "../screens/login/login";
import Signup from "../screens/signup";

import PartnerHome from '../screens/home/partner.home';
import Profile from '../screens/profile/profile'
import Leaders from '../screens/category/leaders';
import Sircle from '../screens/sircle';
import ThreeDotMenu from '../utils/threeDotMenu';
import Content from '../screens/content/content';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function getHeaderTitle(route) {
    // const routeName = route.state
    //     ? route.state.routes[route.state.index].name
    //     : route.params?.screen || 'Home'
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

    switch (routeName) {
        case 'Home':
            return 'Trending'
        case 'Profile':
            return 'Profile'
        case 'OLE':
            return 'OLE'
        case 'Sircle':
            return 'Your Connections'
        case 'Add':
            return 'Content Type'
    }
}

function MainTabNavigator() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#101010',
                style: {
                    // backgroundColor: '#ffd700'
                }
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName
                    if (route.name == 'Home') {
                        iconName = 'ios-home'
                    } else if (route.name == 'Profile') {
                        iconName = 'ios-person'
                    } else if (route.name == 'OLE') {
                        iconName = 'ios-man'
                    } else if (route.name == 'Sircle') {
                        iconName = 'people-circle-outline'
                    } else if (route.name == 'Add') {
                        iconName = 'ios-add-circle-outline'
                    }
                    return <Ionicons name={iconName} color={color} size={size} />
                }
            })}>
            <Tab.Screen name='Home' component={PartnerHome} />
            <Tab.Screen name='OLE' component={Leaders} />
            <Tab.Screen name='Add' component={Content} />
            <Tab.Screen name='Sircle' component={Sircle} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    )
}

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Sircle'
                screenOptions={({ route, navigation }) => ({
                    headerRight: () => (
                        getFocusedRouteNameFromRoute(route) === "OLE" ? <ThreeDotMenu
                            menutext="Menu"
                            menustyle={{ marginRight: 14 }}
                            textStyle={{ color: 'black' }}
                            navigation={navigation}
                            route={route}
                            isIcon={true}
                        />
                            :
                            getFocusedRouteNameFromRoute(route) === "Home" ?
                                // <TouchableOpacity onPress={() => navigation.navigate('OLE')}>
                                <TouchableOpacity>
                                    <Text style={{ color: "black", marginRight: 8, fontWeight: 'bold', fontSize: 20 }}>
                                        Friends
                                 </Text>
                                </TouchableOpacity>
                                : ''

                    ),
                    gestureEnabled: true,
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                    headerBackTitleVisible: false,
                })}
                headerMode='float'>
                <Stack.Screen name='Login' component={Login} options={{ title: 'Login' }} />
                <Stack.Screen name='Signup' component={Signup} />
                <Stack.Screen
                    name='Home'
                    component={MainTabNavigator}
                    options={
                        ({ route }) => ({
                            headerTitle: getHeaderTitle(route),
                        })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator
