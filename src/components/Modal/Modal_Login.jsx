import React, {useState} from 'react'

const Modal_Login = ({cond = true, conds = useState(cond), title}) => {
    const [showModal, setShowModal] = useState(cond);
    return (
        <>
            {cond ?
                (
                    <>
                        <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-lg font-semibold">
                                        {title}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => conds(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        ×
                                        </span>
                                    </button>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 rounded-sm font-bold uppercase px-3 py-1 text-sm outline-none outline outline-solid outline-red-500 mb-1 ease-linear transition-all duration-150 shadow-none hover:shadow-lg"
                                        type="button"
                                        onClick={() => conds(false)}
                                    >
                                        Close
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) :null
            } 
            
        </>
    )
}

export default Modal_Login