import React from 'react';
import {View, Text, Button} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

function Screen2(props: any) {

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>Screen2</Text>
        <Button
          onPress={() => props.navigation.navigate('Screen3')}
          title="Go Sreen3"
        />
      </View>
    </SafeAreaView>
  );
}

export default Screen2;
