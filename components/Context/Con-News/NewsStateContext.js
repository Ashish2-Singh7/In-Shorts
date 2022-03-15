import React, { useEffect, useState } from "react";
import GetPresentNews from "./NewsContext";

const NewsState = (props) => {
    const [category, setCategory] = useState('general')
    const [index, setIndex] = useState(1)
    const [articles, setArticles] = useState([])
    const [ScreenMode, setScreenMode] = useState(false)
    let country = "in"

    const getNews = async () => {
        const data = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=a49ff287e30b423fb08db0b6a48655bc`);
        const parsedData = await data.json()
        setArticles(parsedData.articles)
    }

    const fetchApi = async ()=>{
        getNews()
        setIndex(1)
    }

    useEffect(() => {
        fetchApi()
    }, [category])
    

    const reloadNews = () => {
        setArticles([])
        getNews()
    }


    return (
        <GetPresentNews.Provider value={{ articles, getNews, reloadNews, setCategory, setIndex, index, setScreenMode, ScreenMode }}>
            {props.children}
        </GetPresentNews.Provider>
    )
}

export default NewsState