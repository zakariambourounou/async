document.getElementById('loadImagesBtn').addEventListener('click', () => {
    const images = [
      'https://images.pexels.com/photos/25972592/pexels-photo-25972592/free-photo-of-leo-visions-ig.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?text=Image+1',
      'https://images.pexels.com/photos/24740432/pexels-photo-24740432/free-photo-of-ensoleille-soleil-plage-vacances.jpeg'   ,
      'https://images.pexels.com/photos/20387209/pexels-photo-20387209/free-photo-of-texture-mur-couleurs-surface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ];
  
    iterateWithAsyncAwait(images);
  });
  
  async function iterateWithAsyncAwait(array) {
    const container = document.getElementById('imageContainer');
    container.innerHTML = ''; 
  
    for (let src of array) {
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      const img = document.createElement('img'); 
      img.src = src; // 
      container.appendChild(img); 
    }
  }
  