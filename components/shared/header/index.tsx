import Link from "next/link"
import { ShoppingCart, UserIcon } from "lucide-react"

function Header() {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-4 py-6">
                <Link href="/" className="text-xl font-bold text-gray-800">
                    My Store
                </Link>
                <nav className="flex space-x-4">
                    <Link href="/products" className="text-gray-600 hover:text-gray-900">
                        Products
                    </Link>
                    <Link href="/cart" className="text-gray-600 hover:text-gray-900">
                        <ShoppingCart />
                    </Link>
                    <Link href="/account" className="text-gray-600 hover:text-gray-900">
                        <UserIcon />
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header