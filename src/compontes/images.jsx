
const Images = {
    about: {
      img: './Images/about/about_bg.jpg'
    },
    post: {},
    grid: {},
    hero: [
      {
        img: '',
        title: 'Founders With Booming Businesses Share Stories About Their Difficult Early',
        name: 'doremon',
        date: new Date('d-m-y'),
      },
      {
        img: './Images/hero/hero_post_2.jpg',
        title: 'Founders With Booming Businesses Share Stories About Their Difficult Early',
        name: 'doremon',
        date: new Date('d-m-y'),
      },
      {
        img: './Images/hero/hero_post_3.jpg',
        title: 'Founders With Booming Businesses Share Stories About Their Difficult Early',
        name: 'doremon',
        date: new Date('d-m-y'),
      },
      // Add more objects as needed
    ]
    // Other sections...
  };
  

for (let i = 1; i <= 22; i++) {
    Images.hero[`img${i}`] = `./Images/hero/hero_post_${i}.jpg`;
  
    if (i <= 4) {
      Images.hero[`imgThump${i}`] = `./Images/hero/hero_post_${i}.jpg`;
    }
    
    if (i <= 8) {
      Images.grid[`grid${i}`] = `./Images/grid/grid_post_${i}.jpg`;
    }
  }
  
 
 
export default Images;