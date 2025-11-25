import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Static example login
        const adminUser = {
          email: 'admin@test.com',
          password: '123456',
          name: 'Admin User',
        };

        if (
          credentials.email === adminUser.email &&
          credentials.password === adminUser.password
        ) {
          return adminUser;
        }

        return null;
      },
    }),
  ],

  session: {
    strategy: 'jwt',
  },

  pages: {
    signIn: '/login', // custom login page
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
