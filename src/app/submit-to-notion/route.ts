export const runtime = "edge";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    if (req.method !== "POST") {
      return NextResponse.json(
        { error: "Method Not Allowed" },
        {
          status: 405,
        }
      );
    }

    // Enable body parsing middleware
    const body = await req.json();
    const { name, email, budget, website } = body;
    console.log("body received", body);
    const notionDatabaseId = process.env.NOTION_DB_ID;
    const integrationToken = process.env.NOTION_SECRET;

    const url = `https://api.notion.com/v1/pages`;

    const data = {
      parent: { database_id: notionDatabaseId },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Budget: {
          number: budget,
        },
        Website: {
          url: website,
        },
      },
    };

    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${integrationToken}`,
        "Notion-Version": "2021-08-16",
      },
      body: JSON.stringify(data),
    });

    if (result.status !== 200) {
      const error = await result.json();
      console.error("Got error saving data", error);
      return NextResponse.json(
        { message: error.message },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      message: "Thank you! we'll answer you shortly",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}
