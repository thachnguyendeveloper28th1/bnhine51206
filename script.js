
// Bảo Nhi & Friends
const friendFiles = [
  "1789185803419_6792352698008206119_6792352698008206119_789a433a024c54e00097f640c79b65fd.jpg",
  "1789185803463_6792352698008206119_6792352698008206119_138e6e1015bc72d379852af451b4d985.jpg",
  "1789185803479_6792352698008206119_6792352698008206119_8ef0ec2fd45283ae8b70139c3c94e449.jpg",
  "1789185803489_6792352698008206119_6792352698008206119_cc937ea36f383ec0c766ef635a89d35d.jpg",
  "1789185803498_6792352698008206119_6792352698008206119_b6aa46d51eae2b18c8bc5320a492ded1.jpg",
  "1789185803508_6792352698008206119_6792352698008206119_4cf3402e770d1ae4878798e521bd32a2.jpg",
  "1789185803517_6792352698008206119_6792352698008206119_f65c309c564e6e20632f4a916452110d.jpg",
  "1789185803526_6792352698008206119_6792352698008206119_e45a180b0d31e0da1be8b699126ecfea.jpg",
  "1789185803536_6792352698008206119_6792352698008206119_43a394847936c48152bcd9431c433633.jpg",
  "1789185803544_6792352698008206119_6792352698008206119_27dcf15695eb19f9e97484e2e7e23df7.jpg",
  "1789185803551_6792352698008206119_6792352698008206119_51a0ef9b6b34ca67139e47ebe9d6ae4d.jpg",
  "1789185803559_6792352698008206119_6792352698008206119_7d8409930b2f349413e63acfb301a602.jpg",
  "1789185803568_6792352698008206119_6792352698008206119_c5698feed7dbc42bdf2340c69ed60cef.jpg",
  "1789185803578_6792352698008206119_6792352698008206119_677ca83d03abbd8b5320fbe0ad1f71aa.jpg",
  "1789185803588_6792352698008206119_6792352698008206119_57160433d9e67b14ee95fc3d2a13f00a.jpg",
  "1789185803596_6792352698008206119_6792352698008206119_9b1c4cf78180af77a02183036ba2d84c.jpg",
  "1789185803604_6792352698008206119_6792352698008206119_34b19d9cb96f56997bec841b6baa1609.jpg",
  "1789185803612_6792352698008206119_6792352698008206119_47f4df227d5552287a3a2ffac661892b.jpg",
  "1789185803620_6792352698008206119_6792352698008206119_ffe40f02850a5e3afad7239d7d4968f9.jpg",
  "1789185803629_6792352698008206119_6792352698008206119_1361e9a2ca45c7f8a8f3cb85e34e0515.jpg",
  "1789185803639_6792352698008206119_6792352698008206119_3a3f9c2db810bbe07f845b492fe1a8cc.jpg",
  "1789185803647_6792352698008206119_6792352698008206119_c427734121fbbe2807da36dc0bbc7aec.jpg",
  "1789185803655_6792352698008206119_6792352698008206119_eb2cde7a2b313a1b34ade0bd20d065a7.jpg",
  "1789185803662_6792352698008206119_6792352698008206119_76c27741d885651285f4f3573d684b28.jpg",
  "1789185803670_6792352698008206119_6792352698008206119_83760348334a980bce7e8cb85c6c8e4b.jpg",
  "1789185803681_6792352698008206119_6792352698008206119_c2fb3b23877e2a0ef7af1b2df3d499cc.jpg",
  "1789185803689_6792352698008206119_6792352698008206119_644de750bac2e16c11bd4ad7fea3b63c.jpg",
  "1789185803696_6792352698008206119_6792352698008206119_66fbc17b4a931195a09fbef50c0c8372.jpg",
  "1789185803704_6792352698008206119_6792352698008206119_108e09c689cdd69da82080831fa99ca5.jpg",
  "1789185803711_6792352698008206119_6792352698008206119_0aab6e1e65656ace3b170ee7d0b9a09b.jpg",
  "1789185803719_6792352698008206119_6792352698008206119_4e000c2c0e26cc4c617533eac2bb25d3.jpg",
  "1789185803727_6792352698008206119_6792352698008206119_da2234f9313e22cc4322f365de364130.jpg",
  "1789185803734_6792352698008206119_6792352698008206119_864181d813fed355e7a3ff9b2e0af8ab.jpg",
  "1789185803743_6792352698008206119_6792352698008206119_73fe4c9ca15ab37796dc5bb292d833f6.jpg",
  "1789185803750_6792352698008206119_6792352698008206119_05dd915a1a9c0440c1d17ae072c2b267.jpg",
  "1789185803758_6792352698008206119_6792352698008206119_07d4c508d14d9e5120eac988a371bba0.jpg",
  "1789185803765_6792352698008206119_6792352698008206119_5cd6ece9fee0f32729ac9c8a5994b1ba.jpg"
];
const friendsGrid = document.getElementById("friendsGrid");
if (friendsGrid) {
  friendFiles.forEach((file, index) => {
    const figure=document.createElement("figure");
    figure.className="friend-memory friend-memory-"+((index%8)+1);
    const img=document.createElement("img");
    img.src="assets/friends/"+encodeURIComponent(file);
    img.alt="Bảo Nhi and friends";
    img.loading=index<8?"eager":"lazy";
    img.onerror=()=>figure.remove();
    img.onclick=()=>{
      if(typeof lightbox!=="undefined" && lightboxImg){
        lightboxImg.src=img.src;
        lightboxImg.alt=img.alt;
        lightbox.classList.add("open");
        lightbox.setAttribute("aria-hidden","false");
      }
    };
    figure.appendChild(img);
    const cap=document.createElement("figcaption");
    cap.textContent=["friends ♡","good days ✦","little memories","together","laughs & sunshine","dear friends","tiny adventures","forever-ish"][index%8];
    figure.appendChild(cap);
    friendsGrid.appendChild(figure);
  });
}

