import { View, Text, Image,StyleSheet } from "react-native";

export const renderIngredient = ({item}) => {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>{item.text}</Text>
          <Image
            style={{width: 200, height: 200}}
            source={{uri: item.image}}></Image>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    marginBottom: 25,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '70%',
  },

  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

