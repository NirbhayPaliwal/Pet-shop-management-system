"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";

import Image from "next/image";
import { useRouter } from "next/navigation";

function Navbar() {
  const [active, setActive] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [Rows, setRows] = useState([]);
  const router = useRouter();

  const toggleNotifications = () => {
    setShowNotifications((prevState) => !prevState);
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/notify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);
        setRows(data.results);
        // console.log(Rows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  };

  return (
    <div className="py-0">
      <header className="text-gray-400 bg-gray-900 body-font ">
        <div className="container mx-20 flex flex-wrap p-5 flex-row justify-center items-center">
          <div className="flex title-font mx-0 font-medium items-center text-white mb-4 md:mb-0">
            <a href="/" className="flex items-center">
              <Image
                src="/petshop.svg"
                alt="background image"
                width={100}
                height={100}
              />
            </a>
            <HoveredLink href="/">.</HoveredLink>
          </div>
          <nav className=" flex flex-wrap items-center mx-auto text-l justify-center">
            <Menu>
              <div
                onClick={() => {
                  if (active === "Animals") setActive(null);
                  else setActive("Animals");
                }}
              >
                <MenuItem active={active} item="Animals">
                  <div className="flex flex-col  text-base">
                    {/* <HoveredLink href="/Animals">Animals</HoveredLink> */}
                  </div>
                </MenuItem>
              </div>
              <div
                onClick={() => {
                  if (active === "Customer") setActive(null);
                  else {
                    setActive("Customer");
                    // <HoveredLink href="/Customer">Customer details</HoveredLink>
                  }
                }}
              >
                <MenuItem active={active} item="Customer">
                  <div className="flex flex-col  text-base">
                    {/* <HoveredLink href="/Customer">Customer details</HoveredLink> */}
                  </div>
                </MenuItem>
              </div>
              <div
                onClick={() => {
                  if (active === "Sales") setActive(null);
                  else {
                    // <HoveredLink href="/Sales">Sales Details</HoveredLink>
                  }
                  setActive("Sales");
                }}
              >
                <MenuItem active={active} item="Sales">
                  <div className="flex flex-col  text-base">
                    {/* <HoveredLink href="/Sales">Sales Details</HoveredLink> */}
                  </div>
                </MenuItem>
              </div>
              <div
                onClick={() => {
                  if (active === "Caretaker") setActive(null);
                  else setActive("Caretaker");
                }}
              >
                <MenuItem active={active} item="Caretaker">
                  <div className="flex flex-col  text-base">
                    {/* <HoveredLink href="/Caretaker">Caretaker details</HoveredLink> */}
                  </div>
                </MenuItem>
              </div>
              <div
                onClick={() => {
                  if (active === "Veiternary") setActive(null);
                  else setActive("Veiternary");
                }}
              >
                <MenuItem active={active} item="Veiternary">
                  <div className="flex flex-col space-y-4 text-base">
                    {/* <HoveredLink href="/Veiternary">Veiternary</HoveredLink> */}
                  </div>
                </MenuItem>
              </div>
            </Menu>
          </nav>

          <div className="flex flex-col items-center ">
            <button
              id="dropdownNotificationButton"
              data-dropdown-toggle="dropdownNotification"
              className="relative inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
              type="button"
              onClick={toggleNotifications}
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="blue"
                viewBox="0 0 24 24"
                style={{ width: "20px", height: "20px" }}
              >
                <path d="M12 24c1.104 0 2-.896 2-2h-4c0 1.104.896 2 2 2zm6.364-6.95c-.6-.624-1.364-1.154-1.364-5.05 0-3.48-2.17-6.429-5.364-7.462V3c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5v1.538C7.17 5.571 5 8.52 5 12c0 3.896-.764 4.426-1.364 5.05-.374.39-.636 1.194-.636 1.95h16c0-.756-.262-1.56-.636-1.95z" />
              </svg>

              <div className="absolute block w-3 h-3 bg-blue-500 border-2 border-white rounded-full -top-0.5 start-2.5 dark:border-gray-900"></div>
            </button>

            <div
              id="dropdownNotification"
              className={`${
                showNotifications ? "block" : "hidden"
              } z-100 absolute w-full max-w-sm bg-blue-500 opacity-100 divide-y divide-gray-700 my-5 rounded-lg dark:opacity-900 dark:bg-gray-800 dark:divide-gray-700`}
              aria-labelledby="dropdownNotificationButton"
            >
              <div className="block mx-0 my-auto px-auto py-auto font-medium text-center text-gray-700 rounded-t-lg bg-blue-500 dark:bg-gray-800 dark:text-white">
                Notifications
              </div>
              {Rows.map((row, index) => (
                <div
                  key={row.pet_id}
                  className="divide-y divide-gray-100 dark:divide-gray-700"
                >
                  <div className="w-full ps-3">
                    <div className="text-gray-900 text-sm mb-1.5 dark:text-gray-400">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Pet-id:{row.pet_id}
                      </span>
                      : {row.work}
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-500">
                      a few moments ago
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
