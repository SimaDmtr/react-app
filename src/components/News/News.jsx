import React from 'react';
import s from './News.module.css';
import NewsItem from "./NewsItems/NewsItem";


const News = (props) => {
    let state = props.store.getState();

    let newsElements = state.newsPage.newsItems.map(newsItem => <NewsItem id={newsItem.id} created={newsItem.created} content={newsItem.content}/>)
        return(
        <div className={s.news_wrap}>
            {newsElements}
        </div>
    )
}

export default News;