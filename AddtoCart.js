import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function AddBike({ navigation }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageUri, setImageUri] = useState(null);

  // Function to select image from device storage
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  // Function to add bike to API
  const addBike = async () => {
    if (!name || !price || !imageUri) {
      Alert.alert('Error', 'Please fill all fields and select an image');
      return;
    }

    try {
      // Post data to the API
      const response = await fetch('https://6731ce417aaf2a9aff12326d.mockapi.io/bao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          price: parseFloat(price),
          image: imageUri,  // Save image URI or upload the image file depending on API setup
        }),
      });

      if (response.ok) {
        Alert.alert('Success', 'Bike added successfully!');
        setName('');
        setPrice('');
        setImageUri(null);

        // Navigate back to ListBike and refresh the list
        navigation.goBack();
      } else {
        Alert.alert('Error', 'Failed to add bike');
      }
    } catch (error) {
      console.error("Error adding bike:", error);
      Alert.alert('Error', 'An error occurred while adding the bike');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Add New Bike</Text>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter bike name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      {/* Price Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        value={price}
        onChangeText={(text) => setPrice(text)}
        keyboardType="numeric"
      />

      {/* Image Picker */}
      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Text style={styles.imagePickerText}>Pick an image</Text>
        )}
      </TouchableOpacity>


      {/* Add Button */}
      <TouchableOpacity style={styles.addButton} onPress={addBike}>
        <Text style={styles.addButtonText}>Add Bike</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  imagePicker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imagePickerText: {
    color: '#888',
  },
  addButton: {
    backgroundColor: '#FF3D00',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});