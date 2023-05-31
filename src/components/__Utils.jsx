const preloadImage = (image) => {
    if (image!==undefined){
        const newImage = new Image();
        newImage.src = image;
        window[image] = newImage;
    }
}


export default preloadImage;