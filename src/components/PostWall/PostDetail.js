import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class PostDetail extends Component {
    render() {
        const { route, navigation } = this.props
        const { post } = route.params
        return (
            <View style={styles.container}>
                <Text> {post} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        flex: 1,
        // alignItems:'center',
        paddingTop: 10
    }
})
