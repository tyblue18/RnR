import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { MongoClient } from "mongodb";

import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";

const client = new MongoClient(process.env.MONGODB_URI);
const clientPromise = client.connect();

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise, { databaseName: "RRdb" }),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      profile(profile) {
        console.log(profile);
        const user = {
          name: profile?.name || profile.login,
          email: profile.email,
          phoneNumber: null,
          image: profile.avatar_url,
          friends: [],
          id: profile.id,
        };

        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      profile(profile) {
        const user = {
          name: profile.name,
          email: profile.email,
          phoneNumber: null,
          image: profile.picture,
          friends: [],
          id: profile.sub,
        };

        return user;
      },
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_ID,
      clientSecret: process.env.DISCORD_SECRET,
      profile(profile) {
        const user = {
          name: profile.username,
          email: profile.email,
          phoneNumber: null,
          image: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`,
          friends: [],
          id: profile.id,
        };

        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
