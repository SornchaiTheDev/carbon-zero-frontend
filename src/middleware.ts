import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/signin",
    error: "/signin",
  },
  callbacks: {
    async authorized({ req, token }) {
      const { nextUrl } = req;
      if (nextUrl.pathname.startsWith("/payment")) {
        return !!token;
      }

      return true;
    },
  },
});
