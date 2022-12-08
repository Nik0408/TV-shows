import React, {useState,useEffect} from 'react';
import Link from 'next/link';

const Shows = () => {
  const [count,setCount]= useState(0);
  const [shows, setShows] = useState ([]);
  const[serachText, setSearchText]=useState("");

useEffect(()=>{
    let url = serachText.length==0 ? "https://api.tvmaze.com/schedule": " https://api.tvmaze.com/search/shows?q=" + serachText;
    fetch (url) .then (async res =>{
      let data = await res.json()
    //   console.log (data); 
    setShows (data); 
    }) 
},[serachText])

const changeText =(event)=>{
  let s = event.target.value;
  setSearchText(s);
  console.log(serachText);

}
  
  
    return (
    <div className='shows'>
        <input value={serachText} onChange={(event) => changeText(event)}  />

        {shows.map((item,index)=><div key={index}>
           <Link href={'/show/'+item.show.id}><h2>{item.show.name}</h2></Link> 
        </div>)}

        
    </div>
  )
}

export default Shows