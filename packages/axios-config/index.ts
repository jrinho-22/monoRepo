import { signInWithGoogle } from "./AuthHandlers/googleLogin"
import { getLoggedUser } from "./apis/api-user"
import { emailPasswordSignIn } from "./AuthHandlers/emailPasswordLogin"
import { emailPasswordSignUp } from "./AuthHandlers/emailPasswordSignUp"

export {
    signInWithGoogle,
    getLoggedUser,
    emailPasswordSignIn, 
    emailPasswordSignUp
}