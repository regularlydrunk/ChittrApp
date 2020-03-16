import React, { Component } from 'react'; 
import { FlatList, ActivityIndicator, Text, View  } from 'react-native'; 


constructor(props){   
    super(props);     
    this.state ={ 
        //For Testing
        given_name: 'caitlin',
        family_name:'austin',
        email:'16051576@stu.mmu.ac.uk',
        password: 'password', 
 };
}








createAccount(){
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
  })
}
