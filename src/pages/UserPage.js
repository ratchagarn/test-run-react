import { usePaginatedQuery } from 'react-query'

import PageLayout from '../components/PageLayout'
import Users from '../components/Users'

import usePageQuery from '../hooks/usePageQuery'

import { fetchData } from '../helpers/utils'

function UserPage() {
  const { pageQuery } = usePageQuery()

  const { isLoading, error, data } = usePaginatedQuery(
    ['usersData', pageQuery.page],
    () => fetchData('https://gorest.co.in/public-api/users', pageQuery)
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
