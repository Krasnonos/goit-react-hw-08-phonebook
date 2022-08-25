import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contactsSlice';

export const ContactsFilter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor="filter">Filter</label>
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
        id="filter"
      />
    </div>
  );
};
