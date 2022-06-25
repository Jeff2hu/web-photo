import React , { useState,useEffect }from "react";
import Nav from "./Nav";
import HomePage from "./Pages/HomePage";
import Footer from "./Footer";
import Search from "./Pages/Search";
import About from "./Pages/About";
import { Routes, Route } from 'react-router-dom';
import "./style/all.css";

function App() {

  const [data,setData] = useState(null);
  const [homeData,setHomeData] = useState(null);
  const [input,setInput] = useState("");
  const [page,setPage] = useState(1);
  const [currentSearch,setCurrentSearch] = useState("");
  const auth = "563492ad6f91700001000001e82a5baeb64f4684b0284ea3d0716f4f";
  // const auth = "563492ad6f91700001000001cfc30b8004374555a7971c53b295ebfd";
  const initSearch = `https://api.pexels.com/v1/curated?page=${page}&per_page=12`;
  const inputSearch = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=12&page=${page}`

  const search = async(url) => {
    setPage(2);
    const dataFetch = await fetch(url,{
      method:"Get",
      headers:{
        Accept: "application/json",
        Authorization : auth,
      },
    })
    let parsedData = await dataFetch.json();
    if(parsedData.status===400){
      return;
    }else{
      setData(parsedData.photos);
      setHomeData(parsedData.photos);
    }
  }

  const moreSearch = async() => {
    setPage(page+1);
    let newURL;
    if(input===""){
      newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=12`;
    }else{
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=12&page=${page}`
    }
    const dataFetch = await fetch(newURL,{
      method:"Get",
      headers:{
        Accept: "application/json",
        Authorization : auth,
      },
    })
    let parsedData = await dataFetch.json();
    setData(data.concat(parsedData.photos));
  }

  useEffect(()=>{
    search(initSearch);
  },[]);

  useEffect(()=>{
    if(currentSearch===""){
      search(initSearch);
    }else{
      search(inputSearch);
    }
  },[currentSearch]);


  return (
    <>
      <Nav setInput={setInput} search={()=>{
        input === ""? alert("Please confirm the input")
                    : setCurrentSearch(input);
                      search(inputSearch)}}/>
      <Routes>
        <Route path='/' element={<HomePage data={homeData} input={setCurrentSearch}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search data={data} search={moreSearch}/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
