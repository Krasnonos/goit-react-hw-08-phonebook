import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contactsOperation';
import { ContactsListItem } from '../ContactsListItem/ContactsListItem';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <ul>
      {contacts.map(contact => (
        <ContactsListItem contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};
