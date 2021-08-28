import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

function StackNavigator() {
  function HeaderMidTitle({title}) {
    return (
      <View style={style.midHeader}>
        <Text style={style.midHeaderText}>{title}</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainPage"
          component={BottomTabNavigator}
          options={() => ({
            headerLeft: () => <View />,
            headerTitle: () => <HeaderMidTitle title={'N2Mobile'} />,
            headerRight: () => <View />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  midHeader: {
    marginLeft: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  midHeaderText: {
    fontSize: 18,
  },
  leftHeader: {
    marginLeft: 5,
  },
  leftHeaderText: {
    marginLeft: 3,
    color: '#6495ED',
  },
  subContainer: {
    flexDirection: 'row',
  },
});

export default StackNavigator;
