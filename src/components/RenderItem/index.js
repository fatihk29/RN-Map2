import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 4,
    marginHorizontal: 10,
    padding: 6,
    flexDirection: 'row',
  },
  itemIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTextContainer: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
});

export default RenderItem;
