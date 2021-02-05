import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <AntDesign name="setting" size={200} color="skyblue" style={{marginBottom: 40}} />
            <Text>Profile Screen</Text>
            <Text>Screen for adjusting all Profile</Text>
            <Text>Currently Under Development</Text>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})
