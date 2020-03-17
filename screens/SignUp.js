import React, { Component } from 'react'; 
import { FlatList, ActivityIndicator, Text, View  } from 'react-native'; 


constructor(props)
{   
    super(props);     
    this.state ={ 
        //For Testing
        given_name: 'caitlin',
        family_name:'austin',
        email:'16051576@stu.mmu.ac.uk',
        password: 'password', 
 };
}

createAccount()
{
fetch('10.0.2.2:3333/tables/chittr_user',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        given_name: this.state.give_name,
        family_name: this.state.family_name,
        email: this.state.email,
        password: this.state.password
     })
  })

  .then((response) => response.json())
  .then((data) => {
    console.log('Your account has been created!', data);
  })
  .catch((error) => {
    console.error('An error has occured.', error);
  });
}


render()
{

  return (

    <View style={styles.container}>

      <Text style={styles.TitleText}> New user? Create a new account  </Text>

      <TextInput style={styles.ListText}

        underlineColorAndroid="transparent"

        placeholder="Enter your given name here"

        autoCapitalize="none"

        onChangeText={text => this.setState({ given_name: text })}

      />



      <TextInput style={styles.ListText}

        underlineColorAndroid="transparent"

        placeholder="Enter your family name here"

        autoCapitalize="none"

        onChangeText={text => this.setState({ family_name: text })}

      />



      <TextInput style={styles.ListText}

        underlineColorAndroid="transparent"

        placeholder="Enter your email here"

        autoCapitalize="none"

        onChangeText={text => this.setState({ email: text })}

      />



      <TextInput style={styles.ListText}

        underlineColorAndroid="transparent"

        placeholder="Enter password here"

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

        <Text style={styles.ButtonText}> Create account </Text>

      </TouchableOpacity>

      <TouchableOpacity

        style={styles.Button}

        onPress=

        {

          () => this.props.navigation.navigate('LoginPage')

        }>

        <Text style={styles.ButtonText}> Go to log in page </Text>

      </TouchableOpacity>

    </View>

  );

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