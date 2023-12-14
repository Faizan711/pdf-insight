import { authMiddleware } from "@kinde-oss/kinde-auth-nextjs/server"

export const config  = {
    // matcher: ['/dashboard/:path*', '/auth-callback']
    matcher: ['/da', '/aut']
}

export default authMiddleware 