import React, { Component } from 'react'
import { ScrollView, Text, Image, View, ImageBackground, Animated, TouchableOpacity, KeyboardAvoidingView, Dimensions, ReactNative } from 'react-native'
import { Images } from '../Themes'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
// Styles
import styles from './Styles/LoginScreenStyle'
import { Kohana } from 'react-native-textinput-effects';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={Images.bgLogin} style={styles.bgimg} />
        <KeyboardAwareScrollView
          enableAutomaticScroll
        >
          <View style={{ height: Dimensions.get('window').height }}>
            <View style={{ width: '100%', height: '30%' }}></View>
            <View style={{ backgroundColor: 'transparent', width: '100%', height: '60%', paddingHorizontal: 30 }}>
              <View style={{ height: 45 }}>
                <Kohana
                  style={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: 'white', borderRadius: 10 }}
                  label={'Email/ Tên đăng nhập'}
                  iconClass={Icon}
                  iconName={'user'}
                  iconColor={'white'}
                  inputPadding={10}
                  labelStyle={{ color: 'white', paddingLeft: 10, fontSize: 16 }}
                  inputStyle={{ color: 'white', fontSize: 16 }}
                  // labelContainerStyle={{ padding: 20 }}
                  iconContainerStyle={{ paddingLeft: 20 }}
                  useNativeDriver
                />
              </View>
              <View style={{ height: 45, marginTop: 24 }}>
                <Kohana
                  style={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: 'white', borderRadius: 10 }}
                  label={'Mật khẩu'}
                  iconClass={Icon}
                  iconName={'lock'}
                  iconColor={'white'}
                  inputPadding={10}
                  labelStyle={{ color: 'white', paddingLeft: 10, fontSize: 16 }}
                  inputStyle={{ color: 'white', fontSize: 16 }}
                  // labelContainerStyle={{ }}
                  iconContainerStyle={{ paddingLeft: 20 }}
                  useNativeDriver
                />
              </View>
              <TouchableOpacity style={{ width: '100%', alignItems: 'flex-end' }} activeOpacity={.7}>
                <Text style={[styles.text, { fontSize: 12, paddingTop: 16 }]}>Quên mật khẩu ?</Text>
              </TouchableOpacity>
              <View style={{ paddingVertical: 40 }}>
                <TouchableOpacity activeOpacity={.7} style={styles.btnLogin} >
                  <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>Đăng nhập</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 24 }}>
                  <TouchableOpacity activeOpacity={.8} style={[styles.btnLoginWith, { backgroundColor: '#4267B2' }]}><Icon color='white' name="facebook-f" size={24} /></TouchableOpacity>
                  <TouchableOpacity activeOpacity={.8} style={[styles.btnLoginWith, { backgroundColor: '#F34A38' }]}><Icon name="google-plus" color='white' size={24} /></TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{ width: '100%', height: '10%' }}>
              <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={[styles.text, { fontSize: 13, borderBottomWidth: .8, borderBottomColor: 'white' }]}>Đăng ký</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View >
    )
  }
}