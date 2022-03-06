import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import Kelas from './pages/Kelas';
import KelasDetail from './pages/KelasDetail';
import Instruktur from './pages/Instruktur';
import InstrukturDetail from './pages/InstrukturDetail';
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'kelas', element: <Kelas /> },
        { path: 'kelas/:id', element: <KelasDetail /> },
        { path: 'instruktur', element: <Instruktur /> },
        { path: 'instruktur/:id', element: <InstrukturDetail /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/kelas" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
