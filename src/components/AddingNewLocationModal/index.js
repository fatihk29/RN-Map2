import React from 'react';
import {Modal, Text, Pressable, View, TextInput} from 'react-native';

import styles from './style';

const AddingNewLocationModal = ({
  modalVisible,
  closeFunction,
  textFunction,
  saveFunction,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Add New Location</Text>
          <View style={styles.textInput}>
            <TextInput placeholder="City" onChangeText={e => textFunction(e)} />
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => closeFunction(false)}>
              <Text style={styles.textStyle}>CLOSE</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                saveFunction();
                closeFunction(false);
              }}>
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddingNewLocationModal;
