import React from 'react'
import styled from 'styled-components'
const ProfileCard = () => {
    return (
        <Container>
            <div className='ProfileCard'>
                <div>
                    <img src={"./public/images/3.jpg"} />
                </div>
                <div>John Doe</div>
                <div className='location'>Delhi</div>
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
     border: 2px solid red;
     width: 300px;
     height: 350px;
     text-align: center;
    }
    img{
        border-radius: 50%;
        border: 3px solid black;
        display: flex;
        justify-content: center;
        margin: auto;
        margin-top: 10px;
    }
;
`