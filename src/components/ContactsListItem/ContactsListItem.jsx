import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { removeContact } from '../../redux/contactsOperation';
import { ChangeContact } from '../ChangeContact/ChangeContact';
import { IoPersonCircle } from 'react-icons/io5';
import { GiRotaryPhone } from 'react-icons/gi';
import {
  Backdrop,
  Item,
  Layout,
  DescrWrap,
  Information,
  Text,
  BtnWrap,
} from './ContactsListItem.styled';

export const ContactsListItem = ({ contact }) => {
  const [isChangeContact, setIsChangeContact] = useState(false);
  const isLoading = useSelector(state => state.contacts.removeContactLoading);
  const dispatch = useDispatch();

  const toggleShowChangeMenu = () => {
    setIsChangeContact(!isChangeContact);
  };

  const { id, name, number } = contact;
  return (
    <Backdrop>
      <Item>
        <DescrWrap>
          <IoPersonCircle size={30} />
          <Information>name: </Information>
          <Text>{name}</Text>
        </DescrWrap>
        <DescrWrap>
          <GiRotaryPhone size={30} />
          <Information>number: </Information>
          <Text>{number}</Text>
        </DescrWrap>
        <BtnWrap>
          <button type="button" onClick={toggleShowChangeMenu}>
            change
          </button>
          <button
            type="button"
            onClick={() => dispatch(removeContact(id))}
            disabled={isLoading}
          >
            delate
          </button>
        </BtnWrap>
        {isChangeContact && (
          <ChangeContact
            nameForChange={name}
            numberForChange={number}
            id={id}
            setIsChangeContact={setIsChangeContact}
            toggleShowChangeMenu={toggleShowChangeMenu}
          />
        )}
      </Item>
      <Layout></Layout>
    </Backdrop>
  );
};
