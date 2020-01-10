import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View, TouchableOpacity, Dimensions, Platform, StatusBar } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Item, Input, Picker } from 'native-base';
// Styles
import styles from './Styles/InputMoneyScreenStyle'
import { Images } from '../Themes'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const height = Platform.OS === 'android' ? Dimensions.get('screen').height - StatusBar.currentHeight : Dimensions.get('window').height;
class InputMoneyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'key0'
    }
  }
  onValueChange = (value) => {
    this.setState({ selected: value })
  }
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView enableAutomaticScroll>
          <View style={{ height: height, paddingHorizontal: 40 }}>
            <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 5, alignItems: 'center' }}>
              <Image style={styles.logo} source={Images.logoMoney} />
            </View>
            <View style={{ flex: 1.8, }}>
              <View style={{ height: 48, backgroundColor: '#63DAFB', borderTopLeftRadius: 15, borderTopRightRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 17 }}>Nhập Số Tiền Hiện Tại Có</Text>
              </View>
              <View style={{ marginTop: 6, borderWidth: 1.2, borderColor: '#63DAFB', borderBottomRightRadius: 15, borderBottomLeftRadius: 15, paddingHorizontal: 15, paddingVertical: 5 }}>
                <View style={{ paddingVertical: 10 }}>
                  <Text style={{ color: 'black', fontSize: 15, paddingBottom: 8 }}>TIỀN MẶT</Text>
                  <Item
                    regular
                    style={{ height: 42, borderColor: '#63DAFB', borderRadius: 10 }}
                  >
                    <Input />
                  </Item>
                </View>
                <View style={{ paddingVertical: 10 }}>
                  <Text style={{ color: 'black', fontSize: 15, paddingBottom: 8 }}>TIỀN ẢO</Text>
                  <Item
                    regular
                    style={{ height: 42, borderColor: '#63DAFB', borderRadius: 10 }}
                  >
                    <Input />
                  </Item>
                </View>
                <View style={{ paddingVertical: 10 }}>
                  <Text style={{ color: 'black', fontSize: 15, paddingBottom: 8 }}>LOẠI TIỀN</Text>
                  <Item
                    regular
                    style={{ height: 42, borderColor: '#63DAFB', borderRadius: 10 }}
                  >
                    <Picker
                      mode="dropdown"
                      // iosIcon={<Icon name="arrow-down" />}
                      style={{ width: undefined }}
                      selectedValue={this.state.selected}
                      onValueChange={this.onValueChange.bind(this)}
                    >
                      <Picker.Item label="VN" value="key0" />
                      <Picker.Item label="USD" value="key1" />
                    </Picker>
                  </Item>
                </View>
              </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity activeOpacity={.8} style={{ width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#63DAFB', height: 48, borderRadius: 10 }}>
                <Text style={{ color: 'white', fontSize: 17 }}>TIẾP THEO</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputMoneyScreen)
