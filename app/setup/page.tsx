import Link from 'next/link'

export default function Setup() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-discord-accent">Setting Up Your Discord Bot</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">1. Create a Discord Application</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <ol className="list-decimal list-inside space-y-4">
            <li>
              Go to the{' '}
              <a 
                href="https://discord.com/developers/applications" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-discord-accent hover:underline"
              >
                Discord Developer Portal
              </a>
            </li>
            <li>Click "New Application" and give it a name</li>
            <li>Go to the "Bot" section and click "Add Bot"</li>
            <li>Under the "Privileged Gateway Intents" section, enable:
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Presence Intent</li>
                <li>Server Members Intent</li>
                <li>Message Content Intent</li>
              </ul>
            </li>
            <li>Save your changes</li>
          </ol>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">2. Set Up Your Development Environment</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Install Required Software</h3>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              Install Node.js from{' '}
              <a 
                href="https://nodejs.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-discord-accent hover:underline"
              >
                nodejs.org
              </a>
            </li>
            <li>Install a code editor (VS Code recommended)</li>
            <li>Open your terminal and verify the installation:
              <pre className="bg-discord-darkest p-4 rounded mt-2 overflow-x-auto">
                <code>node --version</code>
              </pre>
            </li>
          </ol>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">3. Create Your Project</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Initialize Your Project</h3>
          <ol className="list-decimal list-inside space-y-4">
            <li>Create a new directory for your project</li>
            <li>Open your terminal in the project directory</li>
            <li>Initialize a new Node.js project:
              <pre className="bg-discord-darkest p-4 rounded mt-2 overflow-x-auto">
                <code>npm init -y</code>
              </pre>
            </li>
            <li>Install required dependencies:
              <pre className="bg-discord-darkest p-4 rounded mt-2 overflow-x-auto">
                <code>npm install discord.js dotenv</code>
              </pre>
            </li>
          </ol>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">4. Create Your Bot Files</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Basic Bot Structure</h3>
          <p className="mb-4">Create the following files in your project directory:</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">1. .env</h4>
              <pre className="bg-discord-darkest p-4 rounded overflow-x-auto">
                <code>TOKEN=your_bot_token_here</code>
              </pre>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">2. index.js</h4>
              <pre className="bg-discord-darkest p-4 rounded overflow-x-auto">
                <code>{`const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', () => {
  console.log('Bot is ready!');
});

client.login(process.env.TOKEN);`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">5. Invite Your Bot to a Server</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <ol className="list-decimal list-inside space-y-4">
            <li>Go back to your application in the Discord Developer Portal</li>
            <li>Go to the "OAuth2" section</li>
            <li>Under "Scopes", select:
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>bot</li>
                <li>applications.commands</li>
              </ul>
            </li>
            <li>Under "Bot Permissions", select the permissions your bot needs</li>
            <li>Copy the generated URL and open it in your browser</li>
            <li>Select a server to add your bot to</li>
          </ol>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <p className="mb-4">Now that your bot is set up, you can:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <Link href="/slash-commands" className="text-discord-accent hover:underline">
                Learn about implementing slash commands
              </Link>
            </li>
            <li>
              <Link href="/events" className="text-discord-accent hover:underline">
                Learn about handling events
              </Link>
            </li>
            <li>
              <Link href="/examples" className="text-discord-accent hover:underline">
                View example code
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
} 