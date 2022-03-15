import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { categories, sources } from '../Image Api/source'
import NoteContext from '../Context/Con-News/NewsContext'
import Search from '../Search/Search'


const Discover = () => {
  const setCat = useContext(NoteContext)
  const { setCategory, ScreenMode } = setCat
  return (
    <View>
      <Search />

      <Text style={{ ...styles.catTitle, color: `${ScreenMode ? "#000" : "#FFF"}` }}>Categories</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={(e) => {
          return <View style={styles.catCard}>
            <TouchableOpacity onPress={() => (setCategory(e.item.name))}>
              <Image source={{ uri: e.item.pic }} style={{ height: 100, width: 100 }} />
              <Text style={{ ...styles.catCardTitle, color: ScreenMode ? "#000" : "#FFF" }}>{e.item.name}</Text>
            </TouchableOpacity>
          </View>
        }}
      />


      <Text style={{ ...styles.catTitleSources, color: `${ScreenMode ? "#000" : "#FFF"}` }}>Sources</Text>
      <View style={styles.sources}>
        {sources.map((s) => (
          <TouchableOpacity
            key={s.id}
            style={styles.sourceContainer}
          >
            <Image source={{ uri: s.pic }} style={styles.sourceImage} />
          </TouchableOpacity>
        ))}
      </View>


      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#121212", marginHorizontal: 50, borderRadius: 20, padding: 2 }}>
        <Image source={{ uri: "https://cdn3d.iconscout.com/3d/premium/thumb/whatsapp-4118004-3410042.png" }} style={{ height: 50, width: 50 }} />
        <Text style={{ fontSize: 15, color: "#fff", marginLeft: 10 }}>Post Review on Whatsapp</Text>
      </View>
    </View>
  )
}

export default Discover

const styles = StyleSheet.create({
  catCardTitle: {
    alignSelf: "center",
    flexDirection: "row",
    color: "#FFF",
    fontSize: 20,
    fontWeight: "900"
  },
  catCard: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  catTitle: {
    fontSize: 20,
    alignSelf: 'flex-start',
    color: "#FFF",
    marginVertical: 15,
    marginHorizontal: 20,
    fontWeight: "900",
    borderBottomWidth: 7,
    paddingBottom: 5,
    borderBottomColor: "#2293f4",
    borderRadius: 10
  },
  catCardSource: {
    flexDirection: "row",
    justifyContent: 'space-around',
    paddingVertical: 15,
    height: 100,
  },
  sources: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
  sourceContainer: {
    height: 150,
    width: "40%",
    borderRadius: 10,
    margin: 15,
    backgroundColor: "#cc313d",
  },
  sourceImage: {
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
  catTitleSources: {
    fontSize: 20,
    alignSelf: 'flex-start',
    color: "#FFF",
    marginTop: 10,
    marginHorizontal: 20,
    fontWeight: "900",
    borderBottomWidth: 7,
    paddingBottom: 5,
    borderBottomColor: "#2293f4",
    borderRadius: 10
  }
})