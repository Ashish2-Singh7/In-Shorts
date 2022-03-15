import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import reload from '../image/reload.png'
import MODE from '../image/mode2.png'
import NewsContext from '../Context/Con-News/NewsContext'


const TopNavigation = ({ index, setIndex }) => {
    const newsRe = useContext(NewsContext)
    const { getNews, reloadNews, ScreenMode, setScreenMode } = newsRe

    const pageChange = () => {
        if (index == 1) {
            setIndex(0)
        }
        else {
            setIndex(1)
        }
    }
    return (
        <View style={{...styles.wholeTopNav, backgroundColor: ScreenMode ? "#FFF" : "#282C35"}}>
            <View style={styles.nextPageVisit}>
                <TouchableOpacity onPress={pageChange} style={styles.PageChangerButton}>
                    <View style={styles.textPage}>
                        <Text style={{...styles.textTopNav, color: `${ScreenMode ?  "#000" : "#FFF"}`}}>{index === 1 ? "Discover" : "News"}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={[styles.textTopNav, {
                fontWeight: "900",
                borderBottomWidth: 7,
                borderBottomColor: "#2293f4",
                borderRadius: 10,
                color: `${ScreenMode ? "#000" : "#FFF" }`
            }]}>All News</Text>
            <View>
                <TouchableOpacity style={styles.PageChangerButton} onPress={()=>{ {index==1 ?  reloadNews() : setScreenMode(!ScreenMode)}}}>
                    <Image source={index == 1 ? reload : MODE} style={{ height: 30, resizeMode: 'contain' }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    wholeTopNav: {
        flexDirection: 'row-reverse',
        justifyContent: "space-around",
        height: 50,
        alignItems: 'center'
    },
    textTopNav: {
        color: "#FFF",
        fontSize: 20,
    },
    PageChangerButton: {
        padding: 5, height: "100%", width: 100, justifyContent: "center", alignItems: "center"
    },
})

export default TopNavigation
