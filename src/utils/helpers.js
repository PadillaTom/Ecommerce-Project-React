// :::::::::::::::: Helper Functions
// Functions to be written here, keeping the code as clean as possible
// import url from './URL';

// Images Fix : Flatten --> Dará directamente la image
export function flattenProducts(data) {
  return data.map((item) => {
    // Cloudinary
    let image = item.image.url;
    return { ...item, image };
  });
}

// Featured Products: Return item if featured true
export function featuredProducts(data) {
  return data.filter((item) => {
    return item.featured === true;
  });
}
