import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
import { gsap } from 'gsap'
import { useRef, useLayoutEffect } from 'react'
import dynamic from 'next/dynamic'
import homer from '../public/images/homepage2.png'

interface Props { }

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const Portfolio: React.FC<Props> = () => {


    const headr = useRef<HTMLInputElement | null>(null);
    const sl = useRef<HTMLInputElement | null>(null);
    const circ = useRef<SVGSVGElement | null>(null);
    const tri = useRef<SVGSVGElement | null>(null);
    const bx = useRef<HTMLInputElement | null>(null);
    const bx1 = useRef<HTMLInputElement | null>(null);
    const bx2 = useRef<HTMLInputElement | null>(null);

    useLayoutEffect(() => {
        gsap.from(headr.current, { duration: 1, y: -200, ease: "back" })
        gsap.from(sl.current, { duration: 1, x: -400, skeyX: 9, ease: "rough" })
        gsap.from(circ.current, { duration: 1, y: 400, ease: "back" })
        gsap.from(tri.current, { duration: 1, x: 400, skewX: 3, ease: "back" })
        gsap.from(bx.current, { duration: 1, x: 400, skewX: 3, ease: "back" })
        gsap.from(bx1.current, { dedlay: 0.2, duration: 1, y: 400, skewX: 3, ease: "back" })
        gsap.from(bx2.current, { duration: 1, y: -400, skewX: 3, ease: "back" })

    }, [])
    return <>
        <Head>
            <title>Justin Irizarry</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/images/redcirc.svg" />
        </Head >
        <header ref={headr} className={styles.header}>
            <Link href="/">Home</Link>
            <Link href="https://github.com/actuallywolverine">Github</Link>
            <Link href="https://codepen.io/actuallywolverine">Codepen</Link>
        </header>
        <div className={styles.wrapper}>

            <h1 ref={sl} className={styles.sw}>Selected<br /> <span className={styles.sww}>Works</span></h1>
            <svg ref={tri} className={styles.tri} width="100%" height="100%" viewBox="0 0 317 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M305.874 221.814L170.202 15.244C164.672 6.82477 152.328 6.82478 146.798 15.244L11.126 221.814C5.01148 231.124 11.6895 243.5 22.8278 243.5H294.172C305.31 243.5 311.989 231.124 305.874 221.814Z" fill="#44A1C3" stroke="black" stroke-width="16" />
            </svg>
            <svg ref={circ} className={styles.circ} width="100%" height="100%" viewBox="0 0 301 278" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M150.5 270C228.513 270 293 212.007 293 139C293 65.9927 228.513 8 150.5 8C72.4875 8 8 65.9927 8 139C8 212.007 72.4875 270 150.5 270Z" fill="#F15933" stroke="black" stroke-width="16" />
            </svg>
            <Link href="https://weareisosceles.com/" target="_blank">
                <div ref={bx} className={styles.box}
                    style={{
                        backgroundImage: `url(${homer.src})`,
                        backgroundSize: 'cover',
                    }}
                >
                </div>
            </Link>
            <Link href="">
                <div ref={bx1} className={styles.box}>
                    <ReactPlayer url='https://youtu.be/8tLJGCeYkT4'
                        height="100%"
                        width="100%"
                        light="/images/finance.png"
                    />
                </div>
            </Link>
            <Link href="">
                <div ref={bx2} className={styles.box}>
                    <ReactPlayer url='https://youtu.be/u4tLqar2nw4'
                        height="100%"
                        width="100%"
                        light="/images/grid.png"
                    />
                </div>
            </Link>
        </div>
    </>
}
export default Portfolio
