import { StyleSheet, Text, View } from "react-native";

const NavBar = () => {
    return ( 
        <View style={styles.nav}>
            <Text style={styles.text}>Zippopotam</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    nav:{
        backgroundColor:'#000000',
        height:50,
        display:"flex",
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontFamily:'monospace',
        fontWeight:'bold',
        color:'#ffffff',
        fontSize:25,
    }
})
 
export default NavBar;