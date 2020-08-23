import React from 'react'
import { StyleSheet, Text, View, Settings } from 'react-native'
import StackNavigation from './StackNavigation'
import {NavigationContainer} from '@react-navigation/native'

const navigationRef = React.createRef();

const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

const Index = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <StackNavigation navigate={navigate} />
        </NavigationContainer>
    )
}

export default Index


