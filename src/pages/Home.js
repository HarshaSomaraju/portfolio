import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";

export default function Home(){
    return (
        <home>
            <About />
            <Projects />
            <Skills />
            <Testimonials />
        </home>
    );
}