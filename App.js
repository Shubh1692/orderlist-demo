/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  BackHandler
} from 'react-native';
import { Card, ThemeProvider, Button, Icon, Avatar } from 'react-native-elements';
import { styles } from './style';
import call from 'react-native-phone-call'

const rider = [
  {
    name: 'Rider 1',
    id: 1,
    trip: 12345
  },
  {
    name: 'Rider 2',
    id: 2,
    trip: 12346
  },
  {
    name: 'Rider 3',
    id: 3,
    trip: 12347
  }
];
const order = [
  {
    id: 12345,
    drop: {
      address_line_1: 'Drop Address 1',
      address_line_2: 'Drop Address 2',
      city: 'delhi',
      state: 'Delhi'
    },
    pickup: {
      address_line_1: 'Pickup address 1',
      address_line_2: 'Pickup address 2',
      city: 'delhi',
      state: 'Delhi'
    },
    sender: {
      name: 'Sender 1',
      mobile: 9999999999
    },
    receiver: {
      name: 'Receiver 1',
      mobile: 8888888888
    }
  },
  {
    id: 12346,
    drop: {
      address_line_1: 'Drop Address 1',
      address_line_2: 'Drop Address 2',
      city: 'delhi',
      state: 'Delhi'
    },
    pickup: {
      address_line_1: 'Pickup address 1',
      address_line_2: 'Pickup address 2',
      city: 'delhi',
      state: 'Delhi'
    },
    sender: {
      name: 'Sender 2',
      mobile: 9999999999
    },
    receiver: {
      name: 'Receiver 2',
      mobile: 8888888888
    }
  },
  {
    id: 12347,
    drop: {
      address_line_1: 'Drop Address 1',
      address_line_2: 'Drop Address 2',
      city: 'delhi',
      state: 'Delhi'
    },
    pickup: {
      address_line_1: 'Pickup address 1',
      address_line_2: 'Pickup address 2 Pickup address 2 Pickup address 2 Pickup address 2Pickup address 2',
      city: 'delhi',
      state: 'Delhi'
    },
    sender: {
      name: 'Sender 3',
      mobile: 9999999999
    },
    receiver: {
      name: 'Receiver 3',
      mobile: 8888888888
    }
  },
];

const riderById = {};
rider.forEach(({ trip, ...rest }) => {
  riderById[trip] = rest;
})

/** This method used to call receiver 
 * @param number number input string
*/
const onCall = (number) => {
  const args = {
    number, // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
  }
  call(args).catch(console.error)
};
/** This method used to reverse string 
 * @param string input string
*/
const reversString = (string = '') => {
  return typeof string === 'string' ? string.split("").reverse().join("").split(" ").reverse().join(" ") : '';
}

/** This method used to find unique element in array 
 * @param arr number of array
*/
const uniqueArrayElement = (arr = []) => {
  const uniqueObj = {}
  try {
    arr.forEach((element) => {
      uniqueObj[element] = element;
    })
    return Object.keys(uniqueObj);
  } catch (error) {
    console.error("Please provide valid input");
  }
}
console.log(reversString("Javascript is used to format a number"));
console.log(uniqueArrayElement([1, 2, 3, 5, 5]));

const App: () => React$Node = () => {
  return (
    <ThemeProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            {order.map(({
              drop: {
                address_line_1: dropAddressLine1,
                address_line_2: dropAddressLine2,
                state: dropState,
                city: dropCity
              },
              pickup: {
                address_line_1: pickupAddressLine1,
                address_line_2: pickupAddressLine2,
                state: pickupState,
                city: pickupCity
              },
              id,
              receiver: {
                mobile
              }
            }) => (
                <Card key={id}>
                  <View style={styles.sectionContainer}>
                    <View style={styles.iconView}>
                      <View style={[styles.radioIconOuterView, styles.pickIconBorderColor]}>
                        <View style={[styles.radioIconInnerView, styles.pickIconBackgroundColor]} />
                      </View>
                      <View style={{
                        borderStyle: 'dashed',
                        height: 50,
                        borderLeftWidth: 4,
                        borderColor: '#DCDCDC',
                        width: 4
                      }} />

                    </View>
                    <View style={styles.textView}>
                      <Text style={styles.pickUpText}>Pickup from</Text>
                      <Text ellipsizeMode='tail' numberOfLines={1} style={styles.addressText}>{`${(pickupAddressLine1 || '')} ${(pickupAddressLine2 || '')} ${(pickupCity || '')} ${(pickupState || '')}`}</Text>
                    </View>
                  </View>
                  <View style={styles.sectionContainer}>
                    <View style={styles.iconView}>
                      <View style={[styles.radioIconOuterView, styles.dropIconBorderColor]}>
                        <View style={[styles.radioIconInnerView, styles.dropIconBackgroundColor]} />
                      </View>
                    </View>
                    <View style={styles.textView}>
                      <Text style={styles.pickUpText}>Drop to</Text>
                      <Text ellipsizeMode='tail' numberOfLines={1} style={styles.addressText}>{`${(dropAddressLine1 || '')} ${(dropAddressLine2 || '')} ${(dropCity || '')} ${(dropState || '')}`}</Text>
                    </View>
                  </View>
                  <View style={styles.sectionContainer}>

                    <View style={styles.profileView}>
                      <View style={{width: '50%'}}>
                        <Text style={styles.onWayText}>On Way Pickup</Text>
                      </View>
                      <View style={styles.packageIdView}><Text style={styles.packageId}>
                        Package ID</Text><Text style={styles.packageNumber}>245  </Text></View>
                    </View>
                  </View>
                  <View style={styles.sectionContainer}>
                    <View style={styles.profileView}>
                      <View>
                        <Avatar
                          size="large"
                          source={{
                            uri:
                              'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                          }} rounded={true} />
                      </View>
                      <View style={styles.nameView}><Text style={styles.name}>
                        {riderById[id] ? riderById[id].name : ''}</Text>
                        <Button
                          type="clear"
                          style={styles.iconBtn}
                          icon={
                            <Icon onPress={() => onCall((mobile || '').toString())} name='phone-call' color="#8A2BE2" type="feather" />
                          }
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.sectionContainer}>
                    <View style={styles.pickUpStatusContainer}>
                      <View >
                        <Text style={styles.pickUpStatus}>Pickup by</Text>
                        <Text style={styles.pickUpTime}>08: 40 PM</Text>
                      </View>
                      <View style={styles.pickUpOTP}>
                        <Text style={styles.pickUpStatus}>Pickup OTP</Text>
                        <View style={styles.pickUpOTPContainer}>
                          <Text style={styles.pickUpOTPText}>5485</Text>
                          <Icon onPress={() => BackHandler.exitApp()} name='log-out' size={15} color="#BA55D3" type="entypo" />
                        </View>
                      </View>
                    </View>
                  </View>
                </Card>
              ))}
          </View>

        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
