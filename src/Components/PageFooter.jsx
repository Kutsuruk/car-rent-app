import React, {Component} from 'react';
import {
    AiFillFacebook,
    AiFillYoutube, AiOutlineMail,
    AiOutlineTwitter,
    FaMapMarkerAlt,
    FiInstagram,
    IoPhonePortraitOutline
} from "react-icons/all";


class PageFooter extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="footer-left col-xl-4 col-md-4 col-sm-12">
                        <p className="about">
                            <span> About the company</span> Find us next to you: Hertz cars is a car rental company
                            that will assist your every need from the time that you arrive as your car can be delivered
                            to your desired point of arrival anywhere at the Airport, Port, Hotel, Residence etc,
                            in order to make things  so much easier for you. Also remember that Hertz cars is next to
                            you at every step to offer you best propositions.
                        </p>
                        <div className="icons">
                            <a href="https://www.instagram.com/">
                                <FiInstagram  size={35} className={'instagram_img'}/>
                            </a>
                            <a href="https://twitter.com/?lang=ru">
                                <AiOutlineTwitter size={35} className={'twitter_img'}/>
                            </a>
                            <a href="https://www.facebook.com/">
                                <AiFillFacebook size={35} className={'facebook_img'}/>
                            </a>
                            <a href="https://www.youtube.com/">
                                <AiFillYoutube size={35} className={'youtube_img'}/>
                            </a>
                        </div>
                    </div>
                    <div className="footer-center col-xl-4 col-md-4 col-sm-12">
                        <div>
                            <FaMapMarkerAlt color={'white'} size={17} className={'mb-4'} />
                            <p><span> Aktergatan 120 66</span> Stockholm, Sweden</p>
                        </div>
                        <div>
                            <IoPhonePortraitOutline color={'white'} size={17} />
                            <p>071-334-8475</p>
                        </div>
                        <div>
                            <AiOutlineMail color={'white'} size={15} />
                            <p><a href="mailto:kutsurukvet@gmail.com"> hertz@company.com</a></p>
                        </div>
                    </div>
                    <div className="footer-right col-xl-4 col-md-4 col-sm-12">
                        <h2>Company<span> Hertz</span></h2>
                        <p className="name">All right reserved &copy; {new Date().getFullYear()}</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default PageFooter;