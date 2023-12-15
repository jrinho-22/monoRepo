import { auth2} from '../firebase/InitializeFirebase'

export const emailPasswordSignUp = async (email, password) => {
    try {
      const userCredential = await auth2.createUserWithEmailAndPassword(email, password);

      return userCredential.user

    } catch (error) {
        alert('Invalid email')
        console.error('Error signing in:', error.message);
    }
  };