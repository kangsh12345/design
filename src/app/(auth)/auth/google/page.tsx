'use client';

import { Box } from '@/src/components/atoms/Box';
import { Header } from '@/src/components/organisms/Header';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

export default function Google() {
  return (
    <Box>
      <Header type="auth" />
      <GoogleOAuthProvider
        clientId={String(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)}
      >
        <Box>
          <GoogleLogin
            onSuccess={credentialResponse => {
              fetch(
                `/api/auth/sign-up?credential=${credentialResponse.credential}`,
              ).then(data => console.log(data));
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </Box>
      </GoogleOAuthProvider>
    </Box>
  );
}
