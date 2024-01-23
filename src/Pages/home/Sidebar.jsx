import React from 'react';


function Sidebar () {
    const dropdown = () => {
        document.querySelector("#submenu").classList.toggle("hidden");
        document.querySelector("#arrow").classList.toggle("rotate-0");
      };
    
      const openSidebar = () => {
        document.querySelector(".sidebar").classList.toggle("hidden");
      };
    
      return (
        <>
          <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="/dist/tailwind.css" rel="stylesheet" />
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css"
            />
          </head>
          <body className="bg-purple-600">
            <span
              className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
              onClick={openSidebar}
            >
              <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
            </span>
            <div
              className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-dark-purple"
            >
              <div className="text-gray-100 text-xl">
                <div className="p-2.5 mt-1 flex items-center">
                  <i className="bi bi-controller px-2 py-1 rounded-md bg-purple-600"></i>
                  <h1 className="font-bold text-gray-200 text-[15px] ml-3">Gamer Fest</h1>
                  <i
                    className="bi bi-x cursor-pointer ml-28 lg:hidden"
                    onClick={openSidebar}
                  ></i>
                </div>
                <div className="my-2 bg-gray-700 h-[1px]"></div>
              </div>
              {/*La barra de buscador*/}
              {/*<div
                className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white"
              >
                <i className="bi bi-search text-sm"></i>
                <input
                  type="text"
                  placeholder="Search"
                  className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
                />
      </div>*/}
              <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-purple-600 text-white"
              >
                <i className="bi bi-house-door-fill"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Inicio</span>
              </div>
              <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-purple-600 text-white"
              >
                <i className="bi bi-bookmark-fill"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Consultar juegos</span>
              </div>
              <div className="my-4 bg-gray-600 h-[1px]"></div>
              <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-purple-600 text-white"
                onClick={dropdown}
              >
                <i className="bi bi-chat-left-text-fill"></i>
                <div className="flex justify-between w-full items-center">
                  <span className="text-[15px] ml-4 text-gray-200 font-bold">Desplegar patrocinadores</span>
                  <span className="text-sm rotate-180" id="arrow">
                    <i className="bi bi-chevron-down"></i>
                  </span>
                </div>
              </div>
              <div
                className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
                id="submenu"
              >
                <h1 className="cursor-pointer p-2 hover:bg-purple-600 rounded-md mt-1">
                  Social
                </h1>
                <h1 className="cursor-pointer p-2 hover:bg-purple-600 rounded-md mt-1">
                  Personal
                </h1>
                <h1 className="cursor-pointer p-2 hover:bg-purple-600 rounded-md mt-1">
                  Friends
                </h1>
              </div>
              <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-purple-600 text-white"
              >
                <i className="bi bi-box-arrow-in-right"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Salir</span>
              </div>
            </div>
          </body>
        </>
      );
};

export default Sidebar;