import { NextRequest, NextResponse } from "next/server"
import { getPayloadClient } from "@/lib/payload"

export async function POST(req: NextRequest) {
  try {
    const { slug, password } = await req.json()
    const payload = await getPayloadClient()

    const clients = await payload.find({
      collection: "clients",
      where: {
        slug: { equals: slug },
        dashboardPassword: { equals: password },
        status: { not_equals: "archived" },
      },
      limit: 1,
    })

    if (clients.docs.length === 0) {
      return NextResponse.json(
        { success: false, error: "Invalid password" },
        { status: 401 }
      )
    }

    const client = clients.docs[0]

    // In production, you would set a JWT cookie here
    return NextResponse.json({
      success: true,
      client: {
        id: client.id,
        companyName: client.companyName,
        contactName: client.contactName,
        slug: client.slug,
      },
    })
  } catch (error) {
    console.error("Client auth error:", error)
    return NextResponse.json(
      { success: false, error: "Authentication failed" },
      { status: 500 }
    )
  }
}
