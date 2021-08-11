import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
// import * as IoniIcons from "react-icons/io5";
import { Card, Elevation } from "@blueprintjs/core";
import Slider from "react-slick";
import {RegionManager} from '../components/RegionManager/RegionManager'
import CookiePolicy from '../components/CookiePolicyPopup/CookiePolicy'

const PresentationSliderData = [
    {
        "type": "image",
        "src": "https://images.wbstatic.net/bners1/big_spec_5_08.jpg"
    },
    {
        "type": "image",
        "src": "https://images.wbstatic.net/bners1/big_school_5_08.jpg"
    },
    {
        "type": "image",
        "src": "https://images.wbstatic.net/bners1/big_delivery_5_08.jpg"
    }
]
const Products = [
    {
        "id": "nike-air-zoom-alphafly-next-fly-nkit",
        "title": "Nike Air Zoom Alphafly NEXT% Flyknit",
        "markdown": null,
        "media": [
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1a7f8760-47d8-4396-9f0a-5feb79598e41/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-air-zoom-alphafly-next-flyknit-xDM1Lj.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/aa88fd79-8ac9-4239-949f-257f8a838639/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-air-zoom-alphafly-next-flyknit-xDM1Lj.png"
            },
            {
                "type": "video",
                "src": "https://static.nike.com/a/videos/q_90,vc_vp9/e239a7fc-6085-46f8-9b2f-3b52756509b4/video.webm"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9540397e-50e0-45f7-878e-5ea2a1481b3d/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-air-zoom-alphafly-next-flyknit-xDM1Lj.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b29a0c95-ae3b-40ea-bee0-2c84d790bc29/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-air-zoom-alphafly-next-flyknit-xDM1Lj.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/789a57c0-4db4-45a9-a777-2070304300bd/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-air-zoom-alphafly-next-flyknit-xDM1Lj.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7cf8122d-fc80-47e0-bd85-1d7a07a4b1ca/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-air-zoom-alphafly-next-flyknit-xDM1Lj.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/dd6da74d-1d65-41c4-8c5e-63f573a41f9c/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-air-zoom-alphafly-next-flyknit-xDM1Lj.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/18d9dd3b-2441-4f83-acfd-5c3f169203db/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-air-zoom-alphafly-next-flyknit-xDM1Lj.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/da6cd293-6f56-4fe3-ae22-b820321a18b4/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-air-zoom-alphafly-next-flyknit-xDM1Lj.png"
            }
        ],
        "sizes": [
            {
                "size": "38"
            },
            {
                "size": "39"
            },
            {
                "size": "40"
            },
            {
                "size": "41"
            },
            {
                "size": "42"
            },
            {
                "size": "45"
            }
        ],
        "price": "199,12",
        "currency": "EUR",
        "inStock": true
    },
    {
        "id": "nike-air-max-90",
        "title": "Nike Air Max 90",
        "markdown": null,
        "media": [
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0051cf7a-f788-4f83-b9ec-2533b897cd7f/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-90-v2ZscL.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0a889d20-d31e-4a28-9325-b813935b0a86/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-90-v2ZscL.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/cb5faef1-1aaa-46c8-9261-8ea448722296/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-90-v2ZscL.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4ae2ead6-f3e7-4e99-b1d3-3281f666ae6c/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-90-v2ZscL.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7d364a31-4bd2-44a0-a044-26eb92fb09c6/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-90-v2ZscL.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0af30546-1864-4bd0-ba6e-548dd5202aa4/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-90-v2ZscL.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8aeaf20f-31d7-40b8-91a4-aa6c99312b08/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-90-v2ZscL.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4ff91942-d2c2-4d43-bdf6-e36ea0ba1507/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-90-v2ZscL.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b12a81a9-415a-425f-b7bb-da47f2b3513b/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-90-v2ZscL.png"
            }
        ],
        "sizes": [
            {
                "size": "36"
            },
            {
                "size": "38"
            },
            {
                "size": "39"
            },
            {
                "size": "40"
            },
            {
                "size": "42"
            },
            {
                "size": "43"
            }
        ],
        "price": "12,799",
        "currency": "RUB",
        "inStock": true
    },
    {
        "id": "nike-react-infinity-run-flyknit",
        "title": "Nike React Infinity Run Flyknit 2",
        "markdown": null,
        "media": [
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/437b283b-c19d-4469-b027-ec1c5200f5e3/%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-react-infinity-run-flyknit-2-pB7zpf.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fd52faa2-10dd-4491-aed9-d8b1ee1354e6/%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-react-infinity-run-flyknit-2-pB7zpf.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/751a2598-2dfe-433f-ac42-1b0cad25df56/%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-react-infinity-run-flyknit-2-pB7zpf.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/02b94411-4ea5-4898-b9fa-d0a2b9ba7f2d/%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-react-infinity-run-flyknit-2-pB7zpf.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/047fa6f9-be7f-4701-8501-19c72dc0349c/%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-react-infinity-run-flyknit-2-pB7zpf.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/437d19fa-db72-4b65-9881-974be4b9e684/%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-react-infinity-run-flyknit-2-pB7zpf.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/db620aea-6654-45ac-a7d6-97c5e4e617ca/%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-react-infinity-run-flyknit-2-pB7zpf.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7abb2318-b5b9-4497-94bd-bda8c48175dc/%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-react-infinity-run-flyknit-2-pB7zpf.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3188d1b6-8bf0-4e2d-9326-4447436c88c5/%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-react-infinity-run-flyknit-2-pB7zpf.png"
            }
        ],
        "sizes": [
            {
                "size": "35"
            },
            {
                "size": "36"
            },
            {
                "size": "37"
            },
            {
                "size": "38"
            },
            {
                "size": "39"
            },
            {
                "size": "40"
            },
            {
                "size": "41"
            },
            {
                "size": "42"
            },
            {
                "size": "43"
            },
            {
                "size": "44"
            },
            {
                "size": "45"
            },
            {
                "size": "46"
            },
            {
                "size": "47"
            }
        ],
        "price": "13,299",
        "currency": "RUB",
        "inStock": true
    },
    {
        "id": "nike-pegasus-trail-3",
        "title": "Nike Pegasus Trail 3",
        "markdown": null,
        "media": [
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5abf827e-7b41-4d55-8c2f-b47f799822af/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%82%D1%80%D0%B5%D0%B9%D0%BB%D1%80%D0%B0%D0%BD%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-pegasus-trail-3-DwdbMZ.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/03ae3ab7-4eac-4661-97a6-ca84d2a8c5be/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%82%D1%80%D0%B5%D0%B9%D0%BB%D1%80%D0%B0%D0%BD%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-pegasus-trail-3-DwdbMZ.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fad48813-5dfb-4325-a3f0-8015acd50622/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%82%D1%80%D0%B5%D0%B9%D0%BB%D1%80%D0%B0%D0%BD%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-pegasus-trail-3-DwdbMZ.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f97d789a-13bd-4c47-a63f-2728ba5c0018/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%82%D1%80%D0%B5%D0%B9%D0%BB%D1%80%D0%B0%D0%BD%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-pegasus-trail-3-DwdbMZ.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0bc465c9-6813-46cf-899c-f08f946010d0/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%82%D1%80%D0%B5%D0%B9%D0%BB%D1%80%D0%B0%D0%BD%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-pegasus-trail-3-DwdbMZ.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7f865b12-3875-42a6-a751-ddda32523f83/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%82%D1%80%D0%B5%D0%B9%D0%BB%D1%80%D0%B0%D0%BD%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-pegasus-trail-3-DwdbMZ.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/618c644a-2e14-424b-8d92-eb8b670cbf03/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%82%D1%80%D0%B5%D0%B9%D0%BB%D1%80%D0%B0%D0%BD%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-pegasus-trail-3-DwdbMZ.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7026a115-7266-4b51-9502-2b7bd0b3c907/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%82%D1%80%D0%B5%D0%B9%D0%BB%D1%80%D0%B0%D0%BD%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-pegasus-trail-3-DwdbMZ.png"
            }
        ],
        "sizes": [
            {
                "size": "M"
            },
            {
                "size": "L"
            },
            {
                "size": "XS"
            }
        ],
        "price": "11,299",
        "currency": "RUB",
        "inStock": true
    },
    {
        "id": "nike-air-force",
        "title": "Nike Air Force 1 '07",
        "markdown": null,
        "media": [
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f094af40-f82f-4fb9-a246-e031bf6fc411/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-force-1-07-Dz225W.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e5d1a7a2-6cc9-4e86-97a5-a28a9d893221/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-force-1-07-Dz225W.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7e8082ec-8a98-4803-8708-d5c8b60830ed/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-force-1-07-Dz225W.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4906dd0a-96d2-46d3-b70c-cd7c0227deef/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-force-1-07-Dz225W.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e4a3fabb-5cda-46cd-9a12-4f9cc3840ab5/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-force-1-07-Dz225W.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d81dae0f-e39d-4c22-a2a1-ee4b8b82a839/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-force-1-07-Dz225W.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5dbeb615-bdee-4737-9a94-ab7c67bd9219/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-force-1-07-Dz225W.png"
            },
            {
                "type": "image",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/cb1fa13c-a1bf-4477-8b7c-78ac7bc16f80/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-force-1-07-Dz225W.png"
            }
        ],
        "sizes": [
            {
                "size": "X"
            },
            {
                "size": "XS"
            },
            {
                "size": "L"
            }
        ],
        "price": "11,299",
        "currency": "RUB",
        "inStock": true
    },
    {
        "id": "addidas-stan-smith-white",
        "title": "STAN SMITH SHOES",
        "markdown": null,
        "media": [
            {
                "type": "image",
                "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5688e03b06ad4c8892caad0800db9f59_9366/Stan_Smith_Shoes_White_H04334_01_standard.jpg"
            },
            {
                "type": "image",
                "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/3f3275353d6845c0b357ad0800dbadb5_9366/Stan_Smith_Shoes_White_H04334_02_standard_hover.jpg"
            },
            {
                "type": "image",
                "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/3aa692a0a08a4a86a747ad0800dbb40a_9366/Stan_Smith_Shoes_White_H04334_03_standard.jpg"
            },
            {
                "type": "image",
                "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/794e0c65e57445959c16ad0800dbba33_9366/Stan_Smith_Shoes_White_H04334_04_standard.jpg"
            }
        ],
        "sizes": [
            {
                "size": "X"
            },
            {
                "size": "XS"
            },
            {
                "size": "L"
            }
        ],
        "price": "90",
        "currency": "USD",
        "inStock": true
    },
    {
        "id": "forum-exhibit-mid-shoes",
        "title": "Forum Exhibit Mid Shoes",
        "markdown": null,
        "media": [
            {
                "type": "image",
                "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/edfee0f428ed48fe8543ad0f012eb6cf_9366/Forum_Exhibit_Mid_Shoes_White_GZ5388_01_standard.jpg"
            },
            {
                "type": "image",
                "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/10293db8a7e747669b4fad0f012e07fd_9366/Forum_Exhibit_Mid_Shoes_White_GZ5388_41_detail.jpg"
            },
            {
                "type": "image",
                "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/4072c92a39934cdb8531ad0f012e6318_9366/Forum_Exhibit_Mid_Shoes_White_GZ5388_06_standard.jpg"
            },
            {
                "type": "image",
                "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/08f789b16b634139ae7ead0f012edc00_9366/Forum_Exhibit_Mid_Shoes_White_GZ5388_05_standard.jpg"
            }
        ],
        "sizes": [
            {
                "size": "X"
            },
            {
                "size": "XS"
            },
            {
                "size": "L"
            }
        ],
        "price": "110",
        "currency": "USD",
        "inStock": true
    },
    {
        "id": "x-speedflow.1-fg",
        "title": "X SPEEDFLOW.1 FG",
        "markdown": null,
        "media": [
            {
                "type": "image",
                "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/3826d70b71d6434cb497ad2400b3529c_9366/X_SPEEDFLOW.1_FG_Red_FY6870_01_standard.jpg"
            },
            {
                "type": "video",
                "src": "https://assets.adidas.com/videos/q_auto,f_auto,g_auto/9d1eda65df644c86aa93ad4000a3d589_d98c/X_SPEEDFLOW.1_FG_Red_FY6870_video.mp4"
            },
            {
                "type": "image",
                "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/171772a4711d49549795ad2400b36daf_9366/X_SPEEDFLOW.1_FG_Red_FY6870_04_standard.jpg"
            },
            {
                "type": "image",
                "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a36e7fb6dd6d435f8a30ad2400b366e9_9366/X_SPEEDFLOW.1_FG_Red_FY6870_03_standard.jpg"
            }
        ],
        "sizes": [
            {
                "size": "X"
            },
            {
                "size": "XS"
            },
            {
                "size": "L"
            }
        ],
        "price": "110",
        "currency": "USD",
        "inStock": true
    }
]
export default function Home(){
    RegionManager()
    // const Desktop = ({ children }) => {
	// 	const isDesktop = useMediaQuery({ minWidth: 992 })
	// 	return isDesktop ? children : null
	// }
    return(
        <div style={{backgroundColor: '#F2F3F5'}}>
            <Container style={{paddingTop: 20}}>
                <PresentationSlider data={PresentationSliderData}/>
                <ProductList title={"Produse:"} description={"Descoperă noile prețuri care te-ar putea impresiona."} data={Products}/>
            </Container>
            {/* <Desktop>
                <SwipeBottomHint />
            </Desktop> */}
            <CookiePolicy />
        </div>
    )
}

