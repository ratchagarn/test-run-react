import dayjs from 'dayjs'

import TableList from './TableList'

function Posts({ posts }) {
  const columns = [
    {
      key: 'title',
      title: 'Title',
      render: ({ title }) => title,
    },
    {
      key: 'createdAt',
      title: 'Created At',
      width: 240,
      render: ({ created_at }) =>
        dayjs(created_at).format('YYYY-MM-DD HH:mm:ss'),
    },
  ]

  return (
    <TableList
      dataSource={posts.data}
      columns={columns}
      pagination={posts.meta.pagination}
    />
  )
}

export default Posts
