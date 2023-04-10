import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";

const Home = () => {

    const [info, setInfo] = useState({})

    const [zip, setZip] = useState();
    const [cCode, setcCode] = useState('')
    console.log(zip)
    

    const func = (() => {
        axios.get(`https://api.zippopotam.us/${cCode}/${zip}`).then((value)=>{
            setInfo(value.data)
        })
      });

    const keyboardDismiss = ()=>{
        Keyboard.dismiss()
    }

    return ( 
        <View style={styles.container}>
        <TouchableWithoutFeedback onPress={keyboardDismiss}>
            <View style={styles.input}>
                <TextInput 
                     style={{
                         width:250,
                         height:40,
                         borderColor:'#000000',
                         borderWidth:1,
                         marginVertical:10,
                     }}
                     placeholder=' Enter Zipcode'
                     value={zip}
                     onChangeText={(text) => setZip(text)}                     
                />
                <TextInput 
                     style={{
                         width:250,
                         height:40,
                         borderColor:'#000000',
                         borderWidth:1,
                         marginVertical:10,
                     }}
                     placeholder=' Enter Country Code'
                     value={cCode}
                     onChangeText={(text) => setcCode(text)}
                />
            </View>
            </TouchableWithoutFeedback>
            <View style={styles.output}>
               <Text style={styles.txt}>Post Code:{info['post code']}</Text>
               <Text style={styles.txt}>Country:{info.country}</Text>
               <Text style={styles.txt}>State:</Text> 
               <Text style={styles.txt}>State Code:</Text>
               <Text style={styles.txt}>Country Abbrevition:</Text>
               <Text style={styles.txt}>Longitude:</Text>
               <Text style={styles.txt}>Latitude:</Text>   
            </View>
            <TouchableOpacity style={styles.touchable} onPress={func}>
                <View style={styles.button}>
                    <Text style={styles.text}>Search</Text>
                </View>
            </TouchableOpacity>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{

    },
    input:{
        display:'flex',
        alignItems:'center',
    },
    output:{
        backgroundColor:'#9ed9f0',
        height:250,
        width:325,
        marginHorizontal:30,
        marginVertical:50,
        borderRadius:5,
    },
    touchable:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        backgroundColor:'#9ed9f0',
        width:325,
        height:40,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
    text:{

    }
})
 
export default Home;