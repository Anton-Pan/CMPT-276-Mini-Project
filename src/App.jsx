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
            return (
                <label className="switch">
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
                </label>
            )
        }
        return (
            <section style={{display: "flex"}}>
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
                    flex: 1,
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-evenly"
                }}>
                    <button>
                        Biography
                    </button>
                    <button>
                        Projects
                    </button>
                    <button>
                        Photography
                    </button>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "0.5rem",
                }}>
                    {darkModeToggleSwitch()}
                </div>
            </section>
        )
    }

    const Footer = () => {
        return (
            <section style={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>

            </section>
        )
    }
    return (
        <>
            <Header/>
            <Footer/>
        </>
    )
}

export default App
