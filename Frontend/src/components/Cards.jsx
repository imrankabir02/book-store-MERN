import React from 'react'

export default function Cards({ item }) {
    // console.log(item);
    return (
        <>
            <div className='mt-4 my-3 p-3'>
                <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:borde">
                    <figure>
                        <img
                            src={item.image}
                            alt="Books" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline ">${item.price}</div>
                            <div className="cursor-pointer rounded-lg border-[1px] hover:bg-blue-500 hover:text-white duration-200 px-2 py-1">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
