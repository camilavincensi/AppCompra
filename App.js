import {StyleSheet, View, StatusBar, SafeAreaView} from "react-native";
import React from "react";
import Index from "./src/telas/Cesta/index";
import {useFonts, Montserrat_400Regular, Montserrat_700Bold} from "@expo-google-fonts/montserrat";

import AppLoading from "expo-app-loading";


import mock from "./src/mocks/cesta"

export default function App() {

    const [fonteCarregada] = useFonts({
        "MontserratRegular": Montserrat_400Regular,
        "MontserratBold": Montserrat_700Bold,
    });
    if(!fonteCarregada){
        return <AppLoading />
    }
  return (
    <SafeAreaView style={{flex:1}} >
       <StatusBar />
        <Index {...mock} />
    </SafeAreaView>
  );
}


