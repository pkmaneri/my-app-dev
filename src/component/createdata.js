import axios from 'axios';
import { useEffect, useState } from 'react';

const CreateData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Using GET request to fetch users
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CreateData;
