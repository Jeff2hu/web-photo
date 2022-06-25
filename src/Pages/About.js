import React from 'react';
import { AiFillInstagram } from '@react-icons/all-files/ai/AiFillInstagram';
import { AiFillFacebook } from '@react-icons/all-files/ai/AiFillFacebook';
import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';

const About = () => {
  return (
    <div className='about'>
      <h2>Thanks For Coming !</h2>
      <p>
        You can find any photos what you want at here.<br/>
        This is my small project,<br/>
        If you have any suggestions for me,<br/>
        Welcome to  contact me!
      </p>
      <div className="about-contact">
        <p>Author: Jeff Zhu</p>
        <p>Github: Jeff2hu</p>
        <p>Mail: lovezhu661991@gmail.com</p>
      </div>
      <div className="about-icons">
        <a className="about-icons__icon icon--ins" href="https://www.instagram.com/b_wo.ow_d/"><AiFillInstagram /></a>
        <a className="about-icons__icon icon--face" href="https://www.facebook.com/profile.php?id=100002560997969"><AiFillFacebook /></a>
        <a className="about-icons__icon icon--git" href="https://github.com/Jeff2hu"><AiFillGithub /></a>
      </div>
    </div>
  )
}

export default About