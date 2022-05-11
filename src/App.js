import React , {useState}from 'react'
import Counter from './components/Counter/Counter'
import Text from './components/Text/Text';


export default function App() {
  // const [Like, setLike] = useState(0)
  // const [Value,setValue] = useState('Hello Argen')

  // const Dec = () => {
  //   setLike(Like -1)
  // }

  // const Inc = () => {
  //   setLike(Like +1)
  // }

  // const Res = () => {
  //   setLike(0)
  // }

  return (
  
    <div className="App">
    {/* <h3>{Like}</h3>
    <h1>{Value}</h1>
    <button onClick={Dec}>+</button>
    <button onClick={Inc} >-</button>
    <button onClick={Res} >res</button>
    <input type='text'
    value={Value} 
    onChange = {event => setValue(event.target.value)}/> */}
    <Counter/>
    <Text/>
    </div>
    
    
    
  );
}

// let a () => {
//   let b =document.createElement('div')
//   b.innerHTML = test
//   b.className = App
// }


