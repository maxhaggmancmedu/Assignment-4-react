import { useState, useEffect } from 'react'
import CharacterComponent from './Characters'
import Nav from './Nav'
import fetchQL from './fetchQL';

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    fetchQL(`
    {
      characters(page: ${page}) {
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
      
      setCharacters(data.data.characters.items)
    })
  }, [page])

  return (
    <div className='App'>
      <Nav />
      <div className="pagination">
            <button onClick={() => setPage(Math.max(1, page - 1))}>Prev</button>
            <div className="page-container">
                <p>Page</p>
                <p className='page-number'>{page}</p>
            </div>
            <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
      <div className='character-component'>
        {characters.map((character) => {
          return <CharacterComponent key={character._id} {...character}></CharacterComponent>
        })}
      </div>
    </div>
  )
}

export default App
