import { useState, useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import queryString from 'query-string'

function usePageQuery() {
  const history = useHistory()

  const [pageQuery, setPageQuery] = useState(
    queryString.parse(history.location.search)
  )

  useEffect(() => {
    const unlisten = history.listen((location) => {
      const query = queryString.parse(location.search)

      setPageQuery(query)
    })

    return () => unlisten()
  }, [history])

  const updatePageStateAndURL = useCallback(
    (query) => {
      history.replace('?' + queryString.stringify(query))
      setPageQuery(query)
    },
    [history]
  )

  const handleSetPageQuery = useCallback(
    (query, clearEmpty = true) => {
      const newQuery = {
        ...queryString.parse(history.location.search),
        ...query,
      }

      if (clearEmpty) {
        for (const key in newQuery) {
          if (newQuery[key] === '') {
            delete newQuery[key]
          }
        }
      }

      updatePageStateAndURL(newQuery)
    },
    [history, updatePageStateAndURL]
  )

  return {
    pageQuery,
    setPageQuery: handleSetPageQuery,
    resetPageQuery: updatePageStateAndURL,
  }
}

export default usePageQuery
