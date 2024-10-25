import React from 'react'

import calcIcon1 from "../images/calc-icon.png";
import calcIcon2 from "../images/calc-icon2.png";
import twittericon from "../images/twitter.png";
import telegramicon from "../images/telegram.png";
import Bannertitle from "../images/banner-title.png"
import BannerLeftImg from "../images/banner-left-img.png"
export default function Banner() {
    return (
        <section className="banner-section position-relative" id="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className='banner-left-img'>
                            <img src={BannerLeftImg} alt="vcv" className='vert-move' />
                        </div>
                    </div>
                    <div className="col-lg-7 banner-calculation">
                        <div className='banner-title-img'>
                            <img src={Bannertitle} alt="xcvxc" />
                        </div>
                        <div className="d-sm-flex justify-content-center">
                            <div className="ms-lg-4 mb-sm-0 mb-4 d-flex align-items-center flex-column">
                                <div>
                                    <a href="/" className="mb-2 d-inline-block">
                                        <img src={twittericon} alt="Twitter" />
                                    </a>
                                    <br />
                                    <a href="/" className="mb-2 d-inline-block">
                                        <img src={telegramicon} alt="Telegram" />
                                    </a>
                                </div>
                                <p className="mb-2 d-inline-block follow-us">
                                    Follow Us
                                </p>

                            </div>
                            <div className="banner-calc">
                                <div className='bigboss-presale'>
                                    <div className="banner-calc-inner">
                                        <h3>$BIGGBOSS PRESALE</h3>
                                        <ul>
                                            <li>
                                                <p>Current Price</p>
                                                <h5>$0.0005</h5>
                                            </li>
                                            <li>
                                                <p>Next Stage Price</p>
                                                <h5>$0.0006</h5>
                                            </li>
                                        </ul>
                                        <p className="amout-raised">Total Amount Raised :</p>
                                        <h3 className="amount-text text-start">$123,132.00</h3>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">76%</div>
                                        </div>
                                        <div className="listing-price text-center">
                                            <p>Listing Price : <span>$0.01</span></p>
                                        </div>
                                    </div>
                                    <div className='buy-bigboss'>
                                        <div className="pay-box">
                                            <div className="paybox-inner">
                                                <h5 className="text-start">You Pay <span>ETH</span></h5>
                                                <div className="d-flex align-items-center paybox-box">
                                                    <img src={calcIcon1} alt="" />
                                                    <div className='lh-1'>
                                                        <h4>0.0</h4>
                                                        <p>$0.00</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="paybox-inner">
                                                <h5 className="text-start">You Receive <span className='bigboss'>$BIGGBOSS</span></h5>
                                                <div className="d-flex align-items-center paybox-box">
                                                    <img src={calcIcon2} alt="" />
                                                    <div className='lh-1'>
                                                        <h4>0.0</h4>
                                                        <p>$0.00</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="banner-cacl-btn mb-0">
                                            <a href="/" className="btn btn-primary d-block">Buy $BIGGBOSS</a>
                                            <p className="text-center mb-1 connect-text">*Connect wallet to see your balance</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
