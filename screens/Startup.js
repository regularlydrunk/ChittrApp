import React, {Component} from 'react';
import { FlatList, ActivityIndicator, Text, View, Alert, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class Startup extends Component {
    constructor(props)
    {
        super(props);
        this.state ={
            login: false
        };
    }

    render()
    {
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.Button}
                    onPress=
                    {
                        ()=>this.props.navigation.navigate('LogIn')
                    }>

                    <Text style={styles.ButtonText}> Enter App </Text>
                </TouchableOpacity>
               
            </View>
        );
    }
}


const styles = StyleSheet.create({

    container: {

        flex: 1,
    
        justifyContent: 'center',
    
        backgroundColor: '#FFFFFF'
    
      },
      
    Button: {

        backgroundColor: '#233947',
    
        padding: 5,
    
        borderRadius: 15,
    
        alignItems: 'center',
    
        margin: 15,
    
        height: 50,
    
      },

      ButtonText: {

        color: 'white',
    
        fontSize: 28,
    
        fontWeight: 'bold'
    
      },
    
    });

export default Startup;
