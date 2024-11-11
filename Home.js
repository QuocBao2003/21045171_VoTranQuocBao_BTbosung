import {
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
// or any files within the Snack
import AssetExample from './components/AssetExample';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Home({navigation}){
  return(
      <SafeAreaView style={style.container}>
        <View style={{flexDirection:'column',justifyContent:'center',marginTop :10,alignItems:'center'}}>
          <Text style={{fontSize:20,fontWeight:500}}>A premium online store for</Text>
        <Text style={{fontSize:20,fontWeight:500}}>sporter and their stylish choice</Text>
        </View>
       <View style={{height:400,width:'90%',backgroundColor:"#f8e6e5",marginHorizontal:20,borderRadius:20,alignItems:'center',marginTop:40}}>
        <Image source={require("./5c0d8c0f67fc78f523516fd7768fec28.png")} style={{width : 250,height:250,alignItems:'center',marginTop:80}}/>
       </View>
       <View style={{flexDirection:'column',justifyContent:'center',marginTop :10,alignItems:'center'}}>
        <Text style={{fontSize:30,fontWeight:700}}>POWER BIKE</Text>
        <Text style={{fontSize:30,fontWeight:700}}>SHOP</Text>
        <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',backgroundColor:'#e94141',borderRadius:20,height:50,width:150,padding:7,
        marginTop :50}} onPress={()=>{navigation.navigate("ListBike")}}>
          <Text style={{fontSize : 25,color:'white'}}>Get started</Text>
        </TouchableOpacity>
       </View>
      </SafeAreaView>
  )
}
const style=StyleSheet.create({
  container :{
    flex :1
  }
})