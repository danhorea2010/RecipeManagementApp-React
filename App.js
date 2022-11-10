/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

 import type {Node} from 'react';
 
 import {store} from './actions/store';
 import {Provider} from 'react-redux';
 import RecipeList from './components/recipe.list';
 import {Button, Stack, Switch} from '@react-native-material/core';
 import {NativeRouter, Route, Link, Routes, useParams} from 'react-router-native';

 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Image,
   TouchableOpacity,
   Platform,
   Alert,
   Dimensions,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import {useState} from 'react';
 import WelcomeScreen from './screens/WelcomeScreen';
 import IngredientsList from './components/ingredients.list';
 import IngredientDetail from './components/ingredients.detail';
 
 export const App: () => Node = () => {
   return (
     // <WelcomeScreen />
     //<GoalListTest/>
 
     <SafeAreaView>
       <NativeRouter>
         <Provider store={store}>
           <Stack style={styles.sectionContainer}>
             <Link to="/">
               <Text style={styles.buttonText2}>Ingredient List</Text>
             </Link>
           </Stack>
           <View>
             <Routes>
               <Route path="/" element={<IngredientsList />} />
               <Route path={`/ingredient/:index`} index={true} element={<IngredientDetail/>} />
             </Routes>
           </View>
         </Provider>
       </NativeRouter>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
   container: {
     flex: 1,
     backgroundColor: '#fff',
     // alignItems: 'center',
     // justifyContent: 'center',
     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
   },
   buttonText1: {
     width: '40%',
     height: 30,
   },
   buttonText2: {
     width: '40%',
     height: 30,
   },
 });
 
 export default App;