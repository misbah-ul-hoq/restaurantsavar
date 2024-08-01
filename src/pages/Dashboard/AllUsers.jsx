import useUsers from "../../hooks/useUsers";

const AllUsers = () => {
  const { users } = useUsers();
  return (
    <div className="overflow-x-auto">
      <h2 className="text-center text-3xl font-bold">All users</h2>
      <table className="table w-full">
        <thead>
          <th>
            <td>Name</td>
            <td>Role</td>
            <td>Action</td>
          </th>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.displayName}</td>
              <td>{user.role}</td>
              <td>{}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
