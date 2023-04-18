import { rest } from "msw";

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem("is-authenticated", "true");
    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),
  rest.get("/user", (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem("is-authenticated");
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
  rest.get("/animals", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: "a4cb6358-0222-4b39-91b0-4311ac07aed1",
          type: "rabbit",
          species: "French Angora",
        },
        {
          id: "347a340b-484e-4ea8-994e-c45a1c7c1c9c",
          type: "bear",
          species: "Brown bear",
        },
      ])
    );
  }),
];
