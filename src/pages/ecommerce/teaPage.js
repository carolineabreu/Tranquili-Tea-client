import { useEffect, useState } from "react";
import React from "react";
import { Reviews } from "./reviews.js";
import { api } from "../../api/api.js";

export function Card() {
  const [Tea, setTeas] = useState("");

  useEffect(() => {
    async function fetchTeas() {
      try {
        const response = await await api.get("/tea/all");
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
            <p>{currentTea.category}</p>
            <p>{currentTea.origin}</p>
            <p>{currentTea.brew}</p>
            <p>{currentTea.temperature}</p>
            <p>{currentTea.caffeine}</p>
            <p>{currentTea.flavour}</p>
            <p>{currentTea.ingredients}</p>
            <p>{currentTea.price}</p>
          </div>
        );
      })}
      <Reviews />
    </div>
    ;
  </div>;
}
