import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';

class Episodes extends Component {

    static navigationOptions = {
        title: 'Episodes'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
          <View>
            <View style={{ height: 25 }} />
            <Text> Episodes Page </Text>
            <Text>
              This is where the episodes will go
            </Text>
          </View>
          
        );
    }
}

export default Episodes;