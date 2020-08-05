import React, { Component } from 'react'; 
import { FlatList, ActivityIndicator, Text, View, Alert, StyleSheet, TextInput, TouchableOpacity  } from 'react-native'; 


class EditAccount extends Component {
constructor(props)
{   
    super(props);   
    
    //Binds the createAccount function so it can access the states in the constructor
    this.createAccount = this.createAccount.bind(this);
    this.state ={ 
       
 };
}

createAccount()
{
fetch('http://10.0.2.2:3333/api/v0.0.5/user',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        given_name: this.state.given_name,
        family_name: this.state.family_name,
        email: this.state.email,
        password: this.state.password
     })
  })
  .then((response) => {
    if (response.status == 201){
      Alert.alert("Changes to your account have been made!");
      this.props.navigation.navigate('LandingPage')
    } else
    Alert.alert("An error occured, please try again");
  }) 
  .catch((error) => {
    console.error('An error has occured.', error);
  });
}


render()
{

  return (

    <View style={styles.container}>

      <Text style={styles.TitleText}> Edit Details  </Text>

      <TextInput style={styles.ListText}

        placeholder="Change your given name"

        autoCapitalize="none"

        onChangeText={text => this.setState({ given_name: text })}

      />



      <TextInput style={styles.ListText}

        placeholder="Change your family name"

        autoCapitalize="none"

        onChangeText={text => this.setState({ family_name: text })}

      />



      <TextInput style={styles.ListText}

        placeholder="Change your email"

        autoCapitalize="none"

        onChangeText={text => this.setState({ email: text })}

      />



      <TextInput style={styles.ListText}

        placeholder="Change your password"

        autoCapitalize="none"

        secureTextEntry={true}

        onChangeText={text => this.setState({ password: text })}

      />



      <TouchableOpacity

        style={styles.Button}

        onPress=
        {
          () => this.createAccount()
         
          
        }>

        <Text style={styles.ButtonText}> Save Changes </Text>

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

export default EditAccount;

