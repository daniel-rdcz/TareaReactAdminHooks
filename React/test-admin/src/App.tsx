import { Admin, Resource, ShowGuesser } from "react-admin";
import { dataProvider } from './dataProvider';
import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList } from "./users";
import { AlbumsList } from "./albums";
import { AlbumsEdit } from "./albums";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import AlbumsIcon from "@mui/icons-material/Album";
import { Dashboard } from './Dashboard';
import { authProvider } from "./authProvider";
import { i18nProvider } from "./i18nProvider";

export const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard} i18nProvider={i18nProvider} >
      <Resource name="users" list={UserList} options={{ label: 'Usuarios' }} recordRepresentation="name" icon={UserIcon}/>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} options={{ label: 'Publicaciones' }}/>
      <Resource name="albums" list={AlbumsList} edit={AlbumsEdit} show={ShowGuesser} icon={AlbumsIcon} options={{ label: 'Albums' }}/>
  </Admin>
);
