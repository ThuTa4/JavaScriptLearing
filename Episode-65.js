const inputTag = document.getElementsByClassName("form-control")[0];

const shoppingListTag = document.getElementsByClassName(
  "shoppingListContainer"
)[0];

let productId = 1;
const hadleChange = (event) => {
  const inputValue = event.target.value;
  const productContainer = document.createElement("div");
  productContainer.classList.add("productContainer");
  const parentDiv = document.createElement("div");
  parentDiv.classList.add("productName");

  // <i class="fa-solid fa-trash-can"></i>

  parentDiv.addEventListener("click", () => {
    const classExist = parentDiv.classList.contains("purchased");
    if (classExist) {
      parentDiv.classList.remove("purchased");
    } else {
      parentDiv.classList.add("purchased");
    }
  });

  const spanTag = document.createElement("span");
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fa-regular", "fa-trash-can", "fa-beat");
  trashIcon.addEventListener("click", (event) => {
    productContainer.remove();
  });

  spanTag.id = productId;
  const product = productId.toString() + ". " + inputValue;
  spanTag.append(product);
  parentDiv.append(spanTag);
  productContainer.append(parentDiv, trashIcon);
  shoppingListTag.append(productContainer);
  inputTag.value = "";
  productId++;
};

inputTag.addEventListener("change", hadleChange);
