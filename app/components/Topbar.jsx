import "../globals.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="contact">
            <ul>
              <li>
                <a href="tel:(+91) 98119 94417"><i className="fa fa-phone"></i>&nbsp; (+91) 98119 94417 </a>&nbsp;&nbsp;|
              </li>
              <li>
                <a href="mailto:info@divinecosmeticsurgery.com"><i className="fa fa-envelope"></i>&nbsp; info@divinecosmeticsurgery.com </a>&nbsp;&nbsp;|
              </li>
              <li>
                <a>{`India's Most Trusted Plastic Surgeon`}</a>
              </li>
            </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="social">
              <ul className="justify-content-end">
                <li>
                  <p>Follow : </p>
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
        </div>
      </div>
    </div>
  );
}