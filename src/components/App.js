import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import style from './App.module.css';

function App() {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  const addNewContact = ({ name, number }) => {
    if (name.length === 0) {
      return;
    }

    if (contacts.some(contact => contact.name === name)) {
      return alert('This contact already exists');
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts([newContact, ...contacts]);
  };

  const deleteContact = e => {
    const deletedContactId = e.currentTarget.value;

    setContacts(contacts.filter(contact => contact.id !== deletedContactId));
  };

  useEffect(() => {
    const parsedLocalStorageContacts = JSON.parse(
      localStorage.getItem('contacts')
    );

    if (parsedLocalStorageContacts) {
      setContacts(parsedLocalStorageContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const normalizedFilter = filter.toLocaleLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter)
  );

  return (
    <div className={style.container}>
      <div className={style.menu}>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={addNewContact} />
        <Filter
          filterValue={filter}
          onChangeFilter={e => setFilter(e.currentTarget.value)}
        />
      </div>

      <div className={style.contacts}>
        <h2>Contacts</h2>
        <ContactList
          contacts={visibleContacts}
          filterValue={filter}
          onDeleteContact={deleteContact}
        />
      </div>
    </div>
  );
}

export default App;
