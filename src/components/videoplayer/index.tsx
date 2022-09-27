import React from 'react';
import { View } from 'react-native';
import { Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LANDSCAPE, OrientationLocker, PORTRAIT } from 'react-native-orientation-locker';
import { Button, Text } from 'react-native-paper';
import Video from 'react-native-video';

import Controls from './controls';
import { onLoad, onProgress } from './controls/events';

const windowHeight = Dimensions.get('screen').height;

const VideoPlayer = (props: any) => {
    const { url } = props;
    const videoRef = React.useRef<any>(null);
    const [player, setPlayer] = React.useState({
        paused: false,
        muted: false,
        seeking: false,
        duration: 0,
        currentTime: 0,
        fullscreen: false,
    });
    const [showVideo, setShowVideo] = React.useState(true);
    return (
        <View>
            <View
                style={{
                    flex: 1,
                    width: '100%',
                    position: 'relative',
                    // aspectRatio: 16 / 9,
                }}
            >
                {/* <OrientationLocker orientation={LANDSCAPE} /> */}
                <View
                    style={{
                        width: '100%',
                        height: windowHeight - 50,
                        backgroundColor: '#000000',
                    }}
                >
                    <Video
                        ref={videoRef}
                        onLoad={(data) => onLoad({ data, player, setPlayer })}
                        paused={player.paused}
                        onProgress={(data) => onProgress({ data, player, setPlayer })}
                        style={{ width: '100%', height: '100%' }}
                        source={{
                            uri: url,
                        }}
                    />
                    <Controls player={player} setPlayer={setPlayer} videoRef={videoRef} />
                </View>
            </View>
        </View>
    );
};
export default VideoPlayer;
