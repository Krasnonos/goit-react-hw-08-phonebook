import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { removeContact } from '../../redux/contactsOperation';
import { ChangeContact } from '../ChangeContact/ChangeContact';
import { IoPersonCircle } from 'react-icons/io5';
import { GiRotaryPhone } from 'react-icons/gi';
import Button from '@material-ui/core/Button';
import {
  Backdrop,
  Inform,
  NameWrap,
  PhoneWrap,
  InformTittle,
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
      <Inform>
        <NameWrap>
          <IoPersonCircle size={30} />
          <InformTittle>name: </InformTittle>
          <Text>{name}</Text>
        </NameWrap>
        <PhoneWrap>
          <GiRotaryPhone size={30} />
          <InformTittle>number: </InformTittle>
          <Text>{number}</Text>
        </PhoneWrap>
        <BtnWrap>
          <Button
            type="button"
            color={'primary'}
            size={'small'}
            variant={'outlined'}
            onClick={toggleShowChangeMenu}
          >
            Change
          </Button>
          <Button
            color={'secondary'}
            size={'small'}
            type="button"
            variant={'outlined'}
            onClick={() => dispatch(removeContact(id))}
            disabled={isLoading}
          >
            Delate
          </Button>
        </BtnWrap>
      </Inform>
      {isChangeContact && (
        <ChangeContact
          nameForChange={name}
          numberForChange={number}
          id={id}
          setIsChangeContact={setIsChangeContact}
          toggleShowChangeMenu={toggleShowChangeMenu}
        />
      )}
    </Backdrop>
  );
};
