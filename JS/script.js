//===================================================
let setting = document.querySelector(".setting-box");
let icon = document.querySelector(".setting-box .icon");
icon.onclick = (_) => {
  setting.classList.toggle("open");
  icon.classList.toggle("ch");
};
//===================================================
// let rBackBtn = document.querySelector(".setting-box .rBack .btn");
// rBackBtn.onclick = (_) => rBackBtn.classList.toggle("open");
// let state = rBackBtn.classList.contains("open");
//===================================================

let path = "pink";
let counter = 0;

function changeWallpaper() {
  let img = document.getElementById("img11");
  let lBtn = document.getElementById("lbtn");
  let rBtn = document.getElementById("rbtn");
  // let arr = ["1.svg", "2.svg", "3.svg", "4.svg"];
  let arr = ["1.svg", "2.svg"];
  img.src = `images/landing/${path}/${arr[2]}`;
  let x = arr.length - 1;
  //=========================
  setInterval((_) => {
    counter++;
    if (counter > x) {
      counter = 0;
    }
    img.src = `images/landing/${path}/${arr[counter]}`;
    fade(img);
  }, 15000);
  //=========================
  lBtn.onclick = (_) => {
    counter++;
    if (counter > x) {
      counter = 0;
    }
    img.src = `images/landing/${path}/${arr[counter]}`;
    fade(img);
  };
  //=========================
  rBtn.onclick = (_) => {
    counter--;
    if (counter < 0) {
      counter = x;
    }
    img.src = `images/landing/${path}/${arr[counter]}`;
    fade(img);
  };
}
changeWallpaper();
//===================================================
function fade(img) {
  img.style.opacity = ".4";
  setTimeout((_) => {
    img.style.opacity = ".6";
  }, 100);
  setTimeout((_) => {
    img.style.opacity = ".7";
  }, 150);
  setTimeout((_) => {
    img.style.opacity = ".8";
  }, 200);
  setTimeout((_) => {
    img.style.opacity = ".9";
  }, 250);
  setTimeout((_) => {
    img.style.opacity = "1";
  }, 300);
}
//===================================================
if (localStorage.color && localStorage.path) {
  let mainColor = localStorage.color;
  let mainPath = localStorage.path;
  let lis = document.querySelectorAll(".setting-box ul li");
  lis.forEach((e) => {
    if (e.dataset.color === mainColor) {
      e.classList.add("active");
    }
  });
  changeTheam(mainColor, mainPath);
}
//===================================================
setTheam();
function setTheam() {
  let lis = document.querySelectorAll(".setting-box ul li");
  lis.forEach((e) => {
    let mainColor = e.dataset.color;
    let mainPath = e.dataset.theam;
    e.addEventListener("click", (_) => {
      lis.forEach((e) => e.classList.remove("active"));
      e.classList.add("active");
      changeTheam(mainColor, mainPath);
      window.localStorage.setItem("color", mainColor);
      window.localStorage.setItem("path", mainPath);
    });
  });
}

//================== change - image phat ====================
function changeTheam(mainColor, mainPath) {
  document.documentElement.style.setProperty("--main-color", mainColor);
  path = mainPath;
  //=========================
  let img = document.getElementById("img11");
  img.src = `images/landing/${mainPath}/${counter + 1}.svg`;
  //=========================
  let img2 = document.querySelector(".setting-box img");
  img2.src = `images/landing/${mainPath}/undraw_color_palette_re_dwy7.svg`;
  //=========================
  let imgAbout = document.querySelector(".about .container img");
  // imgAbout.src = `images/about us/${mainPath}/undraw_working_remotely_re_6b3a.svg`;
  // imgAbout.src = `images/about us/${mainPath}/undraw_profile_details_re_ch9r.svg`;
  imgAbout.src = `images/about us/${mainPath}/undraw_dev_productivity_re_fylf.svg`;
  //=========================
}

