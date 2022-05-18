import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Paper,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const Signup = () => {
  const { signup } = useAuth();
  const [error, setError] = React.useState('');
  const inputRef = React.useRef();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await signup(values.email, values.password);
        setError('')
        navigate('edit-profile');
      } catch (error) {
        setError('Please use a different email.')
      }
    },
  });

  return (
    <Paper style={{
      padding: 20,
      height:'auto',
      width: 350,
      margin: '0 auto'
    }}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          autoFocus
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onKeyUp={e => {
            if (e.code === 'Tab') {
              inputRef.current.focus();
            }
          }}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          inputRef={inputRef}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Sign Up
        </Button>
        <Typography variant='caption' color='error' gutterBottom>{error}</Typography>
      </form>
    </Paper>
  );
};

export default Signup;
