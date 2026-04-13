import "./Benefits.css"

interface BenefitCard{
    icon : string;
    title : string;
    description : string;
}
const benefits : BenefitCard[] = [
    {
        icon : "/assets/images/Gradicon.svg",
        title : "Holistic Learning Approach",
        description : "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education."
    },
    {
        icon : "/assets/images/Crownicon.svg",
        title : "Experienced Educators",
        description : "Our passionate and qualified teachers create a supportive and stimulating learning environment."
    },
    {
        icon : "/assets/images/Maskicon.svg",
        title : "Nurturing Environment",
        description : "We prioritize safety and provide a warm and caring atmosphere for every child."
    },
    {
        icon : "/assets/images/Flagicon.svg",
        title : "Play-Based Learning",
        description : "We believe in the power of play to foster creativity, problem-solving skills, and imagination."
    },
    {
        icon : "/assets/images/Wheelicon.svg",
        title : "Individualized Attention",
        description : "Our small class sizes enable personalized attention, catering to each child's unique needs."
    },
    {
        icon : "/assets/images/Personicon.svg",
        title : "Parent Involvement",
        description : "We foster a strong parent-school partnership to ensure seamless communication and collaboration."
    }
];
const Benefits = ()=>{
    return(
        <section className="benefits-sec">
            <h1 className="benefits-badge">Children Deserve Bright Future</h1>

            <div className="benefits-header">
                <h2>Our Benefits</h2>
                <p>
                    With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.
                </p>
            </div>
            {/*cards*/}
            <div className="benefits-grid">
                {benefits.map((benefit , index) =>(
                    <div key={index} className="benefit-card">
                        <div className="benifit-icon">
                            <img src={benefit.icon} alt={benefit.title}/>
                        </div>
                        <h3 className="card-title">{benefit.title}</h3>
                        <p className="card-description">{benefit.description}</p>
                    </div>
                ))}
            
            </div>
        </section>
    )
}
export default Benefits