import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        online: props.online
      };
  }

  render(){
    return (
      <div className="Contact">
          <img className="avatar"
          src={this.props.avatar}
          alt={this.props.name} />
          <div className="status">
              <p className="name">{this.props.name}</p>
              <div className={this.state.online ? 'status-online' : 'status-offline'} 
              onClick={event => {
                const newOnline = !this.state.online;
                this.setState({ online: newOnline })}}></div>
              <p className="status-text">{this.state.online ? 'Online' : 'Offline'}</p>
          </div>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
export default Contact;