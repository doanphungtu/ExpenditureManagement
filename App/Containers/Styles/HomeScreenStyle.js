import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 22
  },
  viewTop:
  {
    width: '100%', height: 152, backgroundColor: '#63DAFB', flexDirection: 'row',
    borderRadius: 16
  },
  text: {
    color: 'white',
    fontSize: 14
  },
  btn:
    { backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 8, height: 35 },
  item: {
    height: 80, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', backgroundColor: '#C4C4C4', marginTop: 8, borderRadius: 10,
    padding: 15
  },
  leftItem: {
    flexDirection: 'row', alignItems: 'center'
  }
})