//================== Skilles - fill-full =====================
let skilles = document.querySelector(".skills");
let skille = document.querySelector(".skills .skille");
let bartopone = document.querySelector(".skills .skille .one");
let bartoptow = document.querySelector(".skills .skille .two");
let bartopthree = document.querySelector(".skills .skille .three");
let bartopfour = document.querySelector(".skills .skille .four");
let barbottom = document.querySelectorAll(".skills .skille .barBottom");
window.onscroll = (_) => {
  let skillsOffSetTop = skilles.offsetTop;
  if (window.scrollY > skillsOffSetTop - 250) {
    bartopone.style.animation = "topone .3s .6s linear forwards";
    bartoptow.style.animation = "toptwo .3s .6s linear forwards";
    bartopthree.style.animation = "topthree .3s .6s linear forwards";
    bartopfour.style.animation = "topfour .2s .6s linear forwards";
    barbottom.forEach(
      (e) => (e.style.animation = ".6s bottom linear forwards")
    );
  }
};

//=========== losely function ======================
// let cont = 1;
// let num = 0;
// aLeft.addEventListener("click", (_) => {
//   let translate = img.clientWidth + 10;
//   aRight.style.opacity = `1`;
//   if (num < translate * 3 - 20) {
//     // if (cont === 3) {
//     //   aLeft.style.opacity = `.3`;
//     // }
//     num = translate * cont++;
//     imgs.style.transform = `translateX(-${num}px)`;
//     console.log(cont);
//   } else {
//     num = 0;
//     cont = 1;
//     imgs.style.transform = `translateX(-${num}px)`;
//   }
// });
// aRight.addEventListener("click", (_) => {
//   let translate = img.clientWidth + 8;
//   if (num !== 0) {
//     // aLeft.style.opacity = `1`;
//     let num2 = 0;
//     let x = -translate;
//     if (cont === 2) {
//       // aRight.style.opacity = `.3`;
//       num2 = 0;
//       cont--;
//       num = 0;
//     } else if (cont === 3) {
//       num2 = x;
//       cont--;
//       num = translate * 2;
//     } else if (cont === 4) {
//       num2 = x * 2;
//       cont--;
//       num = translate;
//     }
//     imgs.style.transform = `translateX(${num2}px)`;
//     console.log(cont);
//   } else {
//     num = translate * 3;
//     cont = 4;
//     imgs.style.transform = `translateX(-${num}px)`;
//   }
// });

//================ header - scrolling ========================
const header = document.querySelector("header");
window.addEventListener("scroll", (_) =>
  window.scrollY > 50
    ? header.classList.add("scroll")
    : header.classList.remove("scroll")
);

//================ Image - Slider ============================
const aLeft = document.querySelector(".portfolio .scroll .left");
const aRight = document.querySelector(".portfolio .scroll .right");
const imgs = document.querySelector(".portfolio .images");
const img = document.querySelector(".portfolio .images .img");
// const allImg = document.querySelectorAll(".portfolio .images img");
// console.log(allImg);  
slider(aLeft, aRight, imgs, img, 3);

//================= Review - Slider ==================================
const aLeft2 = document.querySelector(".testimonils .fa-angle-left");
const aRight2 = document.querySelector(".testimonils .fa-angle-right");
const box = document.querySelector(".testimonils .t-box");
const re = document.querySelector(".testimonils .t-box .reviwe");
// const allRe = document.querySelectorAll(".testimonils .t-box .reviwe");
slider(aLeft2, aRight2, box, re, 3);

//================= Slider - Function ==================================
function slider(left, right, box, item, itemsNum) {
  // const itemsNum = Array.from(allItems).length - 3;
  const gap = parseInt(getComputedStyle(box).gap);
  const translate = item.clientWidth + gap;
  let count = 0;
  right.addEventListener("click", (_) => {
    if (count > -translate * itemsNum + 200) {
      console.log(-translate * itemsNum + 300);
      count -= translate;
      box.style.transform = `translateX(${count}px)`;
    } else {
      count = 0;
      box.style.transform = `translateX(${count}px)`;
    }
  });
  left.addEventListener("click", (_) => {
    if (count < 0) {
      count += translate;
      box.style.transform = `translateX(${count}px)`;
    } else {
      count = -translate * itemsNum;
      box.style.transform = `translateX(${count}px)`;
    }
  });
}
//===================================================

