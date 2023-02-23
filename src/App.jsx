import { useState, useEffect } from 'react'
import CharacterComponent from './Characters'
import Nav from './Nav'
import fetchQL from './fetchQL';

function App() {
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    fetchQL(`
    {
      characters(page: 43) {
        items {
          _id
          name
          imageUrl
        }
      }
    }
  `)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      setCharacters(data.data.characters.items)
    })
  }, [])

  console.log(characters)

  return (
    <div className='App'>
      <Nav />
      <div className='character-component'>
        {characters.map((character) => {
          return <CharacterComponent key={character._id} {...character}></CharacterComponent>
        })}
      </div>
    </div>
  )
}

export default App
