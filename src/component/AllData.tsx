import instaIcon from "../assets/social-icon-dark/social insta.svg";
import tiktokIcon from "../assets/social-icon-dark/social tiktok.svg";
import telegramIcon from "../assets/social-icon-dark/social telegram.svg";
import whatsupIcon from "../assets/social-icon-dark/social whatsup.svg";
import linkendIcon from "../assets/social-icon-dark/social linkend.svg";
import facebookIcon from "../assets/social-icon-dark/social facebook.svg";
import twitterIcon from "../assets/social-icon-dark/social twitter.svg";
import youtubeIcon from "../assets/social-icon-dark/social youtube.svg";
import { t } from "i18next";
import instaIconLight from "../assets/social-icon-light/social insta.svg";
import tiktokIconLight from "../assets/social-icon-light/social tiktok.svg";
import telegramIconLight from "../assets/social-icon-light/social telegram.svg";
import whatsupIconLight from "../assets/social-icon-light/social whatsup.svg";
import linkendIconLight from "../assets/social-icon-light/social linkend.svg";
import facebookIconLight from "../assets/social-icon-light/social facebook.svg";
import twitterIconLight from "../assets/social-icon-light/social twitter.svg";
import youtubeIconLight from "../assets/social-icon-light/social youtube.svg";
import slideImage from "../assets/img/soby-slider-white.png";
import SliderContain from "./slider/SliderContain";
import { ReactNode } from "react";
import BrandingSliderContain from "./brandingSlider/BrandingSliderContain";
export const socialMenuIcon = [
    {
        key: "key_youtube",
        icon: youtubeIcon,
        url: "https://www.youtube.com/@asksoby",
    },
    {
        key: "key_insta",
        icon: instaIcon,
        url: "https://www.instagram.com/asksoby/",
    },
    {
        key: "key_tiktok",
        icon: tiktokIcon,
        url: "https://www.tiktok.com/@asksoby",
    },
    {
        key: "key_telegram",
        icon: telegramIcon,
        url: "https://t.me/asksoby",
    },
    {
        key: "key_whatsup",
        icon: whatsupIcon,
        url: "https://api.whatsapp.com/send/?phone=%2B971556766748&text&type=phone_number&app_absent=0",
    },
    {
        key: "key_linkend",
        icon: linkendIcon,
        url: "https://www.linkedin.com/authwall?trk=gf&trkInfo=AQEyn90jKp4q_wAAAYmDyJkIO7gPC_esuy4on7bC7J5pQVYd407ALyqQlfc0hgIvt71Pr0-oeNMakHBp8DJePRftS8gkWhAR6traOhIA2p0HZT1JDMuThREE16j9FDw5WudWf2g=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fasksoby",
    },
    {
        key: "key_facebook",
        icon: facebookIcon,
        url: "https://m.facebook.com/asksoby?_rdr",
    },
    {
        key: "key_twitter",
        icon: twitterIcon,
        url: "https://twitter.com/i/flow/login?redirect_after_login=%2Fasksoby",
    },

];

export const socialMenuIconLight = [
    {
        key: "key_youtube",
        icon: youtubeIconLight,
        url: "https://www.youtube.com/@asksoby",
    },
    {
        key: "key_insta",
        icon: instaIconLight,
        url: "https://www.instagram.com/asksoby/",
    },
    {
        key: "key_tiktok",
        icon: tiktokIconLight,
        url: "https://www.tiktok.com/@asksoby",
    },
    {
        key: "key_telegram",
        icon: telegramIconLight,
        url: "https://t.me/asksoby",
    },
    {
        key: "key_whatsup",
        icon: whatsupIconLight,
        url: "https://api.whatsapp.com/send/?phone=%2B971556766748&text&type=phone_number&app_absent=0",
    },
    {
        key: "key_linkend",
        icon: linkendIconLight,
        url: "https://www.linkedin.com/authwall?trk=gf&trkInfo=AQEyn90jKp4q_wAAAYmDyJkIO7gPC_esuy4on7bC7J5pQVYd407ALyqQlfc0hgIvt71Pr0-oeNMakHBp8DJePRftS8gkWhAR6traOhIA2p0HZT1JDMuThREE16j9FDw5WudWf2g=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fasksoby",
    },
    {
        key: "key_facebook",
        icon: facebookIconLight,
        url: "https://m.facebook.com/asksoby?_rdr",
    },
    {
        key: "key_twitter",
        icon: twitterIconLight,
        url: "https://twitter.com/i/flow/login?redirect_after_login=%2Fasksoby",
    },

];

interface IMainSliderData {
    key: string;
    imgSrc: string;
    sliderContent: ReactNode
}
export const mainSliderData: IMainSliderData[] = [
    {
        key: "slide_1",
        imgSrc: slideImage,
        sliderContent: <SliderContain />
    }, {
        key: "slide_1",
        imgSrc: slideImage,
        sliderContent: <SliderContain />
    },

]
export const brandingSliderData: IMainSliderData[] = [
    {
        key: "slide_1",
        imgSrc: slideImage,
        sliderContent: <BrandingSliderContain />
    }, {
        key: "slide_1",
        imgSrc: slideImage,
        sliderContent: <BrandingSliderContain />
    },

]