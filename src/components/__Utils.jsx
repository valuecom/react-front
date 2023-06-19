const preloadImage = (image) => {
    if (image!==undefined){
        const newImage = new Image();
        newImage.src = image;
        window[image] = newImage;
    }
}

const logginF = (txt) => {
    console.log(txt);
}


export {
    preloadImage,
    logginF
}