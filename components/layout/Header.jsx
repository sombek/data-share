import Link from "next/link";
import React, {useEffect, useState} from "react";

const Header = ({handleHidden}) => {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <>
            <header className={scroll ? "bg-transparent sticky-bar mt-4 stick" : "bg-transparent sticky-bar mt-4"}>
                <div className="container bg-transparent">
                    <nav className="bg-transparent flex justify-between items-center py-3">
                        <Link href="/">
                            <a className="text-3xl font-semibold leading-none">
                                <img
                                    className="h-10"
                                    src="/assets/imgs/logos/logo.png"
                                    alt="Monst"
                                />
                            </a>
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
