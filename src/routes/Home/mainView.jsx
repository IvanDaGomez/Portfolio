
import { useRef } from "react"
import {TypeAnimation} from "react-type-animation"
import { useAnimation } from "../../customHooks/useAnimation";
export default function MainView(){


    const circleParent = useRef(null);
    useAnimation({ parentRef:circleParent })

    const aboutRef = useRef(null)
    useAnimation({ parentRef:aboutRef })
    return (<>
    <div className="mainView mainHome">
        <div className="title container">
            <div className="myName">
                <h1>Ivan David</h1><h1>Gomez Silva.</h1>
                <hr />
                
                <div className="imagesGrid">
            <a href="https://github.com/IvanDaGomez" target="_blank">
            <div className="socialContainer github shadow" >
                <svg className="social imgFooter"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                    <path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            </a>
            <a href="https://www.linkedin.com/in/ivan-gomez-79053425a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <div className="socialContainer linkedin shadow">
                <svg className="social imgFooter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
                    <path d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.2099V20C17.5 20.9428 17.5 21.4142 17.7929 21.7071C18.0858 22 18.5572 22 19.5 22H20C20.9428 22 21.4142 22 21.7071 21.7071C22 21.4142 22 20.9428 22 20V15.1641C22 11.733 21.2634 9.5 17.8787 9.5C16.1624 9.5 15.0291 10.3552 14.5223 11.1833M9.5 20V11.5C9.5 10.5572 9.5 10.0858 9.20711 9.79289C8.91421 9.5 8.44281 9.5 7.5 9.5H6.5M9.5 20V11.5C9.5 10.5572 9.5 10.0858 9.79289 9.79289C10.0858 9.5 10.5572 9.5 11.5 9.5H12.326M14.5223 11.1833L14.0001 11.0935C13.0001 10.9065 12.4428 11.4428 12.1443 12.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              </a>
            <a href="https://www.instagram.com/ivangomez_012?igsh=cGR4MGx1eWRtanBh" target="_blank">
            <div className="socialContainer instagram shadow">
              <svg className="social imgFooter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
                <path d="M17.5 2H6.5C4.01472 2 2 4.01472 2 6.5V17.5C2 19.9853 4.01472 22 6.5 22H17.5C19.9853 22 22 19.9853 22 17.5V6.5C22 4.01472 19.9853 2 17.5 2Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M17 11.5C17 14.2614 14.7614 16.5 12 16.5C9.23858 16.5 7 14.2614 7 11.5C7 8.73858 9.23858 6.5 12 6.5C14.7614 6.5 17 8.73858 17 11.5Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M18 7H18.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            </a>
            <div className="socialContainer discord shadow" href="">
                <svg className="social imgFooter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                    <path d="M15.5008 17.75L16.7942 19.5205C16.9156 19.7127 17.1489 19.7985 17.3619 19.7224C18.1657 19.4353 20.158 18.6572 21.7984 17.4725C21.9263 17.3801 22.0002 17.2261 21.9992 17.0673C21.9992 8.25 19.5008 5.75 19.5008 5.75C19.5008 5.75 17.5008 4.60213 15.3547 4.25602C15.1436 4.22196 14.9368 4.33509 14.8429 4.52891L14.3979 5.44677C14.3979 5.44677 13.2853 5.21397 12 5.21397C10.7147 5.21397 9.6021 5.44677 9.6021 5.44677L9.15711 4.52891C9.06314 4.33509 8.85644 4.22196 8.64529 4.25602C6.50079 4.60187 4.50079 5.75 4.50079 5.75C4.50079 5.75 2.0008 8.25 2.0008 17.0673C1.9998 17.2261 2.07365 17.3801 2.20159 17.4725C3.84196 18.6572 5.8343 19.4353 6.63806 19.7224C6.85105 19.7985 7.08437 19.7127 7.20582 19.5205L8.50079 17.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.5008 16.75C17.5008 16.75 15.2057 18.25 12.0008 18.25C8.79587 18.25 6.50079 16.75 6.50079 16.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.2508 12.25C17.2508 13.3546 16.4673 14.25 15.5008 14.25C14.5343 14.25 13.7508 13.3546 13.7508 12.25C13.7508 11.1454 14.5343 10.25 15.5008 10.25C16.4673 10.25 17.2508 11.1454 17.2508 12.25Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M10.2508 12.25C10.2508 13.3546 9.46729 14.25 8.50079 14.25C7.5343 14.25 6.75079 13.3546 6.75079 12.25C6.75079 11.1454 7.5343 10.25 8.50079 10.25C9.46729 10.25 10.2508 11.1454 10.2508 12.25Z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            </div>
            
          </div>

            </div>
            <div className="myPhoto crazyImg shadow"><img src="../myPhoto.jpeg" alt="My Photo" /></div>
            <div className="myInfo">
            <h2>
      <TypeAnimation
        sequence={[
          "UI/UX Designer",
          1000,
          "Frontend Web Developer",
          1000
  
        ]}
        speed={200}
        repeat={Infinity}
        style={{fontFamily:"inherit", fontSize:"inherit"}}
      />
    </h2>
                <p>Bucaramanga, Colombia</p>
                <a href="/myFile.pdf" download><button className="boton shadow">Download CV</button></a>
            </div>
        </div>
        <div ref={circleParent} className="exp container ">
            <div className="instExp" >
                <div className="outerCircle">
                <div className="circle shadow">
                    1-2
                </div></div>Years Experience
            </div>
            <div  className="instExp">
            <div className="outerCircle">
                <div className="circle shadow" style={{animationDelay:"200ms"}}>
                    +5
                </div></div>Projects Completed
            </div>
            <div  className="instExp">
                <div className="outerCircle">
                <div className="circle shadow" style={{animationDelay:"400ms"}}>
                    +10
                </div></div>Technologies Controled
            </div>
        </div>
        <div className="about container" >
            <h1>About Me</h1>
            <div ref={aboutRef}>
            
            <li><span>Name:</span> Ivan David Gomez Silva</li>
            <li><span>Birth Date:</span> July 12 of 2006</li>
            <li><span>City:</span> Bucaramanga, Santander, Colombia</li>
            <li><span>Email:</span> ivandavidgomezsilva@hotmail.com</li>
            <li><span>Phone:</span> +57 302 469 0359</li>
            
            </div>
        </div>
    </div>
    
    </>)
}