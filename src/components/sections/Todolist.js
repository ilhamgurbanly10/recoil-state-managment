import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { RecoilRoot } from 'recoil';
import { textState, characterCountState } from '../atoms';

const Todolist = () => {
  
    // useRecoilState - deyri almaq ve yaxud deyismel ucundur, icerisine atomlar key ile yazilmalidir
    // birinci deyeri olur, ikinci onu deyisen eynile useState de oldugu kimi.Bu yalniz atom
    // ile calisir, selector ile calismir
    
    // useRecoilValue - atom ve yaxud selectorun hazirki deyerini istifade ede bilmek ucundur,
    // bu deyise bilmir deyeri, burada hem atom keyini yazaraq onun deyerini, hem de selector
    // keyini yazaraq onun deyerini ala bilerik.Neticede selector deyerini yalniz useRecoilValue
    // ile ala bilirik.

    // Burada proses bele olur:

    // 1) useRecoilValue characterCountState adli selectorun get funksiyasinda gelen deyerini
    // alir.

    // 2) text ve setText textState adli atomu deyisdirmek ve yaxud almaq ucundur.

    // 3) Her yazi yazadiqda inputun deyeri setText e verilir ve neticede atom deyeri deyisir,
    // atom deyeri deyisende selectorda ki deyer de avtomatik olaraq deyisir.Ve characterCount
    // useRecoilValue ile selectordan stringin uzunlugunu qaytardigina gore bize her defe
    // inputda yazilan yazinin uzunlugunu gosterir 

    const [text, setText] = useRecoilState(textState);
    const characterCount = useRecoilValue(characterCountState);

    const onChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
        <input type="text" value={text} onChange={onChange} />
        <br />
            Character Count: {characterCount}
        </div>
    );

};

export default Todolist;

