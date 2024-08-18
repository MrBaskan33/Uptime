const Discord = require("discord.js")
const settings = require("../settings.json")
const logs = require("../bot/logs.json")
const { TopGG, JsonDatabase } = require("baskan.js")
const db = new JsonDatabase({path: `./bot/database.json`})

module.exports = {
  name: 'ready',
  async execute(client, interaction) {
    
    setInterval(function () {
      client.user.setPresence({
        activities: [
          {
            name: `/help`, 
            type: Discord.ActivityType.Custom
          }
        ],
        "status": "idle"
      })
    }, 10000)
  
    console.log("green", `[${client.user.tag}] active.`)
    
  }
}