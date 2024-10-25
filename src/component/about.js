import React from 'react'
import abouttextimg from "../images/about-text-img.png";
import aboutrightimg from "../images/about-img-right.png";
export default function About() {
    return (
        <>
            <section className="about-section" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-content text-center">
                                <img src={abouttextimg} alt="" className="vert-move" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                                    aliquip ex ea commodo consequat. Duis autem vel eum iriure
                                    dolor in hendrerit in vulputate velit esse molestie consequat.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={aboutrightimg} alt="" className="vert-move" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
