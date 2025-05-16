import React from "react";

const NavBar: React.FC = () => {
    return (
        <nav className="fixed top-0 z-40 flex flex-wrap items-center justify-between w-full px-4 py-5 tracking-wide bg-rose-600 shadow-md bg-opacity-90 md:py-5 md:px-8 lg:px-14 ">
            {/* Left nav */}
            <div className="flex items-center">
                <img
                    src="/src/assets/logos/white-logo.png"
                    alt="logo"
                    className="h-8"
                />
            </div>
            {/* End left nav */}

            {/* Right nav */}
            <div className="block text-center text-gray-600">
                <h1 className="text-xl font-bold text-white">YT SERVER</h1>
            </div>
        </nav>
    );
};

export default NavBar;
