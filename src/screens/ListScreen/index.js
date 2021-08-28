import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';

import data from '../../helpers/data2';
import RenderItem from '../../components/RenderItem';
import styles from './style';

const ListScreen = () => {
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
        <Text>{'Total Number of Location:'}</Text>
        <Text style={styles.numOfDataText}>{data.length}</Text>
      </View>
    </>
  );
};

export default ListScreen;
