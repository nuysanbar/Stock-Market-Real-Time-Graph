import axios from 'axios';
import {useState} from 'react';
import "./index.css";
import Home from './Home.jsx';
import Graph from './graph.jsx';
const App =()=>{
    const [equities,setEquities]=useState([]);
    const [equity,setEquity]=useState("");
    const [svgv,setSvgv]=useState("");
    const fixed=30;
    const findValues=(obj,type)=>{
      let nums=[];
      var values=Object.values(obj);
      values.forEach((item)=>{
        nums.push(parseFloat(item[`2. ${type}`]))
      })
      var svgVariable="";
      svgVariable = `M${fixed} ${500-nums[0]}`
      for(let i=1; i<nums.length; i++){
      svgVariable+= ` L${fixed+7*i} ${500-nums[i]}`
      setSvgv(svgVariable);
    }
   const findSvgVariable=(nums)=>{
    
   }}
    const addEquity=()=>{
      setEquities([...equities,equity])
      setEquity('');
    }
    const drawGraph=async (eachEquity)=>{
      console.log(eachEquity);
      const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {
          interval: '5min',
          function: 'TIME_SERIES_DAILY_ADJUSTED',
          symbol: eachEquity,
          datatype: 'json',
          output_size: 'compact'
        },
        headers: {
          'X-RapidAPI-Key': '21b80da699mshd4bc6f20998e8d7p1344b5jsnca16b9cdd521',
          'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
      };
      await axios.request(options).then(function (response) {
       findValues(response.data["Time Series (Daily)"],"high");
      }).catch(function (error) {
        console.error(error);
      });
    }
    return (
        <div className="main">
          <Home setEquity={setEquity}  equities={equities} addEquity={addEquity} drawGraph={drawGraph}/>
          {svgv && <Graph svgVariable={svgv} color={'red'}/>}
        </div>
    )
}
export default App;

// [`${Object.keys(response.data["Time Series (Daily)"])[0]}`]