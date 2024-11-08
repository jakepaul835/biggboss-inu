import React, { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import calcIcon1 from "../images/calc-icon.png";
import calcIcon2 from "../images/calc-icon2.png";
import twittericon from "../images/twitter.png";
import telegramicon from "../images/telegram.png";
import Bannertitle from "../images/banner-title.png";
import BannerLeftImg from "../images/banner-left-img.png";

export default function Banner() { 
   
    
    // const [amountRaised, setAmountRaised] = useState('');
    const [presaleData, setPresaleData] = useState(null);
    const [loading, setLoading] = useState(true);

   

    useEffect(() => {
        AOS.init({ duration: 1000 });

        const fetchPresaleData = async () => {
            try {
                const response = await axios.get('https://nadeemdesigns.com/dev/bigboss/aapi.php');
                // const response = await axios.get('http://localhost/static/bigboss/aapi.php');
                setPresaleData(response.data);
            } catch (error) {
                console.error("Error fetching presale data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPresaleData();
    }, []);


    //   useEffect(() => {
    //     const fetchAmount = async () => {
    //         try {
    //             // const response = await fetch(`https://nadeemdesigns.com/dev/bigboss/api.php?showtime=${presaleData.CHOICE}`);
    //             const response = await fetch(`http://localhost/static/bigboss/api.php?showtime=${presaleData.CHOICE}`);
    //             const data = await response.json();
    //             if (data.amount) {
    //                 setAmountRaised(`$${data.amount}`);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching amount:', error);
    //         }
    //     };
        
    //     fetchAmount();
    // }, [presaleData]);
      

    if (loading) {
        return <div>Loading...</div>; // Loading state
      }
    
      if (!presaleData) {
        return <div>Failed to load presale data.</div>; // Handle empty data
      }
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
                                        <h3>{presaleData.PEPEMEMECOIN}</h3>
                                        <ul>
                                            <li>
                                                <p>{presaleData.PRESALE}</p>
                                                <h5>{presaleData.PEME}</h5>
                                            </li>
                                            <li>
                                                <p>{presaleData.TOTALBONUS}</p>
                                                <h5>{presaleData.PEMEEQUAL}</h5>
                                            </li>
                                        </ul>
                                        <p className="amount-raised">Total Amount Raised :</p>
                                        <h3 className="amount-text text-start">{presaleData.VESTINGBONUS}</h3>
                                        <div className="progress">
                                            <div style={{ width: `${presaleData.TEXTBOXVAL}%` }}  className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{presaleData.TEXTBOXVAL}%</div>
                                        </div>
                                        <div className="listing-price text-center">
                                            <p>{presaleData.UPTO} : <span>{presaleData.percentage}</span></p>
                                        </div>
                                    </div>
                                    <div className='buy-bigboss'>
                                        <div className="pay-box">
                                            <div className="paybox-inner">
                                                <h5 className="text-start">You Pay <span>{presaleData.STAGEBONUSVAL}</span></h5>
                                                <div className="d-flex align-items-center paybox-box">
                                                    <img src={calcIcon1} alt="" />
                                                    <div className='lh-1'>
                                                        <h4>{presaleData.BUYINGBONUSVAL}</h4>
                                                        {/* <p>{presaleData.BUYINGBONUSVAL}</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="paybox-inner">
                                                <h5 className="text-start">You Receive <span className='bigboss'>{presaleData.BUYINGBONUS}</span></h5>
                                                <div className="d-flex align-items-center paybox-box">
                                                    <img src={calcIcon2} alt="" />
                                                    <div className='lh-1'>
                                                        <h4>{presaleData.PEMERAISED}</h4>
                                                        {/* <p>{presaleData.PEMERAISED}</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="banner-calc-btn mb-0">
                                            <a href="/" className="btn btn-primary d-block">{presaleData.PEMERAISEDVAL}</a>
                                            <p className="text-center mb-1 connect-text">*{presaleData.LOADERPERCENTAGE}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
