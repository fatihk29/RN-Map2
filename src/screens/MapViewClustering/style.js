import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  callout: {
    position: 'relative',
    flex: 1,
  },
  markerVisibleContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerVisibleText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '20%',
    marginTop: 3,
    borderRadius: 20,
    borderWidth: 0.3,
    borderColor: 'green',
    backgroundColor: '#eee',
    zIndex: 1,
    top: 0,
  },
  infoText: {
    color: 'black',
    fontSize: 10,
  },
});

export default styles;
