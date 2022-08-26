import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contactsSlice';
import { Label, Input, InputWrap, FilterIcon } from './ContactsFilter.styled';

export const ContactsFilter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <InputWrap>
      <Label htmlFor="filter">Filter</Label>
      <FilterIcon />
      <Input
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
        id="filter"
      />
    </InputWrap>
  );
};
