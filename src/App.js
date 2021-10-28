import React, { Component } from 'react';
import Form from "./components/Form/Form"
import Filter from './components/Filter/Filter';
import ContactList from "./components/ContactList/ContactList"
import initialContacts from "./components/initialContacts.json"


import "./base.css"
import shortId from 'shortid';


class App extends Component {
  state = {
    contacts: initialContacts,
    filter: ''
  }
  addContact = ({ name, number }) => {
    if (this.state.contacts.some(elm => elm.name === name)) {
      console.log(alert(`${name} is already in contacts`));
      return;
    }
    const contact = {
      id: shortId.generate(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };
  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)
    ,);
  };


  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };


  render() {
    const getFilteredContacts = this.getFilteredContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={getFilteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    )
  }
}

export default App;
