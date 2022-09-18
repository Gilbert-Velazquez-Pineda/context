import { useEffect, useState } from "react"

function SwapiContainer() {

    const [chars, setChars] = useState([])

    useEffect(() => {
        getChars()
        
    }, [])

    const getChars = () => {
        const URL = 'https://swapi.dev/api/people/'
        fetch ( URL)
         .then (response =>  response.json() )
         .then (data => {
            console.log(data);
            setChars (data.results)
        })
    }

    return (
        <>
            <div>SwApi</div>
            {chars.map (char => <li key={char.url}> {char.name} </li> )}
        </>
    )
}
  export default SwapiContainer