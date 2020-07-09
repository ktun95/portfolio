import React from 'react'
import { Article, Section, ProjectLink, List } from '../components'

export const Home = () => {
    return (
        <React.Fragment>
            <Section>
                <List header={'Contact'} list={[
                    <a href="https://www.github.com/ktun95/"> Github </a>,
                    <a href="mailto:kevintun01@gmail.com"> Email </a>,
                    <a href="/KEVINTUNRESUME.pdf"> Resume </a>,
                    <a href="https://www.linkedin.com/in/kevin-tun/"> Linkedin </a>,

                ]} />
            </Section>
            <Section>
                <Article header={'About'} content={<p>
                    This blog/portfolio is in its most nascent stage. Its structure, content, aesthetic, and purpose will likely evolve over time.
                    Mainly, this will serve to chronicle my exploration of topics in programming, web development, computer science, and the like. But sometimes it won't be that.
                    Feel free to send me an <a href='mailto:kevintun01@gmail.com'>email</a> about literally anything.
                </p>}/>
            </Section>
            <Section>
                <Article
                    header={'Projects'}
                    content={[
                            <ProjectLink 
                                title={'monkey-memory'}
                                link={'https://monkey-memory.herokuapp.com/'}
                                description={'Implementation of a memory test like those used in studies of the working memory of chimpanzees. Built with React'} />,
                            <ProjectLink 
                                title={'itinerary-temporary-name-app'}
                                link={'https://tranquil-headland-56071.herokuapp.com/'}
                                description={'Plan a trip filled with activities! See them appear on the map! Very WIP!'} />,
                            <ProjectLink 
                                title={'mineralogie'}
                                link={'https://mineralogie.herokuapp.com/'}
                                description={'Mock e-commerce site for purchasing rocks'} />,
                            <ProjectLink 
                                title={'Firechat95'}
                                link={'https://fir-exploration-deee2.firebaseapp.com/'}
                                description={'Proximity-based chatroom application'} />

                            ]}
                />
                {/* <Article
                    header={'Projects'}
                    content={
                        'this is a test'
                    } /> */}
            </Section>

        </React.Fragment>
    )
}


export default Home
