// app/api/git-pull/route.ts
import { NextResponse } from "next/server";

const API_KEY = "8T0dcCI8bNID4IikMJHtnQYCpIDFeM";
const API_URL = "https://api.cloudways.com/api/v1";
const EMAIL = "mike@ensureprotect.com";

async function callCloudwaysAPI(
  method,
  url,
  accessToken,
  postData
) {
  const fullUrl = `${API_URL}${url}`;
  const headers= {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  const body = postData
    ? new URLSearchParams(
        Object.entries(postData).map(([key, value]) => [key, String(value)])
      ).toString()
    : undefined;

  const res = await fetch(fullUrl, {
    method,
    headers,
    body,
  });

  const data = await res.text();

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${data.substring(0, 1000)}`);
  }

  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const server_id = searchParams.get("server_id");
  const app_id = searchParams.get("app_id");
  const git_url = searchParams.get("git_url");
  const branch_name = searchParams.get("branch_name");

  if (!server_id || !app_id || !git_url || !branch_name) {
    return NextResponse.json(
      { error: "Missing required query parameters." },
      { status: 400 }
    );
  }

  try {
    // Step 1: Fetch Access Token
    const tokenResponse = await callCloudwaysAPI(
      "POST",
      "/oauth/access_token",
      undefined,
      { email: EMAIL, api_key: API_KEY }
    );

    const accessToken = tokenResponse.access_token;

    // Step 2: Execute Git Pull
    const gitPullResponse = await callCloudwaysAPI(
      "POST",
      "/git/pull",
      accessToken,
      {
        server_id,
        app_id,
        git_url,
        branch_name,
      }
    );

    return NextResponse.json(gitPullResponse);
  } catch (err) {
    return NextResponse.json(
      { error: err.message || "An unknown error occurred" },
      { status: 500 }
    );
  }
}