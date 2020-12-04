import { usePaginatedQuery } from 'react-query'

import PageLayout from '../components/PageLayout'
import Posts from '../components/Posts'

import usePageQuery from '../hooks/usePageQuery'

import { fetchData } from '../helpers/utils'

function UserPage() {
  const { pageQuery } = usePageQuery()

  const { isLoading, error, data } = usePaginatedQuery(
    ['postsData', pageQuery.page],
    () => fetchData('https://gorest.co.in/public-api/posts', pageQuery)
  )

  if (error) return 'An error has occurred: ' + error.message

  return (
    <PageLayout title="Post Page">
      {isLoading && <div>Loading...</div>}
      {!isLoading && <Posts posts={data} />}
    </PageLayout>
  )
}

export default UserPage
