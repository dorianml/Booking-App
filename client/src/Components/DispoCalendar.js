import * as React from 'react';
import { Link } from "react-router-dom";

const dispoCalendar = () => {

    const [calendar, setCalendar] = useState([[]])

    fetch(`http://localhost:5000/rooms/${roomId}`)
    .then((response) => {
        console.log('API CONNECTED')
        return response.json()
    })
    .then((result) =>{  
        setCalendar(result)
        console.log('SET API UPDATE')
        return result
    })

  useEffect(() => {
    dispoCalendar()
  }, [calendar])

    return (
        <div>
            {calendar.map((dispo) => {
                <div>
                    
                </div>
            })}
        </div>
    )
}