// import { LandingPage } from './Pages/LandingPage';
import './index.css';
import { NewGame } from './Pages/NewGame';
import { Controls } from './Pages/Controls';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './Pages/NotFound';
import { Login } from './Pages/Login';
import { SignUp } from './Pages/SignUp';
import { Game } from './Pages/Game';
import { Title } from './Pages/Title';
import { useState } from 'react';
import { User, UserProvider } from './Components/UserContext';
import { saveToken } from './lib/data';

export default function App() {
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<string>();

  function handleSignIn(user: User, token: string) {
    setUser(user);
    setToken(token);
    saveToken(token);
  }

  function handleSignOut() {
    setUser(undefined);
    setToken(undefined);
    saveToken(undefined);
  }

  const contextValue = { user, token, handleSignIn, handleSignOut };
  return (
    <UserProvider value={contextValue}>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/newgame" element={<NewGame />} />
        <Route path="/controls" element={<Controls />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/intofire" element={<Game />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserProvider>
  );
}
