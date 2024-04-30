import { useContext } from 'react';
import { AppContextValues, AppContext } from './UserContext';

export function useUser(): AppContextValues {
  const values = useContext(AppContext);
  if (!values) throw new Error('useUser must be used inside a UserProvider');
  return values;
}
