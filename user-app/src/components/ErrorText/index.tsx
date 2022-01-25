import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export interface IErrorTextProps {
    error: string;
}

const ErrorText: React.FunctionComponent<IErrorTextProps> = props => {
    const { error } = props;

    if (error === '') return null;

    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert : {error}
        </Alert>
        </Stack>
    );
}

export default ErrorText;