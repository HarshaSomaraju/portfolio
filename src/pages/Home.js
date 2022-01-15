import React, {lazy} from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";

const Navbar = lazy(() => import("../components/Navbar"));
const Contact = lazy(() => import("../components/Contact"));

export default function Home(){
    return (

        <div>
            <Navbar />

            <Contact />
        </div>
    );
}