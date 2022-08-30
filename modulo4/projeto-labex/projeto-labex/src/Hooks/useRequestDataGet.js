import { useState, useEffect } from 'react';
import axios from 'axios';

export const useRequestDataGet = (url) => {
  const [data, setData] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setIsLoading(true)
    axios.get(url)
      .then((response) => {
        setIsLoading(false)
        setData(response.data)
      }).catch((error) => {
        setIsLoading(false)
        setError(error)
        console.log(error.response.data)
      })
  }, [url])
  return [data, isLoading, error]
}