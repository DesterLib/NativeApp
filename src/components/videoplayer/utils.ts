function constrainToSeekerMinMax({ position = 0, seekerWidth }: any) {
    if (position <= 0) {
        return 0;
    } else if (position >= seekerWidth) {
        return seekerWidth;
    }
    return position;
}

function secondsToHms(d: number) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? h + (h === 1 ? ':' : ':') : '';
    var mDisplay = m > 0 ? m + (m === 1 ? ':' : ':') : '';
    var sDisplay = s > 0 ? s + (s === 1 ? '' : '') : '';
    return hDisplay + mDisplay + sDisplay;
}

export { constrainToSeekerMinMax, secondsToHms };
