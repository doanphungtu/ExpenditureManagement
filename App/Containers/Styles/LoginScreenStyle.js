import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    position: 'relative',
  },
  bgimg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0, left: 0,
    bottom: 0, right: 0
  },
  text: {
    color: 'white',
  },
  btnLogin: {
    height: 48, width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#5EDFFF',
    borderRadius:10
  },
  btnLoginWith: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: '47%',
    borderRadius: 10
  }
})