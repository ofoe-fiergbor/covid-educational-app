import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SettingScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Settings Screen</Text>
            <Text>Screen for adjusting all settings</Text>
        </View>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})
