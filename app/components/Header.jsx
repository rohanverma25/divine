import Topbar from '../components/Topbar';
import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
  return (
    <>
    <Topbar />
    <header className="container">
      <div className="row align-items-center">
        <div className="col-md-2 col-6">
            <div className='logo'>
                <Image
                    src="/images/divine-long-logo.webp"
                    alt="Banner"
                    width={150}
                    height={106}
                />
            </div>
        </div>
        <div className="col-md-10 col-6">
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
            <div className='text-right'>
            <button type="button" className='btn btn-primary p-2'>
                <i class="fa-solid fa-bars"></i>
            </button>
            </div>
        </div>
      </div>
    </header>
    <div className="procedureMenu">
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg p-0">
                        <div className="container-fluid">
                            <div className="navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                <li className="nav-item" >
                                <a className="nav-link" aria-current="page" href="#">Hair</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Breast</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Gynecomastia</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Tummy Tuck</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Designer Vagina</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Mommy Makeover</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Face, Fillers</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">For Men</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Body Contouring</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">International</a>
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