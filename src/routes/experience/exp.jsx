import Header from "../../components/header"
import { useEffect, useRef } from "react"
import { maximoDivisor } from "../../functions/maximoDivisor"
import { useAnimation } from "../../customHooks/useAnimation"
import useUpdateBreakpoint from "../../assets/useUpdateBreakPoint"
export default function Experience(){
    useEffect(()=>window.scrollTo({ top: 0, behavior: 'smooth' }),[])
    const experience = [
        {
            title: "National Federation of Volleyball Webpage",
            description: "Completed from beginning to final",
            date: "July 5th of 2024",
            link: "https://www.fedevolei.com.co",
        }
    ]

    const courses = [
        {
            title: "CS50 Introduction to Programming with Python",
            offer: "Harvard",
            completion: "100%"
        },
        {
            title: "CS50 Introduction to Artificial Intelligence with Python",
            offer: "Harvard",
            completion: "100%"
        },
        {
            title:"Responsive Website Certification",
            offer: "FreeCodeCamp",
            completion: "100%"
        },
        {
            title:"CS50 Web",
            offer: "Harvard",
            completion: "100%"
        },
        {
            title: "Javascript Algorithms and Data Structures Certification",
            offer: "FreeCodeCamp",
            completion: "100%"
        },
        {
            title: "Intermediate HTML and CSS Course",
            offer: "TheOdinProject",
            completion: "100%"
        },
        {
            title: "Javascript Course",
            offer: "TheOdinProject",
            completion: "100%"
        },
        {
            title: "Advanced HTML and CSS Course",
            offer: "TheOdinProject",
            completion: "100%"
        },
        {
            title: "React Course",
            offer: "TheOdinProject",
            completion: "100%"
        },
        {
            title: "Node JS Course",
            offer: "TheOdinProject",
            completion: "100%"
        },
        {
            title: "Learning the Art of Electronics",
            offer: "Self-study / Book-based",
            completion: "10%"
        },
        {
            title: "Java Programming Course",
            offer: "Bro Code (YouTube)",
            completion: "100%"
        },
        {
            title: "German Language Basics",
            offer: "Self-study / App-based",
            completion: "10%"
        },
        {
            title: "Intro to Machine Learning with Python",
            offer: "FreeCodeCamp",
            completion: "100%"
        },
        {
            title: "Cloud Practitioner Essentials",
            offer: "AWS",
            completion: "100%"
        },
        {
            title: "Cloud Computing Basics",
            offer: "AWS",
            completion: "100%"
        },
        {
            title: "Typescript Course",
            offer: "TheOdinProject",
            completion: "100%"
        },
        {
            title: "PostgreSQL Course",
            offer: "FreeCodeCamp YouTube",
            completion: "100%"

        },
        {
            title: "Docker Course",
            offer: "FreeCodeCamp YouTube",
            completion: "100%"
        },
        {
            title: "Flask Course",
            offer: "FreeCodeCamp YouTube",
            completion: "100%"
        }
    ]


    const experienceDiv = useRef(null);
    const courseDiv = useRef(null);
    const isMobile = useUpdateBreakpoint(734)
    useAnimation({ parentRef:experienceDiv });
    
    
    useAnimation({ parentRef:courseDiv });
    useEffect(() => {
        const options = {
          root: null, // use the viewport as the root
          rootMargin: "0px",
          threshold: 0.1, // Adjust the threshold as needed
        };
    
        const callback = (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Element is in view, start the animation
              entry.target.style.animationPlayState = "running";
              // Optionally, you can unobserve the element if you only want the animation to play once
              observer.unobserve(entry.target);
              entry.target.addEventListener("animationend", function stop(){
                entry.target.style.transform = "scale(1)";
                entry.target.addEventListener("onAnimationEnd", stop)
              })
            }
          });
        };
    
        const observer = new IntersectionObserver(callback, options);
    
        const skillElements = experienceDiv.current.querySelectorAll(".skillContainer");
        skillElements.forEach((el) => observer.observe(el));
    
        const serviceElements = courseDiv.current.querySelectorAll(".element");
        serviceElements.forEach((el) => observer.observe(el));
    
        // Cleanup on unmount
        return () => observer.disconnect();
    }, []);
    return (
        <>
            <Header />
            <div className="mainView">
                <h1 style={{margin: "10px"}}>Working Experience</h1>
                <hr />
                <div className="expContainer" ref={experienceDiv}>
                    {experience.map((exp, index) => (
                        <div className="expElement" key={index}>
                            <div className="expWrapper">
                                <div>
                                    <h3>{exp.title}</h3>
                                    <span>{exp.date}</span>
                                    
                                </div>
                                <p>{exp.description}</p>
                                {exp.link &&
                                        <a href={exp.link} target="_blank" rel="noopener noreferrer"><span>Link</span></a>
                                    }
                            </div>
                        </div>
                    ))}
                </div>
                <hr />
                <h1 style={{margin: "10px"}}>Courses</h1>
                <div className="courseContainer" ref={courseDiv} style={{ gridTemplateColumns:!isMobile ? `repeat(${maximoDivisor(courses.length)}, 1fr)`: "1fr"}}>
                {courses.map((course, index) => (
                        <div className="courseElement" key={index}>
                            
                            <div>
                                <h3>{course.title}</h3>
                                <p>By {course.offer}</p>
                                <p>{course.date}</p>
                                
                            </div>
                            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}><div style={{width:"100%", borderRadius:"10px", border:"2px solid white"}}><div className="completion" style={{width: course.completion}}></div></div><span style={{marginLeft:"5px"}}>{course.completion}</span></div>
                            
                            
                        </div>
                    ))}
                </div>
                    
            </div>
    </>

    )
}