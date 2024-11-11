import {
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
// or any files within the Snack
import AssetExample from './components/AssetExample';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState, useEffect } from 'react';
export default function ListBike({navigation}) {
  const [bikes, setBikes] = useState([]);

  // Fetch or simulate API data
  useEffect(() => {
    fetchBikes();
  }, []);

  const fetchBikes = async () => {
    // Replace with actual API call if available
    const bikeData = [
      { id: '1', name: 'Pinarello', price: 1800, image: require("./assets/1.png") },
      { id: '2', name: 'Pina Mountai', price: 1350, image: require("./assets/2.png") },
      { id: '3', name: 'Pina Bike', price: 1500, image: require("./assets/3.png")  },
      { id: '4', name: 'Pinarello', price: 1900, image: require("./assets/4.png")  },
      { id: '5', name: 'Pinarello', price: 2700, image: require("./assets/5.png")  },
      { id: '5', name: 'Pinarello', price: 2700, image: require("./assets/6.png")  },
    ];
    setBikes(bikeData);
  };

  // Render each bike item
  const renderItem = ({ item }) => (
    <View style={style.card}>
      <Image source={item.image} style={style.image}/>
      <Text style={style.name}>{item.name}</Text>
      <Text style={style.price}>${item.price}</Text>
    </View>
  );

  return(
    <SafeAreaView style={style.container}>
        <Text style={{fontSize:35,fontWeight:600,color:'#ea4d4d'}}>The world's the best </Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
          <View style={{flexDirection:'row',justifyContent:'center',borderRadius:20,borderWidth:1,borderColor:'#ea4d4d',padding:5,height:40,width:70}}>
            <Text style={{fontSize:20,color:'#ea4d4d'}}>All</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'center',borderRadius:20,borderWidth:1,borderColor:'#ea4d4d',padding:5,height:40,width:90}}>
            <Text style={{fontSize:20,color:'#d0caca'}}>Roadbike</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'center',borderRadius:20,borderWidth:1,borderColor:'#ea4d4d',padding:5,height:40,width:90}}>
            <Text style={{fontSize:20,color:'#d0caca'}}>Mountain</Text>
          </View>
         
        </View>
         <TouchableOpacity onPress={()=>{navigation.navigate("ClickBike")}}>
          <FlatList
            data={bikes}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            numColumns={2} // Display items in two columns
            contentContainerStyle={style.container}
          />
         </TouchableOpacity>
    </SafeAreaView>
  )
}
const style=StyleSheet.create({
  container :{
    flex:1,
    marginRight:20,
    marginLeft :20  }
,card: {
    backgroundColor: '#fef5ed',
    borderRadius: 10,
    padding: 15,
    marginTop:10,
    marginBottom:10,
    marginRight:10,
    alignItems: 'center',
    elevation: 5,
  },
  image: {
    width: 110,
    height: 110,
    marginBottom: 10,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
})