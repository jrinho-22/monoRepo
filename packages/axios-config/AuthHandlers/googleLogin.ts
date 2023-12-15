import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {provider, auth} from '../firebase/InitializeFirebase'
import axiosInstance from '../createAxios'
import { postLoggedUser } from '../apis/api-user'

export const signInWithGoogle = async () => {
    const loggedUserKey = await signInWithPopup(auth, provider)
      .then((result: any) => {
        const newData = {
          name: result.user.displayName,
          email: result.user.email,
        };
        
         return postLoggedUser(newData)  
            
      }).catch((error) => {
        console.log(error, 'errorrr')
      });
      
      return loggedUserKey
  };