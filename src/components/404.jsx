import React, { Fragment } from 'react';
import {Link} from "react-router-dom";

import {Footer} from "./footer.jsx";
import {Header} from "./header.jsx";

export const NotFound = () => {
    return(
        <Fragment>
            <Header />
            <main className="content">
                <div className="notFound">
                    <div className="notFound__body">
                        404<br/>
                        Страница не найдена
                        <Link to="/" className="notFound__btn btn">
                            Вернутся на главную
                        </Link>
                    </div>
                </div>
            </main>
            <Footer/>
        </Fragment>
    );
}