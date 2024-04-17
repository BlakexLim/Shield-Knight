import { Outlet } from 'react-router-dom';

export function Title() {
  return (
    <div>
      <h1>Shield Knight</h1>
      <Outlet />
    </div>
  );
}
