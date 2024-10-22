//esse arquivo é da parte do login, que usa o firebase
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithRedirect} from 'firebase/auth';
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {useAuthState} from "react-firebase-hooks/auth"
import {  signInWithPopup } from 'firebase/auth';

const SignIn = () => {

  const [user, loading, error] = useAuthState(auth);
  console.log(user)
  // parte da autenticaçao com o google, no qual pode ser mudada para login e senha
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('Login bem-sucedido:', result.user);
      })
      .catch((error) => {
        console.error('Erro de login:', error);
      });
  };
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          console.log('Login bem-sucedido:', result.user);
        }
      })
      .catch((error) => {
        console.error('Erro no redirecionamento:', error);
      });
  }, []);
useEffect(() => {
  if (loading) {
    console.log('Carregando...');
  }
  if (error) {
    console.log('Erro:', error);
  }
  if (user) {
    console.log('Usuário logado:', user);
  }
}, [user, loading, error]);

  return (
    <>
      <button 
        className='btn-login' 
        onClick={googleSignIn}
      >
        <i className="fa-brands fa-google"></i>
        Sign in with Google
      </button>
    </>
  );
}
 
export default SignIn;