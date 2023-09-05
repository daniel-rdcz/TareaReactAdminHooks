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
    useNotify,
    useRefresh,
    useRedirect,
    EditButton,
} from "react-admin";

const postFilters = [
    <TextInput source="q" label="Buscar" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];

export const PostList = () => (
    <List filters={postFilters}>
        <Datagrid>
            <TextField source="id" label='ID'/>
            <ReferenceField source="userId" reference="users" label = 'Usuario'/>
            <TextField source="title" label = 'Titulo'/>
            <EditButton/>  
        </Datagrid>
    </List>
);

export const PostEdit = () => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const onSuccess = () => {
      notify('Changes saved', { undoable: true});
      redirect('/posts');
      refresh();
  };

  return (
    <Edit title={<PostTitle />} mutationOptions={{ onSuccess}}>
      <SimpleForm warnWhenUnsavedChanges>
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="id" disabled />
        <TextInput source="title" />
        <TextInput source="body" multiline rows={5} />
      </SimpleForm>
    </Edit> 
  );
};

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Create>
);

const PostTitle = () => {
      const record = useRecordContext();
      return <span>Post {record ? `"${record.title}"` : ''}</span>;
    };

