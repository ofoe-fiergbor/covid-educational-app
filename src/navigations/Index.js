import React from 'react'
import { StyleSheet, Text, View, Settings } from 'react-native'
import StackNavigation from './StackNavigation'
import {NavigationContainer} from '@react-navigation/native'


const Index = () => {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    )
}

export default Index


