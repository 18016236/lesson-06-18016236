/**
 * C308 Lesson 06 Quiz
 * @format
 * @flow
 */

import React from 'react';
import {Button, Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
    marginTop: 20,
  },
  image: {
    marginTop: 100,

  }
});
const Lesson06quiz = () => {
  return(
      <View style={styles.container}>
        <ImageBackground
            source={require('./src/img/bg.jpg')}
            style={{width: '100%', height: '100%'}}>
          <View style={{alignItems: 'center'}}>
            <Image
                source={require('./src/img/travel_time.jpg')}
                style={{
                  width: '50%',
                  height: '50%',
                  marginTop: 100,
                  alignItems: 'center',
            }}
          />
            <View>
              <Text style={styles.titleText}>
                Explore The World
              </Text>
            </View>
            <Button
                title={'GET STARTED'}
                color="#dc9b59"
                onPress={() => {
                }}
            />
          </View>
        </ImageBackground>
      </View>


  );
};



export default Lesson06quiz;
