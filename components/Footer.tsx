import { connection } from "next/server";

export default async function Footer() {
    await connection();

    return (
        <footer className="bg-gray-800 text-white py-4 mt-12">
            <div className="container mx-auto text-center">
                <p>
                    Copyright &copy; {new Date().getFullYear()} | Christina Dobbins |
                    All rights reserved<br />Built with Next.js and Tailwind CSS.
                </p>
            </div>
        </footer>
    );
}