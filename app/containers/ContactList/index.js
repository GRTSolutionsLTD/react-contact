import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ReactTable from "react-table";
// import "react-table/react-table.css";
import { makeSelectContactList } from 'containers/App/selectors';
import { filter, includes } from 'lodash';
import { NavLink } from "react-router-dom";
import "containers/ContactList/contactList.scss"

export function ContactList({ contactList }) {
  const [contactFilter, setContactFilter] = useState("");
  const [listItems, setListItems] = useState(contactList);
  // const activeStyle = { color: "#F15B2A" };


  const handleChange = event => {
    const filterValue = event.target.value;
    setContactFilter(filterValue);
    const filteredList = filter(contactList, contact => includes(contact.name, filterValue));
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
              Cell:
                <NavLink to="/contactFriends/5d35a6e4912582c23b684694" exact>
                  View Contact
                </NavLink>
            }
          ]}
          defaultPageSize={5}
          className="-striped -highlight"
          showPaginationBottom
          striped bordered hover
        />
        <br />
      </div>
      {/* <FormattedMessage {...messages.header} /> */}
    </div>
  );
}
// class ContactList extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   listItems=this.props.contactList;
//   state = {
//     contact: {
//       name: ""
//     }
//   };
//   handleChange = event => {
//     const contact = { ...this.state.contact, name: event.target.value }
//     this.setState({ contact: contact });
//   }
//   render() {
//     return (
//       <div>
//         <Helmet>
//           <title>ContactList</title>
//           <meta name="description" content="Description of ContactList" />
//         </Helmet>
//         <div>
//           {/* <input type="text"
//           value={this.state.contact.name}
//           onChange={this.handleChange}
//         /> */}
//           <ReactTable
//             data={listItems}
//             columns={[
//               {
//                 Header: "Name",
//                 accessor: "name"
//               },
//               {
//                 Header: "Birthday",
//                 accessor: "birthday"
//               }
//             ]}
//             defaultPageSize={5}
//             className="-striped -highlight"
//             showPaginationBottom
//           />
//           <br />
//         </div>
//         {/* <FormattedMessage {...messages.header} /> */}
//       </div>
//     );
//   }
// }

ContactList.propTypes = {
  contactList: PropTypes.array
};

const mapStateToProps = createStructuredSelector({
  contactList: makeSelectContactList(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(ContactList);
