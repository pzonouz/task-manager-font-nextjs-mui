// TODO: Error handling
export async function GET() {
    const res=await fetch(`${process.env.BACKEND_URL}/categories`)
    const categories=await res.json();
    return Response.json(categories)
}