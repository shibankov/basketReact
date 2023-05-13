import React, { Fragment, useContext } from 'react';
import {Link} from "react-router-dom";
import {Context} from "../js/context";

export const BasketEmpty = () => {
    const {show,setShow} = useContext(Context)

    const exitBasket = (e) => {
        if(e.target.classList.contains('basket-empty')){
            setShow(false)
        }
    }

    return(
        <Fragment>
            <div className="basket-empty"
                 style={{display: show ? 'flex':'none'}}
                 onClick={exitBasket}
            >
                Корзина пуста
                <span className="basket-empty__exit"
                      onClick={()=>setShow(false)}
                >
                    x
                </span>
            </div>
        </Fragment>
    );
}