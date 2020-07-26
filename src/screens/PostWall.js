import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PostWall = () => {
    return (
        <View style={styles.container}>
            <Text>Post Wall</Text>
            <Text>The screen for reading all posts</Text>
        </View>
    )
}

export default PostWall

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})
