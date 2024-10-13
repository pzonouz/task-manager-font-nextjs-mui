export async function GET() {
  try {
    const resTasks = await fetch(`${process.env.BACKEND_URL}/tasks`, {
      cache: "no-cache",
    });
    if (!resTasks.ok) {
      throw new Error(resTasks.status.toString());
    }
    return Response.json(await resTasks.json(), { status: 200 });
  } catch (error) {
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
