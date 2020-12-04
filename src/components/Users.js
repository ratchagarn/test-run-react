function Users({ usersData }) {
  return (
    <div>
      {usersData.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default Users
