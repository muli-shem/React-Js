
import './App.scss'
import Joke from './components/joke'
import jokeData from './data/data.json'
import {JokeData} from './types/Alltypes'
function App() {


  return (
    <div className='Main'>
  {
    jokeData ?(
      jokeData.map((joke:JokeData)=> {
        return  (
        <Joke key={joke.id} id={joke.id} joke={joke.joke} rating={joke.rating} />
        )
      })
    ):( 
    "No data"
  )
}
    </div>
)
}

export default App
