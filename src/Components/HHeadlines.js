import React, { useState } from 'react';
import axios from 'axios';

function HHeadlines() {
const [news, setNews] = useState([]);
const topheadlines = () => {
  
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&apiKey=5a2d2b638e40405ab00d35ceaf43ab19`;

  axios.get(apiUrl)
    .then((response) => {
      console.log(response);
      setNews(response.data.articles);
     
    })
    .catch((error) => {
      console.error('Error fetching news:', error);
    });

  };

  return (
    <>     
        <div className="col-4"id="fetchbutton">
          <button className='btn btn-primary' onClick={topheadlines}>Top Headlines</button>
        </div>
      
      <div className="container">
        <div className="row">
          {news.map((value, index) => (
            <div key={index} className="col-4">
              <div className="card" style={{ width: '18rem' }}>
                <img src={value.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{value.title}</h5>
                  <p className="card-text">{value.description}</p>
                  <a href={value.url} className="btn btn-primary">Know more</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default HHeadlines;