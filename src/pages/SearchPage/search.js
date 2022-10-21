// import { useState } from "react";
import { SearchList } from "../../components/SearchList/index";


export function SearchPage() {

  //   const [inputText, setInputText] = useState("");

  //   const updateInput = async (input) => {
  //     const filtered = inputText.filter(list => {
  //      return list.name.toLowerCase().includes(input.toLowerCase())
  //     })
   
  //  }
 
    return (
  
        <div className="main">
          <h1 className= "flex justify-content">Tea Search</h1>
      <SearchList searchList={SearchList}/>
      </div>
    );
}
    