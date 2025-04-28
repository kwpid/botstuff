import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-discord-accent">Welcome to Discord Bot Development</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <p className="mb-4">
          This guide will walk you through creating a Discord bot using JavaScript and the Discord.js library.
          You'll learn everything from setting up your development environment to deploying your bot.
        </p>
        <div className="bg-discord-darker p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">What You'll Learn</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Setting up your development environment</li>
            <li>Creating and configuring your Discord bot</li>
            <li>Implementing slash commands</li>
            <li>Handling events and interactions</li>
            <li>Best practices for bot development</li>
            <li>Deploying your bot</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <ul className="list-disc list-inside space-y-2">
            <li>Node.js (v16.9.0 or higher)</li>
            <li>npm or yarn package manager</li>
            <li>A Discord account</li>
            <li>A code editor (VS Code recommended)</li>
            <li>Basic knowledge of JavaScript</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <p className="mb-4">Follow these steps to get started:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Create a new Discord application in the Discord Developer Portal</li>
            <li>Set up your development environment</li>
            <li>Create a new project and install dependencies</li>
            <li>Write your first bot command</li>
          </ol>
          <div className="mt-6">
            <Link 
              href="/setup" 
              className="bg-discord-accent hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Start Setup Guide →
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-discord-darker p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Official Documentation</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://discord.js.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-discord-accent hover:underline"
                >
                  Discord.js Documentation
                </a>
              </li>
              <li>
                <a 
                  href="https://discord.com/developers/docs/intro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-discord-accent hover:underline"
                >
                  Discord Developer Portal
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-discord-darker p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Community</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://discord.gg/discord-developers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-discord-accent hover:underline"
                >
                  Discord Developers Server
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/discordjs/discord.js" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-discord-accent hover:underline"
                >
                  Discord.js GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
} 