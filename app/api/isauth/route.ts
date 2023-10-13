import { NextRequest, NextResponse } from "next/server";

import { auth } from "../auth";

async function handle(req: NextRequest) {
  const res = { isAuth: !auth(req).error };
  return NextResponse.json(res);
}

export const GET = handle;
export const POST = handle;

export const runtime = "edge";
