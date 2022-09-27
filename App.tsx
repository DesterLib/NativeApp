import React from 'react';
import { View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import VideoPlayer from './src/components/videoplayer';

const App = () => {
    return (
        <PaperProvider>
            <View>
                <VideoPlayer
                    url={
                        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
                    }
                />
            </View>
        </PaperProvider>
    );
};

export default App;
