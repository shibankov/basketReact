import React, { Fragment, useState, useEffect } from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import {Context} from "../js/context.js";

import { Main } from "./main.jsx";
import { Basket } from "./basket.jsx";
import {NotFound} from "./404.jsx"

export const Wrapper = () => {
    const [basket, setBasket] = useState([])
    const [show, setShow] = useState(false)

    useEffect(()=>{
        if(sessionStorage.getItem('basket') !== null){
            setBasket(JSON.parse(sessionStorage.getItem('basket')))
        }
    },[])
    useEffect(()=>{
        sessionStorage.setItem('basket' , JSON.stringify(basket))
    },[basket])

    return(
        <Fragment>
            <Context.Provider
                value = {{
                    basket,
                    setBasket,
                    show,
                    setShow
                }}>
                <Routes>
                    <Route path='/' >
                        <Route index element={<Main />}/>
                        <Route path='basket' element={<Basket />} />
                    </Route>
                    <Route path='*' element={<NotFound />}/>
                </Routes>
            </Context.Provider>
        </Fragment>
    );
}