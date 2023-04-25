/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';

import {View, Text, Button} from 'react-native';

function Home(props: any) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>Home</Text>
        <Button onPress= {()=> props.navigation.navigate("Screen2")} title="Go Screen2"/>
      </View>
    </SafeAreaView>
  );
}

export default Home;
