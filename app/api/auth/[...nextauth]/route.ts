import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'login with email',
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
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
]
}
 );


export{ handler as GET, handler as POST };