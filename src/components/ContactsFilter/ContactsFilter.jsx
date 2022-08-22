// import { useDispatch, useSelector } from 'react-redux';
// import { changeFilter } from '../../redux/filterSlice';

export const ContactsFilter = () => {
  // const filter = useSelector(state => state.filter);
  // console.log(filter);
  // const dispatch = useDispatch;

  return (
    <>
      <input
        type="text"
        id="filter"
        // onChange={e => dispatch(changeFilter(e.target.value))}
      />
      <label htmlFor="filter">Filter</label>
    </>
  );
};
