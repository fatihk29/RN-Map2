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

export default styles;
