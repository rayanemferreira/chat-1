// esse arquivo tambem usar o firebase para fazer o usuario sair do sistema

import { auth } from '../firebase';

const LogOut = () => {
    const signOut = () => {
        signOut(auth);
    }
    
    return ( 
        <>
            <button 
                onClick={() => auth.signOut()}
                className='btn-login btn-logout'
            >
                <i className="fa-brands fa-google"></i>
                Logout
            </button>
        </>
    );
}
    
export default LogOut;
