
import React, {useEffect, useState} from 'react'

function UseFetch(url) {
    const abortCont =  AbortController();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
       setTimeout(() => {
        fetch(url, {signal:abortCont.signal}).then(res=>{
        if(!res.ok){
            throw Error("Could not feth data.")
        }
        return res.json();
        }).then(data=>{
            setData(data);
            setLoading(false);
        }).catch(err=>{
            if(err.name === 'AbortError' ){
                console.log('Abort Error');
            }
            else{
            setLoading(false);
            setError(err.message);
            }
        })
           
       }, 1000);
       return ()=> abortCont.abort();
    }, [url])
   return {data, error, loading};
}

export default UseFetch
