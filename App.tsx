import React, {useEffect} from 'react';
import {Button, View, PermissionsAndroid} from 'react-native';
import {NativeModules} from 'react-native';

const {CallRecorder} = NativeModules;

const App = () => {
  const requestPermissions = async () => {
    try {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      );
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
      );
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Start Recording"
        onPress={() => CallRecorder.startRecording()}
      />
      <Button
        title="Stop Recording"
        onPress={() => CallRecorder.stopRecording()}
      />
    </View>
  );
};

export default App;
