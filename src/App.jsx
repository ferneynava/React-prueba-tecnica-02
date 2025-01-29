import { useEffect, useState } from 'react'
import './App.css'

const URLCatFact = 'https://catfact.ninja/fact'
const GIPHY_API_KEY = 'VnDfI1492Jz9u1tOyz4SLYJZ2xTU0jB4'

function App () {
  const [catfact, setCatFact] = useState('')
  const [giphy, setGiphy] = useState('')

  useEffect(() => {
    fetch(URLCatFact)
      .then(response => response.json())
      .then(data => {
        const stringcatfact = data.fact
        setCatFact(stringcatfact.split(' ').slice(0, 3).join(' '))
      })
  }, [])

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${catfact}&api_key=${GIPHY_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        const gif = data.data[0].images.original.url
        setGiphy(gif)
      })
  }, [catfact])

  return (
    <div className='App'>
      <h1>{catfact}</h1>
      <img src={giphy} alt={catfact} />
    </div>

  )
}

export default App
