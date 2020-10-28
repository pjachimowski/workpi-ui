import React from 'react';
import './PersonalInfo.scss';
import profile from './profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PersonalInfo = () => {
  return (
    <div className="personal-info">
      <img src={profile} alt="profile picture"></img>
      <div className="name">Patryk Jachimowski</div>
      <div className="current-job"><FontAwesomeIcon className="icon" icon={['fas', 'briefcase']}></FontAwesomeIcon>Creative Director</div>
      <div className="future-relevance"><FontAwesomeIcon className="icon" icon={['fas', 'forward']}></FontAwesomeIcon> very probably disappearing</div>
      <div className="department"><FontAwesomeIcon className="icon" icon={['fas', 'building']}></FontAwesomeIcon> Marketing</div>
      <div className="department-location"><FontAwesomeIcon className="icon" icon={['fas', 'map-marker-alt']}></FontAwesomeIcon> Amsterdam</div>
      <a href="#"><FontAwesomeIcon className="icon" icon={['fas', 'plus-square']}></FontAwesomeIcon>Add field</a>
    </div>
  );
};

export default PersonalInfo;