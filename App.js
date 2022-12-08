import {COLORS, FONTS, SIZES, icons} from './constants';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {Image, TouchableOpacity} from 'react-native';

import {Home} from './screens';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Shoe Selector',
            headerTintColor: COLORS.lightGray,
            headerTitleStyle: {...FONTS.navTitle},
            headerLeft: ({onPress}) => (
              <TouchableOpacity
                style={{marginLeft: SIZES.padding}}
                onPress={onPress}>
                <Image
                  source={icons.menu}
                  resizeMode="contain"
                  style={{width: 25, height: 25}}
                />
              </TouchableOpacity>
            ),
            headerRight: ({onPress}) => (
              <TouchableOpacity
                style={{marginRight: SIZES.padding}}
                onPress={onPress}>
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
