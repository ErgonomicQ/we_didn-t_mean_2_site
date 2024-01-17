// Footer.js
import React, { useState } from 'react';
import ContactFormModal from './ContactFormModal';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <footer>
      <p>Made by Your Studio Name</p>
      <button onClick={openModal}>Contact Us</button>
      <a href="https://store.steampowered.com/search/?developer=We%20Didn%27t%20Mean%202" target="_blank" rel="noopener noreferrer">
        Visit our Steam Developer Page
      </a>

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </footer>
  );
};

export default Footer;