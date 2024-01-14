import { createPortal } from "react-dom";

const Modal = ({ children, open, onClose }) => {
    if(!open) 
        return null;

    return createPortal( 
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-slate-300 bg-slate-950/75' >
            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                { children }
            </div>
            <div className='fixed top-5 right-8 text-white text-3xl cursor-pointer' onClick={onClose}>x</div>
        </div>,
        document.getElementById('modal')
     );
}
 
export default Modal;
