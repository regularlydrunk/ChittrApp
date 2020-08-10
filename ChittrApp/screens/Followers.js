import React, { Component } from 'react';
import {StyleSheet,FlatList,TouchableWithoutFeedback,TouchableOpacity, ActivityIndicator} from 'react-native';
import { List, ListItem, Left, Body, Right, Thumbnail} from 'native-base';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
export default class Followers extends Component {

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
        const followers = params ? params.followers : null

        this.setState({
            data:followers,
            isLoaded:true
        })

        console.log(followers);


    }



   

    renderSearchResult = ({item,index})=>{
        console.log(item.user_id);

        return(




<ListItem avatar onPress={()=> this.props.navigation.navigate('ExploreFriends',{
              userId:item.user_id
              
            }
          
            )}>
  <Left>
    <Thumbnail source={{ uri: 'http://10.0.2.2:3333/api/v0.0.5/user/'+item.user_id+''+'/photo?'+ new Date() }} />
  </Left>
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
              renderItem = {this.renderSearchResult}
              keyExtractor = {(item,index)=>index.toString()}/>



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

const styles = StyleSheet.create({
    container: {
      
        backgroundColor: "#fcfc03",
    },
    
});