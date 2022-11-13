import PropTypes from 'prop-types';
import style from './Filter.module.css';

function Filter({ filterValue, onChangeFilter }) {
  return (
    <div className={style.container}>
      <h3 className={style.text}>Find contacts by name:</h3>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChangeFilter}
        value={filterValue}
        className={style.input}
      />
    </div>
  );
}

export default Filter;

Filter.propTypes = {
  filterValue: PropTypes.string,
  onChangeFilter: PropTypes.func,
};
