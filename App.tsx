import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { ImageBackground } from 'react-native';




const App = (): JSX.Element => {
  
  return (
    
   
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>

       <ImageBackground
  source={require('./assets/imagens/loginbg.png')}
  style={styles.backgroundImage}
>
      <Image
        style={styles.logo}
        source={require('./assets/imagens/logoapp.png')}
      />

      <View style={styles.cardView}>
        <Text style={styles.loginText}>Conecte-se Agora</Text>
        <Text style={styles.loginTextD}>Comercio local, guia turistico e muito mais!</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          style={styles.acessarButton}
          onPress={() => {
            
            // validar os dados de login
          }}
        >
          <Text style={styles.buttonText}>FAZER LOGIN</Text>
        </TouchableOpacity>

        <Text
          style={styles.esqueceuSenha}
          onPress={() => {
            // encaminhat tela esqueceu senha
          }}
        >
          ESQUECEU SUA SENHA? CLIQUE AQUI
        </Text>

     
      </View>

      <View style={styles.cardView}>
        <Text style={styles.loginText}>Novo por aqui?</Text>

        <View style={styles.loginOptions}>
          
          <TouchableOpacity
            style={styles.loginOptionButton}
            onPress={() => {
              // aqui inserir encaminhamento tela cadastrar
            }}
          >
        
            <AntDesign name="adduser" size={24} color="white" />

            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

        
          <TouchableOpacity
            style={styles.loginOptionButton}
            onPress={() => {
              // aqui vou inserir firebase para login com google
            }}
          >
            
            <AntDesign name="google" size={24} color="white" />

            <Text style={styles.buttonText}>Google</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Image
        style={styles.imageView7}
        source={require('./assets/imagens/salaempreendedor.png')}
      />
        </ImageBackground>
    </ScrollView>
  
  );
}

const styles = StyleSheet.create({
   backgroundImage: {
    flex: 1,
    resizeMode: "cover"
  },

  loginOptions: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  loginOptionButton: {
    backgroundColor: '#00A6CF',
    borderRadius: 20,
    paddingVertical: 5,
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
   // alignItems: 'center',
   // justifyContent: 'center',
  },
  logo: {
    width: '75%', 
    height: 'auto', 
    aspectRatio: 14 / 7, 
    marginVertical: 15,
    marginTop: "15%",
    alignSelf: "center"
  },
  
  cardView: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    padding: 25,
    marginHorizontal: 40,
    marginVertical: 12,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
  },
  
  loginText: {
    fontSize: 23,
    marginLeft: "10%",
    marginRight: "10%",
    fontWeight: 'bold',
    color: '#1566E0',
    textAlign: 'center',
  },
  loginTextD: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1566E0',
    textAlign: 'center',
    marginTop: 8,
  },
  inputContainer: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1566E0',
  },
  input: {
    height: 40,
    fontSize: 14,
  
  },
  acessarButton: {
    backgroundColor: '#1566E0',
    borderRadius: 20,
    paddingVertical: 15,
    marginLeft: 13,
    marginRight: 13,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  esqueceuSenha: {
    textAlign: 'center',
    marginTop: 10,
    color: '#1566E0',
    fontSize: 10,
    fontWeight: 'bold',
  },
  imageView7: {
    width: 100,
    height: 70,
    marginVertical: 15,
    aspectRatio: 16 / 7, 
    marginBottom: "10%",
    alignSelf: "center",
    
  },
});

export default App;
