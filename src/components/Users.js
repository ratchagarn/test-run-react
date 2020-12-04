import TableList from './TableList'

function Users({ usersData }) {
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

  return <TableList dataSource={usersData} columns={columns} rowKey="id" />
}

export default Users
