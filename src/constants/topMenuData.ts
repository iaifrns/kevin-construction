import { email, location, webpage } from "./data"

const enterpriseInfo: {icons: string, text: string}[] = [
    {
        icons: "material-symbols-light:mail-outline",
        text: email
    },
    {
        icons: "ei:location",
        text: location
    },
    {
        icons: "streamline-plump:web",
        text: webpage
    }
]

const media = ["ri:facebook-fill", "prime:twitter", "hugeicons:instagram", "ri:linkedin-fill"]

export {enterpriseInfo, media}