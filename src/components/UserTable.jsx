import React from "react";
import PropTypes from "prop-types";

import { Table, Input } from "semantic-ui-react";
import "./UserTable.scss";

const UserTable = ({ userData, handleInputChange }) => (
  <div className="flex user-table">
    <Input placeholder="Search..." onChange={handleInputChange} />
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Username</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Age</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {userData.map(user => (
          <Table.Row key={user.email}>
            <Table.Cell>{user.username}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>{user.age}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </div>
);

UserTable.propTypes = {
  userData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default UserTable;
