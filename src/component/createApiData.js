import axios from 'axios';
import { useState } from 'react';

const CreateApiData = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const res = await axios.post('https://jsonplaceholder.typicode.com/users', {
  //       name,
  //       email,
  //     });
  //     setResponse(res.data);
  //   } catch (err) {
  //     setError('An error occurred while posting data');
  //     console.error(err);
  //   }
  // };
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/users',{name,email}).then((res)=>{
      setResponse(res.data)
    }).catch((err)=>{
      setError('An error occurred while posting data')
      console.log(err)
    })
  }
  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default CreateApiData;
