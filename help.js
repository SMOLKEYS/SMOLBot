const Discord = require("discord.js");

const HelpEmbed = new Discord.MessageEmbed()
		.setColor("#00f437")
		.setDescription("Minimalistic help menu.\nPrefix is \"sm!\"")
		.addFields(
			{
				name: "ping",
				value: "The typical bot command. Returns \"Pong!\" when used."
			},
			{
				name: "help",
				value: "Shows *this* help menu you are currently reading."
			},
			{
				name: "delayping",
				value: "\"ping\", but has a delay between 0 (instant) and 25."
			},
			{
				name: "eval <script>",
				value: "Runs arbitary javascript code. Can also be used to test bot scripts. SU only."
			},
			{
				name: "av <mention>",
				value: "Obtains the avatar of the mentioned user."
			}
		)

module.exports = {
	HelpEmbed: HelpEmbed
};
