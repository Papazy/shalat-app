import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';
const hadisData = require('./wajengan.json');

const Wajengan = () => {
  const [randomNumber, setRandomNumber] = useState(1);
  const [hadis, setHadis] = useState([]);

  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 10) + 1;
    setRandomNumber(newRandomNumber);
  };

  useEffect(() => {
    generateRandomNumber();
  }, []);

  useEffect(() => {
    setHadis(hadisData[randomNumber]);
  }, [randomNumber]);

  return (
    <>
    <ImageBackground 
      source={require('./images/wajenganBg.jpg')}
      style={styles.container}
      imageStyle={{ borderRadius: 20}}
      >
      <Text style={styles.hadisText}>{hadis.isi}</Text>
    </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: "10%",
    paddingHorizontal: 30,
    marginHorizontal:5,    
    // backgroundColor: 'green',
    borderRadius: 15,
    overflow: 'hidden'
  },
  hadisText: {
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
    color:'white'
  },
});

export default Wajengan;
