import { useState } from "react";

export function searchBar(Teas) {
  const [search, setSearch] = useState("");
  return (
    <div className={style.page}>
      <div className={style.searchBar}>
        <input
          className={style.search}
          placeholder="Enter Tea"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={style.container}>
        {Teas.Teas.filter((countries) => {
          if (search === "") {
            return Teas;
          } else if (Teas.name.toLowerCase().includes(search.toLowerCase())) {
            return Teas;
          }
        }).map((currentTea) => {
          return (
            <div className={style.card}>
              <div className={style.cardItems}>
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
