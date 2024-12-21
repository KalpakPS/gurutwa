import { useEffect, useState } from 'react'
import Loading from './components/Loading'


const App = () => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  })

  return (
    <div>
      <h1>Hello Gurutwa</h1>
      <Loading isLoading={isLoading}/>
    </div>
  )
}

export default App