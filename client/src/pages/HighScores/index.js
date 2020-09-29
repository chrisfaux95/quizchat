import React from 'react';
import { Table } from 'reactstrap';

function HighScores(props) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>First Name</th>
          <th>Username</th>
          <th>Score</th>
          </tr>
      </thead>
      <tbody>
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