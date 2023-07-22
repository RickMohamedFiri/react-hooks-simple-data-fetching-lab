import React from 'react';
import { useState, useEffect } from "react";

const App = () => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoaded(false);
        console.log(data);
      });
  }, []);

  // if the data hasn't been loaded, show a loading indicator
  if (isLoaded) return <h3>Loading...</h3>;

  return (data.map(dog => <img src={dog.img}></img>));
}
 
export default App;