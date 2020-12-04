import dayjs from 'dayjs'

import TableList from './TableList'

function Posts({ postsData }) {
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

  return <TableList dataSource={postsData} columns={columns} rowKey="id" />
}

export default Posts
