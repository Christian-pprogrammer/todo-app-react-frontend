import { useEffect, useState } from "react";

const useFetch = (url, method, payload) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState();
    useEffect(async()=>{
        if(method == 'POST') {
            try{
                const res = await fetch(`http://localhost:7000/${url}`, {
                    method: 'POST',
                    body: payload
                })
                const data = await res.json();
                setData(data);
            }catch(err) {
                setError(err.message);
            }
            setLoading(false);
        }
    }, [url, method, payload]);
    return [data, error, loading];
}
export default useFetch;