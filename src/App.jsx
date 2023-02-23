import { useState, useEffect } from 'react'
import CharacterComponent from './Characters'
import Nav from './Nav'

function App() {
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    fetch('https://api.disneyapi.dev/characters?page=43')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      setCharacters(data.data)
    })
  }, [])

  console.log(characters)

  return (
    <div className='App'>
      <Nav />
      <div className='character-component'>
        {characters.map((character) => {
          return <CharacterComponent key={[0]._id} {...character}></CharacterComponent>
        })}
      </div>
    </div>
  )
}

export default App
