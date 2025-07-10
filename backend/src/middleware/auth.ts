// import dotenv from "dotenv";
// dotenv.config();
// import { expressjwt } from "express-jwt";
// import jwksRsa from "jwks-rsa";

// console.log("checkJwt AUTH0_DOMAIN:", process.env.AUTH0_DOMAIN);
// console.log("checkJwt audience:", process.env.AUTH0_AUDIENCE);

// export const checkJwt = expressjwt({
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
//   }),
//   audience: process.env.AUTH0_AUDIENCE,
//   issuer: `https://${process.env.AUTH0_DOMAIN}/`,
//   algorithms: ["RS256"],
// }).unless({
//   path: ["/healthcheck"],
// });

import dotenv from "dotenv";
dotenv.config();

import { expressjwt, GetVerificationKey } from "express-jwt";
import jwksRsa from "jwks-rsa";

// 🔐 Ensure environment variables are loaded
const { AUTH0_DOMAIN, AUTH0_AUDIENCE } = process.env;
if (!AUTH0_DOMAIN || !AUTH0_AUDIENCE) {
  throw new Error("AUTH0_DOMAIN and AUTH0_AUDIENCE must be set in .env");
}

console.log("[Auth Middleware] AUTH0_DOMAIN:", AUTH0_DOMAIN);
console.log("[Auth Middleware] AUTH0_AUDIENCE:", AUTH0_AUDIENCE);

// ✅ Create the JWT check middleware
export const checkJwt = expressjwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true, // ⚡ Improve performance with caching
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${AUTH0_DOMAIN}/.well-known/jwks.json`,
  }) as GetVerificationKey,
  audience: AUTH0_AUDIENCE,
  issuer: `https://${AUTH0_DOMAIN}/`,
  algorithms: ["RS256"],
  requestProperty: "user",
  credentialsRequired: true, // ⛔ will 401 if token is missing or invalid
});

// ✅ Optional global error handler (add this in main Express setup)
export const jwtErrorHandler = (err: any, req: any, res: any, next: any) => {
  if (err.name === "UnauthorizedError") {
    console.error("[JWT Middleware] UnauthorizedError:", err.message);
    return res.status(401).json({ error: "Invalid or missing token" });
  }
  next(err);
};
