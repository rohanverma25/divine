import Topbar from '../components/Topbar';
import Link from 'next/link';
export default function Header() {
  return (
    <>
    <Topbar />
    <header className="container">
      <div className="row align-items-center">
        <div className="col-md-2">
            <div className='logo'>
                <img src="https://www.divinecosmeticsurgery.com/wp-content/uploads/2025/10/divine-long-logo.png" className="img-fluid" />
            </div>
        </div>
        <div className="col-md-10">
            <div className="topMenu">
                <ul className="justify-content-end">
                    <li><Link href="/"><i className="fa fa-home" /></Link></li>
                    <li><Link href="/">Aeona</Link></li>
                    <li><Link href="/">About</Link></li>
                    <li><Link href="/">Before & After</Link></li>
                    <li><Link href="/">Reviews</Link></li>
                    <li><Link href="/">Blogs</Link></li>
                    <li><Link href="/">Fellowship</Link></li>
                    <li><Link href="/">Case Study</Link></li>
                    <li><Link href="/">Contact us</Link></li>
                    <li><i className="fa fa-search" /></li>
                </ul>
            </div>
        </div>
      </div>
    </header>
    <div className="procedureMenu">
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <nav class="navbar navbar-expand-lg p-0">
                        <div class="container-fluid">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                                <li class="nav-item" >
                                <a class="nav-link" aria-current="page" href="#">Hair</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Breast</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Gynecomastia</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Tummy Tuck</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Designer Vagina</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Mommy Makeover</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Face, Fillers</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">For Men</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Body Contouring</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">International</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    </>
  );
}