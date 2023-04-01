import React, {useReducer} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import {BasicDateCalendar} from '../calendar';

export const UploadPost = () => {
  const uploadPostReducer = (state, action) => {
    switch (action.type) {
      case 'image':
        return {
          ...state,
          img: action.value.img,
          fileName: action.value.fileName,
        };
      default:
        return {...state};
    }
  };

  const [state, dispatch] = useReducer(uploadPostReducer, {});

  const fileUploadHandler = event => {
    const reader = new FileReader();
    const targetFile =
      event && event.target && event.target.files && event.target.files[0];
    if (targetFile) {
      reader.readAsDataURL(targetFile);
      reader.onload = fileReaderEvent => {
        console.log(fileReaderEvent, 'file');
        dispatch({
          type: 'image',
          value: {
            fileName: targetFile.name,
            img: fileReaderEvent.target.result,
          },
        });
      };
      reader.onerror = () => {
        console.log(reader.error);
      };
    }
  };

  const submit = async () => {
    const res = await axios.post('/post/upload', {
      fileName: state.fileName,
      img: state.img,
    });
  };

  return (
    <div className="CareersJobApplyFormFileUpload-attachButtonWrapper CareersJobApplyFormFileUpload-buttonContainer">
      <input
        className="CareersJobApplyFormFileUpload-attachButtonInput"
        type="file"
        name="upload"
        onChange={event => fileUploadHandler(event)}
        aria-label="attach"
        accept=".jpg, .jpeg, .bmp, .gif, .png"
      />
      <Button onClick={submit}>Click me</Button>
      <BasicDateCalendar />
    </div>
  );
};
