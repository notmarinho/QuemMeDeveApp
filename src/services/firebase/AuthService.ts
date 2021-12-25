import {
  iUserSingInEmail,
  iUserSingUpEmail,
} from '@interfaces/services/firebase/Auth';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

class AuthService {
  async signIn(
    userCredentials: iUserSingInEmail,
  ): Promise<FirebaseAuthTypes.UserCredential> {
    try {
      return await auth().signInWithEmailAndPassword(
        userCredentials.email,
        userCredentials.password,
      );
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async signUp(
    userCredentials: iUserSingUpEmail,
  ): Promise<FirebaseAuthTypes.UserCredential> {
    try {
      return await auth()
        .createUserWithEmailAndPassword(
          userCredentials.email,
          userCredentials.password,
        )
        .then(async result => {
          await result.user.updateProfile({
            displayName: userCredentials.name,
          });
          return result;
        });
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async checkUserSinged() {
    try {
      if (auth().currentUser) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async logout() {
    try {
      return await auth()
        .signOut()
        .then(() => {
          return true;
        });
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

const authService = new AuthService();

export default authService;
