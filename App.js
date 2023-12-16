import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';

import DiceOne from './assets/1dice.png';
import DiceTwo from './assets/2dice.png';
import DiceThree from './assets/3dice.png';
import DiceFour from './assets/4dice.png';
import DiceFive from './assets/5dice.png';
import DiceSix from './assets/6dice.png';

function App() {
  const [uri, Seturi] = useState(DiceOne);
  const pressedButton = () => {
    const RandomVal = Math.floor(Math.random() * 6) + 1;

    switch (RandomVal) {
      case 1:
        Seturi(DiceOne);
        break;
      case 2:
        Seturi(DiceTwo);
        break;
      case 3:
        Seturi(DiceThree);
        break;
      case 4:
        Seturi(DiceFour);
        break;
      case 5:
        Seturi(DiceFive);
        break;
      case 6:
        Seturi(DiceSix);
        break;
      default:
        Seturi(DiceSix);
        break;
    }
  };
  return (
    <>
      <View style={Styles.Container}>
        <Image source={uri} style={Styles.Image} />
        <Pressable onPress={pressedButton}>
          <Text style={Styles.Text}>🎲Roll🎲</Text>
        </Pressable>
        <Text
          style={{
            marginTop: 100,
            alignItems: 'center',
            justifyContent: 'centers',
          }}>
          ©Anuj Dixit
        </Text>
      </View>
    </>
  );
}

export default App;

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#C1F2B0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: 200,
    height: 200,
  },
  Text: {
    fontSize: 20,
    backgroundColor: '#7752FE',
    paddingHorizontal: 18,
    paddingVertical: 9,
    color: 'white',
    borderRadius: 4,
    marginTop: 180,
    borderWidth: 3,
    fontWeight: 'bold',
    borderColor: 'white',
  },
});
