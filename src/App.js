
import { useState, useEffect } from "react";
import axios from 'axios';

export default function App() {
  const [cijfers, setCijfers] = useState([]);

  useEffect(() => {
    console.log('useEffect');
    axios.get('https://testcontainerbi2a2.calmmushroom-0deeca29.northeurope.azurecontainerapps.io/api/http_trigger')
      .then(response => {    
        setCijfers(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <table>
      <tbody>
      {cijfers.map((cijfer) => (
        <tr>
          <td>{cijfer.vak_omschrijving}</td>
          <td>{cijfer.cijfer}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}