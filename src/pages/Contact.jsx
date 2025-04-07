import React from 'react'
import Header from '../component/layouts/Header'
import Footer from '../component/layouts/Footer'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const contactformschema = yup.object().shape({
    name: yup.string().required("Full name is required").min(3, "Full name must be at least 3 characters long"),
   
   
    email: yup.string().required("Email is required").email("Invalid email address"),
    password: yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/,
      "Password must be at least 8 characters, include uppercase, lowercase, number, and special character"
    ),
    comformpassword: yup.string()
    .required("Repeat password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
    number:yup.string()
    .required("Phone number is required")
    .matches(
        /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
        "Invalid phone number format"
    )
    .max(10, "Phone number must be 10 digits"),
})

function Contact() {

    const { register, handleSubmit, formState : { errors } } = useForm({
        resolver: yupResolver(contactformschema),
    });

    const contactsubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <Header />
            <section className="container my-5">
                <h1 className="text-center mb-5">Contact us page</h1>
                <form onSubmit={handleSubmit(contactsubmit)} >
                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <label htmlFor="name" className="form-label">Full Name*</label>
                            <input type="text" id='name' {...register('name')} className="form-control" name='name' placeholder='Enter your name' />
                            <span className='text-danger text-itallic'>{errors?.name?.message}</span>
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="email" className="form-label">Email*</label>
                            <input type="text" id='email' {...register('email')} className="form-control" name='email' placeholder='Enter your email address' />
                            <span className='text-danger text-itallic'>{errors?.email?.message}</span>
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="password" className="form-label">password*</label>
                            <input type="password" id='password' {...register('password')} className="form-control" name='password' placeholder='Enter your password' />
                            <span className='text-danger text-itallic'>{errors?.password?.message}</span>
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="comformpassword" className="form-label">comformpassword*</label>
                            <input type="password" id='comformpassword' {...register('comformpassword')} className="form-control" name='comformpassword' placeholder='Re-Enter your password' />
                            <span className='text-danger text-itallic'>{errors?.comformpassword?.message}</span>
                        </div>

                        <div className="col-lg-6">
                            <label htmlFor="number" className="form-label">number*</label>
                            <input type="text" id='number' {...register('number')} className="form-control" name='number' placeholder='Enter your number' />
                            <span className='text-danger text-itallic'>{errors?.number?.message}</span>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary mt-5'>Submit</button>
                </form>
            </section>

            <Footer />
        </>
    )
}

export default Contact
