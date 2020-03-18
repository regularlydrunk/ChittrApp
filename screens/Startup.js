import React, {Component} from 'react';
import {View, Button, TextInput} from 'react-native';

class Startup extends Component {
    constructor(props){
        super(props);
        this.state ={
            login: false
        }
    }

    render(){
        return(
            <View>
                
                <Button title="Press to enter" onPress={() => this.props.navigation.navigate('LogIn')}></Button>
            </View>
        );
    }
}

export default Startup;

//TODO: Make pretty