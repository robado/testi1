import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text , FlatList, View, Button } from 'react-native';
import AppHeader from './src/components/appHeader';
import AppBody from './src/components/appBody';
import AppFooter from './src/components/appFooter';
import {AppMap} from './src/components/appMap';
import AppJson from "./src/components/appJson"


export default class testi1 extends Component{
    render() {
        return (
            <View>
                <AppHeader/>
                <AppMap/>
                <AppBody/>
                <AppJson/>
                <AppFooter/>
            </View>
        )
    }
}
AppRegistry.registerComponent('testi1',()=> 'testi1');
