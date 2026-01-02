import { useEffect, useState } from "react";
import "./Nevbar.css";

const slides = [
  {
    bg: "https://i.ytimg.com/vi/Lbqv7wiFLH8/maxresdefault.jpg",
    location: "Switzerland Alps",
    title: "SAINT ANTÖNIEN",
    desc: "Explore pristine alpine trails and breathtaking mountain vistas in the heart of Switzerland.",
    cardVideo: "/2.mp4",
  },
  {
    bg: "https://wallpapercave.com/wp/wp11887011.jpg",
    location: "Japan Alps",
    title: "NAGANO PREFECTURE",
    desc: "Discover snowy peaks, rich culture and peaceful mountain towns.",
    cardVideo: "/1.mp4",
  },
  {
    bg: "https://wallpapercave.com/wp/wp14307363.jpg",
    location: "Sahara Desert - Morocco",
    title: "MARRAKECH MERZOUGA",
    desc: "Experience golden dunes and vibrant desert culture.",
    cardVideo: "/3.mp4",
  },
  {
    bg: "https://motionbgs.com/media/4523/blind-dragon.jpg",
    location: "Sierra Nevada - USA",
    title: "YOSEMITE PARK",
    desc: "Witness dramatic cliffs and breathtaking nature.",
    cardVideo: "/4.mp4",
  },
];

