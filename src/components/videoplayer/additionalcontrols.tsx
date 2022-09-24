import * as React from 'react';
import { View } from 'react-native';
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider,
  List,
} from 'react-native-paper';

const AdditionalControls = ({ visible, setVisible }: any) => {
  const hideDialog = () => setVisible(false);

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Settings</Dialog.Title>
        <Dialog.Content>
          <List.Accordion
            title="Select Audio"
            left={props => <List.Icon {...props} icon="headphones" />}>
            <List.Item title="English" />
            <List.Item title="Hindi" />
          </List.Accordion>
          <List.Accordion
            title="Select Subtitle"
            left={props => <List.Icon {...props} icon="closed-caption" />}>
            <List.Item title="English [cc]" />
            <List.Item title="Hindi [cc]" />
          </List.Accordion>
          <List.Accordion
            title="Playback Speed"
            left={props => <List.Icon {...props} icon="play-speed" />}>
            <List.Item title="0.25" />
            <List.Item title="0.5" />
            <List.Item title="0.75" />
            <List.Item title="1" />
            <List.Item title="1.25" />
            <List.Item title="1.5" />
            <List.Item title="1.75" />
            <List.Item title="2" />
          </List.Accordion>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default AdditionalControls;
