import ContactItem from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) =>  (
      <ContactItem
        key={id}
        name={name}
        id={id}
        number={number}
        deleteContact={deleteContact} />
      )
    )}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default ContactList