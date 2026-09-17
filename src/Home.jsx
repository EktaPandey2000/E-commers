import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    navigate;

    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <div className="home-container">
            <h2>Home</h2>
            {user ? (   
                <p>Welcome, {user.email}!</p>
            ) : (
                <p>Please login to access your account.</p>
            )}
        </div>
    );
};

export default Home;