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
    marginTop: 0,
    borderRadius: 20,
    borderWidth: 0.3,
    borderColor: 'green',
    backgroundColor: '#ffa',
    zIndex: 1,
    top: 0,
  },
  infoText: {
    color: 'black',
    fontSize: 12,
  },
  locationsModalVisibilityContainer: {
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
  },
});

export default styles;
