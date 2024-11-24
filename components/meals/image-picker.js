"use client";

import { useRef, useState } from "react";

import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [selectedImg, setSelectedImg] = useState();
  const imageRef = useRef();

  function handleClick() {
    imageRef.current.click();
  }

  function onImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setSelectedImg(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setSelectedImg(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <div className={classes.preview}>
        {!selectedImg && <p>No Image Selected</p>}
        {selectedImg && (
          <Image src={selectedImg} alt="Image provided by User" fill />
        )}
      </div>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          accept="image/png, image/jpeg"
          name={name}
          id={name}
          ref={imageRef}
          onChange={onImageChange}
          required
        />
        <button className={classes.button} onClick={handleClick} type="button">
          Pick an Image
        </button>
      </div>
    </div>
  );
}
