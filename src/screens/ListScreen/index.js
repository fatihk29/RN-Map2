import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import data from '../../helpers/data2';
import styles from './style';

const ListScreen = () => {
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


  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return <RenderItem item={item} />;
          }}
          keyExtractor={(_, index) => index}
        />
      </SafeAreaView>
      <View style={styles.numOfDataContainer}>
        <Text>Total Number of Location:</Text>
        <Text style={styles.numOfDataText}>{data.length}</Text>
      </View>
    </>
  );
};

export default ListScreen;
