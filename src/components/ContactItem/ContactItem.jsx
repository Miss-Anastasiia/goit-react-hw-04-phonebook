import propTypes from 'prop-types';
import { Item, DelButton } from './ContactItemStyle';

const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
     <Item>
      <span>{name}:</span>
      <span>{number}</span>
      <DelButton type="button" onClick={() => deleteContact(id)}>
        Delete
      </DelButton>
    </Item>
  );
};

ContactItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  deleteContact: propTypes.func.isRequired,
};

export default ContactItem;
