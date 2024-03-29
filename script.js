function hideVideo() {
  var x = document.getElementById("vid");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
document.addEventListener('DOMContentLoaded', () => {
   
  
  
  const blogForm = document.getElementById('BlogForm');
    const titleDisplay = document.getElementById('title-display');
    const contentDisplay = document.getElementById('content-display');
    const imageDisplay = document.getElementById('image-display');
    const moreContentDisplay = document.getElementById('more-content-display');
    const videoDisplay = document.getElementById('video-display');
  
    blogForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;
      const image = document.getElementById('image').files[0];
      const morecontent = document.getElementById('morecontent').value;
      const video = document.getElementById('video').files[0];
  
      titleDisplay.textContent = title;
      contentDisplay.textContent = content;
      imageDisplay.src = URL.createObjectURL(image);
      moreContentDisplay.textContent = morecontent;
      videoDisplay.src = URL.createObjectURL(video);
  
      document.getElementById('submitted-content').style.display = 'block';
      blogForm.reset();
    });
  });