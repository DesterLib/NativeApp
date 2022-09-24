import React from 'react';
import { View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import VideoPlayer from './src/components/videoplayer';

const App = () => {
  return (
    <PaperProvider>
      <View style={{ flex: 1, marginTop: 30 }}>
        <VideoPlayer />
      </View>
    </PaperProvider>
  );
};

export default App;
