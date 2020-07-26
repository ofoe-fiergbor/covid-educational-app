import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Tracker = () => {
    return (
        <View style={styles.container}>
            <Text>Tracker Screen</Text>
            <Text>Screen for Traking active cases</Text>
        </View>
    )
}

export default Tracker

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})
