import { useEffect, useState } from "react";
import { api } from "../../../../api/api.js";
import { useParams } from "react-router-dom";

export function ProductPage() {
  const [tea, setTea] = useState({});
  const { id } = useParams();

  //   useEffect(() => {
  //     async function fetchTea() {
  //       const response = await api.get("/tea/${teaId}");
  //     }
  //     setTea(response.data);
  //   }, []);

  useEffect(() => {
    async function fetchTea() {
      try {
        const response = await api.get(`tea/${id}`);
        setTea(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTea();
  }, []);

  return (
    <>
      <div>
        {tea.map((currentTea) => {
          return (
            <div key={currentTea.id}>
              <h1>{currentTea.name}</h1>
              <p>{currentTea.price}</p>
              <button>Adicionar ao carrinho</button>
              <button>Ver produto</button>
              <div>
                <img
                  src={currentTea.image}
                  alt="Tea"
                  style={{ width: "150px", height: "150px" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
