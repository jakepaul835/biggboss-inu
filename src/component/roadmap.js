import React from 'react'
import roadmapheading from "../images/roadmap-heading.png";
import roadmapimg from "../images/roadmap-img.png";
import roadmapicon1 from "../images/roadmap-heading-icon1.png"
import roadmapicon2 from "../images/roadmap-heading-icon2.png"
import roadmapicon3 from "../images/roadmap-heading-icon3.png"
import roadmapicon4 from "../images/roadmap-heading-icon4.png"
export default function Roadmap() {
    return (
        <>
            <section className="roadmap-section" id="roadmap">
                <div className="container-fluid">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <img src={roadmapheading} alt="" className="vert-move" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 mb-xl-0 mb-5">
                            <div className='roadmap-datacard1'>
                                <div className='roadmap-heading'>
                                    <h3>Lorem ipsum dolor sit</h3>
                                </div>
                                <div className='icon-img'>
                                    <img src={roadmapicon1} alt="efsf" />
                                </div>
                                <div>
                                    <ul className='roadmap-data-list list'>
                                        <li>Lorem ipsum dolor sit amet, consectetuer</li>
                                        <li>Lorem ipsum dolor sit amet, consectetuer</li>
                                        <li>Lorem ipsum dolor sit amet, consectetuer</li>
                                        <li>Lorem ipsum dolor sit amet, consectetuer</li>
                                        <li>Lorem ipsum dolor sit amet, consectetuer</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 mb-xl-0 mb-5">
                            <div className='roadmap-datacard2'>
                                <div className='roadmap-heading'>
                                    <h3>Lorem ipsum dolor sit</h3>
                                </div>
                                <div className='icon-img'>
                                    <img src={roadmapicon2} alt="efsf" />
                                </div>
                                <div>
                                    <ul className='roadmap-data-list list'>
                                        <li>Lorem ipsum dolor sit amet, consectetuer</li>
                                        <li>Lorem ipsum dolor sit amet, consectetuer</li>
                                        <li>Lorem ipsum dolor sit amet, consectetuer</li>
                                        <li>Lorem ipsum dolor sit amet, consectetuer</li>
                                        <li>Lorem ipsum dolor sit amet, consectetuer</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 mb-xl-0 mb-5">
                            <div className='roadmap-datacard3'>
                                <div className='roadmap-heading'>
                                    <h3>Lorem ipsum dolor sit</h3>
                                </div>
                                <div className='icon-img'>
                                    <img src={roadmapicon3} alt="efsf" />
                                </div>
                                <div>
                                    <ul className='roadmap-data-list list'>
                                        <li>Lorem ipsum dolor sit amet, consectetuer</li>
                                        <li>Lorem ipsum dolor sit amet, consectetuer</li>
                                        <li>Lorem ipsum dolor sit amet, consectetuer</li>
                                        <li>Lorem ipsum dolor sit amet, consectetuer</li>
                                        <li>Lorem ipsum dolor sit amet, consectetuer</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 mb-xl-0 mb-5">
                            <div className='roadmap-datacard4'>
                                <div className='roadmap-heading'>
                                    <h3>Lorem ipsum dolor sit</h3>
                                </div>
                                <div className='icon-img'>
                                    <img src={roadmapicon4} alt="efsf" />
                                </div>
                                <div>
                                    <ul className='roadmap-data-list list'>
                                        <li>Lorem ipsum dolor sit amet, consectetuer</li>
                                        <li>Lorem ipsum dolor sit amet, consectetuer</li>
                                        <li>Lorem ipsum dolor sit amet, consectetuer</li>
                                        <li>Lorem ipsum dolor sit amet, consectetuer</li>
                                        <li>Lorem ipsum dolor sit amet, consectetuer</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <img src={roadmapimg} alt="" className='w-100' />
                </div>
            </section>

        </>
    )
}
