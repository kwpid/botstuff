import Link from 'next/link'

export default function SlashCommands() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-discord-accent">Slash Commands</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What are Slash Commands?</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <p className="mb-4">
            Slash commands are a new way to interact with Discord bots. They provide a more structured
            and user-friendly way to execute commands, with built-in autocomplete and parameter validation.
          </p>
          <div className="bg-discord-darkest p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">Benefits of Slash Commands</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Built-in parameter validation</li>
              <li>Autocomplete support</li>
              <li>Better discoverability</li>
              <li>Improved user experience</li>
              <li>Reduced spam and abuse</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Implementing Slash Commands</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">1. Register Commands</h3>
          <p className="mb-4">Create a new file called `deploy-commands.js`:</p>
          <pre className="bg-discord-darkest p-4 rounded overflow-x-auto">
            <code>{`const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'server',
    description: 'Replies with server info!',
  },
  {
    name: 'user',
    description: 'Replies with user info!',
  },
];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Handling Slash Commands</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Create a Command Handler</h3>
          <p className="mb-4">Create a new file called `commands.js`:</p>
          <pre className="bg-discord-darkest p-4 rounded overflow-x-auto">
            <code>{`const { SlashCommandBuilder } = require('discord.js');

module.exports = [
  {
    data: new SlashCommandBuilder()
      .setName('ping')
      .setDescription('Replies with Pong!'),
    async execute(interaction) {
      await interaction.reply('Pong!');
    },
  },
  {
    data: new SlashCommandBuilder()
      .setName('server')
      .setDescription('Replies with server info!'),
    async execute(interaction) {
      await interaction.reply(\`Server name: \${interaction.guild.name}\nTotal members: \${interaction.guild.memberCount}\`);
    },
  },
  {
    data: new SlashCommandBuilder()
      .setName('user')
      .setDescription('Replies with user info!'),
    async execute(interaction) {
      await interaction.reply(\`Your tag: \${interaction.user.tag}\nYour id: \${interaction.user.id}\`);
    },
  },
];`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Command Options</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Adding Command Options</h3>
          <p className="mb-4">Here's an example of a command with options:</p>
          <pre className="bg-discord-darkest p-4 rounded overflow-x-auto">
            <code>{`const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('echo')
    .setDescription('Replies with your input!')
    .addStringOption(option =>
      option.setName('input')
        .setDescription('The input to echo back')
        .setRequired(true)),
  async execute(interaction) {
    const input = interaction.options.getString('input');
    await interaction.reply(input);
  },
};`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Command Categories</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Organizing Commands</h3>
          <p className="mb-4">Create a folder structure for your commands:</p>
          <pre className="bg-discord-darkest p-4 rounded overflow-x-auto">
            <code>{`commands/
  ├── moderation/
  │   ├── ban.js
  │   ├── kick.js
  │   └── mute.js
  ├── fun/
  │   ├── 8ball.js
  │   ├── roll.js
  │   └── joke.js
  └── utility/
      ├── help.js
      ├── ping.js
      └── server.js`}</code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <ul className="list-disc list-inside space-y-2">
            <li>Use descriptive command names and descriptions</li>
            <li>Implement proper error handling</li>
            <li>Add command cooldowns to prevent spam</li>
            <li>Use command categories for better organization</li>
            <li>Implement permission checks</li>
            <li>Add helpful error messages</li>
          </ul>
          <div className="mt-6">
            <Link 
              href="/examples" 
              className="bg-discord-accent hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              View Example Commands →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 