import React from 'react';
import {View, Text, Button} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

function Screen3(props: any) {

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>Screen3</Text>
        <Button
          onPress={() => props.navigation.navigate('Home')}
          title="Go Home"
        />
      </View>
    </SafeAreaView>
  );
}

export default Screen3;
