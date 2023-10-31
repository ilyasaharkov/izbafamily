const dictBots = {
    report: '6754495965:AAFndC9OskOTEwAOU282F3AjPdR0RGnQPSw',
    lead: '6719310584:AAEUv3w6m7eH6GrCyTo1kNOKeTkZu0pScuI'
}
const chatID = '-4008082861'

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
                    return  [response.status, response.statusText];
                }
            })
            .catch((error) => {
                return error
            });
    } catch (error) {
        console.error("Ошибка при запуске telegram sender:", error);
    }
}

