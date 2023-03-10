import PropTypes from 'prop-types';
import { FilterBox, FilterInput } from './FilterStyled';
import { FormLabel } from '../ContactForm/ContactFormStyled';


const Filter = ({ filter, onFilter }) => {
  return (
    <FilterBox>
      <FormLabel htmlFor="filter">Find contacts by name</FormLabel>
      <div>
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={onFilter}
        />
      </div>
    </FilterBox>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
export default Filter;
