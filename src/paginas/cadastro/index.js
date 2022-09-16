import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Platform } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { StyleSheet, View, Image} from 'react-native';
import { Button, CheckBox, Input, Text } from 'react-native-elements';


export default function Cadastrar() {
  const [Nome, setNome] = useState(null)
  const [Nota1, setNota1] = useState(null)
  const [Nota2, setNota2] = useState(null)
  const [Nota3, setNota3] = useState(null)
  const [Imagem, setImagem] = useState(null)



  return (

    <View style={styles.specificContainer}>
          

      <Input style={styles.inputStyle}
            placeholder="Nome"
            onChangeText= {value => setNome(value)}
            keyboardType='default'
            textContentType='name'
            
           />
        <Input style={styles.inputStyle}
            placeholder="Nota1"
            onChangeText= {value => setNota1(value)}
            keyboardType='numeric'
            

           />
           <Input style={styles.inputStyle}
            placeholder="Nota2"
            onChangeText= {value => setNota2(value)}
            keyboardType='numberic'

          
           />
                   <Input style={styles.inputStyle}
            placeholder="Nota3"
            onChangeText= {value => setNota3(value)}
            keyboardType='numeric'  
            textContentType="" 
            
             
            
            />
            
           


            <Input style={styles.inputStyle}
            placeholder="Imagem"
            onChangeText= {value => setImagem(value)}
            

           />

           <Button
           
           style={styles.buttonStyle}

           title={"Cadastrar"} type="outline"
           
           onPress={() => inserir()}
          
           />
            <Button 

           style={styles.buttonStyle}

           title={"Voltar"} type="outline"
           
           onPress={() => voltar()}
           />




    </View>
  )

 
  }
const styles = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#1C1C1C",
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },
  buttonStyle: {
    width: '200px',
    marginTop: '15px',

  }, 
  inputStyle: {
    width:'100%',
    height:40,
    backgroundColor:'white',
    borderRadius:20,
    paddingLeft:10,
  },

  imageStyle: {
   justifyContent: 'center',
   alignItems: 'center',
   width: '150px',
   height: '150px',
   borderRadius: 20,


  },

})