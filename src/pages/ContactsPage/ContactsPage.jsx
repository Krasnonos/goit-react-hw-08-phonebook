import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/authOperation';
import { ContactsList } from '../../components/ContactsList/ContactsList';
import { PhoneBookForm } from '../../components/PhoneBookForm/PhoneBookForm';
import { ContactsFilter } from '../../components/ContactsFilter/ContactsFilter';
import { NavBtn, Tittle } from './ContactsPage.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <NavBtn type="button" onClick={() => dispatch(userLogout())}>
        Log Out
      </NavBtn>
      <Tittle>Contacts</Tittle>
      <PhoneBookForm />
      <ContactsFilter />
      <ContactsList />
    </div>
  );
};

export default ContactsPage;
