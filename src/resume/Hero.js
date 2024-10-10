import React, { useRef, useEffect } from 'react'
import { GrLinkNext } from "react-icons/gr";
import { projects } from './data'
import html from './images/html.svg'
import css from './images/css.svg'
import scss from './images/scss.svg'
import js from './images/js.svg'
import react from './images/react.svg'
import { useGlobalContext } from './context'

const Hero = () => {
    const { closeSubmenu } = useGlobalContext();
    // let textToAnimate = "Frontend developer...";
    // const ref = React.useRef();

    // const myMessage = ()=>{
    //   ref.current.innerText = "Be there";
    // }

    // useEffect(() => {
    //   myMessage();
    // }, []);

    return (

        <section className='hero' onMouseOver={closeSubmenu}>
            <main>
                <div className="intro">
                    <div >
                        <p className='divide'>Hello,<span className='css-typing'>World!</span><span className="line-1">I'm <span className='orange'>Yuliya!</span></span></p>
                    </div>
                    <div className="flex">
                        {/* <h1 className="welcome">Hello, I'm <span className="color">Yuliya</span></h1> */}
                        {/* <p className="typeDel" ref={ref}></p> */}
                    </div>
                </div>

                <div className='highlights'>
                    <h2 className="page-title">My Resume</h2>
                    <p className="intro">Skills, expertiese and a quick look at some of my projetcts as a self-taught developer.</p>
                </div>

                <div className="projects-container" id='projects'>
                    {projects.map((project) => {
                        const { title, description, url, features, img_url } = project;
                        return (
                            <div className="project" key={title}>
                                <div className="project-info">
                                    <a className="name" href={url} target="_blank">{title}</a>
                                </div>
                                <img className='project-img' src={img_url} />
                                <p>{description}</p>
                                <p className='feature'><span>Features:</span> {features}</p>
                                <a className="name" href={url} target="_blank"><GrLinkNext /></a>
                            </div>
                        )
                    })}
                </div>
            </main>
            <aside>
                <ul className="icon-list" role="list">
                    <li>
                        <img src={html} alt="html" />
                    </li>
                    <li>
                        <img src={css} alt="css" />
                    </li>
                    <li>
                        <img src={scss} alt="scss" />
                    </li>
                    <li>
                        <img src={js} alt="js" />
                    </li>
                    <li>
                        <img src={react} alt="react" />
                    </li>
                </ul>
            </aside>
        </section>
    )
}

export default Hero
