import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';

export default class Profile extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          auth: '',
          id:'',
          info: [],

        }
    }

    async GetAuth(){
        try{
            let auth = this.state.auth;
            var authkey = await AsyncStorage.getItem('AuthKey', auth.toString());
            this.setState({auth:authkey})
            console.log("user auth key" + this.state);
          
          }catch(e){
            console.log("Error in getting auth " + e)
          } 
    }

    async GetID(){
        try{
            let id = this.state.id;
            var userid = await AsyncStorage.getItem('ID', id.toString());
            this.setState({id:userid})
            console.log("user id" + this.state);
            this.GetProfile(id)

        }catch(e){
            console.log("Error in getting id" + e)
        }

        }
    
    getProfile(id){
    fetch('http://10.0.2.2:3333/api/v0.0.5/user/'+id,
    {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
      
    
            
    },
    })

    .then((response) => { 
      return response.json();
    })
    .then((responseJson) => 
    {
      this.setState({
        info:responseJson
      });

      console.log(this.state);

    }).catch((error) => {
      console.log(error);
    });


    }

    componentDidMount(){
        this.GetAuth();
        this.GetID();
        this.getProfile(this.state.id);
    }


  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
                <FlatList
                data ={this.state.info}
                renderItem ={({item}) => <Text>{item.user.given_name} {item.user.family_name}</Text>}
                />
              <Text style={styles.info}>UX Designer / Mobile developer</Text>
              <Text style={styles.description}></Text>
              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Follow</Text>  
              </TouchableOpacity>              
            
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#456990",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});