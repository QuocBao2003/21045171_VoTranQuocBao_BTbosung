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
export default function ClickBike({navigation}) {
  return(
      <SafeAreaView style={styles.container}>
         <View style={styles.card}>
      <View style={{backgroundColor:'#fdeded',justifyContent:'center',alignItems:'center',height : 350,borderRadius:10}}>
        <Image
        style={styles.image}
        source={require("./assets/2.png")} // replace with your image URL
      />
      </View>
     

      {/* Product Details */}
      <View style={styles.details}>
        <Text style={styles.productName}>Pina Mountain</Text>
        <View style={{flexDirection:'row'}}>
         <Text style={styles.discountText}>15% OFF | 350$</Text>
        <Text style={styles.originalPrice}>449$</Text>
        </View>
        <Text style={{fontSize:25,marginTop:30}}>Description</Text>

        {/* Description */}
        <Text style={styles.description}>
          It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.
        </Text>
      </View>

      {/* Add to Cart Button */}
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <Icon name="favorite-border" size={30} style={{marginTop:10}} color="#96989c"/>
         <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add to cart</Text>
      </TouchableOpacity>
      </View>
      
    </View>
      </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container :{
    flex:1
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '60%',
    height: 250,
    borderRadius: 8,
    marginTop:20
  },
  details: {
    marginVertical: 12,
    marginTop : 20
  },
  productName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  discountText: {
    color: 'grey',
    fontWeight: 'bold',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: 'black',
    marginBottom: 8,
    marginLeft : 40
  },
  description: {
    color: 'grey',
    fontSize: 14,
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: '#FF3D00',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width:'80%'
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    
  },


})