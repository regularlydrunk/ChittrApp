import React, { Component } from 'react'; 
import { FlatList, ActivityIndicator, Text, View, Alert, StyleSheet, TextInput, TouchableOpacity  } from 'react-native'; 
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          chits:[],
          auth: '',

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

    getData() {
        return fetch('http://10.0.2.2:3333/api/v0.0.5/chits')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoading:false,
                chits: responseJson,
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    componentDidMount(){
        this.getData();
    }
    

    render() {
        if(this.state.isLoading){
            return(
                <View>
                    <ActivityIndicator/>
                </View>
            )
        }
        
        return (
        
            <View style={styles.container1}>
                <View style={styles.container2}>
                    <FlatList
                         data={this.state.chits}
                         renderItem={({item}) => <Text>{item.user.given_name + " " + item.user.family_name + '\n' + item.chit_content}</Text>}
                         keyExtractor={({id}, index) => id}
                    />
                </View>

                <View style={styles.container3}>
                    <TouchableOpacity
                        style={styles.Button}
                        onPress=
                        {() => this.createAccount()}>
                        <Text style={styles.ButtonText}> Refresh </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.Button}
                        onPress=
                        {() => this.createAccount()}>
                        <Text style={styles.ButtonText}> Post </Text>
                    </TouchableOpacity>
            </View>

            </View>
             
          

        );
    }
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
        container2: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between'
        
      },
      container3: {
        marginTop: '150%',
        flexDirection: 'row',
    
      },


      Button: {
        backgroundColor: '#233947',
        padding: 5,
        borderRadius: 15,
        alignItems: 'center',
        margin: 15,
        height: 50,
        width: 10
      },

});

export default Feed