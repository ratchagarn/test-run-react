import TableList from './TableList'

function Users({ users }) {
  const columns = [
    {
      key: 'name',
      title: 'Name',
      render: ({ name }) => name,
    },
    {
      key: 'email',
      title: 'Email',
      render: ({ email }) => email,
    },
    {
      key: 'gender',
      title: 'Gender',
      width: 200,
      render: ({ gender }) => gender,
    },
  ]

  return (
    <TableList
      dataSource={users.data}
      columns={columns}
      pagination={users.meta.pagination}
    />
  )
}

export default Users
