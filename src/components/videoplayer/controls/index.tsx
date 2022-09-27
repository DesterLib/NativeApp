import Slider from '@react-native-community/slider';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';

import {
    onClickBackward,
    onClickForward,
    onSeek,
    onSlidingComplete,
    onSlidingStart,
    toTime,
} from './events';

const Controls = (props: any) => {
    const { player, setPlayer, videoRef } = props;
    return (
        <View style={styles.controlsContrainer}>
            <View style={styles.controlsTop}>
                <IconButton
                    icon='chevron-left'
                    iconColor='#ffffff'
                    size={30}
                    onPress={() => console.log('Pressed')}
                />
                <View style={styles.controlsTopRight}>
                    <IconButton
                        icon='dots-vertical'
                        iconColor='#ffffff'
                        size={30}
                        onPress={() => console.log('Pressed')}
                    />
                    <IconButton
                        icon='fullscreen'
                        iconColor='#ffffff'
                        size={30}
                        onPress={() => console.log('Pressed')}
                    />
                </View>
            </View>
            <View style={styles.controlsCenter}>
                {/* <IconButton
                    icon='skip-previous'
                    iconColor='#ffffff'
                    size={30}
                    onPress={() => onClickBackward({ videoRef, currentTime: player.currentTime })}
                /> */}
                <IconButton
                    icon='rewind-15'
                    iconColor='#ffffff'
                    size={30}
                    onPress={() => onClickBackward({ videoRef, currentTime: player.currentTime })}
                />
                <IconButton
                    icon={player.paused ? 'play' : 'pause'}
                    iconColor='#ffffff'
                    size={50}
                    onPress={() => setPlayer({ ...player, paused: !player.paused })}
                />
                <IconButton
                    icon='fast-forward-15'
                    iconColor='#ffffff'
                    size={30}
                    onPress={() => onClickForward({ videoRef, currentTime: player.currentTime })}
                />
                {/* <IconButton
                    icon='skip-next'
                    iconColor='#ffffff'
                    size={30}
                    onPress={() => onClickBackward({ videoRef, currentTime: player.currentTime })}
                /> */}
            </View>
            <View style={styles.controlsBottom}>
                <View style={styles.timeStamps}>
                    <Text>{toTime(player.currentTime)}</Text>
                    <Text>{toTime(player.duration)}</Text>
                </View>
                <Slider
                    style={{ width: '100%', height: 30, padding: 0, margin: 0 }}
                    value={player.currentTime}
                    step={1}
                    onSlidingStart={() => onSlidingStart({ player, setPlayer })}
                    onSlidingComplete={() => onSlidingComplete({ player, setPlayer })}
                    tapToSeek={true}
                    onValueChange={(data) => onSeek({ data, player, setPlayer, videoRef })}
                    minimumValue={0}
                    maximumValue={player.duration}
                    minimumTrackTintColor='#00ffb7'
                    maximumTrackTintColor='#000000'
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    controlsContrainer: {
        position: 'absolute',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 1000,
        backgroundColor: 'hsla(0, 0%, 0%, 0.8)',
    },
    controlsTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    controlsTopLeft: {},
    controlsTopRight: {
        flexDirection: 'row',
    },
    controlsCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    controlsBottom: {},
    timeStamps: {
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default Controls;
