import { api } from "../../api/api"
import { useState, useEffect } from "react"


export function SearchBar () {

const [items, setItems] = useState([]);
  const [searchParam] = useState(["name, category"]);
  const [q, setQ] = useState(" ");
  const [filteredParam, setFilteredParam] = useState (["All"]);

  useEffect(() => {
    async function fetchTeaDetail() {
      try {
        const response = await api.get(`/tea/all`);
        setQ(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTeaDetail();
  }, []);

const data = Object.values(items);

function search(items) {
    return items.filter((item) => {
        if(item.name === filteredParam) {
return searchParam.some((newItem) => {
    return (
        item[newItem]
        .toString()
        .toLowerCase()
        .indexOf(q.toLowerCase())> -1 );
});
} else if (filteredParam === "All") {
    return searchParam.some((newItem) => {
        return ( 
            item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(q.toLowerCase()) > -1
        );
    });
}        
    });
} 
}
