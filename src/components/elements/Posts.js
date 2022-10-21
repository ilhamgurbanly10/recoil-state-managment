import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";
import React, {useEffect, useRef} from 'react';
import '../../assets/css/flash/lightbox.css';
import flashLightbox from '../../assets/js/flash/lightbox.js';
import { Image, Popconfirm } from 'antd';

export const SimplePost = (props) => {

    const {t, i18n} = useTranslation('common');

    const { key, img, name, text, className } = props;

    return (
        <div key={key} className={`simple-post d-flex flex-column align-items-start justify-content-start ${className}`}>
            
            <div className="simple-post-img-box img-box-1">
                <img src={img} alt="Post Image" className="simple-post-img img-box-img"></img>
            </div>

            <Link to="/" className="simple-post-title black-btn bigger-font mt-4">
                {name}
            </Link>

            <p className="simple-post-text grey-text mt-2">
                {text}
            </p>

            <Link to="/" className="main-services-title yellow-btn mt-3 rounded">
                {t('buttons.readMore')}
            </Link>
            
        </div>
    )

}

export const SimplePost2 = (props) => {

    const {t, i18n} = useTranslation('common');

    const { key, img, name, text, className, images } = props;

    const lightboxShower = useRef();
    const simplePost2 = useRef();

    useEffect(() => { 
        flashLightbox(simplePost2.current);
        const hiddenShowerBtn = simplePost2.current.querySelector('.fl-lightbox-btn');
        lightboxShower.current.onclick = function() { hiddenShowerBtn.click(); }
    }, []);

    return (
        <div key={key} ref={simplePost2} className={`simple-post-2 d-flex flex-column align-items-start justify-content-start form-bottom-to-top-on-hover-parent bg-gradient-on-hover show-iconic-btn-on-hover-parent ${className}`}>
            
            <img src={img} alt="Post Image" className="simple-post-2-img img-box-img cover-img-1 position-relative layer-n1"></img>
            
            <button type="button" className="simple-post-2-lightbox-shower-btn show-iconic-btn-on-hover white-iconic-btn darkgrey-color position-absolute top-1 right-1 white-color-on-hover" ref={lightboxShower}>
                <i className="fa fa-arrows-alt"></i>
            </button>

            <div className="simple-post-2-container form-bottom-to-top-on-hover">

                <Link to="/" className="simple-post-2-title black-btn d-block bigger-font mt-4 text-center white-color underline-on-hover white-color-on-hover">
                    {name}
                </Link>

                <p className="simple-post-2-text grey-text yellow-color text-center">
                    {text}
                </p>

            </div>

            { images.map((img , i)=>(
                
                <div key={i} className="fl-lightbox-btn d-none">
                    <img src={img} alt="Lightbox Image" className="fl-lightbox-img"/>
                </div>

            ))}
              
        </div>
    )

}


export const Post = (props) => {

    const {t, i18n} = useTranslation('common');

    const { img, name, year, className, price, category, imgClassName, productId, addToCart, values } = props;

    return (
        <div key={productId} className={`post d-flex flex-column align-items-start justify-content-start ${className}`}>
            
            <Image
                className={`post-img cover-img-4 small-on-hover ${imgClassName}`}
                alt="Post Image"
                src={img}
            />

            <h3 className="post-title grey-title bigger-font mt-4 mb-0">
                {name}
            </h3>

            <p className="post-text grey-text mt-2">
               <strong className="me-2">{t('titles.price')}:</strong> {price} $
            </p>

            <p className="post-text grey-text mt-2">
                <strong className="me-2">{t('titles.year')}:</strong> {year}
            </p>

            <button type="button" onClick={() => addToCart({...values, category})} className="post-btn yellow-btn mt-3 rounded">
                {t('buttons.addToCart')}
            </button>
            
        </div>
    )

}

export const Post2 = (props) => {

    const {t, i18n} = useTranslation('common');

    const { id, img, name, year, className, price, imgClassName, productId, deleteFromCart, length } = props;

    return (
        <div key={productId} className={`post d-flex flex-column align-items-start justify-content-start ${className}`}>
            
            <Image
                className={`post-img cover-img-4 small-on-hover ${imgClassName}`}
                alt="Post Image"
                src={img}
            />

            <h3 className="post-title grey-title bigger-font mt-4 mb-0">
                {name}
            </h3>

            <p className="post-text grey-text mt-2">
               <strong className="me-2">{t('titles.price')}:</strong> {length} × ${price * length} 
            </p>

            <p className="post-text grey-text mt-2">
                <strong className="me-2">{t('titles.year')}:</strong> {year}
            </p>

            <Popconfirm 
                title={t('texts.areYouSure')} 
                okText={t('texts.yes')} 
                cancelText={t('texts.no')}
                onConfirm={ ()=>{deleteFromCart(id)} }
                >
                <button type="button" className="post-btn yellow-btn mt-3 rounded">
                    {t('buttons.deleteFromCart')}
                </button>
            </Popconfirm>
           
            
        </div>
    )

}


