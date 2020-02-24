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
            <Text> Episodes Page </Text>
            <Button 
              title="Home"
              onPress={() => navigate('Home')} 
            />
          </View>
          
        );
    }
}

export default Episodes;