import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';
import { auth } from '../firebase';
import Nav from '../Nav';
import "./ProfilePage.css";

function ProfilePage() {
    const user = useSelector(selectUser);

    return (
        <div className='profilePage'>
            <Nav />
            <div className='profilePage__body'>
                <h1>Edit profile</h1>
                <div className='profilePage__info'>
                    <img
                        className='profilePage__logo'
                        src='https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg'
                        alt=''
                    />
                    <div className='profilePage__details'>
                        <h2>{user.email}</h2>
                        <div className='profilePage__plans'>
                            <h3>Plans</h3>
                            <p><i>**The payment method is unaccessible, left out on purpose**</i></p>
                            <button
                                onClick={() => auth.signOut()}
                                className='signOut__btn'>
                                Sign out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProfilePage