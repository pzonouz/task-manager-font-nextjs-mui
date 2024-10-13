export async function GET() {
  try {
    const resPriorities = await fetch(`${process.env.BACKEND_URL}/priorities`, {
      cache: "no-cache",
    });
    if (!resPriorities.ok) {
      throw new Error();
    }
    return Response.json(await resPriorities.json(), { status: 200 });
  } catch (error) {
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
