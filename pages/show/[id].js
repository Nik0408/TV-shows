import React, {useState,useEffect}  from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';

const ShowPage = () => {
    const [show , setShow] =useState ();
    const router = useRouter();
    const {id}= router.query;
    console.log (id);
    const [error,setError]= useState(false);
    // console.log (url)

    useEffect(()=>{
      let url = "https://api.tvmaze.com/shows/"+id;
      // console.log(url);
      fetch(url).then(async res=>{
          let data = await res.json();
          setShow(data);
          console.log(data);
      }).catch(err=>{})
  }, [id])

    if (error){
        return (<div>Page Not Found</div>)
    }
  return (
    <div className='container'>
     <Header />
     {show &&

     <div>
        <h1>{show.name}</h1>
        <div dangerouslySetInnerHTML={{__html:show.summary}}></div>
     </div>

     }

     <Footer name ="DeveloperView" />

    </div>
  )
}

export default ShowPage