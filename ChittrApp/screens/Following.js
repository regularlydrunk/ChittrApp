import React, { Component } from 'react';
import {StyleSheet,FlatList,TouchableWithoutFeedback,TouchableOpacity, ActivityIndicator} from 'react-native';
import { List, ListItem, Left, Body, Right, Thumbnail} from 'native-base';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
export default class Following extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          data:[],
          loading: false,
          isLoaded:false,
          id:0,
          
        };
    


    
      }

    componentDidMount(){

        const { params } = this.props.navigation.state;
        const following = params ? params.following : null

        this.setState({
            data:following,
            isLoaded:true
        })

        console.log(following);


    }



   

    recieveSearchResult = ({item,index})=>{
        console.log(item.user_id);

        return(




<ListItem avatar onPress={()=> this.props.navigation.navigate('Search',{
              userId:item.user_id
              
            }
          
            )}>

  <Body>
    <Text>{item.given_name}</Text>
        <Text note>{item.family_name}</Text>
  </Body>

  
  
</ListItem>
        )
    };
  render() {
    if(this.state.isLoaded){
    return (

        
      <Container >
        


        <List>

            <FlatList
              data={this.state.data}
              renderItem = {this.recieveSearchResult}
              />



        </List>
      </Container>


    );
  }

else{
    return(
        <ActivityIndicator/>
    );

}
}
}