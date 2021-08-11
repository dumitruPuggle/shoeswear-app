import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ButtonMaterial from '@material-ui/core/Button'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Rating from '@material-ui/lab/Rating';
import * as IoniIcons from "react-icons/io5"
import ListItem from '@material-ui/core/ListItem';
import { useMediaQuery } from 'react-responsive'

const lang = 'RO'
const data = {
    "id": "nike-air-zoom-alphafly-next-fly-nkit",
    "title": "Nike Air Zoom Alphafly NEXT% Flyknit",
    "markdown": null,
    "media": {
        "green-aqua": [
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e361b068-3970-4609-b29d-6f0f09f129a1/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-air-zoom-alphafly-next-mGK8M0.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/906e5c98-b711-4782-872e-8f1b08013212/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-air-zoom-alphafly-next-mGK8M0.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/676c7f91-924e-43b0-8d30-44fa9f127491/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-air-zoom-alphafly-next-mGK8M0.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b3c39e71-1f77-4eac-a3bb-0ea25205481e/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-air-zoom-alphafly-next-mGK8M0.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0832145e-7077-419d-a1fd-ef8d8a711dcf/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-air-zoom-alphafly-next-mGK8M0.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ddac3094-6f97-47f0-931d-8563af8fa7be/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-air-zoom-alphafly-next-mGK8M0.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d9cf5ff9-a819-495f-88be-7b7407aaa3a7/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-air-zoom-alphafly-next-mGK8M0.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fb75ecce-a9f7-4da1-b4be-ef6f22b8524f/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-air-zoom-alphafly-next-mGK8M0.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ec849ba4-22f8-4e7d-ae6c-10039f7be809/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-air-zoom-alphafly-next-mGK8M0.png"
            }
        ],
        "pink-blast": [
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1a7f8760-47d8-4396-9f0a-5feb79598e41/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-air-zoom-alphafly-next-flyknit-xDM1Lj.png"
            },
            {
                "type": "video",
                "src": "https://static.nike.com/a/videos/q_90,vc_vp9/e239a7fc-6085-46f8-9b2f-3b52756509b4/video.webm"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/aa88fd79-8ac9-4239-949f-257f8a838639/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-air-zoom-alphafly-next-flyknit-xDM1Lj.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9540397e-50e0-45f7-878e-5ea2a1481b3d/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-air-zoom-alphafly-next-flyknit-xDM1Lj.png"
            }
        ],
        "washed-coral": [
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6eebe93e-067a-4caf-b51e-b4b9583b3c2c/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-air-zoom-alphafly-next-mGK8M0.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6c7d803d-fafa-4c18-8058-9f1b79fc0c44/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-air-zoom-alphafly-next-mGK8M0.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/57231a31-2d5d-48d2-81ca-31e428c46fff/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-air-zoom-alphafly-next-mGK8M0.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a810a2f0-acac-4518-89b2-7f33dddb0bc8/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-air-zoom-alphafly-next-mGK8M0.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ba920a58-39f8-4b78-872d-84b3f70913e6/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-air-zoom-alphafly-next-mGK8M0.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b0ab2c55-1133-48b5-9d4f-231cf64f12a6/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-air-zoom-alphafly-next-mGK8M0.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d890ea51-7f29-4954-bc69-2148f7d4cf47/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-air-zoom-alphafly-next-mGK8M0.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f4fb88b3-9e63-4f35-8b7f-960a37e7de08/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-air-zoom-alphafly-next-mGK8M0.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7c1474a3-e7d6-4e55-9ae6-ed75223708e8/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-air-zoom-alphafly-next-mGK8M0.png"
            }
        ],
        "defaults": {
            "defaultMediaID": "pink-blast"
        }
    },
    "specifications": {
        "RO": [
            {"value": "Culori disponibile: Albe/Washed Coral/Pink Blast/Negre"},
            {"value": "Pernuță: Proprietară Nike"},
            {"value": "Tip de încălțăminte: Sport"},
            {"value": "Model: DJ5430-100"},
            {"value": "Țara de origine: Vietnam"},
            {"value": "Ușor de pus și de dat jos datorită buclei călcâiului"}
        ]
    },
    "sizes": [
        {
            "size": "38",
            "inStock": false
        },
        {
            "size": "39",
            "inStock": true
        },
        {
            "size": "40",
            "inStock": true
        },
        {
            "size": "41",
            "inStock": true
        },
        {
            "size": "42",
            "inStock": false
        },
        {
            "size": "45",
            "inStock": true
        }
    ],
    "prices": [
        {
            "price": "140",
            "currency": "EUR"
        },
        {
            "price": "200",
            "currency": "EUR"
        }
    ],
    "feedback": {
        "total": "120",
        "rating": "4.41",
        "data": [
            {
                "name": "Alexandru",
                "comment": "Marfa este destul de bună, recomand tuturor.",
                "rating": "3.12",
                "date": "21.06.2021",
                "media": [
                    {
                        "type": "img",
                        "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1a7f8760-47d8-4396-9f0a-5feb79598e41/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-air-zoom-alphafly-next-flyknit-xDM1Lj.png"
                    },
                    {
                        "type": "img",
                        "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1a7f8760-47d8-4396-9f0a-5feb79598e41/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-air-zoom-alphafly-next-flyknit-xDM1Lj.png"
                    },
                    {
                        "type": "img",
                        "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1a7f8760-47d8-4396-9f0a-5feb79598e41/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-air-zoom-alphafly-next-flyknit-xDM1Lj.png"
                    }
                ]
            },
            {
                "name": "Михайл",
                "comment": "Такое себе качество, не совсем советую",
                "rating": "1.5",
                "date": "16.05.2021",
                "media": [
                    {
                        "type": "img",
                        "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1a7f8760-47d8-4396-9f0a-5feb79598e41/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-air-zoom-alphafly-next-flyknit-xDM1Lj.png"
                    },
                    {
                        "type": "img",
                        "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1a7f8760-47d8-4396-9f0a-5feb79598e41/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-air-zoom-alphafly-next-flyknit-xDM1Lj.png"
                    },
                    {
                        "type": "img",
                        "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1a7f8760-47d8-4396-9f0a-5feb79598e41/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-air-zoom-alphafly-next-flyknit-xDM1Lj.png"
                    }
                ]
            },
            {
                "name": "Alexandra",
                "comment": "Super! recomand tuturor",
                "rating": "5",
                "date": "20.05.2021",
                "media": [
                    {
                        "type": "img",
                        "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1a7f8760-47d8-4396-9f0a-5feb79598e41/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-air-zoom-alphafly-next-flyknit-xDM1Lj.png"
                    },
                    {
                        "type": "img",
                        "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1a7f8760-47d8-4396-9f0a-5feb79598e41/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-air-zoom-alphafly-next-flyknit-xDM1Lj.png"
                    },
                    {
                        "type": "img",
                        "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1a7f8760-47d8-4396-9f0a-5feb79598e41/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-air-zoom-alphafly-next-flyknit-xDM1Lj.png"
                    }
                ]
            },
            {
                "name": "Victor",
                "comment": "Nu merită banii, au venit cu cutia ruptă, nu vă recomand să cumpărați nimic de pe site-ul acesta. Toată marfa pare să fie din China. Mai bine cumpărați ceva din magazinele originale Nike sau Addidas. Am cerut dispută, bine că măcar banii mi-au întors înapoi.",
                "rating": "1",
                "date": "12.08.2021",
                "media": [
                    {
                        "type": "img",
                        "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1a7f8760-47d8-4396-9f0a-5feb79598e41/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-air-zoom-alphafly-next-flyknit-xDM1Lj.png"
                    },
                    {
                        "type": "img",
                        "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1a7f8760-47d8-4396-9f0a-5feb79598e41/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-air-zoom-alphafly-next-flyknit-xDM1Lj.png"
                    },
                    {
                        "type": "img",
                        "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1a7f8760-47d8-4396-9f0a-5feb79598e41/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-air-zoom-alphafly-next-flyknit-xDM1Lj.png"
                    }
                ]
            }
        ]
    },
    "analytics": {
        "numberOfSales": 200
    },
    "colors": {
        "RO": [
            {
                "name": "Green Aqua",
                "inStock": true,
                "mediaID": "green-aqua"
            },
            {
                "name": "Washed Coral",
                "inStock": true,
                "mediaID": "washed-coral"
            },
            {
                "name": "Pink Blast",
                "inStock": true,
                "mediaID": "pink-blast"
            }
        ]
    },
    "inStock": true
}

