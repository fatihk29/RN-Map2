import React from 'react';
import {View, Text} from 'react-native';

import styles from './style';

function CustomizedMarkerLabel({item}) {
  return (
    <View style={styles.container}>
      <Text>{item.city}</Text>
      <Text>{item.admin_name}</Text>
    </View>
  );
}

export default CustomizedMarkerLabel;
