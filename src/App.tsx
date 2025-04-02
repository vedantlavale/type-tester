import {faker} from '@faker-js/faker'
import RestartButton from './components/RestartButton.tsx'
const words = faker.lorem.words(30)

function App() {
  return (
    <>
     <GeneratedWords words={words}/>
     <CountDownTimer timeleft={30}/>
     <RestartButton
      className= {"mx-auto mt-10 text-slate-500"}
     /> 
    </>
  )
}

const GeneratedWords = ({words}: { words: string[] }) => {
  
  return(
    <>
    <div className="text-4xl text-center text-slate-500">{words}</div>
    </>
  )
}

const CountDownTimer = ({timeleft}:{timeleft:number})=>{
  return(
    <h2 className='text-primary-400 font-medium '>Time: {timeleft}</h2>
  )
}

export default App
