import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET_KEY,
    }),
  ],

  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session?.user?.name
        .split("")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },

  secret: "your-secret",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
