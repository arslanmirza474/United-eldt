import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HomeofclassaSpanish from './Spanish/HomeofclassaSpanish';
import Homeofclassa from './Homeofclassa';
import HomeofclassaPortueses from "./Portugese/HomeofclassaPortueses"
import NotFound from '../components/404';
const Navigate = () => {
    const { pglan } = useParams();

    useEffect(() => {
        // You can place any logic related to the language change here
    }, [pglan]);

    // Render the appropriate component based on the language parameter
    let componentToRender;
    switch (pglan) {
        case 'Spanish':
            componentToRender = <HomeofclassaSpanish />;
            break;
        case 'English':
            componentToRender = <Homeofclassa />;
            break;
            case 'Portuguese':
                componentToRender = <HomeofclassaPortueses />;
                break;
        default:
            componentToRender = <NotFound/>;
    }

    return (
        <div>
            {componentToRender}
        </div>
    );
};

export default Navigate;
