import { React, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';

const columns = [
  { 
    field: 'appName', 
    headerName: 'App Name', 
    flex: .2,
  },
  {
    field: 'id',
    headerName: 'Client Id',
    flex: .3,
  },
  {
    field: 'clientSecret',
    headerName: 'Client Secret',
    flex: .3,
  },
  {
    field: 'deleteButton',
    headerName: 'Delete',
    sortable: false,
    renderCell: (params) => (
      <strong>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
        >
          Delete
        </Button>
      </strong>
    )
    },
];

const rows = [
  { appName: "First app", id: 'fdsfds', clientSecret: 'f32f32f32', deleteButton: 'Delete' },
];

export default function Profile(props) {

  const history = useHistory();
  const [apps, setApps] = useState([]);
  const [open, setOpen] = useState(false);
  const [newAppName, setNewAppName] = useState("");
  
  if (!props.user) {
    // No user, now way
    history.push("/");
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = () => {
    setOpen(false);
    var newName = newAppName;
    setNewAppName("");

    axios.post("https://apigeepingservice-h7pi7igbcq-ew.a.run.app/apps", '{"appName": "' + newName + '"}', {
      "headers": {"Content-Type": "application/json"}
    })
    .then(function (response) {
      console.log(response.data);
      var newApps = [...apps];
      newApps.push({
        appName: newName,
        id: response.data.client_id,
        clientSecret: response.data.client_secret
      });
      setApps(newApps);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });    
  }

  const onAppNameChange = (e) => {
    setNewAppName(e.target.value)
  }

  useEffect(() => {

  });



  return (
    <div>
      <Container style={{textAlign: "left"}}>
        <h1>Your Profile</h1>
        <h3>User name</h3>
        <hr />
        <Button variant="contained" color="primary" onClick={handleClickOpen}>Add App</Button>
      </Container>
      <br></br>

      <Container style={{height: 500}}>
        <DataGrid
            rows={apps}
            columns={columns}
            pageSize={5}
            disableSelectionOnClick
          />
      </Container>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add App</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Type a name for the app.  This cannot be changed later.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="App name"
            type="text"
            fullWidth
            value={newAppName}
            onChange={onAppNameChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreate} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    
  );
}