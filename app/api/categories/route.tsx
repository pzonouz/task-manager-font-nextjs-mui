export async function GET() {
  try {
    const resCategories = await fetch(
      `${process.env.BACKEND_URL}/categories/`,
      {
        cache: "no-cache",
      },
    );
    if (!resCategories.ok) {
      throw new Error(resCategories.status.toString());
    }
    return Response.json(await resCategories.json(), { status: 200 });
  } catch (error) {
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
