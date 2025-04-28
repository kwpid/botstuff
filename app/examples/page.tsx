import Link from 'next/link'

export default function Examples() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-discord-accent">Code Examples</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Bot Setup</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Main Bot File</h3>
          <pre className="bg-discord-darkest p-4 rounded overflow-x-auto">
            <code>{`const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.commands = new Collection();
client.cooldowns = new Collection();

// Load commands
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.data.name, command);
}

// Load events
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

client.login(process.env.TOKEN);`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Moderation Commands</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Kick Command</h3>
          <pre className="bg-discord-darkest p-4 rounded overflow-x-auto">
            <code>{`const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Kick a user from the server')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('The user to kick')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('reason')
        .setDescription('The reason for kicking'))
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
  async execute(interaction) {
    const user = interaction.options.getUser('user');
    const reason = interaction.options.getString('reason') || 'No reason provided';

    try {
      await interaction.guild.members.kick(user, reason);
      await interaction.reply(\`Successfully kicked \${user.tag} for: \${reason}\`);
    } catch (error) {
      await interaction.reply({
        content: \`Failed to kick \${user.tag}: \${error.message}\`,
        ephemeral: true
      });
    }
  },
};`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Fun Commands</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">8ball Command</h3>
          <pre className="bg-discord-darkest p-4 rounded overflow-x-auto">
            <code>{`const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('8ball')
    .setDescription('Ask the magic 8ball a question')
    .addStringOption(option =>
      option.setName('question')
        .setDescription('The question to ask')
        .setRequired(true)),
  async execute(interaction) {
    const question = interaction.options.getString('question');
    const responses = [
      'It is certain.',
      'It is decidedly so.',
      'Without a doubt.',
      'Yes - definitely.',
      'You may rely on it.',
      'As I see it, yes.',
      'Most likely.',
      'Outlook good.',
      'Yes.',
      'Signs point to yes.',
      'Reply hazy, try again.',
      'Ask again later.',
      'Better not tell you now.',
      'Cannot predict now.',
      'Concentrate and ask again.',
      'Don\'t count on it.',
      'My reply is no.',
      'My sources say no.',
      'Outlook not so good.',
      'Very doubtful.'
    ];

    const response = responses[Math.floor(Math.random() * responses.length)];
    await interaction.reply(\`Question: \${question}\nAnswer: \${response}\`);
  },
};`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Utility Commands</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Server Info Command</h3>
          <pre className="bg-discord-darkest p-4 rounded overflow-x-auto">
            <code>{`const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('server')
    .setDescription('Display information about the server'),
  async execute(interaction) {
    const guild = interaction.guild;
    const embed = new EmbedBuilder()
      .setTitle(guild.name)
      .setColor('#5865F2')
      .addFields(
        { name: 'Server ID', value: guild.id, inline: true },
        { name: 'Created On', value: guild.createdAt.toLocaleDateString(), inline: true },
        { name: 'Member Count', value: guild.memberCount.toString(), inline: true },
        { name: 'Channel Count', value: guild.channels.cache.size.toString(), inline: true },
        { name: 'Role Count', value: guild.roles.cache.size.toString(), inline: true },
        { name: 'Owner', value: (await guild.fetchOwner()).user.tag, inline: true }
      )
      .setThumbnail(guild.iconURL({ dynamic: true }))
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Advanced Features</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Welcome System</h3>
          <pre className="bg-discord-darkest p-4 rounded overflow-x-auto">
            <code>{`const { Events, EmbedBuilder } = require('discord.js');

module.exports = {
  name: Events.GuildMemberAdd,
  async execute(member) {
    const welcomeChannel = member.guild.channels.cache.find(
      channel => channel.name === 'welcome'
    );

    if (!welcomeChannel) return;

    const embed = new EmbedBuilder()
      .setTitle('Welcome!')
      .setDescription(\`Welcome to the server, \${member}!\`)
      .setColor('#5865F2')
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .addFields(
        { name: 'Account Created', value: member.user.createdAt.toLocaleDateString(), inline: true },
        { name: 'Member Count', value: member.guild.memberCount.toString(), inline: true }
      )
      .setTimestamp();

    await welcomeChannel.send({ embeds: [embed] });
  },
};`}</code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">More Examples</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <p className="mb-4">Check out these resources for more examples:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a 
                href="https://github.com/discordjs/discord.js/tree/main/packages/discord.js/examples" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-discord-accent hover:underline"
              >
                Discord.js Official Examples
              </a>
            </li>
            <li>
              <a 
                href="https://discordjs.guide/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-discord-accent hover:underline"
              >
                Discord.js Guide
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
} 