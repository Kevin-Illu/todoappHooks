import {useState, useEffect, useRef} from "react"


export const useFetch = (url) => {
    
    const [state, setState] = useState({ data: null, loading: true, error: null })
    const isMounted = useRef(true)

    useEffect(() => {
        
        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect(() => {

        setState({ data: null, loading: true, error: null })

        fetch(url)
            .then( response => response.json() )
            .then( data => {

                if (isMounted.current){
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                }
            })

    }, [url])

    return state;

}
