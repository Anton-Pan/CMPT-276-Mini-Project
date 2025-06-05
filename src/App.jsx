import './App.css'
import './darkModeToggleSwitch.css'
import selfPhoto from "./assets/headshot.jpeg"
import project1Photo from "./assets/project1.png"
import project2Photo from "./assets/project2.png"
import bridgePhoto from "./assets/snowy-bridge-at-night.jpeg"
import fieldPhoto from "./assets/snowy-field.jpeg"
import balconiesPhoto from "./assets/sunset-and-balconies.jpeg"
import trainyardPhoto from "./assets/trainyard.jpeg"


function App() {
    const Header = () => {
        const darkModeToggleSwitch = () => {
            // Credit to https://uiverse.io/RiccardoRapelli/jolly-chicken-91 (MIT License) for checkbox design, used in the return statement of this function and ./darkModeToggleSwitch.css
            // Credit to https://digitallytailored.github.io/Classless.css/ for checkbox functionality, used in the return statement of this function
            // Both the design and functionlity were modified by Anton-Pan
            document.addEventListener('DOMContentLoaded', () => {
                const darkModeToggle = document.getElementById('darkModeToggle');

                function setColorScheme(scheme) {
                    document.documentElement.setAttribute('color-scheme', scheme);
                    localStorage.setItem('color-scheme', scheme);
                }

                function getColorScheme() {
                    let scheme = localStorage.getItem('color-scheme');
                    if (scheme) {
                        return scheme;
                    }
                    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }

                setColorScheme(getColorScheme());

                darkModeToggle.addEventListener('change', function () {
                    setColorScheme(this.checked ? 'dark' : 'light');
                });

                darkModeToggle.checked = getColorScheme() === 'dark';
            })
            return (<label className="switch">
                <input type="checkbox" id="darkModeToggle"/>
                <div className="slider round">
                    <div className="sun-moon">
                        <svg id="moon-dot-1" className="moon-dot" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="50"></circle>
                        </svg>
                        <svg id="moon-dot-2" className="moon-dot" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="50"></circle>
                        </svg>
                        <svg id="moon-dot-3" className="moon-dot" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="50"></circle>
                        </svg>
                        <svg id="light-ray-1" className="light-ray" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="50"></circle>
                        </svg>
                        <svg id="light-ray-2" className="light-ray" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="50"></circle>
                        </svg>
                        <svg id="light-ray-3" className="light-ray" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="50"></circle>
                        </svg>

                        <svg id="cloud-1" className="cloud-dark" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="50"></circle>
                        </svg>
                        <svg id="cloud-2" className="cloud-dark" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="50"></circle>
                        </svg>
                        <svg id="cloud-3" className="cloud-dark" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="50"></circle>
                        </svg>
                        <svg id="cloud-4" className="cloud-light" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="50"></circle>
                        </svg>
                        <svg id="cloud-5" className="cloud-light" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="50"></circle>
                        </svg>
                        <svg id="cloud-6" className="cloud-light" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="50"></circle>
                        </svg>
                    </div>
                    <div className="stars">
                        <svg id="star-1" className="star" viewBox="0 0 20 20">
                            <path
                                d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                            ></path>
                        </svg>
                        <svg id="star-2" className="star" viewBox="0 0 20 20">
                            <path
                                d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                            ></path>
                        </svg>
                        <svg id="star-3" className="star" viewBox="0 0 20 20">
                            <path
                                d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                            ></path>
                        </svg>
                        <svg id="star-4" className="star" viewBox="0 0 20 20">
                            <path
                                d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                            ></path>
                        </svg>
                    </div>
                </div>
            </label>)
        }
        return (<section style={{display: "flex"}}>
            <header>
                <h1>
                    Anton Panfilenok
                </h1>
                <h5>
                    CMPT 276 Mini-Project
                </h5>
            </header>
            <div style={{paddingLeft: "2rem", borderRight: "thick solid #334155"}}/>
            <div style={{
                flex: 1, display: "flex", width: "100%", alignItems: "center", justifyContent: "space-evenly"
            }}>
                <button onClick={() => document.getElementById("Biography").scrollIntoView({behavior: 'smooth'})}>
                    Biography
                </button>
                <button onClick={() => document.getElementById("Projects").scrollIntoView({behavior: 'smooth'})}>
                    Projects
                </button>
                <button onClick={() => document.getElementById("Photography").scrollIntoView({behavior: 'smooth'})}>
                    Photography
                </button>
            </div>
            <div style={{
                display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "0.5rem",
            }}>
                {darkModeToggleSwitch()}
            </div>
        </section>)
    }

    const Content = () => {
        const Biography = () => {
            return (<div>
                <h6 style={{paddingLeft: "1rem"}} id="Biography">Biography</h6>
                <section style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 5fr",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>

                    <figure style={{marginRight: "2rem", marginBottom: "0rem"}}>
                        <img src={selfPhoto} alt={"A picture of me"}/>
                    </figure>
                    <section style={{marginBottom: 0}}>
                        <h6>Hello!</h6>
                        <p style={{marginBottom: 0}}>
                            My name is Anton Panfilenok, and I'm the creator of this site! <br/>
                            I'm a third-year student at SFU, studying Computing Science. This semester, I'm taking
                            MACM316 and CMPT276! <br/>
                            I'm a member of <a href={"https://sfusurge.com/"}>SFU Surge</a>, the largest student-run,
                            CMPT-focused club, where I'm a member of the Social Media & Marketing, and External
                            Relations teams. <br/>
                            I spend my free time taking photos, working on cars, and playing the guitar.
                        </p>
                    </section>
                </section>
            </div>)
        }

        const Projects = () => {
            return (<div>
                <h6 style={{paddingLeft: "1rem"}} id="Projects">Projects</h6>
                <section style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 5fr",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <figure style={{marginRight: "2rem", marginBottom: "0rem"}}>
                        <img src={project1Photo} alt={"A picture of me"}/>
                    </figure>
                    <section style={{marginBottom: 0}}>
                        <h6>Ticketrebel</h6>
                        <p style={{marginBottom: 0}}>
                            I am currently working on developing a concert ticketing website dedicated to
                            small-scale
                            local events, such as punk shows & art fairs. <br/>
                            At the moment, my tech stack is made up of: <br/>
                            <div style={{
                                paddingTop: "1rem",
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr",
                                alignItems: "center",
                                justifyContent: "space-between",
                                columnGap: "0.5rem",
                                rowGap: "0.5rem"
                            }}>
                                <pre style={{marginBottom: 0}}><a
                                    href="https://www.npmjs.com/package/react">React</a></pre>
                                <pre style={{marginBottom: 0}}><a
                                    href="https://www.npmjs.com/package/mui">Material UI</a></pre>
                                <pre style={{marginBottom: 0}}><a href="https://www.npmjs.com/package/koa">Koa</a></pre>
                                <pre style={{marginBottom: 0}}><a href="https://www.npmjs.com/package/ajv">AJV</a></pre>
                                <pre style={{marginBottom: 0}}><a
                                    href="https://www.npmjs.com/package/swagger-ui">Swagger/OAS3</a></pre>
                                <pre style={{marginBottom: 0}}><a href="https://www.npmjs.com/package/stripe">Stripe</a></pre>
                            </div>
                        </p>
                    </section>
                </section>
                <section style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 5fr",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <figure style={{marginRight: "2rem", marginBottom: "0rem"}}>
                        <img src={project2Photo} alt={"A picture of me"}/>
                    </figure>
                    <section style={{marginBottom: 0}}>
                        <h6>LastMinuteMassage</h6>
                        <p style={{marginBottom: 0}}>
                            This is one of my favorite past projects - a website that aggregated data on
                            local massage parlors, such as prices, availability times, and massage types, for ease of
                            comparison for users. <br/>
                            The tech stack was: <br/>
                            <div style={{
                                paddingTop: "1rem",
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                alignItems: "center",
                                justifyContent: "space-between",
                                columnGap: "0.5rem",
                                rowGap: "0.5rem"
                            }}>
                                <pre style={{marginBottom: 0}}><a
                                    href="https://www.npmjs.com/package/selenium-webdriver">Selenium</a></pre>
                                <pre style={{marginBottom: 0}}><a
                                    href={"https://www.npmjs.com/package/@nestjs/core"}>NestJS</a></pre>
                                <pre style={{marginBottom: 0}}><a
                                    href={"https://www.npmjs.com/package/tailwindcss"}>TailwindCSS</a></pre>
                                <pre style={{marginBottom: 0}}><a style={{pointerEvents: "none"}}>JaneApp API</a></pre>
                            </div>
                        </p>
                    </section>
                </section>
            </div>)
        }

        const Photography = () => {
            return (<div>
                <h6 style={{paddingLeft: "1rem"}} id="Photography">Photography</h6>
                <section style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    alignItems: "center",
                    justifyContent: "space-between",
                    columnGap: "1rem",
                }}>
                    <div>
                        <figure>
                            <img src={bridgePhoto} alt={"A picture of a bridge during a snowstorm"}/>
                        </figure>
                        <figure style={{paddingTop: "1rem"}}>
                            <img src={fieldPhoto} alt={"A picture of a field covered in snow"}/>
                        </figure>
                    </div>
                    <div>
                        <figure style={{marginBottom: 0}}>
                            <img src={balconiesPhoto} alt={"A photo of some balconies during sunset"}/>
                        </figure>
                        <figure style={{marginBottom: 0, paddingTop: "1rem"}}>
                            <img src={trainyardPhoto} alt={"A photo of a trainyard at night"}/>
                        </figure>
                    </div>
                </section>
            </div>)
        }

        return (<>
            <Biography/>
            <Projects/>
            <Photography/>
        </>)
    }

    const Footer = () => {
        const getTodaysDate = () => {
            const parseMonth = (month) => {
                switch (month) {
                    case 0:
                        return "January";
                    case 1:
                        return "February";
                    case 2:
                        return "March";
                    case 3:
                        return "April";
                    case 4:
                        return "May";
                    case 5:
                        return "June";
                    case 6:
                        return "July";
                    case 7:
                        return "August";
                    case 8:
                        return "September";
                    case 9:
                        return "October";
                    case 10:
                        return "November";
                    case 11:
                        return "December";
                }
            }
            const currentDate = new Date;
            return (`${parseMonth(currentDate.getMonth())} ${currentDate.getDate()}, ${currentDate.getFullYear()}`)
        }
        return (<section style={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <a style={{pointerEvents: "none"}}>
                © 2025 Anton-Pan (MIT License)
            </a>
            <a style={{pointerEvents: "none"}}>
                {getTodaysDate()}
            </a>
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <div style={{display: "flex", width: "100%", justifyContent: "end"}}>
                    <a href={"https://github.com/Anton-Pan"}>Github</a>
                </div>
                <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
                    <a href="mailto:anton_panfilenok@sfu.ca">Email</a>
                </div>
                <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
                    <a href="https://www.linkedin.com/in/anton-panf/">Linkedin</a>
                </div>
            </div>
        </section>)
    }

    return (<>
        <Header/>
        <Content/>
        <Footer/>
    </>)
}

export default App
