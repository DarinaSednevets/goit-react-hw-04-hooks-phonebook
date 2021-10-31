
import React, { useState } from 'react';
import Form from "./components/Form/Form"
import Filter from './components/Filter/Filter';
import ContactList from "./components/ContactList/ContactList"
import initialContacts from "./components/initialContacts.json"


import "./base.css"
import shortId from 'shortid';


function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    if (contacts.some(elm => elm.name === name)) {
      console.log(alert(`${name} is already in contacts`));
      return;
    }
    const contact = {
      id: shortId.generate(),
      name,
      number,
    };
    setContacts(prev => [contact, ...prev]);
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };
  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase()))
  };


  const deleteContact = contactId => {
    const contactsAfterDel = contacts.filter(contact => contact.id !== contactId);
    setContacts(contactsAfterDel);
  };


  return (
    <div className="container">
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getFilteredContacts()}
        deleteContact={deleteContact}
      />
    </div>
  )

}

export default App;
