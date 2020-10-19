import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import NewsList from './components/NewsList';

function App() {
  const [newsList, setNewsList] = useState(null)

  function fetchNewsList() {
    fetch("https://mock-data-api.firebaseio.com/news/articles.json")
    .then(res => res.json())
    .then(data => {
      setNewsList(data)
    })
  }

  useEffect( () => {
    fetchNewsList()
  }, [])

  return (
    <div className="container">
      {newsList && <NewsList newsList={newsList} /> }
    </div>
  );
}

export default App;
