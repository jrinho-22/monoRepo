import { auth2} from '../firebase/InitializeFirebase'

export const emailPasswordSignIn = async (email, password) => {
    try {
      const userCredential = await auth2.signInWithEmailAndPassword(email, password);

      return userCredential.user.email

    } catch (error) {
        alert('User not registered')
      console.error('Error signing in:', error.message);
    }
  };