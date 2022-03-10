import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import Button from './src/components/Button';

const App = () => {
  //OnPress button function
  const func = size => {
    alert(size + ' button pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title={'Press me'} onPress={() => func('medium')} />
      <Button size={'sm'} title={'Press me'} onPress={() => func('Small')} />
      <Button size={'xl'} onPress={() => func('Extra large')} />
      <Button
        size={'lg'}
        title="Boton"
        onPress={func}
        onPress={() => func('Large')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
});

export default App;
