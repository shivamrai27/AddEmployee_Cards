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
                <svg className="pink" xmlns="http://www.w3.org/2000/svg" width={"300px"} viewBox="40 0 600 320"><path fill="#d194d1" fill-opacity="1" d="M0,128L1440,288L1440,0L0,0Z"></path>
                    {/*ViewBox 1st value move left right 2nd value value up and down 3rd value height of the svg  */}
                </svg>
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
                <div>
                    <svg className='blue' xmlns="http://www.w3.org/2000/svg"       width={"300px"} viewBox="40 00 600 320"><path fill="#6573d0" fillOpacity="1" d="M0,128L1440,288L1440,320L0,320Z"></path></svg>
                </div>
            </div>

        </Container>
    )
}
export default ProfileCard

const Container = styled.div`
    display: flex;
    margin-top: 10px;
    margin-left: 500px;
    justify-content: center;
    align-items: center;
    gap: 9px;
    border-radius: 10px;
    /* border: 2px solid red; */
    width: 300px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
   
    .ProfileCard{
     border-radius: 10px;
     width: 300px;
     height: 330px;
     text-align: center;
     /* background-image: url("./public/images/bg.jpg"); */
    }
    .pink{
        position: absolute;
        margin-left: -150px;
        overflow: hidden;
        background-size: cover;
        /* display: block; */
        border-radius: 10px;
    }
    .blue{
        position: relative;
        top: -145px;
        z-index: -1;
        border-radius: 10px;
    }
    img{
        border-radius: 50%;
        border: 5px solid white;
        display: flex;
        justify-content: center;
        margin: auto;
        margin-top: 10px;
        position: relative;
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
        /* flex-direction: row; */
        justify-content: center;
        /* align-items: center; */
        gap: 20px;
        margin-top: 50px;
        font-size: large;
        color: white;
    }
    .icon{
        border: 2px solid white;
        padding: 12px;
        border-radius: 10px;
        
        /* background-color: purple; */
        &:hover{
            cursor: pointer;
            background-color: #a6a8f5;
            color: white;
            cursor:pointer;
        }
    }
;
`