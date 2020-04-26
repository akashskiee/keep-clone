import React, {Fragment} from 'react';
import Header from './Header';
import Footer from './Footer';
import InputArea from './InputArea';
import Note from './Note';
import Alerting from '../layout/Alerting';


const Homepage = () => {
    return(
        <Fragment>
            <Header />
            <Alerting />
            <InputArea />
            <Note />
            <Footer />
        </Fragment>
    );
}

export default Homepage;
