import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Register = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Register Screen</Text>


            <TouchableOpacity style={styles.btn}  onPress={()=> navigation.navigate('welcome')}>
            <Text>Go back</Text>
            </TouchableOpacity>
           
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
        marginVertical:50,
        backgroundColor:'skyblue',
        width:100,
        justifyContent:'center',
        alignItems:'center',
        height:40
    }
})
