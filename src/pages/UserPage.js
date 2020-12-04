import { useQuery } from 'react-query'

import PageLayout from '../components/PageLayout'
import Users from '../components/Users'

function UserPage() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://gorest.co.in/public-api/users').then((res) => res.json())
  )

  if (error) return 'An error has occurred: ' + error.message

  return (
    <PageLayout title="User Page">
      {isLoading && <div>Loading...</div>}
      {!isLoading && <Users usersData={data.data} />}
    </PageLayout>
  )
}

export default UserPage
