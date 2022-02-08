import Discord, { Intents } from 'discord.js'
import { Config } from './Config'

const Client = new Discord.Client(
    {
        intents:
        [
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES
        ]
    }
);

Client.once('ready', () => {
    let commands = Client.application.commands;
    commands.create(
    {
        name: 'iloveyou',
        description: 'metoo'
    });
});

Client.on('interactionCreate', async interaction =>
{
    if (!interaction.isCommand()) return;
});

Client.on('messageCreate', message =>
{
    
});

Client.login(Config.Token);