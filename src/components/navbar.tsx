import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"
import { Menu, Sun, Moon } from "lucide-react"

export function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 z-50 my-5 w-full md:my-10">
      <div className="hidden justify-center md:flex">
        <nav className="pixel-box bg-fuchsia-600 px-8 py-3 text-white">
          <ul className="flex gap-8 text-xl">
            <li>
              <a
                className="hover:underline hover:underline-offset-1"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:underline hover:underline-offset-1"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="hover:underline hover:underline-offset-1"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="hover:underline hover:underline-offset-1"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="hover:underline hover:underline-offset-1"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="ml-3 flex items-center gap-3">
          {theme === "dark" ? (
            <Button
              className="pixel-box h-full bg-fuchsia-600 px-3 text-white"
              onClick={() => setTheme("light")}
            >
              <Sun className="size-5" />
            </Button>
          ) : (
            <Button
              className="pixel-box h-full bg-fuchsia-600 px-3 text-white"
              onClick={() => setTheme("dark")}
            >
              <Moon className="size-5" />
            </Button>
          )}
        </div>
      </div>

      <div className="flex justify-end gap-3 px-4 md:hidden">
        <div className="ml-3">
          {theme === "dark" ? (
            <Button
              className="pixel-box bg-fuchsia-600 px-3 py-2 text-white"
              onClick={() => setTheme("light")}
            >
              <Sun className="size-5" />
            </Button>
          ) : (
            <Button
              className="pixel-box bg-fuchsia-600 px-3 py-2 text-white"
              onClick={() => setTheme("dark")}
            >
              <Moon className="size-5" />
            </Button>
          )}
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="pixel-box bg-fuchsia-600 px-3 py-2 text-white">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem
                className="pixel-box bg-fuchsia-600 px-3 py-2 text-white"
                asChild
              >
                <a
                  className="hover:underline hover:underline-offset-1"
                  href="#home"
                >
                  Home
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="pixel-box bg-fuchsia-600 px-3 py-2 text-white"
                asChild
              >
                <a
                  className="hover:underline hover:underline-offset-1"
                  href="#about"
                >
                  About
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="pixel-box bg-fuchsia-600 px-3 py-2 text-white"
                asChild
              >
                <a
                  className="hover:underline hover:underline-offset-1"
                  href="#projects"
                >
                  Projects
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="pixel-box bg-fuchsia-600 px-3 py-2 text-white"
                asChild
              >
                <a
                  className="hover:underline hover:underline-offset-1"
                  href="#skills"
                >
                  Skills
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="pixel-box bg-fuchsia-600 px-3 py-2 text-white"
                asChild
              >
                <a
                  className="hover:underline hover:underline-offset-1"
                  href="#contact"
                >
                  Contact
                </a>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
