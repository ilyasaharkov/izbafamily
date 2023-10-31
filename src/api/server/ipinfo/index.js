export const fetchIPInfo = async () => {
    try {
        const response = await fetch("https://ipinfo.io/212.112.100.99?token=01ba7188e068f4");
        if (response.ok) {
            return await response.json();
        } else {
            console.error("Ошибка при запросе IP-информации:", response.status);
        }
    } catch (error) {
        console.error("Ошибка при запросе IP-информации:", error);
    }
}
