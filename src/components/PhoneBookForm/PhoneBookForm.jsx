import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createContact } from '../../redux/contactsOperation';

export const PhoneBookForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
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
      ({ name: existedName }) =>
        existedName.toLowerCase() === name.toLocaleLowerCase()
    );

    if (isRepeatContact) {
      toast(` ${name} is already in contacts.`);
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
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={name}
        name="name"
        placeholder="Jhon Dou"
        required
        minLength={3}
        onChange={onChange}
      />
      <input
        type="tel"
        value={number}
        name="number"
        placeholder="+380991111111"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={onChange}
      />
      <button type="submit">Add new contact</button>
    </form>
  );
};
