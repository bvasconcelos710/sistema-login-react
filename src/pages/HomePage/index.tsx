import { useState, useEffect } from "react";
import { getProfile } from "../../api";
import Header from "../../components/Header";
import Profile from "../../components/Profile";
import { UserProfile } from "../../model/UserProfile";


const HomePage = () => {

    const [user, setUser] = useState<UserProfile>();

    useEffect(() => {
        getProfile().then(res => {
            setUser(res.data)
        });
    }, []);

    return (
        <>
            <Header />
            <div className="w-full h-screen flex justify-center items-center">
                {
                    user ? (
                        <Profile user={user} />
                    ) : <h1>Loading...</h1>
                }
            </div>
        </>
    );
}

export default HomePage;