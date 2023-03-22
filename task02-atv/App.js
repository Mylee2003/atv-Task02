import React,{useState} from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import  AppLoading from 'expo-app-loading';

import{
  useFonts,
Allan_400Regular,
BalsamiqSans_400Regular,
Inter_500Medium,

} from '@expo-google-fonts/dev';
//para pesquisar fonts '@expo-google-fonts/dev'


export default function App() {

  let [fontsLoaded] =useFonts({
Allan_400Regular,
BalsamiqSans_400Regular,
Inter_500Medium,
  });

   if(!fontsLoaded){
    return<AppLoading/>;
  }else{

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sítio do Pica Pau Amarelo e seu elenco:
      </Text>
 <FlatList
      data={arrayelenco} 
      renderItem={({item})=> (
 <View>
  
    {'\n'} 
       <Image style={styles.img}source={item.capa}/> <Text>
       {'\n'}  
    
 <Text style={styles.texto}> {item.texto}</Text> 
          {'\n'} 
     
       <Text style={styles.subTitulo}> Personagem:</Text>  {item.personagem}
       {'\n'} 
        
         <Text style={styles.subTitulo}>Ator(a): </Text> {item.ator}
          {'\n'} 
         </Text>
       
      
    </View>
      )}
/>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
     alignItems: 'center'
  },
 

  titulo:
   {
     marginTop:38,
 marginBottom:20,
     fontSize:20,
       textAlign: 'center',
      fontWeight: 'bold',
     fontFamily: 'Allan_400Regular',
   },

   subTitulo:{
     fontFamily: 'BalsamiqSans_400Regular',
      fontSize:15,
   fontWeight:'bold',
   },

   texto: {
     fontFamily: 'Inter_500Medium',
     
     fontSize:15,
  

   }
});
const arrayelenco = [
  {texto:'Sítio do Picapau Amarelo é uma série de 23 volumes de literatura fantástica, escrita pelo autor brasileiro Monteiro Lobato (entre 1920 e 1947). A obra tem atravessado gerações e geralmente representa a literatura infantil do Brasil.', capa:require('./components/Sitio_do_Picapau_Amarelo.jpg')
  },

  {
  personagem:'Narizinho -',ator:' (Amanda Diniz)', 
   capa:require('./Narizinho.jpg')
   },
  {
    personagem:'Emília', ator:'(Isabelle Drumm)', 
  capa:require('./Emilia.jpg')
  },
  {
    personagem:'Dona Benta',ator:' (Nicette Bruno)', 
   capa:require('./Dona_Benta_Nicette_Bruno.jpg')
  },
  {
    personagem:'Visconde de Sabugosa',ator:' (Kiko Mascarenhas)', 
   capa:require('./Visconde_de_Sabugosa___Kiko_Mascarenhas.jpg')
    },
     {
    personagem:'Tia Nastácia',ator:' (Dhu Moraes)', 
   capa:require('./Tia_Nastacia___Dhu_Moraes.jpg')
    },
     {
    personagem:'Tio Barnabé',ator:' (João Acaibe)', 
   capa:require('./components/Tio_Barnabe____Joao_Acaiabe.jpg')
    },
    {
    personagem:'Saci',ator:' (Fabrício Boliveira)', 
   capa:require('./Saci_Fabricio_Boliveira.jpg')
    },
    {
    personagem:'Princesa Trirza',ator:' (Fany Georguleas)', 
   capa:require('./Pedrinho___Cesar_Cardadeiro.jpg')
    },
    {
    personagem:'Zé carijó',ator:' (Cassiano Carneiro)', 
   capa:require('./components/Ze_Carijo___Cassiano_Carneiro.jpg')
    },
    {
    personagem:'Dona Carochinha',ator:' (Josie Antello)', 
   capa:require('./Dona_Carochinha_Marilu_Bueno.jpg')
    },
];