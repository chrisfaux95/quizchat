import React from 'react';
import { Table } from 'reactstrap';
import './highscores.css'

function HighScores(props) {
  return (
    <Table id="highscores-tb">
      <thead id="tr-1">
        <tr>
          <th>Rank</th>
          <th>First Name</th>
          <th>Username</th>
          <th>Score</th>
          </tr>
      </thead>
      <tbody id="tbody">
        <tr>
          <th scope="row">1</th>
          <td>Example</td>
          <td>Example</td>
          <td>Example</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default HighScores;