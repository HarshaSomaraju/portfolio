import React, { Suspense } from "react";
import Backdrop from '@mui/material/Backdrop';
import {CircularProgress} from "@mui/material";

export default function Loading(props) {
    // const [open, setOpen] = React.useState(true);
    // const handleClose = () => {
    //     setOpen(false);
    // };

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        > <h1 style={{marginRight: '20px', fontFamily: 'Helvetica, sans-serif'}}>Loading</h1>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}