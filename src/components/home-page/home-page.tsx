import React from 'react';
import "./home-page.css"

const HomePage = () => {

  const data = [
    {
      mentor: "Азрет М.",
      info: "9 аудитория - до 18:00",
      time: "12:23",
    },
    {
      mentor: "Ренат А.",
      info: "18 аудитория - до 14:00",
      time: "11:30",
    },
    {
      mentor: "Анастасия Т.",
      info: "22 аудитория - до 21:00",
      time: "18:30",
    }
  ]

  return (
    <>
      <div className="home-container">
        <h2>Feed</h2>
        {
          data.map((feed_item, index) => (
            <div className="home-feed__block" key={index}>
              <p className="home-feed__text"><span className="mentor">{feed_item.mentor}</span>  {feed_item.info}</p>
              <p className="home-feed__time">{feed_item.time}</p>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default HomePage;