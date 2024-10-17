import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const resTask = await fetch(`${process.env.BACKEND_URL}/tasks/`, {
    method: "POST",
    headers: {
      "Content-Type": "applcation/json",
    },
    body: JSON.stringify(body),
  });
  if (!resTask.ok) {
    return Response.json(
      { error: await resTask.json() },
      { status: resTask.status },
    );
  }
  return Response.json(await resTask.json(), { status: 200 });
}
export async function GET() {
  const resTasks = await fetch(`${process.env.BACKEND_URL}/tasks/`);
  if (!resTasks.ok) {
    return Response.json(
      { error: await resTasks.json() },
      { status: resTasks.status },
    );
  }
  return Response.json(await resTasks.json(), { status: 201 });
}
