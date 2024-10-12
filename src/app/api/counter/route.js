let requestCount = 0;

// Watch as I receive multiple requests for the same page load
export async function GET() {
  requestCount++;
  console.log(`Request count: ${requestCount}`);
  return Response.json({ requestCount });
}
