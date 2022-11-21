import { useState } from 'react';
import PropTypes from 'prop-types';

import style from './ContactForm.module.css';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const submitForm = e => {
    e.preventDefault();

    onSubmit({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={submitForm} className={style.form}>
        <p className={style.text}>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => setName(e.currentTarget.value)}
          value={name}
          className={style.input}
        />

        <p className={style.text}>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={e => setNumber(e.currentTarget.value)}
          value={number}
          className={style.input}
        />

        <button type="submit" className={style.btn}>
          Add contact
        </button>
      </form>
    </>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