function ProductList(props){
    // const Desktop = ({ children }) => {
	// 	const isDesktop = useMediaQuery({ minWidth: 992 })
	// 	return isDesktop ? children : null
	// }
    // const Mobile = ({ children }) => {
	// 	const isMobile = useMediaQuery({ maxWidth: 767 })
	// 	return isMobile ? children : null
	// }
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isTablet = useMediaQuery({ minWidth: 540 })
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return(
        <div style={{fontFamily: 'Roboto', marginTop: 10}}>
            <Row style={{margin: 0, paddingBottom: 100}}>
                <h1 style={{fontWeight: 400}}>{props.title}</h1>
                <p style={{fontSize: 16, color: "rgb(123, 123, 123)", marginBottom: 20}}>{props.description}</p>
                {
                    props.data.map((item, index) => {
                        return (
                            <Col key={Math.random()} xs={isDesktopOrLaptop ? 3 : isTablet ? 6 : null} style={{marginBottom: 20}}>
                                <Card style={{padding: 0, borderRadius: 10}} interactive={true} elevation={Elevation.ONE}>
                                    <Slider {...settings}>
                                        {
                                            item.media.map((item, index) => {
                                                return(
                                                    <div key={Math.random()}>
                                                        {
                                                        item.type === "image" ?
                                                            <img alt={"product-img"} style={{width: '100%', height: 350, borderTopLeftRadius: 10, borderTopRightRadius: 10, objectFit: 'cover'}} src={item.src}/>
                                                            : 
                                                            <video style={{width: '100%', height: 350}} controls={false} loop={true} src={item.src} autoPlay muted/>
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </Slider>
                                    <div style={{padding: 15}}>
                                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                            <small style={{whiteSpace: 'nowrap', color: item.inStock ? 'green' : 'black'}}>{item.inStock ? 'Disponibil în stoc' : 'Nu este în stoc'}</small>
                                        </div>
                                        <div style={{whiteSpace: 'nowrap', overflow: 'hidden', marginTop: 5}}>
                                            <h5 style={{fontWeight: '500', maxWidth: '100%', overflow: 'auto'}}>{item.title}</h5>
                                            <p style={{marginBottom: 0}}>{item.price}
                                                {item.currency === "MDL" ? " LEI" : item.currency === "USD" ? " $" : item.currency === "EUR" ?
                                                " €" : item.currency === "RUB" ? " ₽" : null}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

function PresentationSlider(props){
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return(
        <Slider {...settings}>
            {
                props.data.map((item, index) => {
                    return(
                        <div key={Math.random()}>
                            <img alt={Math.random()} style={{width: '100%', borderRadius: 20, objectFit: 'cover'}} src={item.src}/>
                        </div>
                    )
                })
            }
        </Slider>
    )
}

// function SwipeBottomHint(){
//     return(
//         <div style={{color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 100, background: 'linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 0.6))', position: 'fixed', left: 0, right: 0, bottom: 0}}>
//             <Icon size={20} icon={"IoChevronDownOutline"} />
//             <h4>Vedeți mai multe produse</h4>
// 		</div>
//     )
// }

// function Icon(props){
// 	let Icon = IoniIcons[props.icon]
// 	return(
// 		<Icon size={props.size} color={props.iconColor}/>
// 	)
// }