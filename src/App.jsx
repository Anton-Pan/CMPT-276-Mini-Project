import './App.css'
import './darkModeToggleSwitch.css'

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
        return (<>
            <Biography/>
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
