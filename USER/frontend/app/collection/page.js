import React from 'react';
import './collection.css';
import Image from 'next/image';

export default function Collection() {
  return (
    <main>
      <section id="collection" className="collection-section">
        <div className="container">
          <h1 className="section-title">Our <span className="highlight">Collection</span></h1>
          <hr className="divider" />

          <div className="category-buttons">
            <a href="#" className="category-button">
              <Image src="/images/2195_79.svg" alt="Men category background glow" className="btn-glow" width={252} height={50} />
              <div className="btn-bg"></div>
              <span className="btn-text">MEN</span>
            </a>
            <a href="#" className="category-button">
              <Image src="/images/2195_84.svg" alt="Women category background glow" className="btn-glow" width={252} height={50} />
              <div className="btn-bg"></div>
              <span className="btn-text">WOMEN</span>
            </a>
            <a href="#" className="category-button">
              <Image src="/images/2195_89.svg" alt="Children category background glow" className="btn-glow" width={252} height={50} />
              <div className="btn-bg"></div>
              <span className="btn-text">CHILDREN</span>
            </a>
          </div>

          <div className="collection-content">
            <p className="breadcrumbs">MEN &gt; RENT BY TYPE &gt; SHERVANI</p>
            <h2 className="collection-title">Royal Collection</h2>
            <p className="collection-subtitle">i want to make wedding clothing web's collection page • similar color use in collection</p>

            <div className="product-grid">
              <article className="product-card">
                <Image src="/images/2123026aae2018b2ea4d5cf1f0b8afff5f000087.png" alt="Ivory Zari Lehenga" className="product-image" width={300} height={349} />
                <div className="card-info">
                  <p>Ivory Zari Lehenga<br />women • lehenga</p>
                </div>
              </article>
              <article className="product-card">
                <Image src="/images/3e92d1ce86debf6c8da44d85ff7b02f8f8fe57ca.png" alt="Ivory Zari Sherwani" className="product-image" width={300} height={349} />
                <div className="card-info">
                  <p>Ivory Zari Lehenga<br />women • lehenga</p>
                </div>
              </article>
              <article className="product-card">
                <Image src="/images/2123026aae2018b2ea4d5cf1f0b8afff5f000087.png" alt="Ivory Zari Lehenga" className="product-image" width={300} height={349} />
                <div className="card-info">
                  <p>Ivory Zari Lehenga<br />women • lehenga</p>
                </div>
              </article>
              <article className="product-card">
                <Image src="/images/3e92d1ce86debf6c8da44d85ff7b02f8f8fe57ca.png" alt="Ivory Zari Sherwani" className="product-image" width={300} height={349} />
                <div className="card-info">
                  <p>Ivory Zari Lehenga<br />women • lehenga</p>
                </div>
              </article>
              <article className="product-card">
                <Image src="/images/2123026aae2018b2ea4d5cf1f0b8afff5f000087.png" alt="Ivory Zari Lehenga" className="product-image" width={300} height={349} />
                <div className="card-info">
                  <p>Ivory Zari Lehenga<br />women • lehenga</p>
                </div>
              </article>
              <article className="product-card">
                <Image src="/images/3e92d1ce86debf6c8da44d85ff7b02f8f8fe57ca.png" alt="Ivory Zari Sherwani" className="product-image" width={300} height={349} />
                <div className="card-info">
                  <p>Ivory Zari Lehenga<br />women • lehenga</p>
                </div>
              </article>
              <article className="product-card">
                <Image src="/images/2123026aae2018b2ea4d5cf1f0b8afff5f000087.png" alt="Ivory Zari Lehenga" className="product-image" width={300} height={349} />
                <div className="card-info">
                  <p>Ivory Zari Lehenga<br />women • lehenga</p>
                </div>
              </article>
              <article className="product-card">
                <Image src="/images/3e92d1ce86debf6c8da44d85ff7b02f8f8fe57ca.png" alt="Ivory Zari Sherwani" className="product-image" width={300} height={349} />
                <div className="card-info">
                  <p>Ivory Zari Lehenga<br />women • lehenga</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <a href="#" className="whatsapp-fab">
        <Image src="/images/2139_1807.svg" alt="WhatsApp" width={45} height={45} />
      </a>
    </main>
  );
}
