import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { changeContact } from '../../redux/contactsOperation';

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
      ({ name: existedName }) =>
        existedName.toLowerCase() === name.toLocaleLowerCase()
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
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={name}
        name="name"
        minLength={3}
        onChange={onChange}
        required
      />
      <input
        type="tel"
        value={number}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={onChange}
        required
      />
      <button type="submit">aprove changes</button>
    </form>
  );
};
