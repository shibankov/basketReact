import React, { Fragment, useState, useContext } from 'react';
import {Link } from "react-router-dom";

import {wiredItems, noWiredItems} from "../js/main.js";
import {Context} from "../js/context.js";

import {Header} from "./header.jsx";
import {Footer} from "./footer.jsx";


export const Main = () => {

    const {basket,setBasket,show,setShow} = useContext(Context)


    const addBasket =  (product) =>{
        setBasket( prev => [...prev, {
            ...product,
            count: 1
        }])
    }

    return(
        <Fragment>
            <Header />
            <main className="content">
                <section className="catalog">
                    <div className="container">
                        <div className="catalog__body">
                            <h2 className="catalog__title">Наушники</h2>
                            <div className='catalog__row'>
                                {
                                    wiredItems.map(item =>(
                                        <div className="catalog__col">
                                            <article className='card' key={item.id}>
                                                <div className="card__img">
                                                    <img src={require(`./../images/${item.img}`)} />
                                                </div>
                                                <div className="card__body">
                                                    <div className="card__row">
                                                        <div className="card__col">
                                                            <h3 className="card__title">
                                                                {item.name}
                                                            </h3>
                                                        </div>
                                                        <div className="card__col">
                                                            <div className="price">
                                                                <div className="price__current">
                                                                    {item.price} ₽
                                                                </div>
                                                                <div className="price__old">
                                                                    {item.oldPrice }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card__row">
                                                        <div className="card__col">
                                                            <div className="rating">
                                                                <div className="rating__icon">
                                                                    <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M12.6268 17.6614L5.41618 22.0127L7.37647 13.892L0.960754 8.462L9.38215 7.79538L12.6268 0.0867615L15.8715 7.79538L24.2941 8.462L17.8771 13.892L19.8374 22.0127L12.6268 17.6614Z" fill="#FFCE7F"/>
                                                                    </svg>
                                                                </div>
                                                                <div className="rating__count">
                                                                    {item.rate}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card__col">
                                                            <button className="card__btn btn"
                                                                    onClick={()=>{
                                                                        addBasket(item)
                                                                    }}
                                                                    disabled={
                                                                        basket.findIndex((el) =>el.id === item.id) > -1
                                                                    }>
                                                                {
                                                                    basket.findIndex((el) =>el.id === item.id) > -1
                                                                        ? 'Добавлен'
                                                                        : 'Купить'
                                                                }
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    ))
                                }
                            </div>
                            <h2 className="catalog__title">Беспроводные наушники</h2>
                            <div className='catalog__row'>
                                {
                                    noWiredItems.map(item =>(
                                        <div className="catalog__col">
                                            <article className='card' key={item.id}>
                                                <div className="card__img">
                                                    <img src={require(`./../images/${item.img}`)} />
                                                </div>
                                                <div className="card__body">
                                                    <div className="card__row">
                                                        <div className="card__col">
                                                            <h3 className="card__title">
                                                                {item.name}
                                                            </h3>
                                                        </div>
                                                        <div className="card__col">
                                                            <div className="price">
                                                                <div className="price__current">
                                                                    {item.price} ₽
                                                                </div>
                                                                <div className="price__old">
                                                                    {item.oldPrice}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card__row">
                                                        <div className="card__col">
                                                            <div className="rating">
                                                                <div className="rating__icon">
                                                                    <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M12.6268 17.6614L5.41618 22.0127L7.37647 13.892L0.960754 8.462L9.38215 7.79538L12.6268 0.0867615L15.8715 7.79538L24.2941 8.462L17.8771 13.892L19.8374 22.0127L12.6268 17.6614Z" fill="#FFCE7F"/>
                                                                    </svg>
                                                                </div>
                                                                <div className="rating__count">
                                                                    {item.rate}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card__col">
                                                            <button className="card__btn btn"
                                                                    onClick={()=>{
                                                                        addBasket(item)
                                                                    }}
                                                                    disabled={
                                                                        basket.findIndex((el) =>el.id === item.id) > -1
                                                                    }>
                                                                {
                                                                    basket.findIndex((el) =>el.id === item.id) > -1
                                                                        ? 'Добавлен'
                                                                        : 'Купить'
                                                                }
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </Fragment>
    );
}