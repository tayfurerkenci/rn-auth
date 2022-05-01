import { useState } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { createUser } from '../util/auth';

function SignupScreen() {

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const signupHandler = async ({email, password}) => {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
      
    } catch (error) {
      Alert.alert('Authentication failed!', 'Could not create user. Please check your input!');
    }
    setIsAuthenticating(false);

  } 

  if(isAuthenticating)
  {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
