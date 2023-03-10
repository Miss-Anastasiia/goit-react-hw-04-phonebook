import ContactItem from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { List } from './ContactListStyled';

const ContactList = ({ contacts, deleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        name={name}
        id={id}
        number={number}
        deleteContact={deleteContact}
      />
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default ContactList;
