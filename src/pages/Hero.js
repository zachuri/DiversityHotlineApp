const Hero = ({handleLogout}) => {
    return (
        <section className="login">
            <div className="loginContainer">
                <label>Welcome User</label>
                    <label id="user_para">You're currently logged in.</label>
                    <button onClick={handleLogout}>Logout</button>
            </div>
            
        </section>
    )
}

export default Hero;
