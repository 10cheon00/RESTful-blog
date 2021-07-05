import SignIn from '/src/components/Profile/SignIn';
import SignUp from '/src/components/Profile/SignUp';
import SignOut from '/src/components/Profile/SignOut';


const ProfileRoute = [
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp,
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn,
    },
    {
        path: '/signout',
        name: 'SignOut',
        component: SignOut,
    },
]

export default ProfileRoute
