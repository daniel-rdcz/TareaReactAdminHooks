import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    Edit,
   Create,
    SimpleForm,
    ReferenceInput,
    TextInput,
    useRecordContext,
} from "react-admin";

const albumsFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="albumsId" label="Albums" reference="albums" />,
];

export const AlbumsList = () => (
    <List filters={albumsFilters}>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" label = 'Usuario' reference="users" link="show" />
            <TextField source="id" label = 'ID'/>
            <TextField source="title" label = 'Título' />
        </Datagrid>
    </List>
);

export const AlbumsEdit = () => (
    <Edit title={<AlbumsTitle />}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <ReferenceInput source="albumsId" reference="albums" link="show" />
        <TextInput source="title" />
        <TextInput source="body" multiline rows={5} />
      </SimpleForm>
    </Edit>
  );

export const AlbumsCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="albumsId" reference="albums" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Create>
);

const AlbumsTitle = () => {
    const record = useRecordContext();
    return <span>Album {record ? `"${record.title}"` : ''}</span>;
  };