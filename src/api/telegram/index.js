

const dictBots = {
    report: process.env.VUE_APP_BOT_REPORT_KEY,
    lead: process.env.VUE_APP_BOT_LEAD_KEY
}
const chatID = process.env.VUE_APP_CHAT_ID

export const tgBotSender = async (targetBot, reportData) => {
    const selectBot = dictBots[targetBot]
    const sendPath = `https://api.telegram.org/bot${selectBot}/sendMessage`;

    const messageData = {
        parse_mode: 'MarkdownV2',
        chat_id: chatID,
        text: reportData
    };

    try {
        return fetch(sendPath, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(messageData)
        })
            .then((response) => {
                if (response.ok) {
                   return true
                } else {
                    return [response.status, response.statusText];
                }
            })
            .catch((error) => {
                return error
            });
    } catch (error) {
        console.error("Ошибка при запуске telegram sender:", error);
    }
}

