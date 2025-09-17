import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="section-footer" className="site-footer">
        <div className="footer-container">
            <div className="footer-about">
                <Image src="/images/1894_947.svg" alt="Yaritu Logo" className="footer-logo" width={254} height={70} />
                <p>Step into a world of elegance and grace with Yaritu’s gallery. Explore trending festival looks, celebrity attire, top-rated outfits, and a variety of collection that reflect the pulse of Indian Fashion.</p>
                <div className="social-links">
                    <a href="#"><Image src="/images/1894_982.svg" alt="Facebook" width={40} height={40} /></a>
                    <a href="#"><Image src="/images/1894_980.svg" alt="WhatsApp" width={40} height={40} /></a>
                    <a href="#"><Image src="/images/1894_977.svg" alt="Instagram" width={40} height={40} /></a>
                    <a href="#"><Image src="/images/1894_984.svg" alt="YouTube" width={40} height={40} /></a>
                </div>
            </div>
            <div className="footer-links">
                <h3>Quick Links</h3>
                <ul>
                    <li><Link href="/home">HOME</Link></li>
                    <li><Link href="/about">ABOUT US</Link></li>
                    <li><Link href="/contact">CONTACT US</Link></li>
                    <li><Link href="#">STORES</Link></li>
                </ul>
            </div>
            <div className="footer-contact">
                <h3>Contact Us</h3>
                <p><a href="mailto:sales@yaritu.com">sales@yaritu.com</a></p>
                <p><a href="tel:+918401721212">+91 84017 21212</a></p>
                <address>Pruvachi Private Limited, 301, 3rd Floor, Shantam Complex, Near Amiras Hotel, Sarthana Jakatnaka, 395013, Surat, Gujarat, India</address>
            </div>
        </div>
    </footer>
  );
}
