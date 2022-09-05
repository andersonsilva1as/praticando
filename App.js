import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={{uri: 'https://preview.redd.it/a4qhqnf8mg231.jpg?auto=webp&s=7ae36ef7502768db95e14c4a92075c977549cc0e'}} resizeMode="cover" style = {styles.imgBackgound}/>
      <Image source={{uri: 'https://mfiles.alphacoders.com/839/839931.png'}} style = {styles.img1}/>
      <TouchableOpacity onPress={()=> alert('Olá Galera' )} style = {styles.bottonStyle}>
      <Text style = {styles.textBotton}>Press ME</Text>
      </TouchableOpacity>
      <Button
        title='Botao 2' onPress={() => alert('Hello World')} style = {styles.bottonStyle2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
  imgBackgound: {
    aspectRatio: 0.5,
    justifyContent: "center"

  },
  bottonStyle: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  bottonStyle2:{
    position: 'absolute',
    borderBottomStartRadius: 100,
    borderBottomWidth: 100,
    
  },
  img1: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    color: "#fff",
    justifyContent: 'center',
    aspectRatio: 0.4615,
  },
  img2: {
    flex: 1,
    aspectRatio: 0.5
  },
  textBotton: {
    fontSize: 20,
    position: 'absolute',

  }


});
