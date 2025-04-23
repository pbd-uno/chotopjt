// import { NextRequest, NextResponse } from "next/server";

// export function middleware ( request: NextRequest ) {
//   console.log( "test: " + request.url );
//   return NextResponse.next();
// }

import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware";

export const middleware = createNextAuthMiddleware();

export const config = {
  matchar: ["/(.*)"],
};


