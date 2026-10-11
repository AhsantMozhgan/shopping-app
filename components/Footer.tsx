import { cacheLife } from "next/cache"

async function getCurrentYear() {
    "use cache"
    cacheLife("max")

    return new Date().getFullYear()
}

async function Footer() {
    const currentYear = await getCurrentYear()

    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>
                    &copy; {currentYear} My Company. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer