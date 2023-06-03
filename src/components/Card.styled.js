import styled from "styled-components";
import { device } from "../theme";
import { Typography } from "@mui/material";



export const Wrapper = styled.div`
    border: 4px solid #EFEFEF;
    border-radius: 20px;
    padding: ${({theme}) => theme.spacing(2)};
    max-width: 1200px;
    margin:0 auto;

    @media ${device.mobileL} {
        padding-top: ${({theme}) => theme.spacing(2)};
        padding-bottom: ${({theme}) => theme.spacing(2)};
        padding-left: ${({theme}) => theme.spacing(10)};
        padding-right:0;
    }

    @media ${device.laptop} { 
        padding-top: ${({theme}) => theme.spacing(6)};
        padding-bottom: ${({theme}) => theme.spacing(6)};
        padding-left: ${({theme}) => theme.spacing(20)};
    }
`

export const UserPersonalDetails = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #ECECEC;
`

export const Name = styled(Typography)`
    font-size: 3em;
    font-weight: 400;
    color: #0A0621;
    margin-bottom: ${({theme}) => theme.spacing(2)};;

    @media ${device.laptop} { 
        margin-bottom: 0;
        margin-right: ${({theme}) => theme.spacing(5)};
    }
`

export const ContactDetails = styled.div`
    display: flex;
    align-items: center;
`

export const Phone = styled.a`
    margin-right: ${({theme}) => theme.spacing(3)};
    color: #88878C;

    svg {
        height: ${({theme}) => theme.spacing(5)};
        width: ${({theme}) => theme.spacing(5)};
    }
`

export const Email = styled.a`
    margin-right: ${({theme}) => theme.spacing(3)};
    color: #88878C;

    svg {
        height: ${({theme}) => theme.spacing(5)};
        width: ${({theme}) => theme.spacing(5)};
    }
`


export const VerticalDivider = styled.hr`
    margin-right: ${({theme}) => theme.spacing(3)};
    margin-left: 0;
    height: ${({theme}) => theme.spacing(4)};
    width: 1px;
    background-color: #F0F0F0;

`

export const LinkedIn =  styled.a`

    svg {
        height: ${({theme}) => theme.spacing(8)};
        width: ${({theme}) => theme.spacing(8)};
    }
`

export const TopLine = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${({theme}) => theme.spacing(3)};

    @media ${device.laptop} { 
        flex-direction: row;
        align-items: center;
    }
`

export const BottomLine = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: ${({theme}) => theme.spacing(6)};

    @media ${device.laptop} { 
        flex-direction: row;
        align-items: center;
    }
`

export const CurrentTitle = styled(Typography)`
    font-size: 2em;
    font-weight: 400;
    color: #5E5C6E;
    margin-top:0;
    margin-bottom:0;
    margin-right: ${({theme}) => theme.spacing(2)};
`

export const Dot = styled.span`
    height: 10px;
    width: 10px;
    background-color: #bbb;
    border-radius: 50%;
    margin-right: ${({theme}) => theme.spacing(2)};
    display: none;

    @media ${device.laptop} { 
        display: block;
    }
`

export const Location = styled(Typography)`
    font-size: 1.6em;
    color: #8E8D92;
    font-size: 1.8em;
    font-weight: 400;
`

export const UserExperience = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: ${({theme}) => theme.spacing(4)};
    padding-bottom: ${({theme}) => theme.spacing(4)};
    padding-right: ${({theme}) => theme.spacing(4)};

    @media ${device.laptop} { 
        flex-direction: row;
    }
`

export const Label = styled(Typography)`
    font-size: 1.6em;
    font-weight: 400;
    color: #8D8A9D;
    margin:0;
    margin-right: ${({theme}) => theme.spacing(10)};
    margin-bottom: ${({theme}) => theme.spacing(2)};

    @media ${device.laptop} { 
        flex-basis: 200px;
        margin-bottom: 0;
    }
`

export const Experiences = styled.div`
    display: flex;
    flex-direction: column;
`

export const ExperienceName = styled(Typography)`
    font-size: 1.6em;
    color: #797986;
    position: relative;
    margin-bottom: ${({theme}) => theme.spacing(3)}; 
    padding-left: ${({theme}) => theme.spacing(4)};

    &::before {
        height: 16px;
        width: 16px;
        background-color: #bbb;
        border-radius: 50%;
        content: "";
        display:block;
        position: absolute;
        left:0;
        top: 10px;
    }

    &::after {
        height: 100%;
        width: 2px;
        background-color: #bbb;
        content: "";
        display: block;
        position: absolute;
        left: 7px;
        top: 29px;
    }

    &:last-child::after {
        display: none;
    }
`

export const UserEducation = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: ${({theme}) => theme.spacing(4)};
    padding-bottom: ${({theme}) => theme.spacing(4)};
    padding-right: ${({theme}) => theme.spacing(4)};

    @media ${device.laptop} { 
        flex-direction: row;
    }
`

export const Educations = styled.div`
    display: flex;
    flex-direction: column;
`

export const EducationName = styled(Typography)`
    font-size: 1.6em;
    color: #797986;
    position: relative;
    margin-bottom: ${({theme}) => theme.spacing(3)}; 
    padding-left: ${({theme}) => theme.spacing(4)};

    &::before {
        height: 16px;
        width: 16px;
        background-color: #bbb;
        border-radius: 50%;
        content: "";
        display:block;
        position: absolute;
        left:0;
        top: 10px;
    }

    &::after {
        height: 100%;
        width: 2px;
        background-color: #bbb;
        content: "";
        display: block;
        position: absolute;
        left: 7px;
        top: 29px;
    }

    &:last-child::after {
        display: none;
    }
`