import axios from "axios";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { todoServer } from "./services";
import { User } from "next-auth";

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

if (
  !GITHUB_CLIENT_ID ||
  !GITHUB_CLIENT_SECRET ||
  !GOOGLE_CLIENT_ID ||
  !GOOGLE_CLIENT_SECRET
) {
  throw new Error("Auth setup is incomplete");
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GithubProvider({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account?.provider === "google") {
        if (account?.id_token) {
          try {
            const res = await axios.post(
              `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/google`,
              null,
              {
                headers: {
                  Authorization: `Bearer ${account.id_token}`,
                },
              }
            );

            user.id = "resr_id";
            // user.id = res.data._id;
            // user.token = res.data.token;

            token.id = res.data._id;
            token.accessToken = res.data.token;
          } catch (error) {
            console.log({ error });
          }
        }
      }
      return token;
    },
    async session({ session, user, token }: any) {
      if (session) {
        session.user.id = token.id;
        session.user.accessToken = token.accessToken;
      }
      return session;
    },

    // usually not needed here we are fixing a bug in next auth
  },
  pages: {
    signIn: "/api/auth/signin",
  },
});
