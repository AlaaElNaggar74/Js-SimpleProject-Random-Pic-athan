let maincont = document.getElementById("maincont");
let butt = document.getElementById("butt");

butt.addEventListener("click", creatnewpic);

buttreff.addEventListener("click", () => {
  window.location.reload();
});

function creatnewpic() {
  for (let index = 0; index < 6; index++) {
    let newimg = document.createElement("img");

    newimg.src = `https://picsum.photos/300?random=${Math.round(
      Math.random() * 1500
    )}`;
    maincont.appendChild(newimg);
  }
}
