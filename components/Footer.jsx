import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Copyright ©️ 2023 Kodego-WD53 Devenger's Vault™️ All rights reserverd</p>
      <div>
      <a href="">Terms • </a><a href="">Privacy • </a><a href="">Opt Out • </a><a href="">Advertise</a>
      </div>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer