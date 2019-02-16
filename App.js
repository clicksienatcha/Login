import React from "react";
import { createStackNavigator } from 'react-navigation';
import HomePage from "./pages/home.page";


const App = createStackNavigator({
  Home: { screen: HomePage },

});


export default App;