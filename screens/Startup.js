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
                <Button title="Login" onPress={() => this.props.navigation.navigate('LogIn')}></Button>
                <Button title="Register" onPress={() => this.props.navigation.navigate('SignUp')}></Button>
            </View>
        );
    }
}

export default Startup;