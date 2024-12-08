import Image from "next/image"


export default function Navbar() {
    return (

        <>
            <header className="px-4  w-screen bg-white shadow-md flex items-center justify-between">

                {/* search */}
                <a href="">
                    <svg
                        className="h-8 p-1 hover:text-green-500 duration-200"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="search"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                            className=""
                        />
                    </svg>
                </a>

                {/* logo */}
                <h1>Avion</h1>

                {/* buttons -*/}
                <div className="w-3/12 flex justify-end">
                    <a href="">
                        <Image src="/asset/Shopping--cart.svg" alt="logo" width={40} height={40} />
                    </a>
                    <a href="">
                        <Image src="/asset/User--avatar.svg" alt="logo" width={40} height={40} />
                    </a>
                </div>

            </header>


        </>
    )
}
