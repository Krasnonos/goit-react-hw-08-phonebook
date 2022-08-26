import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { changeContact } from '../../redux/contactsOperation';
import {
  Form,
  Input,
  InputWrap,
  Label,
  PersonIcon,
  PhoneIcon,
  NavBtn,
} from './ChangeContact.styled';

export const ChangeContact = ({
  nameForChange,
  numberForChange,
  id,
  toggleShowChangeMenu,
}) => {
  const [name, setName] = useState(() => nameForChange);
  const [number, setNumber] = useState(() => numberForChange);
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const onChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        toast.error(`case ${name} doesn't support`);
        break;
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    const isRepeatContact = contacts.find(
      ({ name: existedName }) => existedName === name
    );

    if (isRepeatContact) {
      toast.error(`${name} is already in contacts.`);
      return;
    }

    try {
      dispatch(changeContact({ id, name, number }));
    } catch (error) {}
    toast.success(`contact ${name} was successfully changed`);
    toggleShowChangeMenu();
  };

  return (
    <Form onSubmit={onSubmit}>
      <InputWrap>
        <Label htmlFor="name">Name</Label>
        <PersonIcon />
        <Input
          type="text"
          value={name}
          name="name"
          id="name"
          minLength={3}
          maxLength={20}
          placeholder="Change name"
          onChange={onChange}
          required
        />
      </InputWrap>

      <InputWrap>
        <Label htmlFor="number">Number</Label>
        <PhoneIcon />
        <Input
          type="tel"
          value={number}
          name="number"
          id="number"
          placeholder="Change phone"
          pattern="^\+380\d{3}\d{2}\d{2}\d{2}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={onChange}
          required
        />
      </InputWrap>
      <NavBtn type="submit">Сonfirm</NavBtn>
    </Form>
  );
};
