import React from 'react'

export default function Login() {
    return (
        <>
            <div>

                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                        </form>
                        <h3 className="text-lg font-bold">Login</h3>
                        <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>

                        <div className='mt-4 space-y-4'>
                            <span>
                                Email
                            </span>
                            <br />
                            <input type="email" placeholder='Enter your email' />
                        </div>
                        <div className='mt-4 space-y-4'>
                            <span>
                                Password
                            </span>
                            <br />
                            <input type="text" placeholder='Enter your password' />
                        </div>
                        <div className="modal-action">
                            <button>Login</button>
                            <p>Not Registered? <span>Signup</span></p>
                        </div>
                    </div>
                </dialog>

                {/* <dialog id="login_modal" className="modal">
                    <div className="modal-box">
                        <h3 className="text-lg font-bold">Login</h3>
                        <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>

                        <div className='mt-4 space-y-4'>
                            <span>
                                Email
                            </span>
                            <br />
                            <input type="email" placeholder='Enter your email' />
                        </div>
                        <div className='mt-4 space-y-4'>
                            <span>
                                Password
                            </span>
                            <br />
                            <input type="text" placeholder='Enter your password' />
                        </div>
                        <div className="modal-action">
                            <button>Login</button>
                            <p>Not Registered? <span>Signup</span></p>
                        </div>
                    </div>
                </dialog> */}
            </div>
        </>
    )
}
