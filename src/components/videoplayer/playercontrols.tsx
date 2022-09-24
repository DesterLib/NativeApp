import Slider from '@react-native-community/slider';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';

import AdditionalControls from './additionalcontrols';
import { handlePlayPause, onSeek } from './events';
import { secondsToHms } from './utils';

const PlayerControls = ({
    videoRef,
    state,
    setState,
    playing,
    muted,
    currentTime,
    duration,
    showPreviousAndNext,
    showSkip,
    previousDisabled,
    nextDisabled,
    onSlidingStart,
    onSlidingComplete,
    onPlay,
    onPause,
    onMute,
    onUnmute,
    onForceSeek,
    skipForwards,
    skipBackwards,
    onNext,
    onPrevious,
}: any) => {
    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    return (
        <View style={styles.container}>
            <View style={styles.controlsTop}>
                <IconButton
                    size={25}
                    iconColor='#ffffff'
                    onPress={muted ? onUnmute : onMute}
                    icon={muted ? 'volume-off' : 'volume-high'}
                />
                <View style={styles.topLeft}>
                    <IconButton
                        size={25}
                        iconColor='#ffffff'
                        onPress={showDialog}
                        icon='dots-vertical'
                    />
                    <AdditionalControls visible={visible} setVisible={setVisible} />
                    <IconButton
                        size={25}
                        iconColor='#ffffff'
                        onPress={() => console.log('Pressed')}
                        icon='fullscreen'
                    />
                </View>
            </View>
            <View style={styles.controlsCenter}>
                <IconButton
                    size={50}
                    iconColor='#ffffff'
                    onPress={playing ? onPause : onPlay}
                    icon={playing ? 'pause' : 'play'}
                />
            </View>
            <View style={styles.controlsBottom}>
                <View
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        width: '100%',
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingBottom: 10,
                    }}
                >
                    <Text>{secondsToHms(currentTime || 1)}</Text>
                    <Text>{secondsToHms(duration)}</Text>
                </View>
                {state.stable && (
                    <Slider
                        value={currentTime}
                        minimumValue={0}
                        maximumValue={duration}
                        step={1}
                        onSlidingStart={onSlidingStart}
                        onSlidingComplete={onSlidingComplete}
                        onValueChange={(data) => onSeek({ data, state, setState, videoRef })}
                        minimumTrackTintColor={'#F44336'}
                        maximumTrackTintColor={'#FFFFFF'}
                        thumbTintColor={'#F44336'}
                    />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000b3',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
    },
    controlsTop: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    topLeft: {
        flexDirection: 'row',
    },
    controlsCenter: {},
    controlsBottom: {
        width: '100%',
        marginBottom: 20,
    },
});

export default PlayerControls;
