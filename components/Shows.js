import React, {useState,useEffect} from 'react';
import Link from 'next/link';

const Shows = () => {
  const [count,setCount]= useState(0)
  const [shows, setShows] = useState ([]);

useEffect(()=>{
    let url = "https://api.tvmaze.com/schedule"
    fetch (url) .then (async res =>{
      let data = await res.json()
    //   console.log (data); 
    setShows (data); 
    }) 
},[])
  
  
    return (
    <div className='shows'>
        <input/>

        {shows.map((item,index)=><div key={index}>
           <Link href={'/show/'+item.show.id}><h2>{item.show.name}</h2></Link> 
        </div>)}

        
    </div>
  )
}

export default Shows