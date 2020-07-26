import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'

const Landing = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>LANDING PAGE FOR</Text>
            <Text>COVID 19 EDUC PLATFORM</Text>
            <TouchableOpacity style={styles.btn}
            onPress={()=> navigation.navigate('welcome')}>
                <Text>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Landing

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
