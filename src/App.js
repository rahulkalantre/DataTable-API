import { useEffect, useState } from 'react';
import './App.css';
import UserData from './UserData';

const API = " https://jsonplaceholder.typicode.com/todos/ "

function App() {

  <h1> Data Table With API </h1>

  const [users, setUsers] = useState([]);

  

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
        if(data.length > 0) {
          setUsers(data);
        }
      console.log(data);
    }
    catch (e) {
      console.log(e);
    }
  }


  useEffect( () => {
    fetchUsers(API);
  }, []);


  return (
    <>
      {/* <h1> React Table </h1> */}
      <table>
        <thead>
          <tr>
            <th> User ID </th>
            <th> Id </th>
            <th> Title </th>
            <th> Completed </th>

          </tr>
        </thead>
      </table>

      <tbody>
        <UserData users = {users} />
      </tbody>
    </>
  );
}

export default App;
