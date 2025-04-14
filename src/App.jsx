import { Fragment } from 'react'
import Image from './components/image'
import Button from './components/button'

function App() {
  return (
    <Fragment>
      <Image />
      <h1>Vite + React</h1>
      <div className='card'>
        <Button />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </Fragment>
  )
}

export default App
