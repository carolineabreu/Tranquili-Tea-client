import { useState } from "react";

export function searchBar({ teas }, { search }, { setSearch }) {
  return (
    <div className="Searchpage">
      <div className="searchBar">
        <input
          className="search"
          placeholder="Enter Tea"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="container">
        {teas.teas
          .filter((currentTea) => {
            if (search === "") {
              return currentTea;
            }
            currentTea.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((currentTea) => {
            return (
              <div className="card">
                <div className="cardItems">
                  <>
                    src={currentTea.images[0]}
                    label={currentTea.name}
                    path={`/ecommerce/${currentTea.id}`}
                  </>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
