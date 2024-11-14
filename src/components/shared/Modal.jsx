import React from 'react';
import { ImCross } from "react-icons/im";
import MotionWrapper from './MotionWrapper';

const Modal = ({ open, setOpen, children, title="Title" }) => {
    return (
        <>
            <div className={`${open ? 'bg-black fixed inset-0 z-40 opacity-30' : 'hidden'}`} onClick={() => setOpen(false)}></div>
            <MotionWrapper variantName="fadeIn" delay={0.1} className={`${open ? 'fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : 'hidden'}`}>
                <div className='flex justify-between items-center bg-primary px-5 py-3'>
                    <h1 className='uppercase font-semibold'>{title}</h1>
                    <ImCross onClick={() => setOpen(false)} className='cursor-pointer text-sm' />
                </div>
                <div className="overflow-y-auto bg-gray-200 py-8 px-4">{children}</div>
            </MotionWrapper>
        </>
    );
};

export default Modal;