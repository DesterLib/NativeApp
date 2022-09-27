const onLoad = ({ data, player, setPlayer }: any) => {
    setPlayer({ ...player, duration: data.duration, currentTime: data.currentTime });
};

const onProgress = ({ data, player, setPlayer }: any) => {
    setPlayer({ ...player, currentTime: data.currentTime });
};

const onSeek = ({ data, player, setPlayer, videoRef }: any) => {
    if (!player.seeking) return;
    videoRef.current.seek(data);
    setPlayer({ ...player, currentTime: data });
};

const onSlidingStart = ({ player, setPlayer }: any) => {
    setPlayer({ ...player, seeking: true, paused: true });
};

const onSlidingComplete = ({ player, setPlayer }: any) => {
    setPlayer({ ...player, seeking: false, paused: false });
};

const onClickBackward = ({ videoRef, currentTime }: any) => {
    videoRef.current.seek(currentTime - 15);
};

const onClickForward = ({ videoRef, currentTime }: any) => {
    videoRef.current.seek(currentTime + 15);
};

const formatTime = ({ time = 0, duration, showTimeRemaining, showHours }: any) => {
    const symbol = showTimeRemaining ? '-' : '';
    time = Math.min(Math.max(time, 0), duration);

    if (!showHours) {
        const formattedMinutes = Math.floor(time / 60)
            .toFixed(0)
            .padStart(2, '0');
        const formattedSeconds = Math.floor(time % 60)
            .toFixed(0)
            .padStart(2, '0');

        return `${symbol}${formattedMinutes}:${formattedSeconds}`;
    }

    const formattedHours = Math.floor(time / 3600)
        .toFixed(0)
        .padStart(2, '0');
    const formattedMinutes = (Math.floor(time / 60) % 60).toFixed(0).padStart(2, '0');
    const formattedSeconds = Math.floor(time % 60)
        .toFixed(0)
        .padStart(2, '0');

    return `${symbol}${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

const toTime = (secs: any) => {
    var h = Math.floor(secs / (60 * 60));

    var divisor_for_minutes = secs % (60 * 60);
    var m = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var s = Math.ceil(divisor_for_seconds);

    return `${h ? `${h}:` : ''}${m ? `${m}:${s ? s : '0'}` : `${s ? s : '0'}`}`;
};

export {
    onLoad,
    onProgress,
    onSeek,
    onSlidingStart,
    onSlidingComplete,
    toTime,
    onClickBackward,
    onClickForward,
};
