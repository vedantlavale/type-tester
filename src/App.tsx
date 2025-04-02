import {faker} from '@faker-js/faker'

function App() {

const words = faker.lorem.words(30)

  return (
    <>
     <h1 className="text-primary-500">{words}</h1>
    </>
  )
}

export default App
