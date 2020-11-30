import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  bar: {
    flexGrow: 4,
  },
  item: {
    backgroundColor: '#888888',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  field: {
    paddingHorizontal: 20,
    borderWidth: 1,
    paddingVertical: 8
  }, form: {
    backgroundColor: '#888888'
  }, padding: {
    minHeight: "50px"
  }
});

export default styles;
