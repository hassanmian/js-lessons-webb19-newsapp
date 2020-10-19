import React from 'react'
import NewsItem from './NewsItem'

export default function NewsList(props) {
  return (
    <div className="row">
      {props.newsList.map((newsItem, index) => {
        return <NewsItem key={index} newsItem={newsItem} />
      })}
      
    </div>
  )
}
