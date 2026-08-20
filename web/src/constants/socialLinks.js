import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaPhoneSquareAlt,
  FaWhatsappSquare,
  FaLinkedin,
} from 'react-icons/fa';

import { IoIosMailUnread } from 'react-icons/io';

export const socialLinks = [
  {
    name: "call-tariro",
    url: "tel:+263719875027",
    icon: <FaPhoneSquareAlt />,
  },
  {
    name: "call-wendy",
    url: "tel:+263778296767",
    icon: <FaPhoneSquareAlt />,
  },
  {
    name: "whatsapp",
    url: `https://wa.me/263719875027?text=${encodeURIComponent(
       "Hi Two Tier Aluminium Hub, I am interested in your hardware/aluminium products and would like a quote.",
    )}`,
    icon: <FaWhatsappSquare />,
  },
  {
    name: "mail",
    url: "mailto:simbadombo@icloud.com",
    icon: <IoIosMailUnread />,
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/twotieraluminum",
    icon: <FaFacebook />,
  },
  {
    name: "twitter",
    url: "https://twitter.com/twotieraluminum",
    icon: <FaTwitter />,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/company/twotieraluminum",
    icon: <FaLinkedin />,
  },
];
