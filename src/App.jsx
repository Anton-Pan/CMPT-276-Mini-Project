import './App.css'

function App() {
    const Header = () => {
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
            </section>
        )
    }
    return (<>
        <Header>

        </Header>
    </>)
}

export default App
