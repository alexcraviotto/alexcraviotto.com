"use server"

export default async function sendDiscordWebhook({email, content}: { email: string, content: string}) {
    const webhookUrl = process.env.DISCORD_WEBHOOK
    if (!webhookUrl) {
        throw new Error("DISCORD_WEBHOOK_URL is not set");
    }
    const payload = {
        embeds: [
            {
                description: content,
                title: "New contact form submission",
                fields: [
                    {
                        name: "Email",
                        value: email,
                    },
             
                ],
            },
        ],
    };
    const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    if (!response.ok) {
        throw new Error(`Failed to send webhook: ${response.statusText}`);
    }
}