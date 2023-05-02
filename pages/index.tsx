import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useRef, useState, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'




const Home: React.FC = () => {

  const [state, setState] = useState({ show: false, show2: false, show3: false });

  const handleClick = () => {
    setState({ ...state, show: !state.show });
  }

  const handleClick2 = () => {
    setState({ ...state, show2: !state.show2 });
  }

  const handleClick3 = () => {
    setState({ ...state, show3: !state.show3 });
  }

  const tl = useRef<gsap.core.Timeline | null>(null);
  const tl2 = useRef<gsap.core.Timeline | null>(null);
  const tl3 = useRef<gsap.core.Timeline | null>(null);
  const myElement = useRef<HTMLUListElement | null>(null);
  const blueCirc = useRef<SVGPathElement | null>(null);
  const redCirc = useRef<SVGPathElement | null>(null);
  const redRect = useRef<SVGRectElement | null>(null);
  const yellowRect = useRef<SVGRectElement | null>(null);
  const blueTri = useRef<SVGPathElement | null>(null);
  const whiteRect = useRef<SVGRectElement | null>(null);
  const lrectOne = useRef<SVGRectElement | null>(null);
  const rectTwo = useRef<SVGPathElement | null>(null);
  const rectThree = useRef<SVGRectElement | null>(null);
  const lblueCirc = useRef<SVGPathElement | null>(null);
  const newElement = useRef<HTMLDivElement | null>(null);
  const yellowButton = useRef<SVGRectElement | null>(null);
  const header = useRef<HTMLUListElement | null>(null);
  const title = useRef<HTMLDivElement | null>(null);
  const abt = useRef<SVGTextElement | null>(null);
  const skl = useRef<SVGTextElement | null>(null);

  useLayoutEffect(() => {
    tl.current = gsap.timeline({ paused: true })
      .to(myElement.current, { duration: .5, x: "-10vw", autoAlpha: 1, ease: "bounce" })
      .to(yellowRect.current, { duration: .5, x: -100, ease: "bounce" }, "<")
      .to(redCirc.current, { duration: .5, y: 320, x: -100, ease: "bounce" }, "<")
      .to(blueCirc.current, { duration: .5, y: 340, x: -100, ease: "bounce" }, "<")
      .to(redRect.current, { duration: .5, y: 770, x: -100, ease: "bounce" }, "<")
      .to(blueTri.current, { duration: .7, x: -100, rotate: 30, ease: "bounce" }, "<")
      .to(whiteRect.current, { duration: .5, y: 190, ease: "bounce" }, "<")
      .to(redRect.current, { duration: 2.1, rotate: 30, x: 3, ease: "bounce" })
      .to(redRect.current, { duration: 2.1, rotate: -30, transformOrigin: "bottom right", ease: "bounce" })


  }, [])
  useLayoutEffect(() => {
    state.show ? tl.current?.play() : tl.current?.reverse()
  }, [state.show])

  useLayoutEffect(() => {
    tl2.current = gsap.timeline({ paused: true })
      .to(lrectOne.current, { duration: .5, y: 150, ease: "bounce" })
      .to(rectTwo.current, { duration: .5, x: 200, ease: "bounce" }, "<")
      .to(rectThree.current, { duration: .5, y: 400, rotate: -60, ease: "bounce" }, "<")
      .to(newElement.current, { duration: .5, x: "12vw", autoAlpha: 1, ease: "bounce" }, "<")
      .to(yellowButton.current, { duration: .5, x: 200, ease: "bounce" }, "<")
      .to(rectThree.current, { duration: 2.1, rotate: -90, transformOrigin: "bottom left", ease: "bounce" })
      .to(lblueCirc.current, { duration: .5, y: 400, ease: "bounce" })

  }, [])

  useLayoutEffect(() => {
    state.show2 ? tl2.current?.play() : tl2.current?.reverse()
  }, [state.show2])


  useLayoutEffect(() => {
    tl3.current = gsap.timeline({ paused: true })
      .to(lrectOne.current, { duration: .5, rotate: 50, ease: "bounce" })
      .to(rectTwo.current, { duration: .5, rotate: 90, ease: "bounce" }, "<")
      .to(rectThree.current, { duration: .5, rotate: -60, ease: "bounce" }, "<")
      .to(yellowButton.current, { duration: .5, rotate: -90, ease: "bounce" }, "<")
      .to(abt.current, { duration: .5, rotate: -90, y: -100, ease: "bounce" }, "<")
      .to(rectThree.current, { duration: 2.1, rotate: 90, transformOrigin: "bottom left", ease: "bounce" })
      .to(lblueCirc.current, { duration: .5, y: 200, ease: "bounce" })
      .to(abt.current, { duration: .5, rotate: 2, y: 80, ease: "bounce" }, "<")
  }, [])

  useLayoutEffect(() => {
    state.show3 ? tl3.current?.play() : tl3.current?.reverse()
  }, [state.show3])

  useLayoutEffect(() => {
    gsap.from(lrectOne.current, { duration: 1, x: -400, ease: "back" })
    gsap.from(header.current, { duration: 1, y: -400, ease: "back" })
    gsap.from(title.current, { duration: 1, y: -400, ease: "back" })
    gsap.from(blueCirc.current, { duration: 1, x: -400, ease: "back" })
    gsap.from(redCirc.current, { delat: 0.2, duration: 1.2, x: -400, ease: "back" })
    gsap.from(redRect.current, { duration: 1, y: -300, ease: "back" })
    gsap.from(yellowRect.current, { duration: 1, y: -300, ease: "back" })
    gsap.from(skl.current, { duration: 1, y: -300, ease: "back" })
    gsap.from(blueTri.current, { duration: 1, y: -300, ease: "back" })
    gsap.from(rectTwo.current, { delay: 0.3, duration: 1, y: -300, ease: "back" })
    gsap.from(rectThree.current, { delay: 0.5, duration: 1, y: -300, ease: "back" })
    gsap.from(lblueCirc.current, { duration: 1, x: 300, ease: "back" })
    gsap.from(yellowButton.current, { delay: 0.25, duration: 1, y: -300, ease: "back" })
    gsap.from(abt.current, { delay: 0.25, duration: 1, y: -300, ease: "back" })

  }, [])

  return (
    <>
      <Head>
        <title>Justin Irizarry</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/redcirc.svg" />
      </Head>
      <header>
        <ul ref={header} className={styles.header}>
          <li><Link href="https://drive.google.com/file/d/1505b1np6pk5DZYGBW2nk7oNoDJDDNQRO/view?usp=sharing" target="_blank">Resume</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="mailto:justinleeirizarry@gmail.com">Contact</Link></li>
        </ul>
      </header>
      <main className={styles.main}>
        <h1 ref={title} className={styles.t2}>
          <span className={styles.name}>Justin Irizarry <br /></span>Front-End Developer
        </h1>
        <div className={styles.svgcontainer}>
          <svg viewBox="-50 0 1000 1100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="bc" ref={blueCirc} d="M759 391C814.837 391 862 351.238 862 300C862 248.762 814.837 209 759 209C703.163 209 656 248.762 656 300C656 351.238 703.163 391 759 391Z" fill="#44A1C3" stroke="black" stroke-width="16" />
            <rect ref={lrectOne} x="14" y="598" width="416" height="194" rx="41" fill="white" stroke="black" stroke-width="16" />
            <rect ref={whiteRect} x="439" y="8" width="212" height="194" rx="38" fill="white" stroke="black" stroke-width="16" />
            <rect x="226" y="9" width="212" height="194" rx="38" fill="white" stroke="black" stroke-width="16" />
            <rect x="430" y="602" width="212" height="388" rx="41" fill="white" stroke="black" stroke-width="16" />
            <rect ref={rectThree} x="14" y="203" width="212" height="394" rx="41" fill="white" stroke="black" stroke-width="16" />
            <rect ref={yellowRect} id="y1" onClick={handleClick} x="642" y="598" width="212" height="194" rx="38" fill="#E7B12C" stroke="black" stroke-width="16" />
            <text ref={skl} x="685" y="710" width="212" height="194" stroke="black" fontSize="50" fill="black" fontWeight="600" fontFamily="'Inter', sans-serif">Skills</text>
            <path onClick={handleClick3} id="y3" d="M392 796H256C235.013 796 218 813.013 218 834V952C218 972.987 235.013 990 256 990H392C412.987 990 430 972.987 430 952V834C430 813.013 412.987 796 392 796Z" fill="#44A1C3" stroke="black" stroke-width="16" />
            <path ref={rectTwo} d="M601 397H267C244.356 397 226 415.356 226 438V557C226 579.644 244.356 598 267 598H601C623.644 598 642 579.644 642 557V438C642 415.356 623.644 397 601 397Z" fill="white" stroke="black" stroke-width="16" />
            <path id="rt" d="M206.62 960.207L127.377 810.297C122.121 800.353 107.879 800.353 102.623 810.297L23.3804 960.207C18.452 969.531 25.2115 980.75 35.7576 980.75H194.242C204.789 980.75 211.548 969.531 206.62 960.207Z" fill="#F15933" stroke="black" stroke-width="16" />
            <path ref={blueTri} id="bt" d="M843 970V817.771C843 805.543 828.423 799.191 819.467 807.518L655.733 959.747C646.417 968.408 652.545 984 665.265 984H829C836.732 984 843 977.732 843 970Z" fill="#44A1C3" stroke="black" stroke-width="16" />
            <path ref={lblueCirc} id="lbc" d="M111 191C166.837 191 214 151.238 214 100C214 48.7616 166.837 9 111 9C55.1635 9 8 48.7616 8 100C8 151.238 55.1635 191 111 191Z" fill="#44A1C3" stroke="black" stroke-width="16" />
            <path ref={redCirc} id="rc" d="M759 587C814.837 587 862 547.238 862 496C862 444.762 814.837 405 759 405C703.163 405 656 444.762 656 496C656 547.238 703.163 587 759 587Z" fill="#F15933" stroke="black" stroke-width="16" />
            <rect ref={yellowButton} id="y2" onClick={handleClick2} x="226" y="203" width="212" height="194" rx="38" fill="#E7B12C" stroke="black" stroke-width="16" />
            <text ref={abt} x="265" y="315" width="212" height="194" stroke="black" fontSize="50" fill="black" fontWeight="600" fontFamily="'Inter', sans-serif">About</text>
            <rect ref={redRect} id="rr" x="649.039" y="7.87626" width="212" height="194" rx="38" transform="rotate(0.610409 649.039 7.87626)" fill="#F15933" stroke="black" stroke-width="16" />
          </svg>
        </div>
        <ul ref={myElement} className={styles.texts}>
          <li>HTML</li>
          <li>CSS</li>
          <li className={styles.accent}>JavaScript</li>
          <li>TypeScript</li>
          <li className={styles.accent1}>React</li>
          <li>Next.js</li>
          <li >Python</li>
          <li>C</li>
          <li>SQL</li>
          <li>GSAP</li>
          <li>NPM</li>
          <li>Illustrator</li>
        </ul>
        <div ref={newElement} className={styles.me}><p>As a highly skilled and experienced developer, I am deeply passionate about the intersection of design and development. Continuously pushing the boundaries of my expertise, I am committed to honing my skills and staying ahead of the curve with the latest front-end technologies.</p>
        </div>
      </main>
    </>
  )
}

export default Home
