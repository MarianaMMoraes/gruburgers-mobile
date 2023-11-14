import { Text, View, StyleSheet,TextInput,TouchableOpacity,Image,ImageBackground,SafeAreaView,Alert } from 'react-native';
import Constants from 'expo-constants';


function StartupPage({navigation}){
  return(
    <SafeAreaView style={styles.container}>
     <ImageBackground
      style= {{flex:1}}
      source={require('../assets/back.jpg')
      }
      style={{
          width: 400,
          height: 785,
          padding:40,
        }}
      >
       <View style={styles.contentCenter}>
      <Text></Text><Text></Text>
      <Image
        source={require('../assets/logo.png')}

        style={{
          width: 150,
          height: 150,
          margintop:1,
          marginBottom:1,
          paddingTop:10,

        }}
      />
    <Text style={styles.xd}>
        GRUBurgers {'\n'}{'\n'}
       
    </Text>
     
  </View>
<Text></Text><Text></Text>
<TouchableOpacity 
    style={styles.buttonContainer}
    onPress={() =>navigation.navigate("Login")}>
    <Text  style={styles.buttonText}>Login</Text>
     </TouchableOpacity>
     
<Text></Text>

  <TouchableOpacity 
    style={styles.buttonContainer}
    onPress={() => navigation.navigate("Sign-up Page")}> 
    <Text style={styles.buttonText}>Cadastrar</Text>
     </TouchableOpacity>



     
    </ImageBackground>
</SafeAreaView> 

   
  );
}


const styles=StyleSheet.create({
  container:{
    flex:1

  },
  contentCenter:{
    justifyContent:'center',
    alignItems:'center',
  },
 
  buttonContainer :{
    backgroundColor:'rgba(5, 4, 0, 0.93)',
    paddingVertical:15,
    paddingHorizontal:5,
     borderRadius: 20,
      
  },
  buttonText: {
    textAlign:'center',
    color:'#FFFFFF',
    fontWeight: 'bold',
    fontSize:20,
  },
  xd: {
    textAlign:'center',
    color:'#FFF',
    fontWeight: 'bold',
    fontSize:30,
  }
});
export default StartupPage;