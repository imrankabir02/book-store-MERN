import React, { useState } from 'react'

export default function Login() {
    const [isCancelled, setIsCancelled] = useState(false);

    const handleCancel = () => {
        setIsCancelled(true);
    }
    return (
        <>
            <div>

                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                        </form>
                        <h3 className="text-lg font-bold">Login!</h3>
                        <br />
                        <div>
                            <span>Email</span>
                            <br />
                            <input type="email" placeholder='Enter your email' className=""/>
                        </div>
                        <div>
                            <span>Password</span>
                            <br />
                            <input type="password" placeholder='Enter your password'/>
                        </div>
                        <br />
                        <div className='flex justify-between'>
                            <button className="px-3 py-2 text-white duration-300 bg-black rounded-md cursor-pointer hover:bg-slate-800">Login</button>
                            <span>Not registered?</span>
                            <button className="px-3 py-2 text-white duration-300 bg-black rounded-md cursor-pointer hover:bg-slate-800">SignUp</button>
                        </div>
                    </div>
                </dialog>
            </div>
        </>
    )
}
