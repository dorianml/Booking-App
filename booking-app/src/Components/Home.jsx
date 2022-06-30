import React from "react";

const Home = () => {

    const [rooms, setRooms] = useState([])

    getRooms = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log('API CONNECTED')
            return response.json()
        })
        .then((result) =>{  
            setArticles(result)
            console.log('SET API UPDATE')
            return result
        })
    }

    useEffect(() => {
      getRooms()
        }, [])
    return (

    )
}