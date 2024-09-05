import React, { useState } from 'react';
import axios from 'axios';
import './Fetchnews.css';
function Ftechnews() {
  const [news, setNews] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const handleStartDateChange = (e) => {
    console.log('Start Date:', e.target.value);
    setStartDate(e.target.value);
};
const handleEndDateChange=(e)=>{
  console.log('end date',e.target.value);
  setEndDate(e.target.value);
}

const fetchNews = () => {
  if (!startDate || !endDate) {
    alert('Please enter both start date and end date.');
    return;
  }
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&from=${startDate}&to=${endDate}&sortBy=popularity&apiKey=5a2d2b638e40405ab00d35ceaf43ab19`;

  axios.get(apiUrl)
    .then((response) => {
      console.log(response);
      setNews(response.data.articles);
      setStartDate('')
      setEndDate('')
    })
    .catch((error) => {
      console.error('Error fetching news:', error);
    });

  };

  return (
    <>
    <div className="container my-3">
        <div className="row" id="datesdiv">
          <div className="col-4" id="start">
            <label>From:</label>
            <input
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </div>
          <div className="col-4" id="end">
            <label>To:</label>
            <input
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
            />
          </div>
        </div>
      </div>
      
        <div className="col-4"id="fetchbutton">
          <button className='btn btn-primary' onClick={fetchNews}>Fetch News</button>
        </div>
      
      <div className="container">
        <div className="row">
          {news.map((value, index) => (
            <div key={index} className="col-4">
              <div className="card" style={{ width: '18rem' }}>
                {value.urlToImage!=='https://removed.com'?<img src={value.urlToImage} className="card-img-top" alt="..." />:<p>No Image</p>}
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
export default Ftechnews;