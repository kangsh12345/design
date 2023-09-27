import { User } from '@prisma/client';

import 'next-auth';

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
  }
}

declare module 'next-auth' {
  interface Session {
    id: string;
    sessionToken: string;
    userId: string;
    expires: string;
    user: User;
  }
}
