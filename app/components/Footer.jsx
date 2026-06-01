import Link from 'next/link';
import "../globals.css";

export default function Footer() {
  return (
    <>
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="footerMenu">
              <ul className="justify-content-start">
                <li><Link href="">About Dr. Amit Gupta</Link></li>
                <li><Link href="">Before & After</Link></li>
                <li><Link href="">Reviews</Link></li>
                <li><Link href="">Blogs</Link></li>
                <li><Link href="">Fellowship</Link></li>
                <li><Link href="">Case Study</Link></li>
                <li><Link href="">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="social">
              <ul className="justify-content-end d-flex gap-2">
                <li>
                  <p className="text-white">Follow : </p>
                </li>
                <li>
                  <a href="" target="_blank"><i className="fab fa-facebook"></i></a>
                </li>
                <li>
                  <a href="" target="_blank"><i className="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href="" target="_blank"><i className="fab fa-youtube"></i></a>
                </li>
                <li>
                  <a href="" target="_blank"><i className="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a href="" target="_blank"><i className="fab fa-linkedin"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact">
              <h4>Contact Us</h4>
              <h5>Plastic Surgery Centre</h5>
              <Link href="" target="_blank" className="mb-1">E-566, Greater Kailash Part 2, South Delhi 110048, INDIA</Link>
              <Link href="tel:919654754793">(+91) 9654754793</Link>
              <br />
              <h5>Gurgaon</h5>
              <Link href="" target="_blank" className="mb-1">Rapid Metro Station, 592, Golf Course Rd, behind Sector 42, Sector 43, Gurugram, Haryana 122009</Link>
              <Link href="tel:919654754793">(+91) 9654754793</Link>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4">
                <h5>Face & Neck</h5>
                <ul>
                  <li><Link href="">Facelift</Link></li>
                  <li><Link href="">Chin Augmentation</Link></li>
                  <li><Link href="">Buccal Fat Surgery</Link></li>
                  <li><Link href="">Asian Blepharoplasty</Link></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>Breast</h5>
                <ul>
                  <li><Link href="">Breast Augmentation</Link></li>
                  <li><Link href="">Breast Lift</Link></li>
                  <li><Link href="">Breast Reduction</Link></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>Tummy Tuck</h5>
                <ul>
                  <li><Link href="">Tummy Tuck</Link></li>
                  <li><Link href="">6 Pack Abs</Link></li>
                  <li><Link href="">Liposuction</Link></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>Mommy</h5>
                <ul>
                  <li><Link href="">Liposuction</Link></li>
                  <li><Link href="">Tummy Tuck</Link></li>
                  <li><Link href="">Buttock Augmentation</Link></li>
                  <li><Link href="">Genital Rejuvenation</Link></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>Male</h5>
                <ul>
                  <li><Link href="">Gynecomastia</Link></li>
                  <li><Link href="">6 Pack Abs</Link></li>
                  <li><Link href="">Hair Transplant</Link></li>
                  <li><Link href="">Liposuction</Link></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>Quick Links</h5>
                <ul>
                  <li><Link href="">Web Stories</Link></li>
                  <li><Link href="">3D Simulation in Delhi</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>Copyright © Divine. <span className="webdevider">|</span>
              <Link href="#">Privacy Statement</Link>
              <span className="webdevider">|</span>
              <Link href="#">Terms of Use</Link>
            </p>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
    </>
  );
}