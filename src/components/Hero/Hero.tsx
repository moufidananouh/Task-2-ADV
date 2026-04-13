import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-wrapper">
                <div className="hero-image">
                    <img src="/assets/images/kids.png" alt="Kids" />
                </div>
                <div className="hero-text">
                    <h1>Welcome to Little Learners Academy</h1>
                    <h2>Where Young Minds Blossom and<span className="text">Dreams Take Flight.</span></h2>
                    <p>Our kindergarten school provides a nurturing and stimulating environment,
                fostering a love for learning that lasts a lifetime.</p>
                    <div className="hero-stats">
                        <div className="stat-box">
                            <h3>+7000</h3>
                            <span>Students Passed Out</span>
                        </div>
                        <div className="stat-box">
                            <h3>+37</h3>
                            <span>Awards & Recognitions</span>
                        </div>
                        <div className="stat-box">
                            <h3>+15</h3>
                            <span>Experienced Educators</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;