const NavbarHero = () => {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const nav = document.querySelector(".glass-navbar");
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const prevSlide = () =>
    setIndex(index === 0 ? slides.length - 1 : index - 1);

  const nextSlide = () =>
    setIndex(index === slides.length - 1 ? 0 : index + 1);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="navbar navbar-expand-lg navbar-dark glass-navbar fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="lol.png" alt="logo" height="40" />
          </a>
        </div>
      </nav>

      {/* ================= HERO SLIDER ================= */}
      <div className="hero-slider-container">
        <div
          className="main-slider"
          style={{ transform: `translateX(-${index * 100}vw)` }}
        >
          {slides.map((s, i) => (
            <div
              key={i}
              className="main-slide"
              style={{ backgroundImage: `url(${s.bg})` }}
            />
          ))}
        </div>

        <div className="text-overlay">
          <span className="location-top">{slides[index].location}</span>
          <h1 className="main-title">{slides[index].title}</h1>
          <p className="description">{slides[index].desc}</p>
          <button className="discover-btn">DISCOVER LOCATION</button>
        </div>

        <div className="card-carousel-wrapper">
          <div
            className="card-carousel"
            style={{ transform: `translateX(-${index * 250}px)` }}
          >
            {slides.map((s, i) => (
              <div
                key={i}
                className={`card ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
              >
                <video
                  src={s.cardVideo}
                  muted
                  loop
                  playsInline
                  autoPlay
                />
                <div className="card-info">
                  <span className="card-location">{s.location}</span>
                  <h3 className="card-title">{s.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="controls">
          <button className="nav-btn" onClick={prevSlide}>&lt;</button>
          <button className="nav-btn" onClick={nextSlide}>&gt;</button>
        </div>
      </div>
      {/* ================= HERO END ================= */}


      
   {/* ================= LATEST RELEASES ================= */}
<section className="card-section">
  <h3 className="card-title">Latest Releases</h3>

  <div className="card-row-scroll">
    {[
      {
        title: "Gachiakuta",
        img: "https://a.storyblok.com/f/178900/1064x1596/1fd33f9bbd/gachiakuta-key-visual.png",
      },
      {
        title: "My Status as an Assassin",
        img: "https://m.media-amazon.com/images/M/MV5BY2ZlZDE2ODQtY2M1OC00ZDRlLWEwZTgtZjc3NzA5ZDE0MGViXkEyXkFqcGc@._V1_.jpg",
      },
      {
        title: "A Wild Last Boss Appeared!",
        img: "https://m.media-amazon.com/images/M/MV5BMzU3ZTZkNGItZjQ4MS00MWMxLWI2YmEtOGY5YTAxNTRiZGMyXkEyXkFqcGc@._V1_.jpg",
      },
      {
        title: "May I Ask for One Final Thing?",
        img: "https://m.media-amazon.com/images/M/MV5BYWU1YjkzOGYtMTY5NS00MGQ4LTgyOTMtMjllODdhYmFmMWM0XkEyXkFqcGc@._V1_.jpg",
      },
      {
        title: "One Piece",
        img: "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_.jpg",
      },
    ].map((anime, i) => (
      <div className="cr-card" key={i}>
        <img src={anime.img} alt={anime.title} />
        <p>{anime.title}</p>
        <span>Sub | Dub</span>
      </div>
    ))}
  </div>
</section>



      
    {/* ================= NEW EPISODES ================= */}
<section className="cr-section">
  <h3 className="cr-title">New Episodes</h3>

  <div className="cr-day">Sunday</div>

  <div className="cr-episodes-grid">
    {[
      {
        title: "One Punch Man",
        time: "9:45pm",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JEPGYjQRd2g-cLHW1CI3c5R9oUUJx1ZWmg&s",
      },
      {
        title: "One Piece",
        time: "9:30pm",
        img: "https://preview.redd.it/the-perfect-world-donghua-is-getting-worse-day-by-day-v0-htq2cbutrake1.jpeg?auto=webp&s=9058e647b9e255a04ef01b8b2ab9a4b3b805cffc",
      },
      {
        title: "My Hero Academia",
        time: "1:30am",
        img: "https://i.redd.it/btth-recent-posters-v0-pdiifk59kfhb1.jpg?width=4000&format=pjpg&auto=webp&s=c38820ccf5e54fb870332a6c3b7d9b8d96701268",
      },
      {
        title: "Kingdom Season 6",
        time: "12:35am",
        img: "https://i.redd.it/btth-v-rmji-v-perfect-world-v-renegade-immortal-v0-lsor8ewegw0f1.jpg?width=1557&format=pjpg&auto=webp&s=70fda4a05641209021b5a8f1ba1e99660add9b6f",
      },
    ].map((ep, i) => (
      <div className="cr-episode" key={i}>
        <img src={ep.img} alt={ep.title} />
        <div className="ep-info">
          <p>{ep.title}</p>
          <span>Sub | Dub</span>
        </div>
        <span className="ep-time">{ep.time}</span>
      </div>
    ))}
  </div>

  <button className="cr-calendar-btn">VIEW RELEASE CALENDAR</button>
</section>



      {/* ================= BANNER ================= */}
    <div className="cr-banner">
  <img
    src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=2700/CurationAssets/Suzume/MARKETING%20BANNER/WATCH%20NOW/Suzume-KV1-Banner-2100x700-EN.png"
    alt="Suzume Banner"
  />
</div>

  

      {/* ================= NEWS ================= */}
  


<section class="news-section py-5">
  <div class="container">
    <div class="row">

      
      <div class="col-lg-5">
        <h3 class="section-title">Top News</h3>

        <div class="top-news-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNoTVDGos8oBb502oEChcpsafcYYl6x6JLYQ&s" alt=""></img>
          <div class="top-news-content">
            <h4>One-Punch Man Season 3 Part 2 Anime Broadcasts in 2027</h4>
            <p>Dec 28, 2025 · by Paul Chapman</p>
          </div>
        </div>

        <div class="top-news-card mt-4">
          <img src="https://static0.cbrimages.com/wordpress/wp-content/uploads/2024/09/darkmoon-crunchyroll.jpg" alt=""></img>
          <div class="top-news-content">
            <h4>DARK MOON: THE BLOOD ALTAR Animation Shares New Trailer</h4>
            <p>Dec 28, 2025 · by Crunchyroll</p>
          </div>
        </div>
      </div>

      
      <div class="col-lg-7">
        <h3 class="section-title">Latest</h3>

        
        <div class="latest-news d-flex">
          <img src="https://media.vgm.io/artists/23/332/332-1574907449.jpg" alt=""></img>
          <div class="latest-content">
            <h6>Maaya Sakamoto Releases Fate/Grand Order Theme Song</h6>
            <span>Dec 30, 2025</span>
          </div>
        </div>

        <div class="latest-news d-flex">
          <img src="https://m.media-amazon.com/images/M/MV5BZmMzNGVhODktYmU5MS00MDg1LThlNTEtNTMyYTg5MDA0Njk4XkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg" alt=""></img>
          <div class="latest-content">
            <h6>Chainsaw Man – Reze Arc Movie Moves to No.8</h6>
            <span>Dec 30, 2025</span>
          </div>
        </div>

        <div class="latest-news d-flex">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNekRMAeDm4a_GpjZ9obpIt6OhFPGQiixGVQ&s" alt=""></img>
          <div class="latest-content">
            <h6>The Moon on a Rainy Night Anime Reveals Teaser</h6>
            <span>Dec 29, 2025</span>
          </div>
        </div>

        <div class="latest-news d-flex">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3S-JCTZIII6ESs1XazIATm1gJor9iiJErcQ&s" alt=""></img>
          <div class="latest-content">
            <h6>SPY×FAMILY Season 3 Ending Song Video Streamed</h6>
            <span>Dec 29, 2025</span>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>




{/* ================= FOOTER ================= */}
<footer className="cr-footer">
  <div className="cr-footer-container">

    {/* LEFT */}
    <div className="cr-footer-brand">
      <img src="/images/logo.png" alt="Logo" />
      <p>Stream the world’s best anime.</p>
    </div>

    {/* CENTER LINKS */}
    <div className="cr-footer-links">
      <div>
        <h6>Browse</h6>
        <a href="#">Popular</a>
        <a href="#">New Releases</a>
        <a href="#">Simulcast</a>
        <a href="#">Categories</a>
      </div>

      <div>
        <h6>Help</h6>
        <a href="#">Account</a>
        <a href="#">Support</a>
        <a href="#">Contact Us</a>
      </div>

      <div>
        <h6>Legal</h6>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
      </div>
    </div>

    {/* RIGHT */}
    <div className="cr-footer-social">
      <h6>Follow Us</h6>
      <div className="social-icons">
        <span>🌐</span>
        <span>🐦</span>
        <span>📘</span>
        <span>▶️</span>
      </div>
    </div>

  </div>

  {/* BOTTOM */}
  <div className="cr-footer-bottom">
    © 2025 YourAnime. All Rights Reserved.
  </div>
</footer>


    </>
  );
};

export default NavbarHero;

