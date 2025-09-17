import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './home.css';

export default function HomePage() {
  return (
    <div className="page-wrapper">
      <section id="section-hero" className="hero-section">
        <div className="hero-content">
          <Image src="/images/1894_874.svg" alt="Yaritu Logo" className="hero-logo" width={96} height={96} />
          <h1 className="hero-title">Where Dreams Meet<br />Elegance</h1>
          <p className="hero-subtitle">Discover our exquisite collection of premium attire</p>
          <Link href="#" className="hero-button">Explore Collection</Link>
        </div>
      </section>

      <section id="section-celebrities" className="celebrities-section">
        <div className="celebrities-content">
          <Image src="/images/1894_834.svg" alt="Yaritu Logo" className="celebrities-logo" width={96} height={96} />
          <h2 className="section-title">Worn by <span className="highlight">Celebrities</span></h2>
          <p className="section-subtitle">Trusted by the stars for their most important moments</p>
        </div>
      </section>

      <section id="section-featured" className="section-container">
        <div className="featured-header">
          <h2 className="section-title">Featured <span className="highlight">Collection</span></h2>
          <p className="section-subtitle">Handpicked designs that define luxury and elegance</p>
        </div>
        <div className="featured-gallery">
          <button className="gallery-arrow prev">
            <Image src="/images/1894_913.svg" alt="Previous" width={18} height={18} />
          </button>
          <div className="gallery-items">
            <Image src="/images/22a525227c4859c899ee207c78c2255c5ee964a2.png" alt="Featured collection item 1" className="gallery-item" width={330} height={453} />
            <Image src="/images/0d8b26f69d316ab30e8a87fb58d316f1d938490f.png" alt="Featured collection item 2" className="gallery-item large" width={380} height={566} />
            <Image src="/images/8160faffe082ec7e2fd5e8a97009a8cd83b2648c.png" alt="Featured collection item 3" className="gallery-item" width={330} height={453} />
          </div>
          <button className="gallery-arrow next">
            <Image src="/images/1894_918.svg" alt="Next" width={18} height={18} />
          </button>
        </div>
      </section>

      <section id="section-trending" className="section-container">
        <h2 className="section-title">Trending <span className="highlight">Now</span></h2>
        <p className="section-subtitle">Where style meets the spotlight — the moments everyone’s talking about.</p>
        <div className="trending-images-container">
          <Image src="/images/1894_903.svg" className="trending-bg" alt="background shape" layout="fill" objectFit="contain" />
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image src="/images/d744d61db74c8cee188a0f5cbb5fa8e6710ba8ba.png" alt="Trending 1" className="trending-img" style={{ position: 'absolute', left: '8.4%', top: '23.3%', width: '17.9%', height: '58.4%', zIndex: 2 }} width={204} height={363} />
            <Image src="/images/2608bff1ee58b543e92a35b9fa4c0d87d98f7c41.png" alt="Trending 2" className="trending-img" style={{ position: 'absolute', left: '27.1%', top: '17%', width: '18.8%', height: '71%', zIndex: 3 }} width={214} height={441} />
            <Image src="/images/3be8230457212587a5704269131885729c20dccb.png" alt="Trending 3" className="trending-img" style={{ position: 'absolute', left: '46.7%', top: '10.8%', width: '18.8%', height: '84.7%', zIndex: 4 }} width={215} height={527} />
            <Image src="/images/b025ec3d8e34cfc2e30c380ae37f808ded87e7fc.png" alt="Trending 4" className="trending-img" style={{ position: 'absolute', left: '66.3%', top: '17%', width: '18.8%', height: '71%', zIndex: 3 }} width={214} height={441} />
            <Image src="/images/21e7b11cfb96913433cff82a393c938851bac8e5.png" alt="Trending 5" className="trending-img" style={{ position: 'absolute', left: '85.9%', top: '23.3%', width: '17.9%', height: '58.4%', zIndex: 2 }} width={204} height={363} />
          </div>
        </div>
      </section>

      <section id="section-offers" className="section-container">
        <h2 className="section-title">Multiple <span className="highlight">Offers</span></h2>
        <div className="offers-gallery">
          <button className="gallery-arrow prev">
            <Image src="/images/1949_2378.svg" alt="Previous" width={18} height={18} />
          </button>
          <div className="offers-image-stack">
            <Image src="/images/1949_2380.svg" className="offer-bg-shadow" alt="shadow effect" layout="fill" />
            <Image src="/images/9fb97a818ccc0c14a21512f403669817a5df18b9.png" className="offer-main-image" alt="Offer image" layout="fill" />
          </div>
          <button className="gallery-arrow next">
            <Image src="/images/1949_2374.svg" alt="Next" width={18} height={18} />
          </button>
        </div>
        <Link href="#" className="view-more-btn">view more</Link>
      </section>

      <section id="section-stores" className="section-container">
        <h2 className="section-title">VISIT OUR <span className="highlight">STORES</span></h2>
        <div className="stores-grid">
          <div className="store-card">
            <Image src="/images/25b3365bb1696aadec9508d75cf56d4bd5ff8972.png" alt="JAMNAGAR Store" width={625} height={625} />
          </div>
          <div className="store-card">
            <Image src="/images/5a0deaf6120d1eb05813de08e6d0745c6e4e208e.png" alt="JAIPUR Store" width={625} height={625} />
          </div>
          <div className="store-card">
            <Image src="/images/5a0deaf6120d1eb05813de08e6d0745c6e4e208e.png" alt="AHMEDABAD Store" width={625} height={625} />
          </div>
          <div className="store-card">
            <Image src="/images/25b3365bb1696aadec9508d75cf56d4bd5ff8972.png" alt="SURAT Store" width={625} height={625} />
          </div>
        </div>
        <Link href="#" className="explore-more-btn">
          <span>EXPLORE MORE</span>
          <Image src="/images/1894_935.svg" alt="arrow right" width={15} height={15} />
        </Link>
      </section>

      <section id="section-brand-gallery" className="section-container">
        <div className="brand-gallery-container">
          <Image src="/images/I2123_1244_2123_1234.png" alt="Yaritu Brand Image" className="brand-gallery-bg" layout="fill" objectFit="cover" />
          <div className="brand-gallery-overlay">
            <div className="overlay-rect" style={{ top: '3.9%', left: '15.6%' }}></div>
            <div className="overlay-rect" style={{ top: '3.9%', left: '32.9%' }}></div>
            <div className="overlay-rect" style={{ top: '3.9%', left: '50.2%' }}></div>
            <div className="overlay-rect" style={{ top: '3.9%', left: '67.4%' }}></div>
            <div className="overlay-rect" style={{ top: '27.2%', left: '15.7%' }}></div>
            <div className="overlay-rect" style={{ top: '27.2%', left: '67.4%' }}></div>
            <div className="overlay-rect" style={{ top: '50.5%', left: '15.7%' }}></div>
            <div className="overlay-rect" style={{ top: '50.5%', left: '67.4%' }}></div>
            <div className="overlay-rect" style={{ top: '73.8%', left: '15.6%' }}></div>
            <div className="overlay-rect" style={{ top: '73.8%', left: '32.9%' }}></div>
            <div className="overlay-rect" style={{ top: '73.8%', left: '50.2%' }}></div>
            <div className="overlay-rect" style={{ top: '73.8%', left: '67.3%' }}></div>
          </div>
        </div>
      </section>

      <section id="section-how-it-works" className="how-it-works-section">
        <div className="how-it-works-content">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-number"><span>1</span></div>
              <div className="timeline-connector"></div>
              <div className="timeline-desc">
                <Image src="/images/a7acbe9d0fc477d5c638ddf27974dc021aa67d3d.png" alt="Select a style icon" width={100} height={100} />
                <h3>select a style</h3>
                <p>nec viverra vitae eget placerat commodo dignissim, quam enim. felis, Morbi gravida lacus amet, enim. nisl.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number"><span>2</span></div>
              <div className="timeline-connector"></div>
              <div className="timeline-desc">
                <Image src="/images/4f173169b2de1cb09362627c132d0209a765c530.png" alt="Book your outfit icon" width={100} height={100} />
                <h3>Book Your Outfit</h3>
                <p>amet, elementum vitae ipsum non, placerat dui maximus placerat Nam turpis ex nisl. dui. nisi elit est.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number"><span>3</span></div>
              <div className="timeline-connector"></div>
              <div className="timeline-desc">
                <Image src="/images/8d2923dabaaa18ec7838a8c759892aa368a1c80c.png" alt="Enjoy it icon" width={100} height={100} />
                <h3>Enjoy it</h3>
                <p>nec viverra vitae eget placerat commodo dignissim, quam enim. felis, Morbi gravida lacus amet, enim. nisl.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number"><span>4</span></div>
              <div className="timeline-desc">
                <Image src="/images/70dd05465056315004921710466caec9303e5e8b.png" alt="Return it icon" width={100} height={100} />
                <h3>Return it</h3>
                <p>non, vitae tortor. commodo Ut lobortis, odio Cras porta Ut eget ipsum laoreet cursus elit Nullam Morbi eu In adipiscing ex felis, lacus, sed sollicitudin. Nam</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section-testimonials" className="section-container">
        <h2 className="section-title">What Our <span className="highlight">Clients Say</span></h2>
        <p className="section-subtitle">Real experiences from our satisfied customers</p>
        <div className="testimonials-grid">
          <div className="testimonial-card"><Image src="/images/1fe3992d68b14f1e7c35e047e6ffa9c942f3dfdf.png" alt="Testimonial 1" width={280} height={350} /></div>
          <div className="testimonial-card"><Image src="/images/a5035d2a4fb72e472345aac1039c81acd3d932c4.png" alt="Testimonial 2" width={280} height={350} /></div>
          <div className="testimonial-card"><Image src="/images/4f66963a572265f4e0a848aced105d8bc714d65b.png" alt="Testimonial 3" width={280} height={350} /></div>
          <div className="testimonial-card"><Image src="/images/4f66963a572265f4e0a848aced105d8bc714d65b.png" alt="Testimonial 4" width={280} height={350} /></div>
          <div className="testimonial-card"><Image src="/images/1fe3992d68b14f1e7c35e047e6ffa9c942f3dfdf.png" alt="Testimonial 5" width={280} height={350} /></div>
          <div className="testimonial-card"><Image src="/images/a5035d2a4fb72e472345aac1039c81acd3d932c4.png" alt="Testimonial 6" width={280} height={350} /></div>
          <div className="testimonial-card"><Image src="/images/4f66963a572265f4e0a848aced105d8bc714d65b.png" alt="Testimonial 7" width={280} height={350} /></div>
          <div className="testimonial-card"><Image src="/images/4f66963a572265f4e0a848aced105d8bc714d65b.png" alt="Testimonial 8" width={280} height={350} /></div>
        </div>
      </section>

      <a href="https://wa.me/" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <Image src="/images/1985_4115.svg" alt="WhatsApp" width={45} height={45} />
      </a>
    </div>
  );
}
