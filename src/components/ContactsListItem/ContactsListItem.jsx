import { removeContact } from '../../redux/contactsOperation';
import { useDispatch } from 'react-redux';

export const ContactsListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const { id, name, number } = contact;
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => dispatch(removeContact(id))}>
        delate
      </button>
    </li>
  );
};
