import { LandingPage } from './Pages/LandingPage';
import './App.css';
import { NewGame } from './Pages/NewGame';
import { Controls } from './Pages/Controls';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './Pages/NotFound';
import { Login } from './Pages/Login';
import { SignUp } from './Pages/SignUp';
import { Game } from './Pages/Game';
import { Title } from './Pages/Title';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Title />}>
        <Route path="" element={<LandingPage />} />
        <Route index element={<NewGame />} />
        <Route path="controls" element={<Controls />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="intofire" element={<Game />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
