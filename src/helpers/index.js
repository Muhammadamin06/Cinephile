import {FiSearch} from 'react-icons/fi'
import {FaTelegramPlane,FaTiktok,FaTwitter,FaYoutube,FaLinkedin,} from 'react-icons/fa'
import {BsFacebook,BsInstagram} from 'react-icons/bs'

export const navbarList = [{
        path: "/",
        name: "Главная"
    },
    {
        path: "/movies",
        name: "Фильмы"
    },
    {
        path: "/series",
        name: "Сериалы"
    },
    {
        path: "/search",
        name: < FiSearch />
    },
]

export const footerList = [{
        path: "/",
        name: < FaTelegramPlane />
    },
    {
        path: "/",
        name: < BsFacebook />
    },
    {
        path: "/",
        name: < BsInstagram />
    },
    {
        path: "/",
        name: < FaTiktok />
    },
    {
        path: "/",
        name: < FaTwitter />
    },
    {
        path: "/",
        name: < FaYoutube />
    },
    {
        path: "/",
        name: < FaLinkedin />
    },
]