import React, {useState, useEffect} from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { RecoilRoot } from 'recoil';
import { postsLoading, postsList } from '../atoms';
import axios from "axios";

const Data = () => { 

    const posts = useRecoilValue(postsList);
    const [loading, setLoading] = useRecoilState(postsLoading);

    return (
        <div className="mx-5 mt-5">
            
            <h1>Posts</h1>

            {loading ? 
                <p>Loading...</p>
                :
                posts?.map((d, i) => (
                <div className="mt-4" key={i}>
                    {d?.name}
                </div>
            ))}

        </div>
    );

};

export default Data;

