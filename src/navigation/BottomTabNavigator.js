import React from 'react';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MapViewClustered from '../screens/MapViewClustured';
import ListScreen from '../screens/ListScreen';

const Tab = createBottomTabNavigator();

function BottomTabNavigator(props) {
  return (
    <Tab.Navigator
      activeColor="#f1e2f6"
      inactiveColor="#888"
      shifting={false}
      labeled={true}>
      <Tab.Screen
        name="MapViewClustered"
        component={MapViewClustered}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({color}) => (
            <IconMCI name="map" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ListScreen"
        component={ListScreen}
        options={{
          tabBarLabel: 'Lists',
          tabBarIcon: ({color}) => (
            <IconMCI name="view-list" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
