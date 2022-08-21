import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/authOperation';
import { ContactsList } from '../../components/ContactsList/ContactsList';
import { PhoneBookForm } from '../../components/PhoneBookForm/PhoneBookForm';
import { ContactsFilter } from '../../components/ContactsFilter/ContactsFilter';

export const ContactsPage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button type="button" onClick={() => dispatch(userLogout())}>
        Log Out
      </button>
      <h1>Contacts</h1>
      <ContactsList />
      <PhoneBookForm />
      <ContactsFilter />
    </div>
  );
};
