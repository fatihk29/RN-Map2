import React, {useState} from 'react';
import {View, TouchableOpacity, Text, FlatList} from 'react-native';
import {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import MapView from 'react-native-map-clustering';
import Icon from 'react-native-vector-icons/Ionicons';

import CustomizedMarkerLabel from '../../components/CustomizedMarkerLabel';
import data from '../../helpers/data';
import data2 from '../../helpers/data2';
import styles from './style';
import RenderItem from '../../components/RenderItem';
import NewLocModal from '../../components/NewLocModal';

const initialRegion = {
  latitude: 39.91987,
  longitude: 32.85427,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const MapViewClustered = () => {
  const [allData, setAllData] = useState(data2);
  const [markerVisible, setMarkerVisible] = useState(false);
  const [location, setLocation] = useState({
    latitude: 39.925533,
    longitude: 32.866287,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  });
  const [modalLocationVisibility, setModalLocationVisibility] = useState(false);
  const [modalNewLocationVisible, setModalNewLocationVisible] = useState(false);
  const [cityText, setCityText] = useState('');

  React.useEffect(() => {}, []);

  function renderClusteredMarkers() {
    return allData.map((item, index) => (
      <Marker
        key={index}
        coordinate={{
          latitude: Number.parseFloat(item.lat),
          longitude: Number.parseFloat(item.lng),
        }}>
        <Callout style={styles.callout}>
          <CustomizedMarkerLabel item={item} />
        </Callout>
      </Marker>
    ));
  }

  function saveFunction() {
    setMarkerVisible(false);
    setAllData([
      ...allData,
      {
        city: `${cityText}`,
        lat: `${location.latitude}`,
        lng: `${location.longitude}`,
        country: 'Turkey',
        iso2: 'TR',
        admin_name: 'Not knowing',
        capital: 'minor',
        population: '',
        population_proper: '',
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        provider={PROVIDER_GOOGLE}
        clusterColor="blue"
        showsCompass={true}
        onRegionChange={e => {
          // console.log(e.latitudeDelta);
          if (e.latitudeDelta < 0.07) {
            setModalLocationVisibility(true);
          } else {
            setModalLocationVisibility(false);
          }
        }}
        onLongPress={e => {
          setLocation({
            longitude: e.nativeEvent.coordinate.longitude,
            latitude: e.nativeEvent.coordinate.latitude,
            longitudeDelta: 0.1,
            latitudeDelta: 0.1,
          });
          setMarkerVisible(true);
        }}>
        {renderClusteredMarkers()}
        {markerVisible ? (
          <Marker
            onPress={() => setModalNewLocationVisible(true)}
            coordinate={location}>
            <View style={styles.markerVisibleContainer}>
              <TouchableOpacity>
                <Text style={styles.markerVisibleText}>
                  {'Add New Location'}
                </Text>
              </TouchableOpacity>
              <Icon name="location" size={50} color="#052" />
            </View>
          </Marker>
        ) : null}
      </MapView>
      {markerVisible ? (
        <View style={styles.info}>
          <Icon name="information-circle" size={25} color="black" />
          <Text style={styles.infoText}>To Add New Location Click</Text>
          <Icon name="location" size={27} color="#052" />
        </View>
      ) : null}
      {modalLocationVisibility ? (
        <View
          style={{
            width: '100%',
            height: '40%',
            backgroundColor: '#fff',
            position: 'absolute',
            zIndex: 2,
            bottom: 0,
            marginRight: 30,
            padding: 25,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            borderTopColor: 'rgba(0, 0, 0, 0.4)',
            borderTopWidth: 0.6,
            borderLeftWidth: 0.6,
            borderRightWidth: 0.6,
          }}>
          <FlatList
            data={data}
            renderItem={({item}) => {
              return <RenderItem item={item} />;
            }}
            keyExtractor={(_, index) => index}
          />
        </View>
      ) : null}
      <NewLocModal
        modalVisible={modalNewLocationVisible}
        closeFunction={e => {
          setModalNewLocationVisible(e);
        }}
        textFunction={e => {
          setCityText(e);
        }}
        saveFunction={() => saveFunction()}
      />
    </View>
  );
};

export default MapViewClustered;
