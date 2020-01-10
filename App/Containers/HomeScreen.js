import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import DatePicker from 'react-native-datepicker'
import { Button } from 'react-native-elements';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle'
import { Images } from '../Themes'
import Icon from 'react-native-vector-icons/Entypo';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => (
    {
      headerStyle: {
        backgroundColor: '#63DAFB',
      },
      headerLeft: () => (
        <Image style={{ width: 30, height: 30, marginLeft: 10 }} source={Images.pig} />
      ),
      headerRight: () => (
        <TouchableOpacity activeOpacity={.8} style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 5, paddingHorizontal: 10 }}>
          <Icon name="plus" size={30} color="white" />
        </TouchableOpacity>
      )
    }
  );
  constructor(props) {
    super(props)
    this.state = {
      date: "2016-05-15"
    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={styles.viewTop}>
            <View style={{ flex: .6, justifyContent: 'space-between', paddingVertical: 15, paddingLeft: 15 }}>
              <View>
                <Text style={{ fontSize: 16, color: "black" }}>Số Tiền Thu Tháng Này (VNĐ)</Text>
                <Text style={{ fontSize: 18, color: "#4DB80C" }}> + 500 000</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={styles.text}>Số Tiền Chi</Text>
                  <Text style={styles.text}>- 200 000</Text>
                </View>
                <View>
                  <Text style={styles.text}>Số dư</Text>
                  <Text style={styles.text}>+ 300 000</Text>
                </View>
              </View>
            </View>
            <View style={{ flex: .4, justifyContent: 'center' }}>
              <Image width="100%" height="64" style={{ resizeMode: 'contain' }} source={Images.pig} />
            </View>
          </View>
        </View>
        {/* <View style={[styles.viewTop, { marginTop: 8, flexDirection: 'column', padding: 15 }]}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 16, color: "black" }}>Thu Nhập Và Chi Phí Ngày Hôm Nay</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: .3 }}>
              
            </View>
            <View style={{ flex: .7, justifyContent: 'space-between' }}>
              <View style={{ justifyContent: 'center', height: '50%' }}>
                <Text style={{ fontSize: 16, color: "black" }}>+ 5 000 000</Text>
                <Text style={{ fontSize: 16, color: "#F04C4C" }}>- 2 300 000</Text>
              </View>
              <View style={{ height: '50%' }}>
                <TouchableOpacity style={styles.btn} activeOpacity={.8}>
                  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="circle-with-plus" size={15} color="#3090AB" />
                    <Text style={{ color: '#3090AB', fontSize: 15, marginLeft: 5 }}>Thêm</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View> */}
        <TouchableOpacity style={styles.item}>
          <View style={styles.leftItem}>
            <Image style={{ marginRight: 15 }} source={Images.thucan} />
            <View>
              <Text style={{ fontSize: 16, color: '#3090AB' }}>Ẩm thực</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#94ADB5' }}>18-11</Text>
                <Text style={{ color: '#94ADB5' }}>Thứ 2</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={{ color: '#F04C4C', fontSize: 16 }}>- 300 000</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <View style={styles.leftItem}>
            <Image style={{ marginRight: 15 }} source={Images.xemay} />
            <View>
              <Text style={{ fontSize: 16, color: '#3090AB' }}>Ẩm thực</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#94ADB5' }}>18-11</Text>
                <Text style={{ color: '#94ADB5' }}>Thứ 2</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={{ color: '#F04C4C', fontSize: 16 }}>- 300 000</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <View style={styles.leftItem}>
            <Image style={{ marginRight: 15 }} source={Images.ao} />
            <View>
              <Text style={{ fontSize: 16, color: '#3090AB' }}>Ẩm thực</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#94ADB5' }}>18-11</Text>
                <Text style={{ color: '#94ADB5' }}>Thứ 2</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={{ color: '#F04C4C', fontSize: 16 }}>- 300 000</Text>
          </View>
        </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
