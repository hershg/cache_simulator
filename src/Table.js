import React, { Component } from 'react';
import { Button } from 'react-bulma-components/full';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <Button
            renderAs="a"
            onClick={() => props.removeCharacter(index)}
            color="danger"
            size="small"
            rounded
            outlined
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { charData, removeChar } = this.props;

    return (
      <table>
        <TableHeader />
        <TableBody characterData={charData} removeCharacter={removeChar} />
      </table>
    );
  }
}

export default Table;
