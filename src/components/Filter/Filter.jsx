import PropTypes from 'prop-types';
import s from '../Filter/Filter.module.css';
import { nanoid } from 'nanoid';

const Filter = ({ stateFilter, onFilterChange }) => {
  const labelFilterId = nanoid();
  return (
    <>
      <label className={s.label} htmlFor={labelFilterId}>
        Find contact by name
      </label>
      <input
        className={s.label}
        id={labelFilterId}
        type="text"
        value={stateFilter}
        onChange={onFilterChange}
      />
    </>
  );
};

Filter.propTypes = {
  stateFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
