import { NextRequest, NextResponse } from "next/server";
import { GEMINI_BASE_URL, Google, ModelProvider } from "@/app/constant";

import { auth } from "../auth";

async function handle(req: NextRequest) {
  const res = { isAuth: !auth(req, ModelProvider.GeminiPro).error };
  return NextResponse.json(res);
}

export const GET = handle;
export const POST = handle;

export const runtime = "edge";
