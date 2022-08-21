import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contactsOperation';

export const ContactsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return <div>ContactsList</div>;
};
