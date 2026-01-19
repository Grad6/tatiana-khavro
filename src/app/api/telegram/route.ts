import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const BOT_TOKEN = process.env.TELEGRAM_BOT_ID || "";
const CHAT_ID = process.env.TELEGRAM_CHANNEL_ID || "";

export async function POST(request: NextRequest) {
  try {
    const text = await request.json();

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error("Missing TELEGRAM_BOT_ID or TELEGRAM_CHAT_ID");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const response = await axios.post(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        chat_id: CHAT_ID,
        parse_mode: "HTML",
        text: text,
      }
    );

    if (!response.data.ok) {
      console.error("Telegram API error:", response.data);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Data sent successfully" });
  } catch (error) {
    console.error("Telegram API error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
