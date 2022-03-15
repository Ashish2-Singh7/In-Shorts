import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { useContext, useEffect } from 'react'
import Home from './components/Home/Home'
import NewsStateContext from './components/Context/Con-News/NewsStateContext'
import NewsContext from './components/Context/Con-News/NewsContext'

function App () {
  const { ScreenMode } = useContext(NewsContext);

  return (
      <View style={{ ...styles.container, backgroundColor: ScreenMode ? "#FFF" : "#282C35" }}>
        <Home />
      </View>
  )
}
// #282C35


export default ()=>{
  return(
  <NewsStateContext>
    <App />
  </NewsStateContext>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})