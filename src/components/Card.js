import { BottomLine, ContactDetails, CurrentTitle, Dot, EducationName, Educations, Email, ExperienceName, Experiences, Label, LinkedIn, Location, Name, Phone, TopLine, UserEducation, UserExperience, UserPersonalDetails, VerticalDivider, Wrapper } from "./Card.styled"
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const Card = ({name, phone_number, personal_email, linkedIn, current_title,location, experience, education}) => {
    return (
        <Wrapper>
            <UserPersonalDetails>
                <TopLine>
                    <Name variant="h1">{name}</Name>
                    <ContactDetails>
                        {phone_number && <Phone href={`tel:${phone_number}`}><LocalPhoneOutlinedIcon /></Phone>}
                        {personal_email && <Email href={`mailto:${personal_email}`}><EmailOutlinedIcon /></Email>}
                        {linkedIn && <><VerticalDivider  /><LinkedIn href={linkedIn} target="_blank"><LinkedInIcon /></LinkedIn></>}
                    </ContactDetails>
                </TopLine>
                <BottomLine>
                    <CurrentTitle variant="h2">{current_title}</CurrentTitle>
                    <Dot />
                    <Location variant="h2">{location}</Location>
                </BottomLine>
            </UserPersonalDetails>

            <UserExperience>
                <Label>Experience</Label>
                <Experiences>
                    {experience.map(e => <ExperienceName key={e}>{e}</ExperienceName>)}
                </Experiences>
            </UserExperience>


            <UserEducation>
                <Label>Education</Label>
                <Educations>
                    {education.map(e => <EducationName key={e}>{e}</EducationName>)}
                </Educations>
            </UserEducation>
        </Wrapper>
    )
}