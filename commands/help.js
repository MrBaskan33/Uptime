const _0x59c04f=_0x7fbd;function _0x2388(){const _0x4c6035=['190203DpzcUG','11pwTewS','https://top.gg/bot/','../bot/emojis.json','discord.js','deferReply','vote','defaultLang','help','setColor','avatarURL','7399gJdueX','bot','supportServer','setNameLocalizations','../locales/en-US.json','setURL','Help\x20menu.','2LePxMb','ActionRowBuilder','10RVTZzi','Yardım\x20menüsü.','setDescription','support-server','addFields','1633131oAWYgt','locale','../settings.json','2934hKZlqJ','setAuthor','add-server','161144qOyTts','https://discord.com/api/oauth2/authorize?client_id=','yardım','baskan.js','./bot/database.json','setStyle','user','SlashCommandBuilder','setLabel','1608564TBELYA','../locales/tr.json','setDescriptionLocalizations','552111rwiKoI','setFooter','Link','setTimestamp','30mqpSki','exports','3959096RqXQCl','setDMPermission','addComponents','uptime'];_0x2388=function(){return _0x4c6035;};return _0x2388();}function _0x7fbd(_0xa55380,_0x5297cd){const _0x238879=_0x2388();return _0x7fbd=function(_0x7fbdf1,_0x45b5f0){_0x7fbdf1=_0x7fbdf1-0x12f;let _0x524334=_0x238879[_0x7fbdf1];return _0x524334;},_0x7fbd(_0xa55380,_0x5297cd);}(function(_0x4bdd36,_0x166dfa){const _0x3cf886=_0x7fbd,_0x58c689=_0x4bdd36();while(!![]){try{const _0x3c2367=-parseInt(_0x3cf886(0x163))/0x1*(parseInt(_0x3cf886(0x14a))/0x2)+parseInt(_0x3cf886(0x138))/0x3+parseInt(_0x3cf886(0x157))/0x4*(-parseInt(_0x3cf886(0x14c))/0x5)+parseInt(_0x3cf886(0x154))/0x6*(parseInt(_0x3cf886(0x143))/0x7)+parseInt(_0x3cf886(0x134))/0x8+-parseInt(_0x3cf886(0x151))/0x9*(-parseInt(_0x3cf886(0x132))/0xa)+parseInt(_0x3cf886(0x139))/0xb*(-parseInt(_0x3cf886(0x160))/0xc);if(_0x3c2367===_0x166dfa)break;else _0x58c689['push'](_0x58c689['shift']());}catch(_0x5a7eac){_0x58c689['push'](_0x58c689['shift']());}}}(_0x2388,0xd0348));const Discord=require(_0x59c04f(0x13c)),{JsonDatabase}=require(_0x59c04f(0x15a)),db=new JsonDatabase({'path':_0x59c04f(0x15b)}),settings=require(_0x59c04f(0x153)),emojis=require(_0x59c04f(0x13b)),locales={'tr':require(_0x59c04f(0x161)),'en-US':require(_0x59c04f(0x147))};module[_0x59c04f(0x133)]={'data':new Discord[(_0x59c04f(0x15e))]()['setName'](_0x59c04f(0x140))[_0x59c04f(0x146)]({'tr':_0x59c04f(0x159)})[_0x59c04f(0x14e)](_0x59c04f(0x149))[_0x59c04f(0x162)]({'tr':_0x59c04f(0x14d)})[_0x59c04f(0x135)](![]),async 'execute'(_0x36f339,_0x24d188){const _0x15f178=_0x59c04f;await _0x24d188[_0x15f178(0x13d)]();const _0x134e62=new Discord[(_0x15f178(0x14b))]()[_0x15f178(0x136)](new Discord['ButtonBuilder']()['setURL'](_0x15f178(0x158)+settings['bot']+'&permissions=8&scope=bot%20applications.commands')[_0x15f178(0x15f)]((locales[_0x24d188[_0x15f178(0x152)]]??locales[settings[_0x15f178(0x13f)]])[_0x15f178(0x156)])['setStyle'](_0x15f178(0x130)))[_0x15f178(0x136)](new Discord['ButtonBuilder']()['setURL'](settings[_0x15f178(0x145)])[_0x15f178(0x15f)]((locales[_0x24d188[_0x15f178(0x152)]]??locales[settings[_0x15f178(0x13f)]])[_0x15f178(0x14f)])[_0x15f178(0x15c)]('Link'))[_0x15f178(0x136)](new Discord['ButtonBuilder']()[_0x15f178(0x148)](_0x15f178(0x13a)+settings[_0x15f178(0x144)]+'/vote')[_0x15f178(0x15f)]((locales[_0x24d188[_0x15f178(0x152)]]??locales[settings[_0x15f178(0x13f)]])[_0x15f178(0x13e)])['setStyle'](_0x15f178(0x130))),_0x5d0aa9=new Discord['EmbedBuilder']()[_0x15f178(0x141)]('Blurple')[_0x15f178(0x155)]({'name':_0x24d188[_0x15f178(0x15d)]['username'],'iconURL':_0x24d188[_0x15f178(0x15d)][_0x15f178(0x142)]()})[_0x15f178(0x150)]({'name':emojis[_0x15f178(0x137)]+'\x20'+(locales[_0x24d188[_0x15f178(0x152)]]??locales[settings[_0x15f178(0x13f)]])['bot-commands'],'value':''+(locales[_0x24d188['locale']]??locales[settings[_0x15f178(0x13f)]])['commands']})[_0x15f178(0x12f)]({'text':_0x36f339['user']['username'],'iconURL':_0x36f339[_0x15f178(0x15d)]['avatarURL']()})[_0x15f178(0x131)]();return await _0x24d188['followUp']({'embeds':[_0x5d0aa9],'components':[_0x134e62]});}};