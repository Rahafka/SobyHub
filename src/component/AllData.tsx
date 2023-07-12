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
        url: "/",
    },
    {
        key: "key_insta",
        icon: instaIcon,
        url: "/",
    },
    {
        key: "key_tiktok",
        icon: tiktokIcon,
        url: "/",
    },
    {
        key: "key_telegram",
        icon: telegramIcon,
        url: "/",
    },
    {
        key: "key_whatsup",
        icon: whatsupIcon,
        url: "/",
    },
    {
        key: "key_linkend",
        icon: linkendIcon,
        url: "/",
    },
    {
        key: "key_facebook",
        icon: facebookIcon,
        url: "/",
    },
    {
        key: "key_twitter",
        icon: twitterIcon,
        url: "/",
    },

];

export const socialMenuIconLight = [
    {
        key: "key_youtube",
        icon: youtubeIconLight,
        url: "/",
    },
    {
        key: "key_insta",
        icon: instaIconLight,
        url: "/",
    },
    {
        key: "key_tiktok",
        icon: tiktokIconLight,
        url: "/",
    },
    {
        key: "key_telegram",
        icon: telegramIconLight,
        url: "/",
    },
    {
        key: "key_whatsup",
        icon: whatsupIconLight,
        url: "/",
    },
    {
        key: "key_linkend",
        icon: linkendIconLight,
        url: "/",
    },
    {
        key: "key_facebook",
        icon: facebookIconLight,
        url: "/",
    },
    {
        key: "key_twitter",
        icon: twitterIconLight,
        url: "/",
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