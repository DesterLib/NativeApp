import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';
import PlayerControls from './playercontrols';
import {
  handleMuteUnmute,
  handlePlayPause,
  onLoad,
  onProgress,
} from './events';

const VideoPlayer = () => {
  const videoRef = React.useRef<any>(null);
  let seekerWidth = 0;
  const [state, setState] = useState<any>({
    fullscreen: false,
    currentTime: 0,
    duration: 0,
    muted: false,
    showControls: true,
    seeking: false,
    rate: 1,
    volume: 1,
    resizeMode: 'contain',
    videoWidth: 0,
    videoHeight: 0,
    paused: false,
    decoration: true,
    isLoading: false,
    stable: false,
    seekerFillWidth: 0,
    seekerPosition: 0,
    seekerOffset: 0,
    audioTracks: [],
    textTracks: [],
    selectedAudioTrack: undefined,
    selectedTextTrack: undefined,
    srcListId: 0,
    loop: false,
  });

  const onSeek = (seek: any) => {
    //Handler for change in seekbar
    videoRef.current.seek(seek);
  };

  const onSeeking = (currentTime: any) => setState({ ...state, currentTime });

  return (
    <View
      style={styles.container}
      onLayout={event => (seekerWidth = event.nativeEvent.layout.width)}>
      <Video
        ref={videoRef}
        style={styles.video}
        controls={false}
        paused={!state.paused}
        muted={state.muted}
        // onProgress={() =>
        //   onProgress({ data: videoRef.current, state, setState })
        // }
        onLoad={data => onLoad({ data, setState })}
        onProgress={data => onProgress({ data, setState })}
        resizeMode={'contain'}
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
      />
      <PlayerControls
        state={state}
        setState={setState}
        playing={state.paused}
        muted={state.muted}
        currentTime={state.currentTime}
        duration={state.duration}
        onSlidingStart={() => handlePlayPause({ state, setState })}
        onSlidingComplete={() => handlePlayPause({ state, setState })}
        onPlay={() => handlePlayPause({ state, setState })}
        onPause={() => handlePlayPause({ state, setState })}
        onMute={() => handleMuteUnmute({ state, setState })}
        onUnmute={() => handleMuteUnmute({ state, setState })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  video: {
    aspectRatio: 16 / 9,
  },
});

export default VideoPlayer;
