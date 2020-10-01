// :::::::::::::::: Helper Functions
// Functions to be written here, keeping the code as clean as possible

// Featured Products: Return item if featured true
export function featuredProducts(data) {
  return data.filter((item) => {
    return item.featured === true;
  });
}
