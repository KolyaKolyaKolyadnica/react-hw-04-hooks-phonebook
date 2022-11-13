import PropTypes from 'prop-types';

import style from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
  const contactsListItems = contacts.map(contact => {
    return (
      <li key={contact.id} className={style.listItem}>
        <p className={style.contact}>
          {contact.name}: {contact.number}
        </p>

        <button value={contact.id} onClick={onDeleteContact}>
          Delete
        </button>
      </li>
    );
  });

  return (
    <>
      {contacts.length === 0 ? (
        <p>No contacts yet</p>
      ) : (
        <ul className={style.list}>{contactsListItems}</ul>
      )}
    </>
  );
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func,
};
