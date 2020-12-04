import { useQuery } from 'react-query'

import PageLayout from '../components/PageLayout'
import Posts from '../components/Posts'

function UserPage() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://gorest.co.in/public-api/posts').then((res) => res.json())
  )

  if (error) return 'An error has occurred: ' + error.message

  return (
    <PageLayout title="Post Page">
      {isLoading && <div>Loading...</div>}
      {!isLoading && <Posts postsData={data.data} />}
    </PageLayout>
  )
}

export default UserPage
