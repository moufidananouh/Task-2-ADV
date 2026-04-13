import "./Explore.css"
interface PageCard{
    title : string;
    description : string;
    link : string;
}

const pagesData : PageCard[] =[
    {
        title: "About Us", 
        description: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education." ,
        link :"#" ,
    },
    {
        title:"Academics" , 
        description:"Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development." ,
        link :"#" ,
    },
    {
        title:"Student Life" , 
        description:"Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable." ,
        link : "#",
    },
    {
        title:"Admissions" , 
        description:"Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces." ,
        link : "#",
    }
]
const Pages =()=>{
    return(
        <section className="explore-section">
            <h1 className="explore-badge">Explore More</h1>
            <div className="explore-header">
                <h2>Navigate through our Pages</h2>
                <p>
                    Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school
                </p>
            </div>
            <div className="explore-grid">
                {pagesData.map((page,index) =>(
                    <div key={index} className="explore-card">
                        <h3>{page.title}</h3>
                        <div className="explore-card-divider">
                            <span className="dot-left"/>
                            <span className="dashes"/>
                            <span className="dot-right"/>
                        </div>
                        <p className="explore-card-description">{page.description}</p>
                        <a href={page.link} className="explore-card-btn">
                            Learn More <img src="/assets/images/nextarrow.svg" alt="Nextarrow Image"/>
                        </a>
                    </div>
                )
            )}
            </div>
        </section>
    )
}
export default Pages;