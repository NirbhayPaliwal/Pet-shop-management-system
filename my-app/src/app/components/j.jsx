<div className="flex flex-col items-center ">
            <button
              id="dropdownNotificationButton"
              data-dropdown-toggle="dropdownNotification"
              className="relative inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
              type="button"
              onClick={toggleNotifications}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 14 20"
              >
                <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
              </svg>
            </button>

            <div
              id="dropdownNotification"
              className={`${
                showNotifications ? "block" : "hidden"
              } z-100  absolute w-full max-w-sm bg-blue-500 opacity-100 divide-y divide-gray-700 my-5 rounded-lg dark:opacity-900 dark:bg-gray-800 dark:divide-gray-700`}
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
        