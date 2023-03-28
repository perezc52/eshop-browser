import { Button } from "@mui/material"
import Link from "next/link"
import DropdownMenu from "./DropdownMenu"
import SearchBox from "./SearchBox"

function NavBar() {
    return (
        <nav>
            <Link href="/"><h1>E-Shop Browser</h1></Link>
            <DropdownMenu />
            <SearchBox />
        </nav>
    )
}

export default NavBar


