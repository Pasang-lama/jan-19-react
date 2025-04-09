import React from 'react'
import Header from '../component/layouts/Header'
import Footer from '../component/layouts/Footer'
import { Link } from 'react-router'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const loginSchema = yup
  .object()
  .shape({
    email: yup.string()
    .required("Email is required")
    .email("Invalid email address"),
    password: yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/,
      "Password must be at least 8 characters, include uppercase, lowercase, number, and special character"
    )
  })

function Login() {

    const { register, handleSubmit,  formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema),
      });

    const onSubmit = data => console.log(data);
    return (
        <>
            <Header />
            <section className="container  my-5">
                <h1 className="text-center">Login</h1>
                <form  onSubmit={handleSubmit(onSubmit)} className='card border p-4 w-50 mx-auto mt-4'>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email*</label>
                        <input {...register('email')}  type="text" id='email' className="form-control" name='email' placeholder='Enter your email address' />
                        {errors.email?.message &&  <span className='text-danger text-itallic'>{errors.email?.message}</span>}
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="password" className="form-label">Password*</label>
                        <input {...register('password')} type="text" id='password' className="form-control" name='password' placeholder='Enter your password ' />
                        {errors.password?.message &&  <span className='text-danger text-itallic'>{errors.password?.message}</span>}
                        
                    </div>
                    <button type='submit' className='btn btn-primary my-4'>Login</button>
                    <p className='text-center'>Don't have an account? <Link className='text-primary' to="/register">Register</Link></p>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default Login
