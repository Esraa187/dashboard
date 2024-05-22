import React, { useState } from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import './form.css'
import photo from '../image/undraw_data_trends_re_2cdy (1).svg'
function FormDialog({ open, handleClose }) {
    const [formData, setFormData] = useState({
        phone: '',
        password: '',
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
        <div >
            <Dialog open={open} onClose={handleClose} >
                <div className="form-dialog">
                    <div className='formstyle' >
                        <img src={photo} alt="" />
                    </div>
                    <div>
                        
                        <DialogTitle className="dialog-title"> <p>Hello!</p>Login to your account</DialogTitle>
                        <DialogContent>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    name="phone"
                                    label="Phone"
                                    type="tel"
                                    fullWidth
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <TextField
                                    margin="dense"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    fullWidth
                                    value={formData.password}
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
                    </div>
                </div>
            </Dialog>
        </div>
    );
}



export default FormDialog
