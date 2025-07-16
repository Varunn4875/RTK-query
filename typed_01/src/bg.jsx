import  { useEffect } from 'react';
import backgroundImage from './assets/backgroundImage.jpg'
import bgm from './assets/bgm.jpg'


// const MyComponent = () => {
//   const backgroundStyle = {
//     backgroundImage: `url(${backgroundImage})`, // External URL
//     // Or for an image in your public folder:
//     // backgroundImage: `url(${process.env.PUBLIC_URL + '/your-image.jpg'})`, 
//     backgroundSize: 'cover', // or 'contain', '100% 100%', etc.
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center center',
//     height: '100vh',
//     position:'relative', // Example height
//     backgroundAttachment:"fixed"
//   };

//   return (
//     <body style={backgroundStyle}>
//     </body>
//   );
// };



const MyComponent = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${bgm})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.position='relative';
    document.body.style.zIndex= -1;

    return () => {
      // Clean up when component unmounts
      document.body.style.backgroundImage = '';
    };
  }, []);

  
};

export default MyComponent;

// return (
//     <div style={{ color: 'white', padding: '2rem' }}>
//     </div>
//   );