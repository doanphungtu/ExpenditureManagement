import { StyleSheet, Dimensions } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1
  },
  tabTop: {
    height: 64,
    flexDirection: 'row'
  },
  touchTab: {
    width: Dimensions.get('screen').width / 3,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5EDFFF',
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 0.4
  },
  txtTab: {
    fontSize: 16,
    height: '95%',
    width: '88%',
    textAlign: 'center',
    lineHeight: 64,
  }
})
