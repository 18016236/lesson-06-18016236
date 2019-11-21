/**
 * C308 LESSON 06
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ImageBackground,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  Section: {
    backgroundColor: '#557622',
    color: '#f4f3e4',
    fontSize: 12,
    width: 375,
    marginTop: 20,
    marginBottom: 20,
  },
  header: {
    color: '#3f300e',
    fontSize: 20,
    backgroundColor: '#e1ddaa',
    padding: 20,
    width: 415,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./src/img/rainforest_bg.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.header}>
          <Text>BuzzForest</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <Image
              source={require('./src/img/orangutan.jpg')}
              style={{
                width: 375,
                height: 200,
                marginTop: 20,
                alignItems: 'center',
            }}
          />

          <View style={styles.Section}>
            <Button
              title={'ANIMALS'}
              color="#bf4216"
              onPress={() => {
                alert('ANIMALS' + ' button pressed!');
              }}
            />
            <Text style={styles.Section}>
              See the animal exhibits, discover the secrets about the animals we
              love and how they are cared for daily. Seize the opportunity to
              interact with some of the animal.
            </Text>
            <Button
              title={'ACTIVITIES'}
              color="#bf4216"
              onPress={() => {
                alert('ACTIVITIES' + ' button pressed!');
              }}
            />
            <Text style={styles.Section}>
              You, not only get to see animals, but all visitors can satisfy
              their curiosity, feed the animals and get up-close with the
              animals and have fun.
            </Text>
            <Button
              title={'FIND US'}
              color="#bf4216"
              onPress={() => {
                alert('FIND US' + ' button pressed!');
              }}
            />
            <Text style={styles.Section}>
              "Making your way to BuzzForest is easy. No matter where you are,
              there are many quick and convenient ways to find us."
            </Text>
          </View>

        </View>
        <View>
          <Text style={{backgroundColor: 'white', padding: 5}}>
            Copyright
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;
