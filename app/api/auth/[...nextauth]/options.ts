import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Your username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your password"
        },
      },
      async authorize(credentials) {
        const user = {
          id: "1",
          name: "John Doe",
          password: "john",
        };
        if (
          credentials?.username === user.name &&
          user.password === credentials?.password
        ) {
          return user;
        } else return null;
      },
    }),
  ],
};