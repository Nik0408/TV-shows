import React, {useState,useEffect}  from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';

const showPage = () => {
    const [show , setShow] =useState ();
    const router = useRouter();
    const {id}= router.query;
    const [error,setError]= useState(false);
    // console.log (url)

    useEffect (() =>{
        let url ="https://api.tvmaze.com/shows/" + id;
        fetch (url).then (async res=>{
         let data = await res.jason()
                setShow (data);
                // console.log(data);
        }).catch(err=> setError (true))
        // console.log (url);
 
    },[])

    if (error){
        return (<div>Page Not Found</div>)
    }
  return (
    <div className='container'>
     <Header />
     {show &&

     <div>
        <h1>{show.name}</h1>
        <div dangerouslySetInnerHTML={{__html:show.summery}}></div>
     </div>

     }

     <Footer name ="DeveloperView" />

    </div>
  )
}

export default [showPage]