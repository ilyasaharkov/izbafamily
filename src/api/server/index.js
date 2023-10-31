import { fetchIPInfo } from './ipinfo/index.js'

const server = {
    ip: () => fetchIPInfo()
}

export {
    server
}
