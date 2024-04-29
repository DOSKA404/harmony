import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            id: 'login',
            name: 'Credentials',

          
          credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            const res = await fetch(`http://localhost:8080/Login?username=${credentials.username}&password=${credentials.password}`, {
              method: 'POST',
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" }
            })
            const user = await res.json()
      
            if (res.ok && user) {
              return user
            }
            return null
          }
        }),
        CredentialsProvider({
            id: 'signup',
            name: 'Credentials',
  
            
            credentials: {
              username: { label: "Username", type: "text", placeholder: "inscription" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              const res = await fetch(`http://localhost:8080/Register?username=${credentials.username}&password=${credentials.password}`, {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: { "Content-Type": "application/json" }
              })
              const user = await res.json()
        
              if (res.ok && user) {
                return user
              }
              return null
            }
          })

      ]
})

export { handler as GET, handler as POST }