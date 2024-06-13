import { Route, useNavigate } from "react-router-dom";

// Pages
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const PrivateRoute = ({ component: Component, roles, ...rest }) => (
    <Route 
    {...rest} 
    render={(props) => {
        const tok = JSON.parse(localStorage.getItem('user'))
        const token = tok.data.accessToken;
        const role = tok.data.user.role_user;
        console.log(tok)
        console.log('tok')

        if (tok === null) {
            return <Login/>
        }

        if (roles && !roles.includes(role)) {
            return <NotFound/>
        }

        return <Component {...props} />;
    }}
    />
);

export default PrivateRoute;