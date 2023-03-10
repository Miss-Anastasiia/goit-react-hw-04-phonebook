import React,{ useState, useEffect } from 'react';
import  ContactForm from './ContactForm';
import  ContactList  from './ContactList';
import  Filter  from './Filter';
import { nanoid } from 'nanoid';
import { Container, TitlePhoneBook, TitleContacts } from './AppStyled';

export const App = () => {
  const [filter,setFilter ] = useState('');
  const [contacts,setContacts] = useState(() => {
    return(
    JSON.parse(window.localStorage.getItem('contact')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ])
  })

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);


  const onformSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    return setContacts(prevState => [contact, ...prevState]);
  }
  const onFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const onDeleteContact = id => {
   setContacts(state => state.filter(contact => contact.id !== id),
    );
  };

  const findContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
  <Container>
        <TitlePhoneBook>Phonebook</TitlePhoneBook>
        <ContactForm onSubmit={onformSubmit}  contacts={findContacts} />
        <TitleContacts>Contacts</TitleContacts>
         <Filter onFilter={onFilter} filter={filter}/>
      <ContactList
          contacts={findContacts}
          deleteContact={onDeleteContact}
        />
      </Container>
)
}

