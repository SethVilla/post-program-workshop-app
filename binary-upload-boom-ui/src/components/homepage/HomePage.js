import React, {useEffect, useState, useReducer} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {getDogs} from "../../services/services";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {buildDogFeedPost} from "../../utils/utils";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

// import the variables from constants
import { pageTitle, subtitle, slogan } from '../constants/constans'

export const HomePage = () => {

    // Task 1: practice useState and useReducer
    const [title, setTitle] = useState([pageTitle, subtitle, slogan])

    // Practice useReducer
    const firstReducer  = (state, action) => {
        switch() {
            
        }
    }


    const [dogs, setDogs] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const {data} = await getDogs();
                setDogs(data?.message?.map((url) => buildDogFeedPost(url)));
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false)
            }
        })();
    }, []);

    return <Box sx={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

        {/* Display the title state */}
        {title.map((item) => <h1>{item}</h1>)}


        <ImageList cols={5} rowHeight={300}>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            {dogs?.map((dog) => (
                <ImageListItem key={dog.imageUrl}>
                    <img
                        src={`${dog.imageUrl}`}
                        srcSet={`${dog.imageUrl}`}
                        alt={dog.dogName}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    </Box>
};
