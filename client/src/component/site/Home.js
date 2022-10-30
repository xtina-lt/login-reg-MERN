const Home = ({setTitle}) => {
    setTitle("Home")
    return (
        <>
            <div>
            <h2>
                Welcome!
            </h2>
            <br/>
            🦄 We are going to show how a logged in users can be used in relation to objects in MERN.
            <br/>
            <br/>
            🔧 Have fun reverse engineering!
            <br/>
            <br/>
            💻 Happy Coding!
            </div>

            <div>
                <img src="https://i.pinimg.com/originals/3f/e5/b4/3fe5b465c9e70d20f7f54cff7deb7e82.gif"/>
            </div>
        </>
    )
}

export default Home