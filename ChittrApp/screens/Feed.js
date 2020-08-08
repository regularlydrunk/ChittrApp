import React,{ Component } from 'react';
import { FlatList, ActivityIndicator, Text, View,StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class ChitScreen extends Component{
	//Disabled header
	static navigationOption = {
		header: null
	};
	//Constructor for props
	constructor(props){
	super(props);
	//Variables
	this.state={
		isFetching:false,
		chitListData:[] //Empty List Data
		}
	}
	//Mounts chidata
	componentDidMount(){
    this.getChitData();
  
  }
  
	//Refreshes page, runs chitdata get statement
	onRefresh(){
		this.setState({ isFetching: true }, function() { this.getChitData() });
	}
	//Get request chit data
	getChitData(){
		//Fetches chits data from link
		return fetch('http://10.0.2.2:3333/api/v0.0.5/chits')
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({
				isFetching:false,
				chitListData: responseJson, //Sets chitlistdata to json repsonse data from chit data
			});

		})
		.catch((error)=>{
			console.log(error); //Logs error
		});
  }
  
 

	render(){
		return(
		<View style={styles.container}>
		<Text style={styles.header}> Chits </Text>
		<FlatList styles={styles.container}
		onRefresh={() => this.onRefresh()}
		refreshing={this.state.isFetching}
		data={this.state.chitListData}
    renderItem={({ item })=> <Text style={styles.FlatList}>{item.chit_content} {"\n"}{"\n"} Posted by: {item.user.given_name}</Text>}
    
		keyExtractor={({ chit_id },index) => chit_id}
		/>
<TouchableOpacity

style={styles.Button}

  onPress=
  {
    () => this.props.navigation.navigate('PostChit')
  }>

  <Text style={styles.ButtonText}> Post Status </Text>

</TouchableOpacity>

		</View>
		);
	}
}
export default ChitScreen

const styles = StyleSheet.create({
	container: {
		flex: 2,
    backgroundColor: '#E4FDE1'
	},
	FlatList:{
		marginHorizontal: 10,
    height: 60,
    flex:1,
		color: 'white',
    backgroundColor: '#114B5F',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginBottom: 12
	},
	header: {
		fontSize: 24,
		color: '#F45B69',
		textAlign: 'center',
		paddingBottom: 10,
		marginBottom: 5,
		borderBottomColor: '#AFEEEE',
		borderBottomWidth: 1,
		fontFamily: "Hatten",
  },
  Button: {

    backgroundColor: '#114B5F',

    padding: 5,

    borderRadius: 15,

    alignItems: 'center',

    margin: 15,

    height: 50,

  },
  
  ButtonText: {

    color: 'white',

    fontSize: 28,

    fontWeight: 'bold'

  }
  
  
})