import React from 'react';

import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
        <img className="avatar"
        src="https://randomuser.me/api/portraits/men/46.jpg"
        alt="Nelson Muntz" />
        <div className="status">
            <p className="name">Randy Garza</p>
            <div className="status-online"></div>
            <p className="status-text">Online</p></div>
    </div>
  );
}

export default Contact;