const imageFiles = [
  "IMG_8049.JPG",
  "IMG_6035.PNG",
  "IMG_0662.PNG",
  "IMG_5008.JPG",
  "IMG_3697.JPG",
  "IMG_9690.JPG",
  "IMG_5095.JPG",
  "DSCF0766.JPG",
  "IMG_2767.JPG",
    "IMG_9573.JPG",
  "IMG_3297.JPG",
  "IMG_7591.JPG",
  "IMG_2770.JPG",
  "IMG_3696.JPG",
  "4EE33B0C-B57E-491B-9305-B309DDA2A673.jpg",
  "IMG_0664.PNG",
  "IMG_3680.JPG",
  "IMG_7373.PNG",
  "IMG_6136.PNG",
  "IMG_5173.PNG",
  "IMG_8879.PNG",
  "IMG_0355.jpeg",
    "IMG_7238.PNG"
];

const gallery = document.getElementById("galleryGrid");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function renderGallery() {
  if (!gallery) return;
  const photos = shuffle(imageFiles);
  photos.forEach((file, index) => {
    const figure = document.createElement("figure");
    figure.className = "memory memory-" + ((index % 7) + 1);
    const img = document.createElement("img");
    img.src = "assets/" + encodeURI(file);
    img.alt = "Bao Nhi memory";
    img.loading = index < 6 ? "eager" : "lazy";
    img.addEventListener("error", () => figure.remove());
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
    });
    figure.appendChild(img);
    const caption = document.createElement("figcaption");
    caption.textContent = ["tiny memory ♡","sunshine day ✦","dear diary","a little moment","♡ just because","growing up slowly","fairy dust"][index % 7];
    figure.appendChild(caption);
    gallery.appendChild(figure);
  });
}
renderGallery();

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
}
lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

// Mobile navigation
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".site-header nav");
menuBtn?.addEventListener("click", () => nav.classList.toggle("open"));
nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

// Soft floating hearts
setInterval(() => {
  const heart = document.createElement("span");
  heart.className = "float-heart";
  heart.textContent = ["♡","✦","✧","✨"][Math.floor(Math.random()*4)];
  heart.style.left = Math.random()*100 + "vw";
  heart.style.animationDuration = (5 + Math.random()*4) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 9000);
}, 1700);

// Background music
const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

function updateMusicUI() {
  if (!music || !musicToggle) return;
  const playing = !music.paused;
  musicToggle.textContent = playing ? "♫ Đang phát" : "🎵 Bật nhạc";
  musicToggle.classList.toggle("is-playing", playing);
}

async function playMusic() {
  if (!music) return;
  music.volume = 0.42;
  try {
    await music.play();
  } catch (err) {
    // Browser autoplay policy can block audio until the user interacts.
  }
  updateMusicUI();
}

musicToggle?.addEventListener("click", async () => {
  if (music.paused) await playMusic();
  else music.pause();
  updateMusicUI();
});

music?.addEventListener("play", updateMusicUI);
music?.addEventListener("pause", updateMusicUI);

// Try autoplay immediately, then retry after the first user gesture.
playMusic();
["pointerdown","keydown","touchstart"].forEach(eventName => {
  window.addEventListener(eventName, () => {
    if (music?.paused) playMusic();
  }, { once: true, passive: true });
});
