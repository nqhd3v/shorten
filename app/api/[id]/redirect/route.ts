import { getLinkById } from "@/service/firebase/link";
import { redirect } from "next/navigation";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { searchParams } = new URL(req.url);
  const pass = searchParams.get("pass") as string;

  const data = await getLinkById(params.id, pass);
  if (!data) {
    return Response.json({ error: "URL NOT FOUND (or EXPIRED)" });
  }
  return Response.json({ url: data });
}

// export async function POST() {
//   const u = await createNewLink({
//     target: "https://love.nqhuy.dev",
//     password: "111200",
//   });
//   return Response.json({ data: u });
// }
