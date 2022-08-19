import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/authOperation';

export const ContactsPage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button type="button" onClick={() => dispatch(userLogout())}>
        Log Out
      </button>
    </div>
  );
};
