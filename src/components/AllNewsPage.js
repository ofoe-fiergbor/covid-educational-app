import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NewsWallTemplate from './NewsWallTemplate'
import ButtonOne from './Buttons'

export default function AllNewsPage() {
    return (
        <View>
            <ButtonOne/>
            <NewsWallTemplate/>
        </View>
    )
}

const styles = StyleSheet.create({})
