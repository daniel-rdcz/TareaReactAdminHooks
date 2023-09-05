import { useMediaQuery, Theme } from "@mui/material";
import { List, SimpleList, Datagrid, TextField, EmailField } from "react-admin";
import MyUrlField from './MyUrlField';

export const UserList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.username}
                    tertiaryText={(record) => record.email}
                />
            ) : (
                <Datagrid rowClick="edit">
                    <TextField source="id" label = 'ID'/>
                    <TextField source="name" label = 'Nombre'/>
                    <EmailField source="email" label = 'Email' />
                    <TextField source="phone" label = 'Teléfono'/>
                    <MyUrlField source="website"/>
                    <TextField source="company.name" label = "Compañía"/>
                </Datagrid>
            )}
        </List>
    );
};