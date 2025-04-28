import Link from 'next/link'

export default function BestPractices() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-discord-accent">Best Practices</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Code Organization</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Project Structure</h3>
          <pre className="bg-discord-darkest p-4 rounded overflow-x-auto">
            <code>{`project/
  ├── commands/
  │   ├── moderation/
  │   ├── fun/
  │   └── utility/
  ├── events/
  │   ├── client/
  │   ├── guild/
  │   └── message/
  ├── utils/
  │   ├── logger.js
  │   └── helpers.js
  ├── config/
  │   └── config.json
  ├── .env
  ├── index.js
  └── package.json`}</code>
          </pre>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Organize commands by category</li>
            <li>Separate events by type</li>
            <li>Keep utility functions in a separate directory</li>
            <li>Use environment variables for sensitive data</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Error Handling</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Proper Error Handling</h3>
          <pre className="bg-discord-darkest p-4 rounded overflow-x-auto">
            <code>{`try {
  // Your code here
} catch (error) {
  console.error('Error:', error);
  await interaction.reply({
    content: 'An error occurred while executing this command.',
    ephemeral: true
  });
}`}</code>
          </pre>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Always use try-catch blocks</li>
            <li>Log errors for debugging</li>
            <li>Provide user-friendly error messages</li>
            <li>Use ephemeral messages for sensitive errors</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Security</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Security Best Practices</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Never expose your bot token</li>
            <li>Use environment variables for sensitive data</li>
            <li>Implement proper permission checks</li>
            <li>Validate user input</li>
            <li>Use rate limiting</li>
            <li>Keep dependencies updated</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Performance</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Use command cooldowns</li>
            <li>Implement caching where appropriate</li>
            <li>Optimize database queries</li>
            <li>Use pagination for large data sets</li>
            <li>Implement proper error handling</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Code Quality</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Writing Clean Code</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Use consistent naming conventions</li>
            <li>Write meaningful comments</li>
            <li>Follow the DRY principle</li>
            <li>Use proper indentation and formatting</li>
            <li>Implement proper logging</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Testing</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Testing Best Practices</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Write unit tests for critical functions</li>
            <li>Test error handling</li>
            <li>Test permission checks</li>
            <li>Test rate limiting</li>
            <li>Use a test server for development</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Deployment</h2>
        <div className="bg-discord-darker p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Deployment Guidelines</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Use a process manager (PM2)</li>
            <li>Implement proper logging</li>
            <li>Set up monitoring</li>
            <li>Use environment variables</li>
            <li>Implement proper error handling</li>
            <li>Set up automatic restarts</li>
          </ul>
          <div className="mt-6">
            <Link 
              href="/examples" 
              className="bg-discord-accent hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              View Deployment Examples →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 