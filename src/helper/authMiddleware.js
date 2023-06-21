// import adminFirebase from "../../firebaseAdmin";

import { NextResponse } from "next/server";
import User from "@/Modal/User";

export const AdminMiddleware = (handler) => async (req, res) => {
  try {
    const authorization = req.headers.get("Authorization");
    console.log(authorization);
    if (!authorization || !authorization.startsWith("Bearer ")) {
      return NextResponse.json(
        {
          isAdmin: false,
          error: "Token Missing, Relogging Now",
          isSuccess: false,
        },
        {
          status: 400,
        }
      );
    }
    const token = authorization.split("Bearer ")[1];
    const decodedToken = await User.findById(token);
    console.log(token);
    console.log(decodedToken);
    if (!decodedToken) {
      return NextResponse.json(
        {
          isAdmin: false,
          error: "You need to Login",
          isSuccess: false,
        },
        {
          status: 400,
        }
      );
    }

    if (
      process.env.ADMIN_KEY === decodedToken.role ||
      process.env.ROOT_KEY === decodedToken.role
    ) {
      return handler(req, res);
    } else {
      return NextResponse.json(
        {
          isAdmin: false,
          error: "Access Denied",
          isSuccess: false,
        },
        {
          status: 400,
        }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        isAdmin: false,
        error: error,
        isSuccess: false,
      },
      {
        status: 400,
      }
    );
  }
};

export const RootMiddleware = (handler) => async (req, res) => {
  try {
    const authorization = req.headers.get("Authorization");
    if (!authorization || !authorization.startsWith("Bearer ")) {
      return NextResponse.json(
        {
          isAdmin: false,
          error: "Token Missing, Relogging Now",
          isSuccess: false,
        },
        {
          status: 400,
        }
      );
    }
    const token = authorization.split("Bearer ")[1];
    const decodedToken = await User.findById(token);
    console.log(token);
    console.log(decodedToken);
    if (!decodedToken) {
      return NextResponse.json(
        {
          isAdmin: false,
          error: "You need to Login",
          isSuccess: false,
        },
        {
          status: 400,
        }
      );
    }

    if (process.env.ROOT_KEY === decodedToken.role) {
      return handler(req, res);
    } else {
      return NextResponse.json(
        {
          isAdmin: false,
          error: "Access Denied",
          isSuccess: false,
        },
        {
          status: 400,
        }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        isAdmin: false,
        error: error,
        isSuccess: false,
      },
      {
        status: 400,
      }
    );
  }
};
