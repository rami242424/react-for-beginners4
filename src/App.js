import React from "react";

import PropTypes from "prop-types";

function Food({ name, image, rating }){
  return (
    <div>
      <h2>i love { name }</h2>
      <h3> 평점 { rating } / 10</h3>
      <img src={ image } alt= { name } />
    </div>
  );
}


Food.propTypes ={
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
}


const foodILike = [
  {
    id:1,
    // rating: 9,
  name: "Kimchi",
  image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
  },
  {
    id:2,
    rating: 9.5,
  name: "bulgogi",
  image: "https://www.google.com/search?q=%EB%B6%88%EA%B3%A0%EA%B8%B0&rlz=1C5CHFA_enKR902KR902&sxsrf=ALeKk02ziUIXmsNvR7TuYKh1cpJGpdpH8g:1593509047151&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi-p87lm6nqAhVbUd4KHVSWBBUQ_AUoAXoECBgQAw&biw=1440&bih=701&dpr=2#imgrc=kjZoAmvHGo-KfM"
  },
  {
    id:3,
    rating: 7,
  name: "kimbap",
  image: "https://www.google.com/search?q=%EA%B9%80%EB%B0%A5&rlz=1C5CHFA_enKR902KR902&sxsrf=ALeKk03dn_nrK6M5JlKKfD5krm8w3qTmGQ:1593509069629&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjqn6rwm6nqAhXDQN4KHYLUA4EQ_AUoAXoECBgQAw&biw=1440&bih=701#imgrc=Xz3xQoYZw3bqEM"
  },
  {
    id:4,
    rating: 10,
  name: "samgyetang",
  image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
  }
]  

function App() {
  return (
    <div>
      {foodILike.map((item) => (
        <Food key={item.id}name={item.name} image={item.image} rating={item.rating} />
      ))}
    </div>
  )
}



export default App;