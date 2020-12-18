import React , { useState } from 'react' ;
import { StatusBar , Text , View , StyleSheet } from 'react-native' ;
import { Button , Input , Overlay } from 'react-native-elements' ;


 const Screen =()=> {
    const [ email , setEmail ] = useState ( '') ;
   const [ password , setPassword ] = useState ( '') ;
   const [visible, setVisible] = useState(false);


   const toggleOverlay = () => {
    setVisible(!visible);
  };


    return (
    
        <View style={styles.container}>
        <View style={styles.content}>
        <Text style={styles.text}>Welcome to the Form </Text>
        <Input
        placeholder="Email"
        keyboardType = 'email-address' placeholderTextColor='white' color='blue' onChangeText={e=>setEmail(e)}
        />
        <Input
        placeholder="Password" placeholderTextColor='white' color='blue' onChangeText={e=>setPassword(e)}
        secureTextEntry={true} 
        />
        <Button
      
        title="Login/SignUp" onPress={toggleOverlay}
        />
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
            <View style={styles.overlayContainer}>
                <Text style={styles.overlayText}>Email:{email}</Text>
                <Text style={styles.overlayText}>Password:{password}</Text>

        </View>
        </Overlay>

        </View>
        
        
        </View>
        
       


     
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     
    },
    content:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#03cafc'

    },
    text:{
        fontSize:20,
        color:'blue',
        fontWeight:'800'
    },
    overlayText:{
        color:'#03cafc',
        fontWeight:'bold',
        fontSize:15
    },
    overlayContainer:{
        justifyContent:'center',
        alignItems:'center',
        width:250,
        height:100
    }


  });


export default Screen;