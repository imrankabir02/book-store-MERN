import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = data => console.log(data);

    // console.log(watch("example"));
    return (
        <>
            <div>

                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/"
                                className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
                                onClick={() =>
                                    document.getElementById("my_modal_3").close()
                                }
                            >✕</Link>

                            <h3 className="text-lg font-bold">Login!</h3>
                            <br />
                            <div>
                                <span>Email</span>
                                <br />
                                <input type="email" placeholder='Enter your email' className=""
                                    {...register("email", { required: true })} />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div>
                                <span>Password</span>
                                <br />
                                <input type="password" placeholder='Enter your password'
                                    {...register("password", { required: true })} />
                                {errors.password && <span>This field is required</span>}
                            </div>
                            <br />
                            <div className='flex justify-between'>
                                <button className="px-3 py-2 text-white duration-300 bg-black rounded-md cursor-pointer hover:bg-slate-800">Login</button>
                                <span>Not registered?</span>
                                <Link to="/signup" className="px-3 py-2 text-black duration-300 rounded-md cursor-pointer">SignUp</Link>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    )
}
