import NextAuth from "next-auth";
import User from "@/Modal/User";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import initDB from "@/helper/initDB";
import clientPromise from "@/lib/mongoAdapter";
initDB();

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("Invalid Credentials");
        }
        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if (isPasswordMatched) {
          return user;
        }
        throw new Error("Invalid Credentials");
      },
    }),
  ],

  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token._doc ? token._doc : token;
      return session;
    },
  },

  pages: {
    signIn: "/Auth/SignIn",
    error: "/Error",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
