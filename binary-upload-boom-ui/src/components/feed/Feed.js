import React, {useEffect} from 'react';
import axios from "axios";
export const Feed = () => {
    useEffect(() => {
        const hello = axios.get("/hello");
        console.log(hello)
    })
    return <>Feed</>
}