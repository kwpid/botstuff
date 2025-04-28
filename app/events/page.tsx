import Link from 'next/link'

export default function Events() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-discord-accent">Events & Handlers</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Understanding Discord Events</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <p className="mb-4">
            Discord events are actions that occur in your server that your bot can listen to and respond to.
            These events can be anything from a user joining the server to a message being sent.
          </p>
          <div className="bg-discord-darkest p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">Common Events</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>messageCreate - When a message is sent</li>
              <li>guildMemberAdd - When a user joins the server</li>
              <li>guildMemberRemove - When a user leaves the server</li>
              <li>channelCreate - When a channel is created</li>
              <li>channelDelete - When a channel is deleted</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Setting Up Event Handlers</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Basic Event Handler</h3>
          <p className="mb-4">Create a new file called `events.js`:</p>
          <pre className="bg-discord-darkest p-4 rounded overflow-x-auto">
            <code>{`const { Events } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(\`Ready! Logged in as \${client.user.tag}\`);
  },
};`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Message Event Example</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Handling Messages</h3>
          <p className="mb-4">Here's an example of handling message events:</p>
          <pre className="bg-discord-darkest p-4 rounded overflow-x-auto">
            <code>{`const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    if (message.author.bot) return;

    if (message.content.toLowerCase() === 'hello') {
      await message.reply('Hello! How can I help you?');
    }
  },
};`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Event Categories</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Organizing Events</h3>
          <p className="mb-4">Create a folder structure for your events:</p>
          <pre className="bg-discord-darkest p-4 rounded overflow-x-auto">
            <code>{`events/
  ├── client/
  │   ├── ready.js
  │   └── error.js
  ├── guild/
  │   ├── memberAdd.js
  │   └── memberRemove.js
  └── message/
      ├── messageCreate.js
      └── messageDelete.js`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Advanced Event Handling</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Event Cooldowns</h3>
          <p className="mb-4">Example of implementing event cooldowns:</p>
          <pre className="bg-discord-darkest p-4 rounded overflow-x-auto">
            <code>{`const { Events } = require('discord.js');
const cooldowns = new Map();

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    if (message.author.bot) return;

    const { cooldown } = this;
    if (cooldown) {
      const now = Date.now();
      const timestamps = cooldowns.get(this.name);
      const cooldownAmount = (cooldown || 3) * 1000;

      if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
          const timeLeft = (expirationTime - now) / 1000;
          return message.reply(\`Please wait \${timeLeft.toFixed(1)} more second(s) before using this command.\`);
        }
      }

      timestamps.set(message.author.id, now);
      setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    }
  },
};`}</code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <ul className="list-disc list-inside space-y-2">
            <li>Always check if the message is from a bot</li>
            <li>Implement proper error handling</li>
            <li>Use event cooldowns when necessary</li>
            <li>Organize events by category</li>
            <li>Add logging for important events</li>
            <li>Handle rate limits appropriately</li>
          </ul>
          <div className="mt-6">
            <Link 
              href="/examples" 
              className="bg-discord-accent hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              View Event Examples →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 