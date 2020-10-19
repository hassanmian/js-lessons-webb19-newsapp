import React from 'react'

export default function NewsItem(props) {
  return (
    <div className="col-md-6 bg-light">
      <h2>{props.newsItem.title}</h2>
      <img className="img-fluid" src={props.newsItem.urlToImage} />
      <p><small>{props.newsItem.description}</small></p>
      <p>{props.newsItem.content}</p>
      <a className="btn btn-secondary btn-block" href={props.newsItem.url}>Go to article</a>
      <hr/>
    </div>
  )
}