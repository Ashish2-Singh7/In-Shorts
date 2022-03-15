import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useContext, useState } from 'react'
import { SceneMap, TabView } from 'react-native-tab-view';
import Discover from '../Discover/Discover';
import GenNews from '../GenNews/GenNews';
import TopNavigation from '../TopNavigation/TopNavigation';
import NoteContext from '../Context/Con-News/NewsContext'

export default function TabViewExample() {
    const PageIndex = useContext(NoteContext)
    const { setIndex, index } = PageIndex
    const layout = useWindowDimensions();

    const [routes] = useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ]);


    const renderScene = SceneMap({
        first: Discover,
        second: GenNews,
    });

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={()=> <TopNavigation index={index} setIndex={setIndex}/>}
        />
    );
}