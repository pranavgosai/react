import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MyCard = ({ card }) => {
  const [quantity, setQuantity] = useState(0);

  const handlePlusClick = () => {
    setQuantity(quantity + 1);
  };

  const handleMinusClick = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Card style={{ width: '18rem' }} className="box">
      <Card.Img variant="top" src={card.image} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.text}</Card.Text>
        
        <Button variant="outline-dark">Make Order</Button>
        <div style={{float:"right"}}>
          <Button variant="outline-dark" onClick={handleMinusClick}>-</Button>
          <span style={{ margin: '0 10px' }}>{quantity}</span>
          <Button variant="outline-dark" onClick={handlePlusClick}>+</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

const MoreDeets = () => {
  const cardInfo = [
    { image: "https://images5.alphacoders.com/108/1083453.jpg",
     title: "Margherita", 
     text: "The Classic Margherita Pizza: A Slice of Italian Tradition" },
    { image: "https://wallpaperaccess.com/full/826922.jpg",
     title: "Pepperoni", 
     text: "This article provides information on the history and origin of pepperoni." },
    { image: "http://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Wallpapers-Free-Download.jpg",
     title: "Hawaiian",
      text: "This article discusses the origins of Hawaiian pizza and the ongoing debate surrounding its combination of ham and pineapple toppings." },
    { image: "https://images7.alphacoders.com/596/thumb-1920-596343.jpg",
     title: "Meat Lovers",
      text: "This article provides a delicious recipe for Meat Lovers pizza, a pizza loaded with various types of meat toppings such as pepperoni, sausage, bacon, and ham." },
    { image: "https://wallpapercave.com/wp/wp7029371.jpg",
     title: "Veggie Supreme", 
     text: "This article provides a recipe for Veggie Supreme pizza, a vegetarian-friendly pizza loaded with a variety of colorful and flavorful vegetables." },
    { image: "https://free4kwallpapers.com/uploads/originals/2019/02/01/pizza--wallpaper.jpg",
     title: "Four Cheese",
      text: "This article provides a recipe for Four Cheese pizza, a mouthwatering pizza topped with a combination of four delicious cheeses." },
    { image: "http://blog.hdwallsource.com/wp-content/uploads/2015/01/food-wallpaper-5775-5940-hd-wallpapers.jpg",
     title: "Capricciosa",
      text: "This article explores the beauty of Capricciosa pizza, a classic Italian creation." },
    { image: "https://images4.alphacoders.com/104/thumb-1920-1046782.jpg", 
    title: "Mediterranean", 
    text: "This article provides a recipe for Mediterranean pizza, which takes inspiration from the vibrant flavors of the Mediterranean region." },
    { image: "https://images4.alphacoders.com/973/thumb-1920-973000.jpg",
     title: "Bacon and Onion", 
     text: "This recipe combines the smoky and savory flavors of bacon with the sweet and caramelized taste of onions to create a delicious pizza topping." },
    { image: "https://images8.alphacoders.com/101/1011433.jpg",
     title: "Pesto Chicken", 
     text: "This recipe combines the vibrant flavors of basil pesto, tender chicken, and melted cheese to create a delicious and satisfying pizza." },
  ];

  const renderCard = (card, index) => {
    return (
      <div className="col-lg-4" key={index}>
        <MyCard card={card} />
      </div>
    );
  };

  return (
    <div className="grid" style={{ display: "flex", flexWrap: "wrap", marginLeft: "90px", marginTop: "50px" }}>
      {cardInfo.map(renderCard)}
    </div>
  );
};

export default MoreDeets;
