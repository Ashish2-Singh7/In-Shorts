import { StyleSheet, Text, View, Dimensions, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native'
import React, { useContext } from 'react'
import NewsContext from '../Context/Con-News/NewsContext'
import arr2 from '../image/arr2.png'

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const SingleNews = ({ item }) => {
    let alernateImg = "https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-3328225-2809510.png"
    const { ScreenMode } = useContext(NewsContext)
    return (
        <View style={{
            height: windowHeight,
            width: windowWidth,
            transform: [{ scaleY: -1 }]
        }}>
            <Image
                source={{ uri: `${!item.urlToImage ? alernateImg : item.urlToImage}` }}
                style={{ height: "45%", resizeMode: "cover", width: windowWidth }}
            />
            <View style={{ ...styles.description, backgroundColor: ScreenMode ? "#696969" : "#2a2a2a" }}>
                <Text style={{ ...styles.title, color: "white" }}>{item.title}</Text>
                <Text style={{ ...styles.content, color: "white" }}>{item.description==true ? item.description : 'Not Much Information Available'}</Text>
                <Text style={{ color: "white" }}>
                    Short By
                    <Text>  {item.author==true ? item.author : "unknown"}</Text>
                </Text>
                <ImageBackground
                    blurRadius={30}
                    style={styles.footer}
                    source={{ uri: item.urlToImage }}
                >
                    <TouchableOpacity onPress={()=> Linking.openURL(item.url)}>
                        <Text style={{ fontSize: 15, color: "white" }}>{item?.content?.slice(0, 45)}...</Text>
                        <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>Read More</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: "900",
        paddingBottom: 10,
    },
    content: {
        fontSize: 18,
        paddingBottom: 10
    },
    description: {
        padding: 15,
        flex: 1,
    },
    footer: {
        height: 80,
        width: windowWidth,
        position: "absolute",
        bottom: 0,
        backgroundColor: "#d7be69",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
})

export default SingleNews
