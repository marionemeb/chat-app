import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

function Contact(props) {
  return (
    <div className="Contact">
        <img className="avatar"
        src={props.avatar}
        alt={props.name} />
        <div className="status">
            <p className="name">{props.name}</p>
            <div className={props.online ? 'status-online' : 'status-offline'}></div>
            <p className="status-text">{props.online ? 'Online' : 'Offline'}</p>
        </div>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
export default Contact;