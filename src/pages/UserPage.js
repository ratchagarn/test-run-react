import { usePaginatedQuery } from 'react-query'

import PageLayout from '../components/PageLayout'
import Users from '../components/Users'

import usePageQuery from '../hooks/usePageQuery'

function UserPage() {
  const {
    pageQuery: { page },
  } = usePageQuery()

  let url = 'https://gorest.co.in/public-api/users'

  if (/\d/.test(page)) {
    url += '?page=' + page
  }

  const { isLoading, error, data } = usePaginatedQuery(
    ['usersData', page],
    () => fetch(url).then((res) => res.json())
  )

  if (error) return 'An error has occurred: ' + error.message

  return (
    <PageLayout title="User Page">
      {isLoading && <div>Loading...</div>}
      {!isLoading && <Users users={data} />}
    </PageLayout>
  )
}

export default UserPage
