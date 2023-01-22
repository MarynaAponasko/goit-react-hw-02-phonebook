import PropTypes from 'prop-types';
import s from '../ContactList.module.css';

const ContactItem = ({ contact: { id, name, number }, deleteContact }) => {
  return (
    <li key={id} className={s.item}>
      <p className={s.text}>
        {name}: {number}
      </p>

      <button
        className={s.button}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  // поясніть, будь ласка, чому вибиває помилку при такому записі пропсу contact
  // contact: PropTypes.objectOf(
  //   PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     name: PropTypes.string.isRequired,
  //     number: PropTypes.string.isRequired,
  //   }).isRequired
  // ).isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
