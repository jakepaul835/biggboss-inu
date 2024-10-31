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
                                    <h3>Establishing the Boss</h3>
                                </div>
                                <div className='icon-img'>
                                    <img src={roadmapicon1} alt="efsf" />
                                </div>
                                <div>
                                    <ul className='roadmap-data-list list'>
                                        <li>Launch Big Boss Inu with a powerful presale.</li>
                                        <li>Build a strong community through social media and partnerships.</li>
                                        <li>Set the stage for Big Boss Inu to become a top memecoin contender.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 mb-xl-0 mb-5">
                            <div className='roadmap-datacard2'>
                                <div className='roadmap-heading'>
                                    <h3>Spreading the Influence</h3>
                                </div>
                                <div className='icon-img'>
                                    <img src={roadmapicon2} alt="efsf" />
                                </div>
                                <div>
                                    <ul className='roadmap-data-list list'>
                                        <li>Begin major marketing campaigns to spread awareness worldwide.</li>
                                        <li>List on top exchanges to make Big Boss Inu accessible to everyone.</li>
                                        <li>Collaborate with influencers and brands to strengthen the Big Boss Inu presence.</li>
                                        <li>Grow our army—unite meme lovers and crypto fans under the Big Boss brand.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetuer</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 mb-xl-0 mb-5">
                            <div className='roadmap-datacard3'>
                                <div className='roadmap-heading'>
                                    <h3>Making Crypto Mainstream</h3>
                                </div>
                                <div className='icon-img'>
                                    <img src={roadmapicon3} alt="efsf" />
                                </div>
                                <div>
                                    <ul className='roadmap-data-list list'>
                                        <li>Educate and raise awareness about  BIG BOSS INU and cryptocurrency through global campaigns.</li>
                                        <li>Expand accessibility with wallet integrations and user-friendly platforms.</li>
                                        <li>Promote Big Boss Inu as a symbol of crypto’s mainstream adoption.</li>
                                        <li>Host events and contests to engage and excite the community.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 mb-xl-0 mb-5">
                            <div className='roadmap-datacard4'>
                                <div className='roadmap-heading'>
                                    <h3>Becoming the Meme King</h3>
                                </div>
                                <div className='icon-img'>
                                    <img src={roadmapicon4} alt="efsf" />
                                </div>
                                <div>
                                    <ul className='roadmap-data-list list'>
                                        <li>Aim for record-breaking community growth—build the largest meme token army.</li>
                                        <li>Secure top positions on exchanges—make Big Boss Inu the go-to memecoin.</li>
                                        <li>Achieve mainstream media coverage to bring Big Boss Inu into the spotlight.</li>
                                        <li>Declare Big Boss Inu as the Boss of All Memes—confident, unstoppable, and legendary.</li>
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
