const _0x309f4c=_0x281e;function _0x4b96(){const _0x1b8dec=['setMaxLength','execute','linkLog','3726279FLUQzK','link','EmbedBuilder','uptime','TextInputStyle','newlink','>\x20**Bir\x20sunucuya\x20eklendim.**','login','./events/','interactionCreate','Guilds','linkaddmodal','channel','setToken','setCustomId','./locales/tr.json','endsWith','edit','Toplam\x20link\x20sayısı','ButtonBuilder','then','./commands','linkremovemodal','list','Routes','memberCount','cross','once','put','check','size','>\x20**Uptime\x20yapılırken\x20bir\x20hata\x20oluştu.**\x0a\x0a-\x20`','GuildMessageReactions','https://example.glitch.me','reply','users','showModal','cyan','guildCreate','token','Blurple','avatarURL','ading-link','no-system','list-count','deferReply','uncaughtExceptionMonitor','setTitle','applicationCommands','uptimeErrorLog','ActionRowBuilder','defaultLang','unpush','length','catch','not-link','awaitModalSubmit','data','bot-commands','collect','set','join','link-add-form','push','send','customId','Short','fields','setURL','guilds','Yellow','https://','unhandledRejection','.glitch.me','oldlink','followUp','includes','applicationGuildCommands','startsWith','maintenanceTime','>\x20**Bot\x20bir\x20hata\x20verdi.**\x0a\x0a-\x20`','Green','./bot/database.json','Collection','>\x20**Bir\x20sunucudan\x20atıldım.**','guildID','error','Kullanıcının\x20premiumu\x20bulunuyormu','setDescription','setStyle','setColor','no-glitch','Sunucudaki\x20kullanıcı\x20sayısı','blue','TextInputBuilder','1047370BaeJhO','DirectMessages','username','571572ERdzyI','forEach','removedLog','toLowerCase','createMessageComponentCollector','setTimestamp','log','get','Sunucu\x20bilgileri','116015jMGTqD','getTextInputValue','.links','GuildMessages','channels','toJSON','setRequired','link-remove-form','setFooter','setPlaceholder','message','iconURL','.linkLimit','setLabel','**\x20`(','bot','entries','-\x20**','fetch','Sunucu\x20sahibi\x20bilgileri','./events','setMinLength','discord.js','ModalBuilder','there-link','guildDelete','replace','no-link','locale','removing-link','addedLog','name','./commands/','./bot/logs.json','ownerId','Kullanıcı\x20link\x20sayısı','commands','182LJhMSN','owners','6370224lhRJGx','setAuthor','guild_only','cache','Client','-\x20`','errorLog','`\x20(','GatewayIntentBits','addComponents','Toplam\x20sunucu\x20sayısı','your-blacklist','349110zPmWXD','1074082diAPMf','user','links','addFields','Red','Kullanıcı\x20bilgileri'];_0x4b96=function(){return _0x1b8dec;};return _0x4b96();}(function(_0x44d5b3,_0x5651c9){const _0x1fc861=_0x281e,_0x53fb3e=_0x44d5b3();while(!![]){try{const _0xa8c6d5=parseInt(_0x1fc861(0x160))/0x1+parseInt(_0x1fc861(0xf8))/0x2+-parseInt(_0x1fc861(0x101))/0x3+-parseInt(_0x1fc861(0x163))/0x4+parseInt(_0x1fc861(0x16c))/0x5+parseInt(_0x1fc861(0xf7))/0x6*(parseInt(_0x1fc861(0x191))/0x7)+-parseInt(_0x1fc861(0x193))/0x8;if(_0xa8c6d5===_0x5651c9)break;else _0x53fb3e['push'](_0x53fb3e['shift']());}catch(_0x3f96ee){_0x53fb3e['push'](_0x53fb3e['shift']());}}}(_0x4b96,0xe5498));function _0x281e(_0x13e8b6,_0x1cb7f2){const _0x4b9652=_0x4b96();return _0x281e=function(_0x281e75,_0xe067ce){_0x281e75=_0x281e75-0xec;let _0x156e26=_0x4b9652[_0x281e75];return _0x156e26;},_0x281e(_0x13e8b6,_0x1cb7f2);}const Discord=require(_0x309f4c(0x182)),{readdirSync}=require('fs'),fetch=require('node-fetch'),{TopGG,JsonDatabase}=require('baskan.js'),db=new JsonDatabase({'path':_0x309f4c(0x153)}),settings=require('./settings.json'),emojis=require('./bot/emojis.json'),logs=require(_0x309f4c(0x18d)),client=new Discord[(_0x309f4c(0xef))]({'intents':[0x17fff,Discord[_0x309f4c(0xf3)][_0x309f4c(0x10b)],Discord[_0x309f4c(0xf3)][_0x309f4c(0x16f)],Discord['GatewayIntentBits']['GuildPresences'],Discord[_0x309f4c(0xf3)][_0x309f4c(0x121)],Discord[_0x309f4c(0xf3)][_0x309f4c(0x161)],Discord[_0x309f4c(0xf3)]['MessageContent']]}),locales={'tr':require(_0x309f4c(0x110)),'en-US':require('./locales/en-US.json')};client[_0x309f4c(0x108)](settings[_0x309f4c(0x128)]),client['commands']=new Discord[(_0x309f4c(0x154))](),readdirSync(_0x309f4c(0x180))[_0x309f4c(0x164)](async _0x25e950=>{const _0x286921=_0x309f4c,_0x33fae1=await require(_0x286921(0x109)+_0x25e950);_0x33fae1[_0x286921(0x11c)]?client['once'](_0x33fae1[_0x286921(0x18b)],(..._0x409652)=>_0x33fae1[_0x286921(0xff)](..._0x409652)):client['on'](_0x33fae1[_0x286921(0x18b)],(..._0x59f746)=>_0x33fae1[_0x286921(0xff)](..._0x59f746)),console[_0x286921(0x169)](_0x286921(0x15e),'['+_0x25e950+']\x20Event\x20loaded.');});const commands=[],guildCommands={};readdirSync(_0x309f4c(0x116))[_0x309f4c(0x164)](async _0x5403ee=>{const _0x286826=_0x309f4c,_0x5b51fc=await require(_0x286826(0x18c)+_0x5403ee);if(_0x5b51fc[_0x286826(0xed)]){if(!guildCommands[settings[_0x286826(0x156)]])guildCommands[settings[_0x286826(0x156)]]=[];guildCommands[settings[_0x286826(0x156)]]['push'](_0x5b51fc[_0x286826(0x13a)][_0x286826(0x171)]());}else commands[_0x286826(0x140)](_0x5b51fc[_0x286826(0x13a)]['toJSON']());client[_0x286826(0x190)][_0x286826(0x13d)](_0x5b51fc[_0x286826(0x13a)]['name'],_0x5b51fc),console['log'](_0x286826(0x126),'['+_0x5403ee+']\x20command\x20loaded.');});const rest=new Discord['REST']({'version':'10'})[_0x309f4c(0x10e)](settings[_0x309f4c(0x128)]);setTimeout(async()=>{const _0x472379=_0x309f4c;commands[_0x472379(0x136)]>0x0&&await rest[_0x472379(0x11d)](Discord[_0x472379(0x119)][_0x472379(0x131)](settings[_0x472379(0x17b)]),{'body':commands})[_0x472379(0x137)](console[_0x472379(0x157)]);for(const [_0x487558,_0x1ce282]of Object[_0x472379(0x17c)](guildCommands)){await rest[_0x472379(0x11d)](Discord[_0x472379(0x119)][_0x472379(0x14e)](settings[_0x472379(0x17b)],_0x487558),{'body':_0x1ce282})[_0x472379(0x137)](console['error']);}},0x1f4),client['on'](_0x309f4c(0x127),async _0x526cfe=>{const _0x164c2b=_0x309f4c,_0x4fab27=new Discord['EmbedBuilder']()[_0x164c2b(0x15b)](_0x164c2b(0x152))[_0x164c2b(0xec)]({'name':_0x526cfe[_0x164c2b(0x18b)],'iconURL':_0x526cfe[_0x164c2b(0x177)]()})[_0x164c2b(0x159)](_0x164c2b(0x107))['addFields']({'name':_0x164c2b(0x16b),'value':'-\x20**'+_0x526cfe+_0x164c2b(0x17a)+_0x526cfe['id']+')`'},{'name':_0x164c2b(0x17f),'value':_0x164c2b(0x17d)+client['users'][_0x164c2b(0xee)]['get'](_0x526cfe['ownerId'])['username']+_0x164c2b(0x17a)+_0x526cfe[_0x164c2b(0x18e)]+')`'},{'name':'Toplam\x20sunucu\x20sayısı','value':'-\x20**'+client['guilds'][_0x164c2b(0xee)][_0x164c2b(0x11f)]+'**'},{'name':_0x164c2b(0x15d),'value':'-\x20**'+_0x526cfe[_0x164c2b(0x11a)]+'**'})[_0x164c2b(0x174)]({'text':client['user']['username'],'iconURL':client[_0x164c2b(0xf9)][_0x164c2b(0x12a)]()})[_0x164c2b(0x168)]();await client[_0x164c2b(0x170)]['cache'][_0x164c2b(0x16a)](logs[_0x164c2b(0x18a)])['send']({'embeds':[_0x4fab27]});}),client['on'](_0x309f4c(0x185),async _0xe4a140=>{const _0x406532=_0x309f4c,_0x138ee2=new Discord[(_0x406532(0x103))]()['setColor']('Red')[_0x406532(0xec)]({'name':_0xe4a140[_0x406532(0x18b)],'iconURL':_0xe4a140['iconURL']()})[_0x406532(0x159)](_0x406532(0x155))['addFields']({'name':_0x406532(0x16b),'value':'-\x20**'+_0xe4a140+'**\x20`('+_0xe4a140['id']+')`'},{'name':_0x406532(0x17f),'value':_0x406532(0x17d)+client[_0x406532(0x124)][_0x406532(0xee)][_0x406532(0x16a)](_0xe4a140[_0x406532(0x18e)])[_0x406532(0x162)]+'**\x20`('+_0xe4a140[_0x406532(0x18e)]+')`'},{'name':_0x406532(0xf5),'value':_0x406532(0x17d)+client[_0x406532(0x146)]['cache']['size']+'**'},{'name':_0x406532(0x15d),'value':_0x406532(0x17d)+_0xe4a140[_0x406532(0x11a)]+'**'})[_0x406532(0x174)]({'text':client[_0x406532(0xf9)][_0x406532(0x162)],'iconURL':client[_0x406532(0xf9)]['avatarURL']()})[_0x406532(0x168)]();await client[_0x406532(0x170)][_0x406532(0xee)][_0x406532(0x16a)](logs[_0x406532(0x165)])[_0x406532(0x141)]({'embeds':[_0x138ee2]});}),process['on'](_0x309f4c(0x149),async _0x2c3372=>{const _0x3f90b0=_0x309f4c,_0xf7c346=new Discord[(_0x3f90b0(0x103))]()[_0x3f90b0(0x15b)]('Red')[_0x3f90b0(0x159)]('>\x20**Bot\x20bir\x20hata\x20verdi.**\x0a\x0a-\x20`'+_0x2c3372+'`')[_0x3f90b0(0x174)]({'text':client['user'][_0x3f90b0(0x162)],'iconURL':client['user'][_0x3f90b0(0x12a)]()})[_0x3f90b0(0x168)]();await client[_0x3f90b0(0x170)][_0x3f90b0(0xee)][_0x3f90b0(0x16a)](logs[_0x3f90b0(0xf1)])[_0x3f90b0(0x141)]({'embeds':[_0xf7c346]});}),process['on']('uncaughtException',async _0x26c9af=>{const _0x374ee8=_0x309f4c,_0x1b5b22=new Discord[(_0x374ee8(0x103))]()['setColor']('Red')[_0x374ee8(0x159)](_0x374ee8(0x151)+_0x26c9af+'`')[_0x374ee8(0x174)]({'text':client[_0x374ee8(0xf9)][_0x374ee8(0x162)],'iconURL':client['user'][_0x374ee8(0x12a)]()})[_0x374ee8(0x168)]();await client[_0x374ee8(0x170)][_0x374ee8(0xee)][_0x374ee8(0x16a)](logs[_0x374ee8(0xf1)])[_0x374ee8(0x141)]({'embeds':[_0x1b5b22]});}),process['on'](_0x309f4c(0x12f),async _0x2a8765=>{const _0x148c84=_0x309f4c,_0x278188=new Discord[(_0x148c84(0x103))]()[_0x148c84(0x15b)]('Red')['setDescription'](_0x148c84(0x151)+_0x2a8765+'`')[_0x148c84(0x174)]({'text':client[_0x148c84(0xf9)]['username'],'iconURL':client['user'][_0x148c84(0x12a)]()})[_0x148c84(0x168)]();await client[_0x148c84(0x170)]['cache'][_0x148c84(0x16a)](logs[_0x148c84(0xf1)])['send']({'embeds':[_0x278188]});}),setInterval(()=>{const _0x46b3c4=_0x309f4c,_0x513af4=db[_0x46b3c4(0x17e)]('links')||[];if(_0x513af4[_0x46b3c4(0x136)]<=0x0)return;_0x513af4['forEach'](_0x52e8e9=>{const _0x42caf3=_0x46b3c4;try{fetch(_0x52e8e9);}catch(_0x842e14){const _0x5098be=new Discord['EmbedBuilder']()[_0x42caf3(0x15b)](_0x42caf3(0xfc))['setDescription'](_0x42caf3(0x120)+_0x842e14[_0x42caf3(0x176)]+_0x42caf3(0xf2)+_0x52e8e9+')')['setFooter']({'text':client[_0x42caf3(0xf9)][_0x42caf3(0x162)],'iconURL':client[_0x42caf3(0xf9)][_0x42caf3(0x12a)]()})[_0x42caf3(0x168)]();return client[_0x42caf3(0x170)]['cache'][_0x42caf3(0x16a)](logs[_0x42caf3(0x132)])[_0x42caf3(0x141)]({'embeds':[_0x5098be]});}});},0x1d4c0),client['on'](_0x309f4c(0x10a),async _0x518f91=>{const _0x5b772c=_0x309f4c,_0x46202c=_0x518f91[_0x5b772c(0x10d)][_0x5b772c(0x167)]({'time':0xea60});_0x46202c['on'](_0x5b772c(0x13c),async _0x120b65=>{const _0x2da3a2=_0x5b772c,_0x48f1af=db[_0x2da3a2(0x17e)]('blacklists')||[],_0x37d258=db[_0x2da3a2(0x17e)]('maintenance'),_0x20e325=db['fetch'](_0x2da3a2(0x150)),_0x1fb464=new Discord['ActionRowBuilder']()[_0x2da3a2(0xf4)](new Discord[(_0x2da3a2(0x114))]()[_0x2da3a2(0x145)]('https://discord.gg/Mr8Dp2Bwk2')[_0x2da3a2(0x179)]((locales[_0x120b65['locale']]??locales[settings[_0x2da3a2(0x134)]])['support-server'])['setStyle']('Link'));if(_0x48f1af[_0x2da3a2(0x14d)](_0x120b65['user']['id'])){const _0x1206f8=new Discord['EmbedBuilder']()[_0x2da3a2(0x15b)](_0x2da3a2(0xfc))[_0x2da3a2(0xec)]({'name':_0x120b65['user']['username'],'iconURL':_0x120b65[_0x2da3a2(0xf9)][_0x2da3a2(0x12a)]()})[_0x2da3a2(0x159)]((locales[_0x120b65[_0x2da3a2(0x188)]]??locales[settings[_0x2da3a2(0x134)]])[_0x2da3a2(0xf6)])['setFooter']({'text':client[_0x2da3a2(0xf9)][_0x2da3a2(0x162)],'iconURL':client[_0x2da3a2(0xf9)][_0x2da3a2(0x12a)]()})[_0x2da3a2(0x168)]();if(!settings[_0x2da3a2(0x192)][_0x2da3a2(0x14d)](_0x120b65[_0x2da3a2(0xf9)]['id']))return await _0x120b65['reply']({'embeds':[_0x1206f8],'components':[_0x1fb464],'ephemeral':!![]});}if(_0x37d258){const _0x450e32=new Discord[(_0x2da3a2(0x103))]()[_0x2da3a2(0x15b)](_0x2da3a2(0xfc))[_0x2da3a2(0xec)]({'name':_0x120b65[_0x2da3a2(0xf9)][_0x2da3a2(0x162)],'iconURL':_0x120b65[_0x2da3a2(0xf9)][_0x2da3a2(0x12a)]()})['setDescription']((locales[_0x120b65['locale']]??locales[settings[_0x2da3a2(0x134)]])['maintenance'][_0x2da3a2(0x186)](/\{time}/,_0x20e325))[_0x2da3a2(0x174)]({'text':client[_0x2da3a2(0xf9)][_0x2da3a2(0x162)],'iconURL':client[_0x2da3a2(0xf9)][_0x2da3a2(0x12a)]()})[_0x2da3a2(0x168)]();if(!settings['owners'][_0x2da3a2(0x14d)](_0x120b65['user']['id']))return await _0x120b65[_0x2da3a2(0x123)]({'embeds':[_0x450e32],'components':[_0x1fb464],'ephemeral':!![]});}if(_0x120b65[_0x2da3a2(0x142)]===_0x2da3a2(0x190)){await _0x120b65['deferReply']({'ephemeral':!![]});const _0x2b42a9=new Discord[(_0x2da3a2(0x103))]()[_0x2da3a2(0x15b)](_0x2da3a2(0x129))['setAuthor']({'name':_0x120b65['user'][_0x2da3a2(0x162)],'iconURL':_0x120b65[_0x2da3a2(0xf9)][_0x2da3a2(0x12a)]()})['addFields']({'name':emojis[_0x2da3a2(0x104)]+'\x20'+(locales[_0x120b65[_0x2da3a2(0x188)]]??locales[settings[_0x2da3a2(0x134)]])[_0x2da3a2(0x13b)],'value':''+(locales[_0x120b65[_0x2da3a2(0x188)]]??locales[settings['defaultLang']])[_0x2da3a2(0x190)]})['setFooter']({'text':client['user']['username'],'iconURL':client['user'][_0x2da3a2(0x12a)]()})['setTimestamp']();await _0x120b65['followUp']({'embeds':[_0x2b42a9]});}if(_0x120b65[_0x2da3a2(0x142)]==='add'){const _0x38cf73=new Discord['ModalBuilder']()[_0x2da3a2(0x10f)](_0x2da3a2(0x10c))[_0x2da3a2(0x130)]((locales[_0x120b65[_0x2da3a2(0x188)]]??locales[settings[_0x2da3a2(0x134)]])[_0x2da3a2(0x13f)]),_0x982ec6=new Discord[(_0x2da3a2(0x15f))]()[_0x2da3a2(0x10f)](_0x2da3a2(0x102))[_0x2da3a2(0x179)]((locales[_0x120b65[_0x2da3a2(0x188)]]??locales[settings['defaultLang']])[_0x2da3a2(0x12b)])[_0x2da3a2(0x15a)](Discord[_0x2da3a2(0x105)][_0x2da3a2(0x143)])['setMinLength'](0x14)[_0x2da3a2(0xfe)](0x46)[_0x2da3a2(0x175)]('https://example.glitch.me')[_0x2da3a2(0x172)](!![]),_0x592fd9=new Discord['ActionRowBuilder']()[_0x2da3a2(0xf4)](_0x982ec6);_0x38cf73[_0x2da3a2(0xf4)](_0x592fd9),await _0x120b65[_0x2da3a2(0x125)](_0x38cf73),await _0x120b65[_0x2da3a2(0x139)]({'filter':_0x2e1a8e=>_0x2e1a8e[_0x2da3a2(0x142)]===_0x2da3a2(0x10c),'time':0xea60})[_0x2da3a2(0x115)](async _0x139051=>{const _0x1789f1=_0x2da3a2;await _0x139051['deferReply']({'ephemeral':!![]});const _0x26cfd9=db['fetch'](_0x139051['user']['id']+_0x1789f1(0x178))||0x0,_0x86f364=_0x26cfd9+0x2,_0x174f61=_0x139051[_0x1789f1(0x144)][_0x1789f1(0x16d)]('link')[_0x1789f1(0x166)]()[_0x1789f1(0x186)](/\s+/g,''),_0x1b69b4=db['fetch'](_0x139051['user']['id']+_0x1789f1(0x16e))||[],_0x197c6b=db[_0x1789f1(0x17e)]('premiums')||[];if(!_0x174f61[_0x1789f1(0x14f)](_0x1789f1(0x148))){const _0x4a0ec6=new Discord[(_0x1789f1(0x103))]()['setColor'](_0x1789f1(0xfc))['setAuthor']({'name':_0x139051['user']['username'],'iconURL':_0x139051[_0x1789f1(0xf9)][_0x1789f1(0x12a)]()})[_0x1789f1(0x159)](emojis[_0x1789f1(0x11b)]+'\x20'+(locales[_0x139051['locale']]??locales[settings[_0x1789f1(0x134)]])[_0x1789f1(0x187)])[_0x1789f1(0x174)]({'text':client[_0x1789f1(0xf9)][_0x1789f1(0x162)],'iconURL':client[_0x1789f1(0xf9)][_0x1789f1(0x12a)]()})[_0x1789f1(0x168)]();return await _0x139051['followUp']({'embeds':[_0x4a0ec6]});}if(!_0x174f61[_0x1789f1(0x111)](_0x1789f1(0x14a))&&!_0x174f61['endsWith']('.glitch.me/')){const _0x4a344f=new Discord[(_0x1789f1(0x103))]()[_0x1789f1(0x15b)](_0x1789f1(0xfc))['setAuthor']({'name':_0x139051[_0x1789f1(0xf9)][_0x1789f1(0x162)],'iconURL':_0x139051[_0x1789f1(0xf9)]['avatarURL']()})[_0x1789f1(0x159)](emojis[_0x1789f1(0x11b)]+'\x20'+(locales[_0x139051[_0x1789f1(0x188)]]??locales[settings[_0x1789f1(0x134)]])[_0x1789f1(0x15c)])[_0x1789f1(0x174)]({'text':client[_0x1789f1(0xf9)][_0x1789f1(0x162)],'iconURL':client['user'][_0x1789f1(0x12a)]()})['setTimestamp']();return await _0x139051['followUp']({'embeds':[_0x4a344f]});}if(_0x1b69b4[_0x1789f1(0x14d)](_0x174f61)){const _0x4ecb51=new Discord[(_0x1789f1(0x103))]()[_0x1789f1(0x15b)](_0x1789f1(0xfc))[_0x1789f1(0xec)]({'name':_0x139051[_0x1789f1(0xf9)][_0x1789f1(0x162)],'iconURL':_0x139051[_0x1789f1(0xf9)][_0x1789f1(0x12a)]()})['setDescription'](emojis[_0x1789f1(0x11b)]+'\x20'+(locales[_0x139051[_0x1789f1(0x188)]]??locales[settings[_0x1789f1(0x134)]])[_0x1789f1(0x184)])[_0x1789f1(0x174)]({'text':client[_0x1789f1(0xf9)][_0x1789f1(0x162)],'iconURL':client[_0x1789f1(0xf9)]['avatarURL']()})[_0x1789f1(0x168)]();return await _0x139051[_0x1789f1(0x14c)]({'embeds':[_0x4ecb51]});}if(!_0x197c6b[_0x1789f1(0x14d)](_0x139051[_0x1789f1(0xf9)]['id'])){if(_0x1b69b4[_0x1789f1(0x136)]>=_0x86f364){const _0x6e7f7b=new Discord[(_0x1789f1(0x103))]()[_0x1789f1(0x15b)](_0x1789f1(0xfc))['setAuthor']({'name':_0x139051['user'][_0x1789f1(0x162)],'iconURL':_0x139051[_0x1789f1(0xf9)][_0x1789f1(0x12a)]()})['setDescription'](emojis[_0x1789f1(0x11b)]+'\x20'+(locales[_0x139051[_0x1789f1(0x188)]]??locales[settings['defaultLang']])['most-link'][_0x1789f1(0x186)](/\{limit}/g,_0x86f364))[_0x1789f1(0x174)]({'text':client[_0x1789f1(0xf9)][_0x1789f1(0x162)],'iconURL':client[_0x1789f1(0xf9)][_0x1789f1(0x12a)]()})[_0x1789f1(0x168)]();return await _0x139051['followUp']({'embeds':[_0x6e7f7b]});}}else{if(_0x1b69b4[_0x1789f1(0x136)]>=0x1e){const _0x3ee74d=new Discord[(_0x1789f1(0x103))]()[_0x1789f1(0x15b)](_0x1789f1(0xfc))[_0x1789f1(0xec)]({'name':_0x139051['user'][_0x1789f1(0x162)],'iconURL':_0x139051['user']['avatarURL']()})[_0x1789f1(0x159)](emojis['cross']+'\x20'+(locales[_0x139051['locale']]??locales[settings[_0x1789f1(0x134)]])['more-link'][_0x1789f1(0x186)](/\{max}/g,0x1e))[_0x1789f1(0x174)]({'text':client[_0x1789f1(0xf9)][_0x1789f1(0x162)],'iconURL':client[_0x1789f1(0xf9)][_0x1789f1(0x12a)]()})['setTimestamp']();return await _0x139051[_0x1789f1(0x14c)]({'embeds':[_0x3ee74d]});}}db['push'](_0x139051['user']['id']+_0x1789f1(0x16e),_0x174f61),db['push'](_0x1789f1(0xfa),_0x174f61);const _0x154acd=new Discord['EmbedBuilder']()[_0x1789f1(0x15b)](_0x1789f1(0x152))[_0x1789f1(0xec)]({'name':_0x139051[_0x1789f1(0xf9)][_0x1789f1(0x162)],'iconURL':_0x139051[_0x1789f1(0xf9)][_0x1789f1(0x12a)]()})[_0x1789f1(0x159)]('>\x20**Sisteme\x20bir\x20link\x20eklendi.**')['addFields']({'name':_0x1789f1(0xfd),'value':_0x1789f1(0x17d)+_0x139051[_0x1789f1(0xf9)][_0x1789f1(0x162)]+_0x1789f1(0x17a)+_0x139051[_0x1789f1(0xf9)]['id']+')`'},{'name':_0x1789f1(0x18f),'value':_0x1789f1(0x17d)+(db[_0x1789f1(0x17e)](_0x139051[_0x1789f1(0xf9)]['id']+_0x1789f1(0x16e))||[])[_0x1789f1(0x136)]+'**'},{'name':_0x1789f1(0x113),'value':'-\x20**'+(db[_0x1789f1(0x17e)](_0x1789f1(0xfa))||[])[_0x1789f1(0x136)]+'**'},{'name':_0x1789f1(0x158),'value':'-\x20'+(_0x197c6b[_0x1789f1(0x14d)](_0x139051[_0x1789f1(0xf9)]['id'])?emojis[_0x1789f1(0x11e)]:emojis[_0x1789f1(0x11b)])})[_0x1789f1(0x174)]({'text':client[_0x1789f1(0xf9)][_0x1789f1(0x162)],'iconURL':client[_0x1789f1(0xf9)][_0x1789f1(0x12a)]()})['setTimestamp']();await client[_0x1789f1(0x170)][_0x1789f1(0xee)][_0x1789f1(0x16a)](logs['linkLog'])[_0x1789f1(0x141)]({'embeds':[_0x154acd]});const _0x40647b=new Discord['EmbedBuilder']()[_0x1789f1(0x15b)]('Green')[_0x1789f1(0xec)]({'name':_0x139051[_0x1789f1(0xf9)][_0x1789f1(0x162)],'iconURL':_0x139051[_0x1789f1(0xf9)][_0x1789f1(0x12a)]()})[_0x1789f1(0x159)](emojis[_0x1789f1(0x11e)]+'\x20'+(locales[_0x139051[_0x1789f1(0x188)]]??locales[settings['defaultLang']])['link-add'])[_0x1789f1(0x174)]({'text':client[_0x1789f1(0xf9)][_0x1789f1(0x162)],'iconURL':client[_0x1789f1(0xf9)][_0x1789f1(0x12a)]()})[_0x1789f1(0x168)]();return await _0x139051[_0x1789f1(0x14c)]({'embeds':[_0x40647b]});});}if(_0x120b65[_0x2da3a2(0x142)]==='delete'){const _0x445614=new Discord[(_0x2da3a2(0x183))]()[_0x2da3a2(0x10f)]('linkremovemodal')['setTitle']((locales[_0x120b65[_0x2da3a2(0x188)]]??locales[settings[_0x2da3a2(0x134)]])[_0x2da3a2(0x173)]),_0xbab6fe=new Discord[(_0x2da3a2(0x15f))]()[_0x2da3a2(0x10f)](_0x2da3a2(0x102))['setLabel']((locales[_0x120b65['locale']]??locales[settings[_0x2da3a2(0x134)]])[_0x2da3a2(0x189)])['setStyle'](Discord['TextInputStyle'][_0x2da3a2(0x143)])[_0x2da3a2(0x181)](0x14)[_0x2da3a2(0xfe)](0x46)[_0x2da3a2(0x175)]('https://example.glitch.me')[_0x2da3a2(0x172)](!![]),_0x479be6=new Discord[(_0x2da3a2(0x133))]()[_0x2da3a2(0xf4)](_0xbab6fe);_0x445614[_0x2da3a2(0xf4)](_0x479be6),await _0x120b65[_0x2da3a2(0x125)](_0x445614),await _0x120b65[_0x2da3a2(0x139)]({'filter':_0x232874=>_0x232874[_0x2da3a2(0x142)]===_0x2da3a2(0x117),'time':0xea60})['then'](async _0x550676=>{const _0x144ec3=_0x2da3a2;await _0x550676[_0x144ec3(0x12e)]({'ephemeral':!![]});const _0x33b123=_0x550676[_0x144ec3(0x144)][_0x144ec3(0x16d)](_0x144ec3(0x102)),_0x4a77cc=db[_0x144ec3(0x17e)](_0x550676[_0x144ec3(0xf9)]['id']+_0x144ec3(0x16e))||[],_0x86dc6f=db[_0x144ec3(0x17e)]('premiums')||[];if(!_0x4a77cc[_0x144ec3(0x14d)](_0x33b123)){const _0x25637d=new Discord[(_0x144ec3(0