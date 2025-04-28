import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Discord Bot Development Guide',
  description: 'A comprehensive guide to creating Discord bots with JavaScript and slash commands',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-discord-darkest text-discord-light min-h-screen`}>
        <div className="flex">
          {/* Sidebar */}
          <nav className="w-64 h-screen bg-discord-darker p-4 fixed">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-discord-accent">Discord Bot Guide</h1>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="block p-2 hover:bg-discord-dark rounded">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/setup" className="block p-2 hover:bg-discord-dark rounded">
                  Setup & Installation
                </Link>
              </li>
              <li>
                <Link href="/slash-commands" className="block p-2 hover:bg-discord-dark rounded">
                  Slash Commands
                </Link>
              </li>
              <li>
                <Link href="/events" className="block p-2 hover:bg-discord-dark rounded">
                  Events & Handlers
                </Link>
              </li>
              <li>
                <Link href="/examples" className="block p-2 hover:bg-discord-dark rounded">
                  Code Examples
                </Link>
              </li>
              <li>
                <Link href="/best-practices" className="block p-2 hover:bg-discord-dark rounded">
                  Best Practices
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Main content */}
          <main className="ml-64 p-8 w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
} 