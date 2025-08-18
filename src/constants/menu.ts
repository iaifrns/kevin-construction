import { links } from "./links";

const menu:{text:string, link: string}[] = [
    {
    text: "Accueil",
    link: links.home
},
{
    text: "À propos",
    link: links.about
},
{
    text: "Contact",
    link: links.contact
},
{
    text: "Services",
    link: links.service
}
]

export {menu}