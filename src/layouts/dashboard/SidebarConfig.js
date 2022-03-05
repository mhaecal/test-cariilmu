// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'kelas',
    path: '/dashboard/kelas',
    icon: getIcon('eva:book-open-fill')
  },
  {
    title: 'instruktur',
    path: '/dashboard/instruktur',
    icon: getIcon('eva:people-fill')
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon('eva:lock-fill')
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon('eva:person-add-fill')
  }
];

export default sidebarConfig;
