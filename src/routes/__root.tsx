import { createRootRoute, Outlet } from '@tanstack/react-router';
import Credits from '../components/Credits';

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Credits />
    </>
  ),
});
