import React, {Fragment} from 'react';
import Header from './Header';
import Footer from './Footer';
import InputArea from './InputArea';
import Note from './Note';

const Homepage = () => {
    return(
        <Fragment>
            <Header />
            <InputArea />
            <Note />
            <Footer />
        </Fragment>
    );
}

export default Homepage;
