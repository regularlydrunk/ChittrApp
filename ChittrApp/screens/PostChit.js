import React, { Component } from 'react'; 
import { FlatList, ActivityIndicator, Text, View, Alert, StyleSheet, TextInput, TouchableOpacity  } from 'react-native'; 


class PostChit extends Component {
constructor(props)
{   
    super(props);   
    
    //Binds the createAccount function so it can access the states in the constructor
    this.createAccount = this.createAccount.bind(this);
    this.state ={ 
        
 };
}

PostStatus()
{
fetch('http://10.0.2.2:3333/api/v0.0.5/chits',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        
        chit_content: this.state.chit_content,
    
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

