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

  // Local image data to match with API data
  const bikeImages = {
    '1': require('./assets/1.png'),
    '2': require('./assets/2.png'),
    '3': require('./assets/3.png'),
    '4': require('./assets/4.png'),
    '5': require('./assets/5.png'),
    '6': require('./assets/6.png'),
  };

  useEffect(() => {
    fetchBikes();
  }, []);

  const fetchBikes = async () => {
    try {
      const response = await fetch('https://6731ce417aaf2a9aff12326d.mockapi.io/bao');
      
      const data = await response.json();
      const mappedData = data.map((item) => ({
        ...item,
        image: bikeImages[item.id] || bikeImages['1'], // Fallback to image 1 if ID not found
      }));
      setBikes(mappedData);
    } catch (error) {
      console.error("Error fetching bikes data:", error);
    }
  };

  // Render each bike item
  const renderItem = ({ item }) => (
    <View style={style.card}>
      <Image source={item.image} style={style.image} />
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
    color: '#888'
  }
}) 