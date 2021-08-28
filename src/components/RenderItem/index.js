import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';

const RenderItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.itemIconContainer}>
        <Icon name="location" size={40} color="#052" />
      </View>
      <View style={styles.itemTextContainer}>
        <Text>{item.admin_name}</Text>
        <Text>{item.city}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RenderItem;
