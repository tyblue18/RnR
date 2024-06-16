import { getServerSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import { createUser } from "@/db/models/User.model.mjs";

export const authOptions = {
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
  callbacks: {
    async session({ session, token, user }) {
      session.user = user;
      return session;
    },
  },
};

export function getAuth(...args) {
  return getServerSession(...args, authOptions);
}
