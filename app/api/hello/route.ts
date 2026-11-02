export async function GET() {
    return Response.json({ message: "Hello, from the Next.js API!!" });
}


// What this does:
// GET runs when someone requests this URL.
// Response.json(...) sends back data in JSON format.
// message is the name of the data field.