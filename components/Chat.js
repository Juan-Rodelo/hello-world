import React from 'react';
import { View, Text, Button } from 'react-native';


export default class Chat extends React.Component {
  render() {
    let name = this.props.route.params.name; // OR ...
    // let { name } = this.props.route.params;
    this.props.navigation.setOptions({ title: name });
    return (

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello Screen2!</Text>
        <Button
          title="go to Start"
          onPress={() => this.props.navigation.navigate("Start")}
        />
      </View>
    )
  }
}