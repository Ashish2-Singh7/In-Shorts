import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import NewsContext from '../Context/Con-News/NewsContext'
import SingleNews from '../Single News/SingleNews'
import cross from '../image/cross.png'

const Search = () => {

    const { articles, ScreenMode } = useContext(NewsContext)

    const [searchResults, setSearchResults] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [currentNews, setCurrentNews] = useState();

    const handleModal = (n)=>{
        setModalVisible(true)
        setCurrentNews(n)
    }

    const handleSearch = (text) => {
        if (!text) {
            setSearchResults([]);
            return;
        }
        setSearchResults(articles.filter((query) => query.title.includes(text)))
    }

    return (
        <View style={{ width: "100%", position: "relative" }}>
            <TextInput style={{
                ...styles.search,
                backgroundColor: ScreenMode ? "#696969" : "black",
                color: ScreenMode ? "#FFF" : "white"
            }}
                onChangeText={(text) => { handleSearch(text) }}
                placeholder="Search For News"
                placeholderTextColor={ ScreenMode ? "#fff" : "white"}
            />

            <View style={styles.searchResults}>
                {searchResults.slice(0, 5).map((n) => (
                    <TouchableOpacity
                        key={n.title}
                        activeOpacity={0.7}
                        onPress={()=>{handleModal(n)}}
                    >
                        <Text
                            style={{
                                ...styles.singleResults,
                                backgroundColor: "black",
                                color: "#FFF"
                            }}
                        >
                            {n.title}

                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Modal 
            animationType='slide'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() =>{
                setModalVisible(!modalVisible)
            }}
            >
                <TouchableOpacity
                onPress={()=>{setModalVisible(!modalVisible) }}
                style={{
                    position: "absolute",
                    zIndex: 2,
                    right: 0,
                    margin: 20
                }}
                >
                    <Image source={cross} style={{height: 70, width: 100, marginRight: -30}} />
                </TouchableOpacity>
                <View style={{height: "100%", transform: [{scaleY: -1}]}}>
                <SingleNews  item={currentNews} />
                </View>

            </Modal>

        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    search: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 30,
        marginVertical: 20,
        borderRadius: 10,
        fontSize: 15,
        marginBottom: 15
    },
    searchResults: {
        position: 'absolute',
        zIndex: 1,
        top: 50
    },
    singleResults:{
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 0.5,
        shadowColor: "black",
        elevation: 5
    }
})