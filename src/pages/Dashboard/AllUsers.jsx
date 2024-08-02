import { RiAdminLine } from "react-icons/ri";
import useUsers from "../../hooks/useUsers";
import { CiUser } from "react-icons/ci";

const AllUsers = () => {
  const { users } = useUsers();
  return (
    <>
      <h2>All users</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="h-12 w-12 rounded-full">
                        <img src={user.photoURL} alt="User" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user.displayName}</td>
                <td>
                  {user.isAdmin ? (
                    <span className="text-3xl text-purple-800">
                      <RiAdminLine />
                    </span>
                  ) : (
                    <span>
                      <CiUser className="text-3xl text-purple-800" />
                    </span>
                  )}
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllUsers;
