import React from 'react'
import styled from 'styled-components'
import { MdOutlineLocationOn } from 'react-icons/md';
import { IoLogoLinkedin } from 'react-icons/Io';
import { BsWhatsapp } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/Fi';
import { FiInstagram } from 'react-icons/Fi';

const ProfileCard = () => {
    return (
        <Container>
            <div className='ProfileCard'>
                <div>
                    <img src={"./public/images/3.jpg"} />
                </div>
                <div>John Doe</div>
                <span className='location'><MdOutlineLocationOn />New York</span>
                <div>Full Stack Developer</div>
                <div className='contactIcons'>
                    <IoLogoLinkedin className='icon' />
                    <BsWhatsapp className='icon' />
                    <FiTwitter className='icon' />
                    <FiInstagram className='icon' />
                </div>
            </div>
        </Container>
    )
}

export default ProfileCard

const Container = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: center;
    /* align-items: center; */
    gap: 9px;
    
    
    .ProfileCard{
     border-radius: 10px;
     width: 300px;
     height: 350px;
     text-align: center;
     background-image: url("./public/images/bg.jpg");
    }
    img{
        border-radius: 50%;
        border: 5px solid white;
        display: flex;
        justify-content: center;
        margin: auto;
        margin-top: 10px;
    }
    .location{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        color: rgb(151, 151, 151);
        font-style: italic;
    }
    .contactIcons{
        display:flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-top: 50px;
        font-size: large;
    }
    .icon{
        border: 2px solid black;
        padding: 12px;
        border-radius: 10px;
        /* background-color: purple; */
        &:hover{
            background-color: black;
            color: white;
            cursor:pointer;
        }
    }
;
`