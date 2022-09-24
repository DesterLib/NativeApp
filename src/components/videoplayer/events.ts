import { constrainToSeekerMinMax } from './utils';

function handlePlayPause({ state, setState }: any) {
  if (state.paused) {
    setState({ ...state, paused: false, showControls: true });
    return;
  }
  setState({ ...state, paused: true });
  setTimeout(() => setState((s: any) => ({ ...s, showControls: false })), 2000);
}

function handleMuteUnmute({ state, setState }: any) {
  if (state.muted) {
    setState({ ...state, muted: false, showControls: true });
    return;
  }
  setState({ ...state, muted: true });
  setTimeout(() => setState((s: any) => ({ ...s, showControls: false })), 2000);
}

function onLoad({ data, setState }: any) {
  setState((s: any) => ({
    ...s,
    duration: data.duration,
    currentTime: data.currentTime,
    stable: true,
  }));
}

function onProgress({ data, setState }: any) {
  setState((s: any) => ({
    ...s,
    currentTime: data.currentTime,
  }));
}

function onSeek({ seekTime, state, setState, videoRef }: any) {
  // videoRef?.current?.seek(seekTime);
  setState({ ...state, currentTime: seekTime });
}

export { onLoad, onProgress, onSeek, handlePlayPause, handleMuteUnmute };
