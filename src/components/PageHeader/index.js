import { UserContext, ThemeContext } from '../../contexts';
import { THEME_VALUES } from '../../constants/constants';
import React,{useContext} from 'react';


function PageHeader(props){
    const [user] = useContext(UserContext);
    const[theme,setTheme] = useContext(ThemeContext);

    const style ={
        border: '2px solid red',
        backgroundColor:
        theme === THEME_VALUES.LIGHT ? 'initial' : 'rgba(0,0,0,0.2)',
    };

    const changeTheme = () => {
        setTheme(prevValue =>
        prevValue === THEME_VALUES.LIGHT ? THEME_VALUES.DARK : THEME_VALUES.LIGHT
        ) ;
    };

    return (
        <div style={style}>
            {user.name} {user.surname}
            <button onClick={changeTheme}>theme</button>
        </div>
    );

}

export default PageHeader;