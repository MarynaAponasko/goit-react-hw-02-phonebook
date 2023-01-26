import { Component } from 'react';
import PropTypes from 'prop-types';
import s from '../ContactForm/ContactForm.module.css';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handlerSubmit = e => {
    e.preventDefault();
    const resultSubmit = this.props.onSubmit(this.state);
    if (resultSubmit) {
      this.reset();
    }
  };

  handlerChangeState = e => {
    const { name } = e.currentTarget;
    this.setState({
      [name]: e.currentTarget.value,
    });
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    const labelNameId = nanoid();
    const labelNumberId = nanoid();

    return (
      <form onSubmit={this.handlerSubmit} className={s.form}>
        <label htmlFor={labelNameId} className={s.label}>
          Name{' '}
        </label>
        <input
          id={labelNameId}
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handlerChangeState}
        />
        <label htmlFor={labelNumberId} className={s.label}>
          Number{' '}
        </label>
        <input
          id={labelNumberId}
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={this.handlerChangeState}
        />

        <button type="submit" className={s.formButton}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
