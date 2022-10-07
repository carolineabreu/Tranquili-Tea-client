import { Card } from "../../Carrinho/components/Card.js";
import { useEffect, useState } from "react";
import { api } from "../../../../api/api.js";

export function ProductList() {
  const [tea, setTea] = useState([]);

  useEffect(() => {
    async function fetchTea() {
      try {
        const response = await api.get(`/tea/all`);
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
        <Card>
          {tea.map((currentTea) => {
            console.log(currentTea);
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
        </Card>
      </div>

      {/* <Card
        teaId="1"
        teaTitle="Erva Cidreira"
        teaDescription="só é gostoso mesmo"
        teaImg="https://t2.uc.ltmcdn.com/pt/posts/8/3/3/como_plantar_capim_santo_20338_600_square.jpg"
      />
      <Card
        teaId="2"
        teaTitle="Erva doce"
        teaDescription="só é gostoso mesmo"
        teaImg="https://www.eusemfronteiras.com.br/wp-content/uploads/2017/07/lemon-5240181_1920-810x540.jpg"
      />
      <Card
        teaId="3"
        teaTitle="Capim santo"
        teaDescription="nem é bom"
        teaImg="https://t2.uc.ltmcdn.com/pt/posts/8/3/3/como_plantar_capim_santo_20338_600_square.jpg"
      />
      <Card
        teaId="4"
        teaTitle="Boldo"
        teaDescription="pro estomago e ressaca"
        teaImg="https://www.eusemfronteiras.com.br/wp-content/uploads/2017/07/lemon-5240181_1920-810x540.jpg"
      />
    </> */}
    </>
  );
}
