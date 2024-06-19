
import './Joke.scss'
import { JokeData } from '../types/Alltypes'
import { ratingFun } from '../utils/utilities'
const Joke = (data:JokeData)=>{
    
    return(
    <div key={data.id} className='Joke'>
       <h3 className='id'> Id: {data.id}</h3>
       <p className='data'> Desc: {data.joke}</p>
       <p className='rating'> Rating: {ratingFun(data.rating)}</p> 

    </div>
    )
}
export default Joke