import React from "react";

const NavMenu = (props) => {

    let Links = [
            { name1: "Portfolio", link: "/" },
            { name: "Blog", link: "/blog" },
            { name: "Client reviews", link: "/client reviews" },
            { name: "Contact me", link: "/contact me" },
    ]


    return (
        <div
            className="fixed top-24 mx-[6%] h-[310px] w-[88%] bg-black  shadow-2xl transition-all duration-300 md:hidden"
            style={props.isOpen ? { left: "0" } : { left: "100%" }}
        >
            <ul className="flex h-full flex-col justify-evenly text-center text-xl font-bold text-white">
                {Links.map(
                    (link, i) => {
                        return (
                            <li
                                className="cursor-pointer hover:text-darkGrayishBlue"
                                key={i}
                            >
                                {/* {link} */}
                                  <a href={link.link} className="hover:text-[#FCE611] text-[#EEEEEE]
              font-bold font-['Josefin Sans'] 
              text-[18px] leading-[18px]">{link.name}</a>
                                <a href={link.link} className="hover:text-[#FCE611] text-[#00ADB5] font-bold font-['Josefin Sans'] 
              text-[18px] leading-[18px]">{link.name1}</a>
                                
                            </li>
                        );
                     
                      
                    }
                )}
            </ul>
            
        </div>
    );
};

export default NavMenu;
