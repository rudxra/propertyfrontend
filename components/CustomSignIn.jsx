import { SignInButton } from '@clerk/nextjs';
import Navbar from './Navbar';

const CustomSignInButton = () => {
  return (
      <>
    
    <SignInButton>
      <button className='btn-signin'>Sign in</button>
    </SignInButton>
    </>
  );
};

export default CustomSignInButton;
