import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
  CredentialsProvider({
   
    name: 'login with email',
    
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    
    async authorize(credentials, req) {
        const username=credentials?.username;
        const password=credentials?.password;
        console.log("username:", username);
        console.log("password:", password);
       
      const user={
        username:"manish",
        password:"123456"
    }
    if(user){
        return user;
    }else{
        return null;
    }
    }
  })
  ,
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
]
}
 );


export{ handler as GET, handler as POST };