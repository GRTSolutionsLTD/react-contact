import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import ReactTable from "react-table";
import { filter, includes } from 'lodash';
import { NavLink } from "react-router-dom";

import "react-table/react-table.css";
import "containers/ContactList/contactList.scss"

export function ContactList({contacts}) {
  const [contactFilter, setContactFilter] = useState("");
  // useEffect(() => {
  // getContactList();
  // });
  const [listItems, setListItems] = useState(contacts);
  const activeStyle = { color: "#F15B2A" };
  const handleChange = event => {
    const filterValue = event.target.value;
    setContactFilter(filterValue);
    const filteredList = filter(contacts, contact => includes(contact.name, filterValue));
    setListItems(filteredList);
  }
  return (
    <div>
      <Helmet>
        <title>ContactList</title>
        <meta name="description" content="Description of ContactList" />
      </Helmet>
      <div>
        <input
          type="text"
          value={contactFilter}
          onChange={handleChange}
        />
        <ReactTable
          data={listItems}
          columns={[
            {
              Header: "Name",
              accessor: "name"
            },
            {
              Header: "Birthday",
              accessor: "birthday"
            },
            {
              Header: "Options",
              Cell: (data) => {
                const to = `/viewContact/${data.original._id}`;
                return (<NavLink to={to} activeStyle={activeStyle} exact>
                  View Contact
                </NavLink>);
              }

            }
          ]}
          defaultPageSize={5}
          className="-striped -highlight container"
          showPaginationBottom
          striped bordered hover
        />
        <br />
      </div>
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,

};

const mapStateToProps = state => ({
  contacts: state.global.contacts
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(ContactList);