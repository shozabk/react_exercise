import { CancelToken } from 'apisauce'
import { useCallback, useEffect, useState } from 'react'
import { House } from '../types/house.type'
import { api } from '../utils/api'

export const useHouses = () => {
  const [houses, setHouses] = useState<House[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getHouses = useCallback(
    async (source?: ReturnType<typeof CancelToken.source>) => {
      setLoading(true)
      const res = await api.get<House[]>(
        '/houses',
        {},
        { cancelToken: source?.token }
      )
      if (res.ok && res.data) {
        setHouses(res.data)
        setError(null)
      } else if (res.problem !== 'CANCEL_ERROR') {
        setError('There is an error while loading data')
      }
      setLoading(false)
    },
    []
  )

  useEffect(() => {
    const source = CancelToken.source()
    getHouses(source)

    return () => {
      source.cancel()
    }
  }, [getHouses])

  return { houses, loading, error, retry: getHouses }
}
