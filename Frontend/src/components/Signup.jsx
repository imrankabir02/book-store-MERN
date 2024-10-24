import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form'
import { axios } from 'axios';

export default function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        };
        await axios
            .post("http://localhost:4001/user/signup", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success("Signup Successfully");
                    navigate(from, { replace: true });
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user));
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);
                }
            });
    };
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="w-[600px] h-[400]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</Link>
                            <h3 className="flex justify-center text-lg font-bold">Sign Up!</h3>
                            <br />
                            <div>
                                <span>Name</span>
                                <br />
                                <input type="text" placeholder='Enter your name' className=""
                                    {...register("fullname", { required: true })} />
                                <br />
                                {errors.fullname && <span>Name is required</span>}
                            </div>
                            <div>
                                <span>Email</span>
                                <br />
                                <input type="email" placeholder='Enter your email'
                                    className=""
                                    {...register("email", { required: true })} />
                                <br />
                                {errors.email && <span>Email is required</span>}
                            </div>
                            <div>
                                <span>Password</span>
                                <br />
                                <input type="password" placeholder='Enter your password'
                                    {...register("password", { required: true })} />
                                <br />
                                {errors.password && <span>Password is required</span>}
                            </div>
                            <br />
                            <div className='flex justify-between'>
                                <button className="px-3 py-2 text-white duration-300 bg-black rounded-md cursor-pointer hover:bg-slate-800">Sign Up</button>
                                <span>Have Account?</span>
                                <button to="/"
                                    className="px-3 py-2 text-black duration-300 rounded-md cursor-pointer"
                                    onClick={() =>
                                        document.getElementById("my_modal_3").showModal()
                                    }
                                >
                                    Login
                                </button>
                                <Login />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
