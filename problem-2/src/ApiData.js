import React, { useState } from "react";
import axios from "axios";
import  "./App.css";

function ApiData() {
  const [posts, setPosts] = useState([]);
  const baseUrl = 'https://swapi.dev/api/people';

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const addItem = async (e) =>{
    e.preventDefault();
    const apiData = await axios.get(`${baseUrl}/${getRandomInt(70)}`);
    setPosts([apiData.data.name, ...posts]);
  }

  const deleteHandler = (index) =>{
    posts.splice(index, 1);
    setPosts([...posts]);
  };

  return (
    <>
    <button onClick={addItem}>Add Record</button>
    <table border='1'>
      <thead>
        <tr>
        <th>Name</th>
        </tr>
    </thead>
        <tbody>
        {
          posts.length > 0 && posts.map((post, index) => (
            <tr key={index}>
              <td>{post}</td>
              <td><button onClick={() => deleteHandler(index)}>Delete</button></td>
            </tr>
          ))
        }
        </tbody>
    </table>
    </>
  )

}
export default ApiData;