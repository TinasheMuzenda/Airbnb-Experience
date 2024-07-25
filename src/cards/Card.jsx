import "./Card.css";
import Star from "../assets/images/Star 1.png";
import Image1 from "../assets/images/image 12.jpg"
import Bike from "../assets/images/mountain-bike 1.jpg"
import Wedding from "../assets/images/wedding-photography 1.png"
import John from "../assets/images/john-rodenn-castillo-XzUAEcZ7dDg-unsplash.jpg"

const Cards = () => {

   const cardsCont = [
     {
       title: "5.0 (6)-USA",
       image: Image1,
       body: "ONLINE",
       text: "From $136/",
       author: "Life lessons Kate Zaferes",
       id: 1,
     },
     {
       title: "5.0 (6)-USA",
       image: Wedding,
       body: "SOLD OUT",
       text: "From $136/",
       author: "Learn wedding photography",
       id: 2,
     },
     {
       title: "5.0 (6)-USA",
       image: Bike,
       body: "ONLINE",
       text: "From $136/",
       author: "Group mountain biking",
       id: 3,
     },
     {
       title: "5.0 (6)-USA",
       image: John,
       text: "From $136/",
       body: "ONLINE",
       author: "Life lessons Kate Zaferes",
       id: 3,
     },
   ];


  return (
    <>
      <div className="cardList">
        {cardsCont.map((card) => (
          <div className="lookout" key={card.id}>
            <button className="online">{card.body}</button>
            <img className="img" src={card.image} alt="img" />
            <p className="title">
              <img className="star" src={Star} alt="" />
              {card.title}
            </p>
            <p>{card.author}</p>
            <p>
              <span>{card.text}person</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
