/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, StyleSheet, Text, View,} from 'react-native';

type Props = {};

let MOCKED_MOVIES_DATA = [
    {
        title: "标题",
        year: "2015",
        posters: {thumbnail: "http://i.imgur.com/UePbdph.jpg"}
    }
];

export default class App extends Component<Props> {
    render() {
        var movie = MOCKED_MOVIES_DATA[0];
        return (
            <View style={styles.container}>
                <Text>{movie.title}</Text>
                <Text>{movie.year}</Text>
                <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail}/>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    thumbnail: {
        width: 53,
        height: 81
    }
});
