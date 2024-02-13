const img = document.querySelectorAll("img");

for (let i = 0; i < img.length; i++) {
  img[i].title = img[i].alt;
}
