import { useState } from "react";
import "./Testimonials.css";

interface Testimonial {
    name: string;
    image: string;
    rating: number;
    review: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Jennifer B",
        image: "/assets/images/Jenniver.png",
        rating: 5,
        review:
            "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
    },
    {
        name: "David K",
        image: "/assets/images/David.png",
        rating: 5,
        review:
            "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment."
    },
    {
        name: "Emily L",
        image: "/assets/images/Emily.png",
        rating: 5,
        review:
            "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
    },
    {
        name : "Karol A",
        image : "/assets/images/Jenniver.png",
        rating : 5,
        review :"who teaches the 2-3 year olds had 12, 2-3 year olds all sitting down and eating lunch at the same time!"
    },
    {
        name : "Christena C",
        image : "/assets/images/Emily.png",
        rating : 5,
        review :"At Little Learner's Preschool Everything is a Learning Experience! and Learning is child's play!"
    }
];

const TestimonialsSection =() =>{
    const [current , setCurrent] = useState(0)
    const getVisibleCards=()=>{
        return window.innerWidth <= 992 ? 1 : 3
    };
    const visibleCards = getVisibleCards()

    const nextSlide = () => {
        setCurrent((prev) => prev + visibleCards >= testimonials.length ? 0: prev + visibleCards
        )
    
    };

    const prevSlide = () => {
        setCurrent((prev) =>
        prev === 0 ? testimonials.length - visibleCards : prev - visibleCards
        );
    };

    return (
        <section className="testimonials-sec">
            <h1 className="testimonials-badge">Their Happy Words 🤗</h1>
            <div className="testimonials-header">
                <h2 className="testimonials-title">Our Testimonials</h2>
                <p className="testimonials-subtitle">
                Our testimonials are heartfelt reflections of the nurturing environment
                we provide, where children flourish both academically and emotionally.
            </p>
            </div>
            
            <div className="slider-container">
                <button className="prev-btn" onClick={prevSlide}>
                    <img src="/assets/images/Prevarrow.svg" alt="Prev"/>
                </button>
                <div className="slider-wrapper">
                    <div className="slider-track">
                        {testimonials.slice(current,current+visibleCards).map((item, index) => (
                            <div className="slide" key={index}>
                                <div className="testimonial-card">
                                    <img src={item.image}alt={item.name} className="testimonial-card-image"/>
                                    <h3 className="testimonial-card-name">{item.name}</h3>
                                    <div className="testimonial-card-stars">
                                        {"★".repeat(item.rating)}
                                    </div>
                                    <p className="testimonial-card-message">{item.review}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="next-btn" onClick={nextSlide}>
                    <img src="/assets/images/nextarrow.svg" alt="Next"/>
                </button>
            </div>
        </section>
    );
};
export default TestimonialsSection;