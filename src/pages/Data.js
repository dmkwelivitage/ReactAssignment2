import React, { useEffect, useState } from 'react';
import { Grid, Paper, Container } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Navigate } from 'react-router-dom';



const columns = [
    { field: 'id', headerName: 'ID', width: 70 , type:'number' },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 25 },
    { id: 6, lastName: 'Melisandre', firstName: 'dawdawd', age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];



export default function Data(){
    const [entries, setEntries] = useState([])

    useEffect(() => {
        fetch(' http://localhost:8000/UserData')
            .then(res => res.json())
            .then(data => setEntries(data))
    }, []);
    const [authenticated, setAuthenticated] = useState(sessionStorage.getItem("authenticated"));
    useEffect(() => {
        const loggedInUser = sessionStorage.getItem("authenticated");
        if (loggedInUser) {
            setAuthenticated(loggedInUser);
        }
    }, []);

    const handleDelete = (id) => {
        fetch('http://localhost:8000/UserData/' + id, {
            method: 'DELETE',
        }).then(() => {
            setEntries(prevEntries => prevEntries.filter(entry => entry.id !== id));
        })
    };
    if (authenticated) {
        return (
            /* <Container>
                <Grid container>
                    {entries.map(entry => (
                        <Grid item key={entry.id} xs={12} sm={6} md={3}>
                            <Paper>{entry.FirstName}</Paper>
                        </Grid>
            ))}
                </Grid>
            </Container>*/

            < div style={{ height: 400, width: '100%', display: "flex", alignItems: "flex-Start", justifyContent: "center" }}>
                <table>
                    <th width="200px">ID</th>
                    <th width="200px">First Name</th>
                    <th width="200px">Last Name</th>
                    <th width="200px">Email</th>
                    <th width="200px">Address</th>
                    <th width="200px">Actions</th>
                    {entries.map(entry => (
                        <tr>
                            <td>{entry.id}</td>
                            <td key={entry.id}>{entry.FirstName}</td>
                            <td key={entry.id} >{entry.LastName}</td>
                            <td key={entry.id} >{entry.Email}</td>
                            <td key={entry.id}>{entry.Address}</td>
                            <td><button onClick={() => handleDelete(entry.id)}>Delete</button></td>
                        </tr>
                    ))}
                </table>
                {/*<DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />*/}
            </div >


        )
    }
    else {
        return (<Navigate replace to="/Login" />);
    }
}
