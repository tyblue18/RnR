import NextAuth from "next-auth";
import { MongoClient } from "mongodb";
import { authOptions } from "@/libs/auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

const client = new MongoClient(process.env.MONGODB_URI);
const clientPromise = client.connect();

authOptions.adapter = MongoDBAdapter(clientPromise, { databaseName: "RRdb" });

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
