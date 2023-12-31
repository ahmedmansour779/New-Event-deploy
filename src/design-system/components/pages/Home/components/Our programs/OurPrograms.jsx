import React from 'react'
import Tabs from './Tabs'
import { DescriptionOurPrograms, HeaderOurProgramsWrapper, Our, OurProgramsWrapper, TapWrapper, TitleSpeakersWrapper } from './style'

export default function OurPrograms() {
    return (
        <div className='container-main-project' id='programs'>
            <OurProgramsWrapper>
                <HeaderOurProgramsWrapper>
                    <TitleSpeakersWrapper><Our>Our</Our> Programs</TitleSpeakersWrapper>
                    <DescriptionOurPrograms>These are the most important figures in the company</DescriptionOurPrograms>
                </HeaderOurProgramsWrapper>
                <TapWrapper>
                    <Tabs />
                </TapWrapper>
            </OurProgramsWrapper>
        </div>
    )
}
