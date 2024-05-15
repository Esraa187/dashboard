import React,{useState} from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField } from '@mui/material';
function FormDialog({ open, handleClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} style={{width:"600px",marginLeft:"500px"}}>
            <DialogTitle style={{textAlign:"center",fontSize:"22px",fontWeight:"700",color:"#09367f"}}>Login</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        label="Phone Number"
                        type="tel"
                        fullWidth
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit" color="primary">
                            Login
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
}



export default FormDialog
