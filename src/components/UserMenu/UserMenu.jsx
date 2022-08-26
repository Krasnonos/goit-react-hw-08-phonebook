import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../redux/authOperation';
import { UserWrap, AuthTittle, UserName, NavBtn } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.user.name);

  return (
    <UserWrap>
      <AuthTittle>
        Welcome <UserName>{userName}</UserName>
      </AuthTittle>
      <NavBtn type="button" onClick={() => dispatch(userLogout())}>
        Log Out
      </NavBtn>
    </UserWrap>
  );
};
