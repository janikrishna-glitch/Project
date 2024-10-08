import React from "react";

const review = [
  {
    img: "data:image/png;base64,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",
    img1: "https://codingcirculate-restaurant-design.on.fleek.co/static/media/pic-1.b105fe43e8bf62808d9f.png",
  },
  {
    img: "data:image/png;base64,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",
    img1: "https://codingcirculate-restaurant-design.on.fleek.co/static/media/pic-1.b105fe43e8bf62808d9f.png",
  },
  {
    img: "data:image/png;base64,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",
    img1: "https://codingcirculate-restaurant-design.on.fleek.co/static/media/pic-1.b105fe43e8bf62808d9f.png",
  }
];

const Review = () => {
  return (
    <div>
      <section className="review" id="review">
        <h1 className="heading">
          customer's <span>review</span>
        </h1>

        <div className="box-container">
          {review.map((item, index) => (
            <div className="box" key={index}>
              <img
                src={item.img}
                alt="quote"
                className="quote"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nulla sit libero nemo fuga sequi nobis? Necessitatibus aut
                laborum, nisi quas eaque laudantium consequuntur iste ex aliquam
                minus vel? Nemo.
              </p>
              <img
                src={item.img1}
                className="user"
                alt="user"
              />
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Review;
