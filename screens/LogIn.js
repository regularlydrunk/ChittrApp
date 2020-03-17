import React, { Component } from 'react'; 
import { FlatList, ActivityIndicator, Text, View, Alert, StyleSheet, AsyncStorage, TextInput, TouchableOpacity  } from 'react-native'; 

class Login extends Component {
constructor(props)
{   
    super(props);   
    
    //Binds the ProcessLogin function so it can access the states in the constructor
    this.ProcessLogin = this.ProcessLogin.bind(this);
    this.state = {
        email:'16051576@stu.mmu.ac.uk',
        password: 'password', 
 };
}

ProcessLogin()
{
fetch('http://10.0.2.2:3333/api/v0.0.5/login',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
    },
        body: JSON.stringify(
    {
        email: this.state.email,
        password: this.state.password
    })

    })

    .then((response) => response.json())
    .then((reponseJson) => 
        {
        try { 
            Alert.alert("Logged in");
            console.log("Our authkey is: "+ responseJson.token);
            AsyncStorage.setItem('Authkey', responseJson.token);
            }
         
        catch(error)
            {
            console.error('An error has occured.', error);
            }
        
            
        })
    }

    catch (ASyncError) { 
    console.log(ASyncError);
    }


render()
{

  return (

    <View style={styles.container}>

      <Text style={styles.TitleText}> Login to Chittr  </Text>


      <TextInput style={styles.ListText}

        placeholder="Enter your email here"

        autoCapitalize="none"

        onChangeText={text => this.setState({ email: text })}

      />



      <TextInput style={styles.ListText}

        placeholder="Enter password here"

        autoCapitalize="none"

        secureTextEntry={true}

        onChangeText={text => this.setState({ password: text })}

      />



      <TouchableOpacity

        style={styles.Button}

        onPress=
        {
          () => this.ProcessLogin()
        }>

        <Text style={styles.ButtonText}> Login </Text>

      </TouchableOpacity>

      <TouchableOpacity

        style={styles.Button}

        onPress=

        {

          () => this.props.navigation.navigate('SignUp')

        }>

        <Text style={styles.ButtonText}> Go to Register page </Text>

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



  ButtonText: {

    color: 'white',

    fontSize: 28,

    fontWeight: 'bold'

  },



  TitleText: {

    color: 'black',

    fontSize: 28,

    fontWeight: 'bold',

    textAlign: "center",

    margin: 15

  },



  ListText: {

    color: 'black',

    borderRadius: 15,

    fontSize: 18,

    textAlign: "center",

    backgroundColor: "#F5F5F5",

    alignItems: 'center',

    margin: 10,

    borderColor: 'black',

    borderWidth: 2,

  },



  Button: {

    backgroundColor: '#233947',

    padding: 5,

    borderRadius: 15,

    alignItems: 'center',

    margin: 15,

    height: 50,

  },

});

export default Login;

