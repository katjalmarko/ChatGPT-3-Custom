import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GOOGLE,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)