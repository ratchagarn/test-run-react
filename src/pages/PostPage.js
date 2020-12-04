import { usePaginatedQuery } from 'react-query'

import PageLayout from '../components/PageLayout'
import Posts from '../components/Posts'

import usePageQuery from '../hooks/usePageQuery'

function UserPage() {
  const {
    pageQuery: { page },
  } = usePageQuery()

  let url = 'https://gorest.co.in/public-api/posts'

  if (/\d/.test(page)) {
    url += '?page=' + page
  }

  const { isLoading, error, data } = usePaginatedQuery(
    ['postsData', page],
    () => fetch(url).then((res) => res.json())
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
