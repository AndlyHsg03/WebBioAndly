import React, { Component } from 'react';
import { Fade } from 'react-awesome-reveal';


class About extends Component {
    render() {
        if (!this.props.data) return null;

        const name = this.props.data.name;
        const profilepic = "images/" + this.props.data.image;
        const bio = this.props.data.bio;
        const street = this.props.data.address.street;
        const city = this.props.data.address.city;
        const state = this.props.data.address.state;
        const zip = this.props.data.address.zip;
        const phone = this.props.data.phone;
        const email = this.props.data.email;
        const tanggalLahir = this.props.data.tanggalLahir;
        const hobby = this.props.data.hobby;
        const motto = this.props.data.motto
        const resumeDownload = this.props.data.resumeDownload;

        return (
            <section id="about">
                <Fade duration={3000}>
                    <div className="row">
                        <div className="three columns">
                            <img
                                className="profile-pic"
                                src={profilepic}
                                alt="Nordic Giant rPofile Pic"
                            />
                        </div>
                        <div className="nine columns main-col">
                            <h2>About Me</h2>
                            <p>{bio}</p>
                            <div className="">
                                <div className="">
                                    <h2>My Details</h2>
                                    <p> Nama : &nbsp; {name} <br />
                                        Tanggal lahir : &nbsp; Parlilitan, {tanggalLahir} <br />
                                        Alamat : &nbsp; Parlilitan, {state} <br />
                                        hobby : &nbsp; {hobby} <br />
                                        whatsapp : &nbsp; {phone} <br />
                                        email : &nbsp; {email} <br />
                                        motto : &nbsp;{motto} <br />
                                        
                                     </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>
        );
    }
}

export default About;