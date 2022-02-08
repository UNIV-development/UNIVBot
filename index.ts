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
	console.log('ready??');
});

Client.login(Config.Token);