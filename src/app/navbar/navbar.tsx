import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import React from "react";
const Navbar = () => {
  return (

    <NavigationMenu.Root className="relative z-10">
      <NavigationMenu.List className="flex space-x-4 p-4 bg-gray-800 text-white">
        {/* Navigation Item with dropdown */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="px-4 py-2 cursor-pointer hover:bg-gray-700">
            About me
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute mt-2 bg-gray-700 p-2 rounded-md shadow-lg">
            <NavigationMenu.Link href="/page1" className="block px-4 py-2 hover:bg-gray-600">
              Page 1
            </NavigationMenu.Link>
            <NavigationMenu.Link href="/page2" className="block px-4 py-2 hover:bg-gray-600">
              Page 2
            </NavigationMenu.Link>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        {/* Simple Navigation Item */}
        <NavigationMenu.Item>
          <NavigationMenu.Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        {/* Another Dropdown */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="px-4 py-2 cursor-pointer hover:bg-gray-700">
            Quiz
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute mt-2 bg-gray-700 p-2 rounded-md shadow-lg">
            <NavigationMenu.Sub>
              <NavigationMenu.List className="flex flex-col space-y-2">
                <NavigationMenu.Link href="/services" className="px-4 py-2 hover:bg-gray-600">
                  Services
                </NavigationMenu.Link>
                <NavigationMenu.Link href="/contact" className="px-4 py-2 hover:bg-gray-600">
                  Contact
                </NavigationMenu.Link>
              </NavigationMenu.List>
            </NavigationMenu.Sub>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        {/* Indicator for active links */}
        <NavigationMenu.Indicator />
      </NavigationMenu.List>

      {/* Viewport for Dropdown Menus */}
      <NavigationMenu.Viewport className="absolute w-full" />
    </NavigationMenu.Root>
  );
};

export default Navbar;
