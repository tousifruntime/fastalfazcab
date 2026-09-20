

export async function GET(request) {
  return Response.json(
    { message: "This is from Car Controller" },
    { status: 200 }
  );
}