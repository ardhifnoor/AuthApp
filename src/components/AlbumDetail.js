import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Linking } from 'react-native'

import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const css = StyleSheet.create({
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    headerContentStyle: {
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 300,
        flex: 1
    }
})

const AlbumDetail = ({ album }) => {
    const {
        title,
        artist,
        thumbnail_image,
        image,
        url
    } = album

    const {
        headerContentStyle,
        headerTextStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        imageStyle
    } = css

    return(
        <Card>
            <CardSection>
                <Image style={ imageStyle } source={{ uri: image }}/>
            </CardSection>
            <CardSection>
                <View style={ thumbnailContainerStyle }>
                    <Image style={ thumbnailStyle } source={{ uri: thumbnail_image }}/>
                </View>
                <View style={ headerContentStyle }>
                    <Text style={ headerTextStyle }>{ title }</Text>
                    <Text>by { artist }</Text>
                </View>
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy now!
                </Button>
            </CardSection>
        </Card>
    )
}

export default AlbumDetail