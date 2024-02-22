import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { MongoClient } from "mongodb";
import { createUser } from "@/db/models/User.model.mjs";
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
        const user = createUser({
          name: profile?.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          friends: [],
        });
        user.id = profile.id;
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      profile(profile) {
        const user = createUser({
          name: profile.name,
          email: profile.email,
          phoneNumber: null,
          image: profile.picture,
          friends: [],
        });
        user.id = profile.sub;

        return user;
      },
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_ID,
      clientSecret: process.env.DISCORD_SECRET,
      profile(profile) {
        const user = createUser({
          name: profile.username,
          email: profile.email,
          phoneNumber: null,
          image: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`,
          friends: [],
        });
        user.id = profile.id;

        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
