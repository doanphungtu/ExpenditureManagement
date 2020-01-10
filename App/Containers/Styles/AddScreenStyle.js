import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1
  },
  viewTop: {
    height: 60,
    width: '100%',
    backgroundColor: '#63DAFB',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  touchViewTop: {
    width: 108, height: 40, justifyContent: 'center', alignItems: 'center',
    borderRadius: 16,
    borderColor: '#F7FDFF',
    borderWidth: 1
  },
  text: {
    fontSize: 16,
  },
  inputMoney: {
    backgroundColor: '#E4F5FB', width: '100%', borderRadius: 8, paddingHorizontal: 12, marginVertical: 8, justifyContent: 'center'
  },
  itemTouch: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 62,
  },
  viewTopItem: {
    flex: .7, width: 45, justifyContent: 'center', alignItems: 'center', borderColor: '#55C8E8', borderWidth: 1, borderRadius: 30,
  },
  viewBottomItem: {
    flex: .3, justifyContent: 'center', alignItems: 'center'
  },
  txtItem: {
    fontSize: 13,
    color: 'black',
    marginTop: 5
  }
})
