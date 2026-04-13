import { useState } from "react";
import "./FAQ.css"

interface FAQItem {
    question : string;
    answer : string;
}
const faqData : FAQItem[] = [
    {
        question : "What are the school hours at Little Learners Academy?" ,
        answer : "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
    },
    {
        question : "Is there a uniform policy for students?" ,
        answer : "Yes , we have a uniform ploicy to ensure a neat and consistent appearance for all students."
    },
    {
        question : "What extracurricular activities are available for students?" ,
        answer : "We offer a wide range of extracurricular activities including arts, sports, music, and coding clubs."
    },
    {
        question : "What extracurricular activities are available for students?" ,
        answer : "We offer a wide range of extracurricular activities including arts, sports, music, and coding clubs."
    },
    {
        question : "How do you handle food allergies and dietary restrictions?" ,
        answer : "We take food allergies very seriously and work closely with parents to ensure safe meal optionsfor every child."
    },
    {
        question : "What is the teacher-to-student ratio at Little Learners Academy?" ,
        answer : "We maintain a low teacher-to-student ratio to ensure personalized attention for every child."
    },
    {
        question : "How do you handle discipline and behavior management?" ,
        answer : "We use positive reinforcement strategies to encourage good behavior and handle disciplinary isuues with care."
    },
    {
        question : "How do I apply for admission to Little Learners Academy?" ,
        answer : "You can apply online through our website or visit us in person to pick up an application form."
    },
]
const FAQ =() => {
    const [openIndex , setOpenIndex] = useState< number | null > (0)
    const toggle = (index : number) =>{
        setOpenIndex((prev)=> (
            prev ===index ? null : index
        ))
    }
    return(
        <section className="faq-sec">

            <h1 className="faq-badge">Solutions For The Doubts</h1>

            <div className="faq-header">
                <h2>Frequently Asked Questions</h2>
                <p>
                Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education. </p>
            </div>
            <div className="faq-grid">
                {faqData.map((item , index) =>(
                    <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
                        <button className="faq-question" onClick={()=> toggle(index)}>
                            <span>{item.question}</span>
                            <div className="faq-icon">
                                {openIndex === index ? "-" : "+"}
                            </div>
                        </button>
                        {openIndex === index && (
                            <p className="faq-answer">{item.answer}</p>
                            )}
                    </div>
                    )
                )}
            </div>
        </section>
    )
}
export default FAQ