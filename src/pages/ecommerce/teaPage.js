import { useEffect } from "react";
import React from "react";
import { Comment } from "./reviews.js";

export function TeaCard() {
  useEffect(() => {
    async function fetchTeas() {
      try {
        const response = await axios.get("https://ironrest.herokuapp.com/...");

        setTeas([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTeas();
  }, []);

  <div className="TeaPage">
    <div className="TeaInfo">
      {Tea.map((currentTea) => {
        return (
          <div className="CurrentTea">
            <p>{`/${currentTea._id}`}</p>
            <h1>{currentTea.name}</h1>
            <img
              src={currentTea.image}
              alt={currentTea.name}
              id="currentTea.image"
            />
            <p>{currentTea.description}</p>
            <p>{currentTea.description}</p>
            <p>{currentTea.description}</p>
            <p>{currentTea.description}</p>
            <p>{currentTea.description}</p>
            <p>{currentTea.description}</p>
            <p>{currentTea.price}</p>
          </div>
        );
      })}
      <Comment />
    </div>
    ;
  </div>;
}
