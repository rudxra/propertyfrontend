import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import Cart from './Cart';
import { useStateContext } from '@/context/StateContext';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';  // Import Clerk components
import CustomSignInButton from '@/components/CustomSignIn';  // Import the CustomSignInButton

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();


  return (
    <div className='navbar-container'>
      <div className='navbar-left'>
        <SignedOut>
          <CustomSignInButton />  {/* Sign-In Button for Signed Out users */}
        </SignedOut>
        <SignedIn>
          <UserButton />  {/* User Button for Signed In users */}
        </SignedIn>
      </div>
      <p className='logo'>
        <Link href="/">44YARDS</Link>
      </p> 
      <div className='cart-div'>

      <button type="button" className='cart-icon' onClick={() => setShowCart(true)}>
        <AiOutlineShopping className='cart-icon-image' />
        <span className='cart-item-qty'>
          {totalQuantities}
        </span>
      </button>
      </div>
      {showCart && <Cart />}
    </div>
  );
  
}

export default Navbar;
