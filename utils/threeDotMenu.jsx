import React from 'react'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { Alert, Image, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons'

export default function ThreeDotMenu(props) {
    let _menu = null;
    return (
        <View style={props.menustyle}>
            <Menu
                ref={(ref) => (_menu = ref)}
                button={
                    props.isIcon ? (
                        <TouchableOpacity onPress={() => _menu.show()}>
                            <Entypo name="dots-three-vertical" size={24} color="black" />
                        </TouchableOpacity>
                    ) : (
                        <Text
                            onPress={() => _menu.show()}
                            style={props.textStyle}>
                            {props.menutext}
                        </Text>
                    )
                }>
                {/* <MenuItem onPress={() => { Alert.alert('PopUp Menu Button Clicked...') }}> */}
                <MenuItem>
                    All
          </MenuItem>

                <MenuItem>My Journey</MenuItem>

                <MenuDivider />

                <MenuItem>
                    Class
          </MenuItem>
                <MenuItem>
                    Business Pitch
          </MenuItem>

            </Menu>
        </View>
    );
};