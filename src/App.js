import { BrowserRouter } from "react-router-dom";

import Layout from './pages/Layout';
import Routing from './components/Routing';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import './assets/scss/library.scss';
import './assets/css/flash/flash.css';
import './assets/css/ant-design.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import { useState } from "react";

import React from 'react';

// REcoil istifade etmek isteyen komponentlerin uzerinde mutleq RecoilRoot olmalidir, ona 
// gore de onun en yaxsi yeri App.js dir

// 1) Yukleme

// npm install recoil 

// 2) documentation:

// https://recoiljs.org

// https://recoiljs.org/docs/introduction/getting-started 

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


function App() {

  return (
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <RecoilRoot>
          <Layout>
              <Routing/>
          </Layout>
        </RecoilRoot>
      </BrowserRouter>
    </I18nextProvider>  
  );
}

export default App;