export default function Products(props){
    return(
        <div style={{padding: 20, fontFamily: 'Roboto'}}>
            <ProductInformation data={data}/>
            <Feedback data={data}/>
        </div>
    )
}

function ProductInformation(props){
    const data = props.data
    title(data.title)
    const Desktop = ({ children }) => {
		const isDesktop = useMediaQuery({ minWidth: 992 })
		return isDesktop ? children : null
	}
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    // const Mobile = ({ children }) => {
	// 	const isMobile = useMediaQuery({ maxWidth: 767 })
	// 	return isMobile ? children : null
	// }
    const [mediaID, setMediaID] = React.useState(data.media[data.media.defaults.defaultMediaID])
    const [addToBasket, setToBasketDialog] = React.useState(false)
    function addToBasketFunction(){
        setToBasketDialog(true)
        setTimeout(function(){ setToBasketDialog(false) }, 1000)
    }
    return(
        <>
            <div>
                <Desktop>
                    <Row style={{marginBottom: 10}}>
                        <Col style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                            <ButtonMaterial variant="outlined" color="primary">Înapoi</ButtonMaterial>
                        </Col>
                        <Col style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                            <ButtonMaterial variant="outlined" color="primary"><Icon color={"#115293"} spaceRight={5} size={24} icon={"IoShareOutline"} />Copie link-ul</ButtonMaterial>
                        </Col>
                    </Row>
                </Desktop>
                <h1 style={{fontFamily: 'Roboto'}}>{data.title}</h1>
                <Desktop>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 20, fontFamily: 'Roboto', fontSize: 16, overflow: 'auto'}}>
                        <p style={{marginBottom: 0, marginRight: 10}}>Articol #{data.id}</p>
                        <Rating style={{marginBottom: 0, marginRight: 10}} name="read-only" value={data.feedback.rating} readOnly />
                        <p style={{marginBottom: 0, marginRight: 10}}>{data.feedback.total} recenzii</p>
                        <p style={{marginBottom: 0, marginRight: 10}}>Cumpărat mai mult de {data.analytics.numberOfSales} ori.</p>
                    </div>
                </Desktop>
            </div>
            <Row>
                <Col style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{width: isDesktopOrLaptop ? '70%' : '100%'}}>
                        <ProductCarouselSlider data={mediaID}/>
                    </div>
                </Col>
                <Col>
                {/* {data.price}
                        {data.currency === "MDL" ? " LEI" : data.currency === "USD" ? " $" : data.currency === "EUR" ?
                        " €" : data.currency === "RUB" ? " ₽" : null} */}
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                        <h1 style={{fontFamily: 'Roboto', margin: 0}}>
                            {data.prices[data.prices.length - 1].price}
                            {data.prices[data.prices.length - 1].currency === "MDL" ? " LEI" : data.prices[data.prices.length - 1].currency === "USD" ? " $" : data.prices[data.prices.length - 1].currency === "EUR" ?
                            " €" : data.prices[data.prices.length - 1].currency === "RUB" ? " ₽" : null}
                        </h1>
                        {
                            data.prices.length > 1 &&
                            <p style={{marginLeft: 10, marginBottom: 0, fontSize: 20, textDecoration: 'line-through'}}>
                                {data.prices[data.prices.length - 2].price}
                                {data.prices[data.prices.length - 2].currency === "MDL" ? " LEI" : data.prices[data.prices.length - 2].currency === "USD" ? " $" : data.prices[data.prices.length - 2].currency === "EUR" ?
                                " €" : data.prices[data.prices.length - 2].currency === "RUB" ? " ₽" : null}
                            </p>
                        }
                    </div>
                    <p style={{fontSize: 16, marginBottom: 0, color: data.inStock ? 'green' : 'red'}}>{data.inStock ? "Produsul este în stoc" : "Produsul nu este disponibil"}</p>
                    <div style={{marginTop: 20, marginBottom: 20}}>
                        <h3>Specificații: </h3>
                        {
                            data.specifications[lang].map((item, index) => {
                                return(
                                    <p style={{fontSize: 16}}>{item.value}</p>
                                )
                            })
                        }
                    </div>
                    {
                        data.sizes &&
                        <div style={{width: isDesktopOrLaptop && '70%', marginBottom: 20}}>
                            <h3>Mărimi:</h3>
                            {
                                data.sizes.map((item, index) => {
                                    return(
                                        <ButtonMaterial disabled={!item.inStock && true} variant="outlined" style={{marginRight: 10}}>
                                            {item.size}
                                        </ButtonMaterial>
                                    )
                                })
                            }
                        </div>
                    }
                    {
                        data.colors &&
                        <div style={{width: isDesktopOrLaptop && '70%'}}>
                            <h3>Culori:</h3>
                            {
                                data.colors[lang].map((item, index) => {
                                    const isSelected = mediaID === item.mediaID
                                    console.log(mediaID)
                                    return(
                                        <ButtonMaterial style={{marginRight: 10, backgroundColor: isSelected && '#115293', color: isSelected && 'white'}} onClick={()=> !isSelected && setMediaID(data.media[item.mediaID])} disabled={!item.inStock && true} variant="outlined">
                                            {item.name}
                                        </ButtonMaterial>
                                    )
                                })
                            }
                        </div>
                    }
                    <div style={{marginTop: 20, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <ButtonMaterial onClick={() => addToBasketFunction(true)} style={{marginRight: 10}} variant="contained" color="primary" size="large" disableElevation>Adaugă în coș</ButtonMaterial>
                        <Icon color={"#115293"} size={40} icon={"IoHeartOutline"}/>
                        {
                            addToBasket &&
                            <SuccessBanner text={"Adăugat în coș"}/>
                        }
                    </div>
                </Col>
            </Row>
        </>
    )
}

