import React from "react";
import "./Contact.css";
import PropTypes from "prop-types";

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt="props.name" />
      <div className="status">
        <h3 className="name">{props.name}</h3>
        <span className={props.online ? "status-online" : "status-offline"}></span>
        <p className="status-text">{props.online ? "online" : "offline"}</p>
      </div>
    </div>
  );
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
};

// Si quelqu'un peut me dire pourquoi le propType du online ne passe pas, ça m'intéresse !
// Parce que l'affichage fonctionne dans l'appli... Ça m’échappe. Help XD

export default Contact;
