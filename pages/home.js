import { StyleSheet, TextInput, Text, View } from "react-native";

const Home = () => {
    return ( 
        <View style={styles.container}>
            <View style={styles.input}>
                <TextInput 
                     style={{
                         width:250,
                         height:40,
                         borderColor:'#000000',
                         borderWidth:1,
                         marginVertical:10,
                         
                     }}
                     placeholder='Enter Zipcode'
                />
                <TextInput 
                     style={{
                         width:250,
                         height:40,
                         borderColor:'#000000',
                         borderWidth:1,
                         marginVertical:10,
                     }}
                     placeholder='Enter Country Code'
                />
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{

    },
    input:{
        display:'flex',
        alignItems:'center',
    }
})
 
export default Home;