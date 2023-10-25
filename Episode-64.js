const myButton = document.getElementById("myButton");
const image = document.getElementsByClassName("appioIe  ")[0];
const orginalImageSrc = image.src;
const imageArray = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2MrO90_H5IDxbykfjTLwKYZOG-QpAxitlA&usqp=CAU",
  " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2w5w5iguHol3f4sEVDJMBwU_lybJdcACUxw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLft6lyU0DZpbF6BDssUuayHRVP0wzVwj3g&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4byBhG8Z7b633OTeW696FDt6Bq6C2f8j4g&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9EsQ49hoyAdJdARIpgGinhUqnOxF4XMqcQWUmwfg8_gb-gBQcdnxfkjA5E7GSjOVc5YM&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSddwXTTVspyfryFZBJAZ8FreHY_l4nM1KyHQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVi9FvWr8LWV-uTAsqD60KKying_C5QXvGQ5o0jJlLy6N1er-2JPII5bHcuRxO5P-vXV0&usqp=CAU",
];

let counter = 0;
const myFunction = () => {
  if (counter === 7) {
    image.src = orginalImageSrc;
    counter = 0;
    return;
  }
  const imageLink = imageArray[counter];
  image.src = imageLink;
  counter++;
  console.log("Counter value is:", counter);
};

myButton.addEventListener("click", myFunction);
