import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  isDublicate(name) {
    const result = this.state.contacts.find(contact => contact.name === name);
    return Boolean(result);
  }
  addNewContact = ({ name, number }) => {
    if (this.isDublicate(name)) {
      alert(`${name} is already in contacts.`);
      return false;
    }
    this.setState(prevState => {
      const { contacts } = prevState;

      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return { contacts: [...contacts, newContact] };
    });
    return true;
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts() {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter
          stateFilter={this.state.filter}
          onFilterChange={this.changeFilter}
        />
        <ContactList
          contacts={this.getVisibleContacts()}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
