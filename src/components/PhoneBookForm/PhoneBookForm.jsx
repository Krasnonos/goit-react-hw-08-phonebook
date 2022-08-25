import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createContact } from '../../redux/contactsOperation';
import { Button } from '@material-ui/core';
import { IoSaveOutline } from 'react-icons/io5';
import {
  Form,
  Input,
  InputWrap,
  Label,
  PersonIcon,
  PhoneIcon,
} from './PhoneBookForm.styled';

export const PhoneBookForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.contacts);
  const isLoading = useSelector(state => state.contacts.createContactLoading);

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
      ({ name: existedName }) =>
        existedName.toLowerCase() === name.toLocaleLowerCase()
    );

    if (isRepeatContact) {
      toast.error(` ${name} is already in contacts.`);
      return;
    }

    try {
      dispatch(createContact({ name, number }));
    } catch (error) {}
    toast.success(`contact ${name} successfully registered`);

    setName('');
    setNumber('');
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
          placeholder="Jhon Dou"
          id="name"
          required
          minLength={3}
          onChange={onChange}
        />
      </InputWrap>

      <InputWrap>
        <Label htmlFor="tel">Phone</Label>
        <PhoneIcon />
        <Input
          type="tel"
          value={number}
          contained
          name="number"
          placeholder="+380991111111"
          id="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChange}
        />
      </InputWrap>
      <Button
        type="submit"
        disabled={isLoading}
        variant={'contained'}
        color={'primary'}
      >
        Add new contact
      </Button>
      {/* <NavBtn type="submit" disabled={isLoading}>
        Add new contact
      </NavBtn> */}
    </Form>
  );
};
