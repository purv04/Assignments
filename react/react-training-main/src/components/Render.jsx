import { data } from 'autoprefixer';
import React from 'react'
import { useEffect ,useState } from 'react'

function Render() {
    const [count ,setCount]=useState(0);
    const [username,setUsername]=useState('');
    const [countryData,setCountryData] = useState([])
    const [countryName , setCountryName]=useState('');


    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all').then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data)
            setCountryData(data)
        })



        console.log("this will run only one time initially when component mount ")
    },[])
    // this is empty array []this represents empty array and it will only run once 

    useEffect(()=>{console.log("this will run every time")})
    //no parameters are passed so it will every time 

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/name/${countryName}`).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data);
        })
        },[countryName])
        // console.log("this will run only when count change ")},[count])
    // this will run the when there will be change in the count 
      
     console.log(countryName)


  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <br />
        <p>username:{username}</p>
        <input type="text" onChange={(e)=>{setUsername(e.target.value)}}/>
         
         <h1>new</h1>
        <select  onChange={(e)=>{setCountryName(e.target.value)}}>
            <option value="">Select country</option>
            {countryData.map((data)=>(
                <option value={data.name.common}>{data.name.common}</option>
            ))}
        </select>

        <h1>Render Component</h1>


    </div>
  )
}

export default Render