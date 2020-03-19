import React, { Component } from 'react'; 
import { FlatList, ActivityIndicator, Text, View, Alert, StyleSheet, TextInput, TouchableOpacity  } from 'react-native'; 
import AsyncStorage from '@react-native-community/async-storage';

class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            login: true
        }
    }



    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.Button}
                    onPress=
                    {
                        ()=>this.props.navigation.navigate('Feed')
                    }>

                    <Text style={styles.ButtonText}> View Feed </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.Button}
                    onPress=
                    {
                        () => this.props.navigation.navigate('PostChit')
                    }>
                    <Text style={styles.ButtonText}> Go to Register page </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.Button}
                    onPress=
                    {
                        ()=>this.props.navigation.navigate('EditAccount')
                    }>

                    <Text style={styles.ButtonText}> Edit Account </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.Button}
                    onPress=
                    {                      
                        ()=>this.props.navigation.navigate('LogIn')
                    }>

                    <Text style={styles.ButtonText}> Log Out </Text>
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

export default LandingPage;
