import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NewsWall = () => {
    return (
        <View style={styles.container}>
            <Text>News Wall</Text>
            <Text>Screen for reading the</Text>
            <Text>latest covid19 news and findings</Text>
        </View>
    )
}

export default NewsWall

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})
