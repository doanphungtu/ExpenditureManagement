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
  },
  tabBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#5EDFFF',
    height: 56,
    borderRadius: 8
  },
  touch: {
    width: '40%', height: '80%', backgroundColor: 'white', borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  items: {
    alignItems: 'center',
    flexDirection: "row",
    height: 56,
    backgroundColor:'#FCF9ED'
  },
  txtItems: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxItems: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
