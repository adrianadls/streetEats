import React from "react";
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import Testimonials from "./components/Testimonials";
import ReviewCard from "./components/ReviewCard";
import reviews from "./review_data";
import "./App.css";
console.log(reviews[2].summary);
function App() {
  return (
    <div className="App">
      <Navbar />
      <Splash />
      <Testimonials
        userTestimonial="This is the best website ever. 
      I use it for all my meals."
      />
      <div className="container">
        <div className="row">
          {" "}
          <ReviewCard
            name={reviews[0].name}
            stars={reviews[0].stars}
            summary={reviews[0].summary}
            date={reviews[0].date}
          />
          <ReviewCard
            name={reviews[1].name}
            stars={reviews[1].stars}
            summary={reviews[1].summary}
            date={reviews[1].date}
          />
          <ReviewCard
            name={reviews[2].name}
            stars={reviews[2].stars}
            summary={reviews[2].summary}
            date={reviews[2].date}
          />
          <ReviewCard
            name={reviews[3].name}
            stars={reviews[3].stars}
            summary={reviews[3].summary}
            date={reviews[3].date}
          />
          <ReviewCard
            name={reviews[4].name}
            stars={reviews[4].stars}
            summary={reviews[4].summary}
            date={reviews[4].date}
          />
          <ReviewCard
            name={reviews[5].name}
            stars={reviews[5].stars}
            summary={reviews[5].summary}
            date={reviews[5].date}
          />
          let ReviewCard = reviews.map(reviews => return(`${reviews.stars} $
          {reviews.name} ${reviews.summary}${reviews.date}`) )
        </div>
      </div>
    </div>
  );
}

export default App;
