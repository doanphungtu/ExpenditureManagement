import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DealScreenStyle'

class DealScreen extends Component {
  // static navigationOptions = ({ navigation }) => (
  //   {
  //     headerStyle: {
  //       backgroundColor: '#63DAFB',
  //     },
  //     headerLeft: () => (
  //       <Image style={{ width: 30, height: 30, marginLeft: 10 }} source={Images.pig} />
  //     ),
  //     headerRight: () => (
  //       <TouchableOpacity activeOpacity={.8} style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 5, paddingHorizontal: 10 }}>
  //         <Icon name="plus" size={30} color="white" />
  //       </TouchableOpacity>
  //     )
  //   }
  // );
  constructor(props) {
    super(props);
    this.state = {
      type: 2
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tabTop}>
          <TouchableOpacity activeOpacity={.7} style={[styles.touchTab]}>
            <Text style={[styles.txtTab,  this.state.type === 1 ? { color: '#E85454',borderBottomColor: '#E85454', borderBottomWidth: 3 } : { color: 'white' }]} onPress={() => this.setState({ type: 1 })}>
              Năm
              </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.7} style={[styles.touchTab,]}>
            <Text style={[styles.txtTab, this.state.type === 2 ? { color: '#E85454',borderBottomColor: '#E85454', borderBottomWidth: 3 } : { color: 'white' }]} onPress={() => this.setState({ type: 2 })}>
            Tháng
              </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.7} style={styles.touchTab}>
            <Text style={[styles.txtTab,  this.state.type === 3 ? { color: '#E85454',borderBottomColor: '#E85454', borderBottomWidth: 3 } : { color: 'white' }]} onPress={() => this.setState({ type: 3 })}>
            Giai Đoạn
              </Text>
          </TouchableOpacity>
        </View>
        <View>
          
        </View>
        <ScrollView style={styles.container}>

        </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(DealScreen)
