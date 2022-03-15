import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Carousel from 'react-native-snap-carousel'
import SingleNews from '../Single News/SingleNews'
import NewsContext from '../Context/Con-News/NewsContext'

const GenNews = () => {
  const news = useContext(NewsContext)
  const { articles, getNews } = news

  useEffect(() => {
    getNews()
  }, [])


  const windowHeight = Dimensions.get('window').height

  const [activeIndex, setActiveIndex] = useState()

  return (
    <View style={styles.NewsCarousel}>
      {articles.length > 0 ? <Carousel
          layout={'stack'}
          data={articles}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={({ item }) => {
            return <SingleNews item={item} />
          }}
          onSnapToItem={index => setActiveIndex(index)}
        /> : 
        <Text style={{fontSize: 75,transform: [{scaleY: -1}], justifyContent: "center", alignItems: "center", flex: 1, marginVertical: 300, color: "#FFF", marginHorizontal: 25 }}>Loading...</Text>
        }
    </View>
  )
}

const styles = StyleSheet.create({
  NewsCarousel: {
    flex: 1,
    backgroundColor: 'black',
    transform: [{ scaleY: -1 }]
  }
})

export default GenNews