function Feedback(props){
    const data = props.data
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    return(
        <Container style={{padding: !isDesktopOrLaptop && 0, marginTop: 40, marginBottom: 70}}>
            <Icon size={70} icon={"IoPeopleCircleOutline"}/>
            <h1>Recenzii: {data.feedback.total}</h1>
            <p style={{fontSize: 16, marginBottom: 40}}>Pentru a putea scrie o recenzie la acest produs este necesar să intrați în contul dvs, și să achiziționați produsul.</p>
            { 
                data.feedback.data.map((item, index) => {
                    return(
                        <ListItem button style={{display: 'flex', paddingLeft: 0, paddingRight: 0, flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10, borderBottom: index !== data.feedback['data'].length - 1 ? '1px solid rgb(0,0,0, 0.12)' : null}}>
                            <div style={{width: '100%'}}>
                                <Row style={{marginBottom: 5}}>
                                    <Col style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        <p style={{marginBottom: 0, fontSize: 20, fontWeight: 600}}>{item.name}</p>
                                    </Col>
                                    <Col style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                                        <p style={{marginBottom: 0, fontSize: 16}}>{item.date}</p>
                                    </Col>
                                </Row>
                                <Rating style={{marginBottom: 0, marginRight: 10}} name="read-only" value={item.rating} readOnly />
                                <p style={{marginBottom: 0}}>{item.comment}</p>
                                <div style={{marginTop: 10}}>
                                    {
                                        item.media.map((item, index) => {
                                            return(
                                                <img alt={'Client media'} style={{width: 40, objectFit: 'cover', marginRight: 10}} src={item.src}/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </ListItem>
                    )
                })
            }
        </Container>
    )
}

function ProductCarouselSlider(props){
    const mediaID = props.data
    console.log(mediaID)
    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        cursor: 'pointer',
        transition: '0.2s linear'
    };
    const indicatorStyles = {
        background: 'rgb(0, 0, 0, 0.15)',
        width: 10,
        height: 10,
        borderRadius: '100%',
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        display: 'inline-block',
        margin: '0 8px',
        outline: 'none'
    };
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const itemThumb = (props) =>
        props.map(item => {
            return (
                <>
                    {
                        item.props.children.type === "video" ?
                            <div style={{height: 80, backgroundColor: 'rgb(0, 0, 0, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <Icon size={40} icon={"IoPlayCircleOutline"}/>
                            </div>
                        : 
                            <img style={{height: 80}} alt={"Carousel Thumb"} src={item.props.children.props.src} />
                    }
                </>
            )
    });
    return(
        <Carousel
            statusFormatter={(current, total) => ``}
            renderThumbs={itemThumb}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <div onClick={onClickHandler} style={{ ...arrowStyles, left: 15, backgroundColor: 'rgb(0, 0, 0, 0.05)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)', padding: 10, borderRadius: '100%' }}>
                        <Icon color={"rgb(255, 255, 255, 0.7)"} size={40} icon={"IoArrowBackOutline"} />
                    </div>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <div onClick={onClickHandler} style={{ ...arrowStyles, right: 15, backgroundColor: 'rgb(0, 0, 0, 0.05)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)', padding: 10, borderRadius: '100%' }}>
                        <Icon color={"rgb(255, 255, 255, 0.7)"} size={40} icon={"IoArrowForwardOutline"} />
                    </div>
                )
            } 
            renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                    return (
                        <li
                            style={{ ...indicatorStyles, background: '#000' }}
                            aria-label={`Selected: ${label} ${index + 1}`}
                            title={`Selected: ${label} ${index + 1}`}
                        />
                    );
                }
                return (
                    <li
                        style={indicatorStyles}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        title={`${label} ${index + 1}`}
                        aria-label={`${label} ${index + 1}`}
                    />
                );
                }} axis={"horizontal"}
            >
            {
                mediaID.map((item, index) => {
                    return (
                        <div style={{display: 'flex', alignItems: 'center', height: isDesktopOrLaptop ? 650 : null}}>
                            {
                                item.type === "image" ? <img alt={"Product Details"} src={item.src} style={{width: '100%', objectFit: 'cover'}}/> :
                                item.type === "video" && <video style={{width: '100%'}} src={item.src} controls={false} loop={true} autoPlay muted/>
                            }
                        </div>
                    )
                })
            }
        </Carousel>
    )
}

function SuccessBanner(props){
    return(
        <div style={{position: "fixed", top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 100}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(0, 0, 0, 0.05)', paddingLeft: 30, paddingRight: 40, paddingTop: 10, paddingBottom: 10, borderRadius: 20, backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)'}}>
                <Icon spaceBottom={10} color={'rgb(0,0,0, 0.35)'} size={50} icon={"IoCheckmarkCircleOutline"}/>
                <h1 style={{color: 'rgb(0,0,0, 0.35)', fontSize: 20, fontWeight: 700}}>{props.text}</h1>
            </div>
        </div>
    )
}

function title(props){
    document.title = props
}

function Icon(props){
    let Icon = IoniIcons[props.icon]
    return(
        <Icon style={{marginRight: props.spaceRight, marginBottom: props.spaceBottom}} color={props.color} size={props.size}/>
    )
}