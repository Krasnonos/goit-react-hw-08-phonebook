import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { removeContact } from '../../redux/contactsOperation';
import { ChangeContact } from '../ChangeContact/ChangeContact';

export const ContactsListItem = ({ contact }) => {
  const [isChangeContact, setIsChangeContact] = useState(false);
  const dispatch = useDispatch();

  const toggleShowChangeMenu = () => {
    setIsChangeContact(!isChangeContact);
  };

  const { id, name, number } = contact;
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={toggleShowChangeMenu}>
        change
      </button>
      <button type="button" onClick={() => dispatch(removeContact(id))}>
        delate
      </button>
      {isChangeContact && (
        <ChangeContact
          nameForChange={name}
          numberForChange={number}
          id={id}
          setIsChangeContact={setIsChangeContact}
          toggleShowChangeMenu={toggleShowChangeMenu}
        />
      )}
    </li>
  );
};
