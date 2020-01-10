import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TouchableHighlight, TouchableOpacity, View, Image, TextInput } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Makiko, Kaede } from 'react-native-textinput-effects';
// Styles
import styles from './Styles/AddScreenStyle'
import Icon from 'react-native-vector-icons/Ionicons';
import { Images } from '../Themes';

class AddScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    // const { params } = navigation.state;
    return {
      title: 'Thông tin giao dịch',
      headerStyle: {
        backgroundColor: '#63DAFB',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerLeft: () => (
        <TouchableOpacity activeOpacity={.7} style={{ paddingHorizontal: 10 }}>
          <Icon name="ios-arrow-back" size={28} color="white" />
        </TouchableOpacity>
      )
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      status: false
    }
  }
  thu = () => {
    return (
      <View style={{ backgroundColor: '#EFFBFF', padding: 23 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity activeOpacity={.7} activeOpacity={.7} style={styles.itemTouch}>
            <View style={[styles.viewTopItem, { paddingTop: 5 }]}>
              <Image source={Images.thucan} />
            </View>
            <View style={styles.viewBottomItem}>
              <Text style={[styles.txtItem]}>Ẩm thực</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.7} style={styles.itemTouch}>
            <View style={[styles.viewTopItem, { paddingTop: 5 }]}>
              <Image source={Images.xemay} />
            </View>
            <View style={styles.viewBottomItem}>
              <Text style={[styles.txtItem]}>Giao thông</Text>
            </View>

          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.7} style={styles.itemTouch}>
            <View style={[styles.viewTopItem, { paddingTop: 5 }]}>
              <Image source={Images.ao} />
            </View>
            <View style={styles.viewBottomItem}>
              <Text style={[styles.txtItem]}>Thời trang</Text>
            </View>

          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.7} style={styles.itemTouch}>
            <View style={styles.viewTopItem}>
              <Image source={Images.xong} />
            </View>
            <View style={styles.viewBottomItem}>
              <Text style={[styles.txtItem]}>Đồ dùng</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <TouchableOpacity activeOpacity={.7} style={styles.itemTouch}>
            <View style={styles.viewTopItem}>
              <Image source={Images.o} />
            </View>
            <View style={styles.viewBottomItem}>
              <Text style={[styles.txtItem]}>Giải trí</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.7} style={styles.itemTouch}>
            <View style={styles.viewTopItem}>
              <Image source={Images.bao} />
            </View>
            <View style={styles.viewBottomItem}>
              <Text style={[styles.txtItem]}>Thông tin</Text>
            </View>

          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.7} style={styles.itemTouch}>
            <View style={styles.viewTopItem}>
              <Image source={Images.tien} />
            </View>
            <View style={styles.viewBottomItem}>
              <Text style={[styles.txtItem]}>Tiền thuê</Text>
            </View>

          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.7} style={styles.itemTouch}>
            <View style={styles.viewTopItem}>
              <Image source={Images.tay} />
            </View>
            <View style={styles.viewBottomItem}>
              <Text style={[styles.txtItem]}>Cho vay</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <TouchableOpacity activeOpacity={.7} style={styles.itemTouch}>
            <View style={[styles.viewTopItem, { paddingTop: 5 }]}>
              <Image source={Images.money} />
            </View>
            <View style={[styles.viewBottomItem]}>
              <Text style={[styles.txtItem]}>Trả nợ</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.7} style={styles.itemTouch}>
            <View style={styles.viewTopItem}>
              <Image source={Images.sach} />
            </View>
            <View style={styles.viewBottomItem}>
              <Text style={[styles.txtItem]}>Giáo dục</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.7} style={styles.itemTouch}>
            <View style={styles.viewTopItem}>
              <Image source={Images.son} />
            </View>
            <View style={styles.viewBottomItem}>
              <Text style={[styles.txtItem]}>Làm đẹp</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.7} style={styles.itemTouch}>
            <View style={styles.viewTopItem}>
              <Image source={Images.sao} />
            </View>
            <View style={styles.viewBottomItem}>
              <Text style={[styles.txtItem]}>Khác</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  chi = () => {
    return (
      <View style={{ backgroundColor: '#EFFBFF', padding: 23 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity activeOpacity={.7} activeOpacity={.7} style={styles.itemTouch}>
            <View style={[styles.viewTopItem, { paddingTop: 5 }]}>
              <Image source={Images.thucan} />
            </View>
            <View style={styles.viewBottomItem}>
              <Text style={[styles.txtItem]}>Lương</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.7} style={styles.itemTouch}>
            <View style={[styles.viewTopItem]}>
              <Image source={Images.thuong} />
            </View>
            <View style={styles.viewBottomItem}>
              <Text style={[styles.txtItem]}>Thưởng</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.7} style={styles.itemTouch}>
            <View style={[styles.viewTopItem]}>
              <Image source={Images.tay} />
            </View>
            <View style={styles.viewBottomItem}>
              <Text style={[styles.txtItem]}>Vay</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.7} style={styles.itemTouch}>
            <View style={[styles.viewTopItem, { paddingTop: 5 }]}>
              <Image source={Images.money} />
            </View>
            <View style={styles.viewBottomItem}>
              <Text style={[styles.txtItem]}>Thu nợ</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <TouchableOpacity activeOpacity={.7} activeOpacity={.7} style={styles.itemTouch}>
            <View style={[styles.viewTopItem]}>
              <Image source={Images.sao} />
            </View>
            <View style={styles.viewBottomItem}>
              <Text style={[styles.txtItem]}>Khác</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <View style={styles.viewTop}>
            <TouchableOpacity activeOpacity={.7}
              style={[styles.touchViewTop, this.state.status === false ? { backgroundColor: '#F7FDFF' } : null]}
              onPress={() => { this.state.status === true ? this.setState({ status: false }) : null }}
            >
              <Text style={[styles.text, this.state.status === false ? { color: '#63DAFB' } : { color: '#F7FDFF' }]}>Thu</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.7}
              style={[styles.touchViewTop, this.state.status === true ? { backgroundColor: '#F7FDFF' } : null]}
              onPress={() => { this.state.status === false ? this.setState({ status: true }) : null }}
            >
              <Text style={[styles.text, this.state.status === true ? { color: '#63DAFB' } : { color: '#F7FDFF' }]}>Chi</Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingHorizontal: 24 }}>
            <View style={styles.inputMoney}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ marginRight: 16 }} source={Images.note} />
                <TextInput style={{ flex: 1, color: '#E85454', fontSize: 20 }} placeholderTextColor='#E85454' placeholder="300000 đ" />
              </View>
            </View>
            {this.state.status === false ? this.thu() : this.chi()}
            <View style={{ backgroundColor: '#E4F5FB', marginTop: 16 }}>
              <Kaede
                label={'Ghi Chú'}
                inputPadding={10}
                multiline
                numberOfLines={2}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddScreen)
