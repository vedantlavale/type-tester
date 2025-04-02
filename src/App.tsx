import {faker} from '@faker-js/faker'
const words = faker.lorem.words(30)

function App() {
  return (
    <>
     <GeneratedWords words={words}/>
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

export default App
