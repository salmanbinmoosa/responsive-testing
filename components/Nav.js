import Link from "next/link"
import { AiFillCaretDown } from "react-icons/ai";
const Nav = () => {
  return (
    <>
      <header>
        <nav className="flex">
          <div className="logo">
            <img src="images/appkubelogo.png" alt="" />
          </div>

          <div className="nav-links">
            <Link id="home" href="/">Home</Link>
            <Link className='dropdown nav-lists' href="/about">features <AiFillCaretDown /> </Link>
            <Link className="nav-lists" href="/features">solutions</Link>
            <Link className='dropdown nav-lists' href="/pricing">resources <AiFillCaretDown /></Link>
            <Link className="nav-lists" href="/blog">pricing</Link>
          </div>

          <button className="trial-btn">Free Trial</button>
        </nav>
      </header>
      {/* <div className="header-hr"></div> */}
    </>
  )
}

export default Nav