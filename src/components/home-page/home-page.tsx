import React, { useEffect } from 'react';
import { useAppSelector, useAction } from "../../hooks";
import "./home-page.css"

const HomePage = () => {


  const {fetchNews} = useAction();
  const { news} = useAppSelector((state) => state.news);

  console.log(news);
let currentNews = Object.values(news).slice(Math.max(Object.values(news).length - 5, 1))
  // console.log(currentNews);
  
  useEffect(() => {
    fetchNews()
  }, []);


  return (
    <>
      <div className="home-container">
        <h2>Feed</h2>
        {
          Object.values(currentNews).map((e)=>(
            <div className="home-feed__block" key={e.id}>
            <p className="home-feed__text"><span className="mentor">{e.object_repr}</span> </p>
            <p className="home-feed__time">{e.action_time}</p>
          </div>
          ))
        }
      </div>
    </>
  );
};

export default HomePage;