import React, {useState, useEffect} from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { RecoilRoot } from 'recoil';
import { postsState, postsList, postsLoading } from '../atoms';
import axios from "axios";

const AsyncRequests = () => { 
    
    const [list, setList] = useRecoilState(postsState);
    const posts = useRecoilValue(postsList);
    const [loading, setLoading] = useRecoilState(postsLoading);

    const getList = async () => {

        setLoading(true);

        await axios.get('https://api.topemlak.az/api/productsWithLimit?limit=8')
        .then((res) => {
            setList(res.data.results);
        }).finally(() => {
            setLoading(false);
        })
    } 

    useEffect(() => {
        getList();
    }, [])

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

export default AsyncRequests;

