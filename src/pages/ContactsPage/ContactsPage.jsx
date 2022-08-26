import { ContactsList } from '../../components/ContactsList/ContactsList';
import { PhoneBookForm } from '../../components/PhoneBookForm/PhoneBookForm';
import { ContactsFilter } from '../../components/ContactsFilter/ContactsFilter';
import { Tittle } from './ContactsPage.styled';

const ContactsPage = () => {
  return (
    <div>
      <Tittle>Contacts</Tittle>
      <PhoneBookForm />
      <ContactsFilter />
      <ContactsList />
    </div>
  );
};

export default ContactsPage;
