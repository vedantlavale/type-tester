import {faker} from '@faker-js/faker'
import RestartButton from './components/RestartButton.tsx'
import Results from './components/Results.tsx'
const words = faker.lorem.words(30)

function App() {
  return (
    <>
     <GeneratedWords words={words}/>
     <CountDownTimer timeleft={30}/>
     <RestartButton
      className= {"mx-auto mt-10 text-slate-500"}
     /> 
     <Results  className={"mx-auto mt-10 text-slate-500"}
      errors={0}
      accuracyPercentage={100}
      total={30}>
     </Results>
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
