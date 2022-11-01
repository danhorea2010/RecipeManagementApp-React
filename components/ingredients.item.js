import {View, Text, Pressable} from 'react-native';
import {ListItem} from '@react-native-material/core';
import {useCallback, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-native';


export const IngredientItem = props => {
  const [macroString, setMacroString] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    props.macros.forEach(element => {
      const {carbs, fat, protein} = element;
      setMacroString(
        'Carbs: ' + carbs + 'g | Fat: ' + fat + 'g | Protein: ' + protein + 'g',
      );
    });
    setMacroString(
      currentMacroString => currentMacroString + '\nType: ' + props.type,
    );
  }, []);

  const handlePress = () => {
    console.log("Pressed" + macroString);
        navigate("/ingredient/" + (props.index+1))


  }

  return (
    <View>
      <ListItem
        key={props.index}
        title={props.name}
        secondaryText={macroString}
        onPress={handlePress}
      />
    </View>
  );
};