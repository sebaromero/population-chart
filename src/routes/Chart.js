import { useState, useEffect } from 'react'
import { BarChart } from '../components/BarChart'
import { Error } from '../components/Error'
import { Spinner } from '../components/Spinner'

export const Chart = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/regionalbloc/eu")
    .then(response => response.json())
    .then((country) => {
      setIsLoaded(true)
      setItems(country)
    },
    (error) => {
      setIsLoaded(true)
      setError(error)
    })
  }, [])

  if (error) {
    return <Error alertMessage="Unable to connect to API" />
  } else if (!isLoaded) {
    return <Spinner />  
  } else {
    return <BarChart items={items} />
  }
}