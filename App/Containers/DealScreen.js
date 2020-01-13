import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import Picker from 'react-native-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker'

let data = [];
for (var i = 0; i < 100; i++) {
  data.push(i);
}
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DealScreenStyle'
const y = new Date().getFullYear();
const m = new Date().getMonth() + 1;
class DealScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: 2,
      month: "",
      year: "",
      dataMonth: [],
      dataYear: [],
      datePickerLeft: new Date().getDate(),
      datePickerRight: new Date().getDate(),
    }
  }
  componentDidMount() {
    for (let i = y - 50; i < y + 51; i++) {
      this.state.dataYear.push(i)
    }
    for (let j = 1; j < 13; j++) {
      this.state.dataMonth.push(j)
    }
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    this.state.datePickerLeft += '/' + month + '/' + year;
    this.state.datePickerRight += '/' + month + '/' + year;
  }
  showYearPicker() {
    Picker.init({
      wheelFlex: [1, 0, 0],
      pickerData: this.state.dataYear,
      // pickerData: this._createDateData(),
      pickerFontColor: [255, 0, 0, 1],
      selectedValue: [y],
      onPickerConfirm: (pickedValue, pickedIndex) => {
        this.setState({ year: pickedValue }),
          console.log('date', pickedValue, pickedIndex);
      },
      onPickerCancel: (pickedValue, pickedIndex) => {
        // this.setState({ year: "" }),
        console.log('date', pickedValue, pickedIndex);
      },
      // onPickerSelect: (pickedValue, pickedIndex) => {
      //   this.setState({ year: pickedValue }),
      //     console.log('date', pickedValue, pickedIndex);
      // }
    }),
      Picker.show();
  }
  showMonthPicker() {
    Picker.init({
      wheelFlex: [0, 1, 0],
      pickerData: this.state.dataMonth,
      pickerFontColor: [255, 0, 0, 1],
      selectedValue: [m],
      onPickerConfirm: (pickedValue, pickedIndex) => {
        this.setState({ month: pickedValue }),
          console.log('date', pickedValue, pickedIndex);
      },
      onPickerCancel: (pickedValue, pickedIndex) => {
        // this.setState({ month: "" }),
        console.log('date', pickedValue, pickedIndex);
      },

    }),
      Picker.show();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tabTop}>
          <TouchableOpacity activeOpacity={.7} style={[styles.touchTab]}>
            <Text style={[styles.txtTab, this.state.type === 1 ? { color: '#E85454', borderBottomColor: '#E85454', borderBottomWidth: 3 } : { color: 'white' }]} onPress={() => this.setState({ type: 1 })}>
              Năm
              </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.7} style={[styles.touchTab,]}>
            <Text style={[styles.txtTab, this.state.type === 2 ? { color: '#E85454', borderBottomColor: '#E85454', borderBottomWidth: 3 } : { color: 'white' }]} onPress={() => this.setState({ type: 2 })}>
              Tháng
              </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.7} style={styles.touchTab}>
            <Text style={[styles.txtTab, this.state.type === 3 ? { color: '#E85454', borderBottomColor: '#E85454', borderBottomWidth: 3 } : { color: 'white' }]} onPress={() => this.setState({ type: 3 })}>
              Giai Đoạn
              </Text>
          </TouchableOpacity>
        </View>
        {this.state.type === 2 ?
          <View style={{ backgroundColor: '#5EDFFF' }}>
            <View style={styles.tabBottom}>
              <TouchableOpacity style={styles.touch} onPress={() => this.showYearPicker()}>
                <Text>{this.state.year !== "" ? this.state.year : y}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch} onPress={() => this.showMonthPicker()}>
                <Text>{this.state.month !== "" ? this.state.month : m}</Text>
              </TouchableOpacity>
            </View>
            <View style={{ height: 48, justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#5EDFFF', flexDirection: 'row' }}>
              <Text style={{ color: 'white', fontSize: 15 }}>6000000</Text>
              <Text style={{ color: '#DA6265', fontSize: 15 }}>6000000</Text>
              <Text style={{ color: '#D6DF11', fontSize: 15 }}>6000000</Text>
            </View>
          </View>
          : this.state.type === 1 ? <View style={styles.tabBottom}>
            <TouchableOpacity style={[styles.touch, { width: "60%" }]} onPress={() => this.showYearPicker()}>
              <Text>{this.state.year !== "" ? this.state.year : y}</Text>
            </TouchableOpacity>
          </View> :
            <View style={styles.tabBottom}>
              <DatePicker
                style={{ width: '40%' }}
                date={this.state.datePickerLeft}
                mode="date"
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate="2018-05-01"
                maxDate="2500-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    // marginLeft: 36,
                    backgroundColor: 'white',
                    borderRadius: 8,
                    borderWidth: 0,
                    height: 44
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(datePickerLeft) => { this.setState({ datePickerLeft: datePickerLeft }) }}
              />
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>-</Text>
              </View>
              <DatePicker
                style={{ width: '40%' }}
                date={this.state.datePickerRight}
                mode="date"
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate="2018-05-01"
                maxDate="2500-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    // marginLeft: 36,
                    backgroundColor: 'white',
                    borderRadius: 8,
                    borderWidth: 0,
                    height: 44,
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(datePickerRight) => { this.setState({ datePickerRight: datePickerRight }) }}
              />
            </View>
        }
        <ScrollView style={styles.container}>
          <TouchableOpacity style={styles.items}>
            <View style={styles.txtItems}>
              <Icon name="caret-right" size={20} color="#3C70A4" />
              <Text style={{ color: "#3C70A4" }}>Tuan 1</Text>
            </View>
            <View style={styles.boxItems}>
              <Text style={{ color: "#14FD00" }}>Tiền thu</Text>
              <Text style={{ color: "#14FD00" }}>200000</Text>
            </View>
            <View style={styles.boxItems}>
              <Text style={{ color: "#DA6265" }}>Tiền chi</Text>
              <Text style={{ color: "#DA6265" }}>200000</Text>
            </View>
            <View style={styles.boxItems}>
              <Text style={{ color: '#D6DF11' }}>Tiền còn</Text>
              <Text style={{ color: '#D6DF11' }}>200000</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View >
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
