import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function TransactionForm() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h6">
                    Add Transaction
                </Typography>
                <TextField sx={{ marginRight: 5 }} size="small" id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField sx={{ marginRight: 5 }} size="small" id="outlined-basic" label="Outlined" variant="outlined" />
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker sx={{ marginRight: 5 }} size="small" />
                </LocalizationProvider>
                <Button type="submit" size="large" variant="contained">Submit</Button>

            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}