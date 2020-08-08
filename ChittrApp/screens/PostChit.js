import React, { Component } from 'react'; 
import { FlatList, ActivityIndicator, Text, View, Alert, StyleSheet, TextInput, TouchableOpacity  } from 'react-native'; 
import AsyncStorage from '@react-native-community/async-storage';

class PostChit extends Component {
constructor(props)
{   
    super(props);    

    this.state = {
      time: '',
      auth: '',
      
};
}


componentDidMount(){
  this.getCredentials();

  console.log(this.state.auth);
  console.log("1 " + this.state.auth);
}


async getCredentials(){
  try{
    var getAuthKey = await AsyncStorage.getItem('authkey');

    console.log(getAuthKey);
    console.log("2 " + this.state.auth);

    this.setState({ 
      auth: getAuthKey
   });
  }
  catch(error){
    console.log("Error with Async: "+ error);
    Alert.alert("Issue getting auth data");
  }
}



PostStatus()
{
  var date = Date.now();
  console.log("3 " + this.state.auth);
fetch('http://10.0.2.2:3333/api/v0.0.5/chits',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'X-Authorization': this.state.auth,

    },
    body: JSON.stringify({
        
        chit_content: this.state.chit_content,
        timestamp: date,
     })
  })
  .then((response) => {
    if (response.status == 201){
      Alert.alert("Chit Posted!");
      this.props.navigation.navigate('Feed')
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

      <TextInput style={styles.ListText}

        placeholder="What's on your mind?"

        autoCapitalize="none"

        onChangeText={text => this.setState({ chit_content: text })}

      />

      <TouchableOpacity

        style={styles.Button}

        onPress=
        {
          () => this.PostStatus()
         
          
        }>

        <Text style={styles.ButtonText}> Post </Text>

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

export default PostChit;

