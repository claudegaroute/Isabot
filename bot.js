const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

var InfiniteLoop = require('infinite-loop');
var il = new InfiniteLoop;

function randomItem(myArray) {
	return myArray[Math.floor(Math.random() * myArray.length)];
};
il.add(randomItem, []);

il.run();

var myArray = [
  "A good attitude will always take you further than a bad habit.",
  "What?! Sorry, but my ears are just too fluffy and muffly, I guess. Please tell me once more.",
  "They want me in Smash?!",
  "Me? Busy? Don't worry about it! I got a whole hour of sleep last night, so I'm just raring to go!",
  "Phew! That's a relief. I don't like confrontation...",
  "I had a mayor who up and left for TWO YEARS. Can you believe it? Oh, the town of AAAAA was rough.",
  "Hello there, it's me, Isabelle!!",
  "https://www.youtube.com/watch?v=RD_WjKf2DRQ",
  "I think that makes this a work trip for tax purposes, right?",
  "Is there something I can help you with today?",
  "Oh my! Has my clock gotten out of whack? Then please tell me what the correct time is!",
  "I must say, I'm a fan of K.K. Slider myself...",
  "So many sunflowers on a sunny summer day! Wow, try saying that three times fast...",
  "My bedroom is completely full of unpacked cardboard boxes, and it feels like I moved so long ago!",
  "A town where flowers live forever and weeds hardly ever grow. Ooh! And no garbage or cockroaches!",
  "If you need anything in an official capacity... I'll be back in the office tomorrow!",
  "Scooter? I barely know her!",
  "If you have a fishing rod or a wet suit, you can fish or dive and have a lot of fun down there..",
  "It's so relaxing to just listen to the waves and walk along the beach collecting seashells!",
  "I think decorating a room with seashells can make for very interesting interior design!",
  "My mom recently sent me a box with a cherry inside. Actually, she sent 3! And she specifically told me I should share them with people because that's what good puppies do.",
  "Tee hee! You're a real jokester! YOKER!",
  "Oh no! This is bad!",
  "https://www.youtube.com/watch?v=RD_WjKf2DRQ",
  "Sometimes you just need to blow off work and let loose, right?",
  "Please feel free to look around my van. It can be like show-and-tell!",
  "If you want to buy something, I accept MEOW Coupons...",
  "Show me your moves!",
  "I just realized that I usually wear contacts at work. Heehee!",
  "READY? SET? POP!",
  "https://www.youtube.com/watch?v=u6TVrRx1Eks&t=173s",
  "For now, let's just put that notion on the back burner for a bit, OK?",
  "https://www.youtube.com/watch?v=VkfY_-EAG_E",
  "Is there something you'd like to inquire about?",
  "Palutena is the worst",
  "Hello!",
  "...",
  "Just a little more and I'll be done.",
  "Don't worry about me. I really enjoy my work!",
  "Maybe I should be the mayor...",
  "*Keep it together, Isabelle...*",
  "Maybe I should be the mayor...",
  "Thank you for your hard work!",
  "Are you my browser?",
  "Mmmmmmmmmmmm",
  "I'm not certain I know.",
  "I'm not sure...",
  "Yeah!",
  "That's right!",
  "Wha?!",
  "Okay!",
  "I'm Isabelle, and I'm here to help you in any way I can.",
  "Ah yes!",
  "An apple a day keeps Pallutena away!",
  "Some fresh air and exercise would do you good.",
  "Please take this! *hands over a leaf*",
  "All right then...",
  "So...",
  "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
  "Action is a great restorer and builder of confidence. Inaction is not only the result, but the cause, of fear. Perhaps the action you take will be successful; perhaps different action or adjustments will have to follow. But any action is better than no action at all.",
  "Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
  "Truth is, I'll never know all there is to know about you just as you will never know all there is to know about me. People are by nature too complicated to be understood fully. So, we can choose either to approach our fellow human beings with suspicion or to approach them with an open mind, a dash of optimism and a great deal of candour.",
  "Please take this sapling!",
  "Mmm, well then...",
  "Wow! So exciting!",
  "This is just like camping, isn't it?! It reminds me a lot of my childhood! Everyone would get all worked up, and we'd roast marshmallows and make popcorn over the fire... We'd always burn the popcorn a bit, but you know something? That just made it extra delicious!",
  "Oh no! I've gotten all carried away again. I'm so sorry!",
  "Well, that's all from me this time!",
  "If you're troubled about what to do, I could give you some advice! However, I might need to get really detailed and talk for long periods of time..",
  "Wow! Really?! You must be really efficient when it comes to moving!",
  "Sorry! Please don't tell my brother! I don't let him into my room for just this reason!",
  "You know, I just love your can-do attitude!",
  "Umm... Hi. Did you need something?",
  "I know it's silly, but if you want to talk to me, you'll need to talk to me over the counter.",
  "Is there something you'd like to inquire about?",
  "Citizens think the town still feels a bit barren overall, so additional development is desired.",
  "I see your house is all finished! Congratulations!",
  "Thanks for having me!",
  "OK! I can give you advice on how to make the most of your life!",
  "If you see people from town walking around, feel free to stop them for a chat!",
  "Anyone would be happy to get a handwritten letter from you!",
  "I'd advise you not to write anything you wouldn't want others to see. Just assume everyone will read it.",
  "I can do that!",
  "Hmmm... Then...",
  "Ah! Oh my! I should apologize! That was too bold of me, wasn't it?",
  "If you happen to go down to the beach and remember that, it would be a nice thing to do... for me.",
  "G#min#11",
  "It would make me really happy if you'd pick me up a seashell as a souvenir of your little trip there...",
  "Oh my! You actually remembered to bring me a seashell?! Thank you so much! I'll put it in my room and take good care of it!",
  "I hear there are people who grow a lot of rare fruits like these in order to make a nice living for themselves.",
  "If you bring your shovel here, I can teach you how to plant trees, plus do some other nifty tricks!",
  "First, use your shovel to dig a hole where you'd like to plant your tree.",
  "Somewhere like in the shadow of a building or too close to another tree or nect to a river or next to a cliff..",
  "When you choose a place to plant a tree, make sure you give it plenty of space to grow!",
  "If you have a shovel, you can bury things, but you can also dig up things that were previously buried. Bork!",
  "Do you by any chance know how to dig things up?",
  "I can teach you if you'd like.",
  "Why don't we talk about some of the things people do for fun in our town?",
  "Fish and bugs.",
  "It's more than a hobby. Everyone around here makes a lot of money catching fish and bugs...",
  "Why don't you use this as an opportunity to make your fishing debut?",
  "Show me your encyclopedia!",
  "Good luck!",
  "How's the fishing going?",
  "Oh dear me...",
  "That is indeed a problem...",
  "Stand near the water's edge. If you see a fish's shadow, aim near it, press A, and cast your bobber. That's a metaphor!",
  "It looks like... I'm not sure what it looks like.",
  "If you give water to flowers you see, even wilted ones will be happy and perk up again the next day.",
  "I don't know if you have an interest in gardening, but... I really hope you'll use that watering can!",
  "Enjoy living the life you most want!",
  "I'll continue to be here to support you to the best of my ability.",
  "I hope I can help you for many more years to come!",
  "According to a recent citizen survey, your approval rating is 100 percent! Wow!",
  "Treat yo self",
  "**That's thicc!**",
  "And that's why I've STILL never been there.",
  "Did I digress a bit there? Sorry, sorry! Back to business then...",
  "Today from 9 a.m. to 6 p.m. is the **Bug-Off!** You can find out more over at the even plaza.",
  "Zzzzzz.... AHHHHH! It's not what it looks like! OK, it's exactly what it looks like... But I was dreaming about work! I promise!",
  "I was really hoping you'd say that!",
  "Yay! Let's go find a place to build!",
  "I think not.. Sorry!",
  "Would you like to start work on the suspension bridge project?",
  "Ahem... Hello everyone!",
  "If a citizen is breaking the rules, please let me know so I can make him or her knock it off.",
  "Yeah sure!"
  


];

var InfiniteLoop = require('infinite-loop');
var il = new InfiniteLoop;

function randomItem2(myArray2) {
	return myArray2[Math.floor(Math.random() * myArray2.length)];
};
il.add(randomItem2, []);

il.run();

var myArray2 = [
  "I definitely agree!",
  "I disagree.",
  "I don't have an opinion, sorry. In the end, I'm really just a bot."

];

var InfiniteLoop = require('infinite-loop');
var il = new InfiniteLoop;

function randomItem3(myArray3) {
	return myArray3[Math.floor(Math.random() * myArray3.length)];
};
il.add(randomItem3, []);

il.run();

var myArray3 = [
  "BORK BORK!",
  "Bork bork!",
  "bork bork",
  "**BORK BORK**",
  "b-b-b-b-bork, b-b-bork",
  "I'm from New Bork, tee hee!",
  "Bork buddies! <3 Bork bork!",
  "*bork bork*",
  "*BORK!*",
  "Which came first, bork or Björk?",
  "BORK BORK BORK BORK BORK BORK BORK BORK",
  "You gotta be borking me!",
  "*Borkity bork*",
  "**BORK BORK BORK BORK BORK BORK BORK BORK!!!!!!!! BORK YES** Oh, I'm sorry! I might've gotten a little carried away!",
  "Ahh! Who's there?!",
  "Hey, I'm borking here! Just kidding. Heh.",
  "**borks internally**",
  "**u n s t o p p a b l e   b o r k i n g**",
  "Bork bork, bork up!",
  "I'm like a bork machine!",
  "Woof woof! Ha, sorry, I couldn't resist!",
  "I've never said no to a good bork or two. Bork bork!",
  "I can bork till I drop!",
  "That'll cost you 100 bells.",
  "I don't feel too well... Woah...",
  "I am borking, can't you feel it?",
  "BORK POLICE! ARE YOU BORKING? **I CAN'T HEAR YOU!**",
  ":)",
  "I can support that! Bork",
  "Who needs a *fork* when you have a **BORK**! Just use your fingers!",
  "BORK BORK BORK BORK BORK BORK BORK BORK bork bork BORK BORK BORK BORK BORK BORK BORK BORK bork bork bork BORK BORK BORK BORK BORK BORK BORK BORK bork bork bork........... Phew. BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK Oh wow, sorry! A few more.. BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK BORK, just had to get that out of my system. Phew! Bork!",
  "Enough with the borking already! I'm serious!",
  "Oh bork yeah!",
  "*all borks are eternal*",
  "**existential bork**",
  "Help! My borks are stop inside my bork tube, can I see a bork doctor?",
  "Oh just bork it off! You'll be fine!",
  "Did someone say..... BORK?",
  "I think I heard someone say bork bork!",
  "*hasn't slept*",
  "I'm here to **b o r k**",
  "How many times do I have to tell you? Your bork is showing! Tee hee!",
  "I get so excited over a nice good bork fest!",
  "I must bork for borks!",
  "Thank you for participating, it's national borker day! BORK BORK! Nice and proud!",
  " I think I might have to..... **BORK!!!**",
  "**BORK!!!!!!!!!!!!!!!!!!!!!!!**",
  "*medium rare bork*",
  "Borking is **EXHAUSTING** but I simply can't resist! Oh brother! Bork bork!"

];

var InfiniteLoop = require('infinite-loop');
var il = new InfiniteLoop;

function randomItem4(myArray4) {
	return myArray4[Math.floor(Math.random() * myArray4.length)];
};
il.add(randomItem4, []);

il.run();

var myArray4 = [
  "10/10! I love it! Or him or her or them! Or that! I love whatever you're referencing! Or hate it! Whatever you want really!",
  "9/10, easy",
  "8/10, thanks for asking me!",
  "7/10, but BARELY",
  "*b-b-b-b-bork, b-b-bork* Oh I'm sorry, did you ask me something?",
  "6/10. Could be better, if I'm honest.",
  "5/10. A little crusty...",
  "4/10, not for everyone. But not all things are.",
  "Perhaps you should form some of your own opinions?",
  "3/10, let's be real.",
  "2/10, I really just can't.",
  "BORK!!!!!!!!!!!!!!!!!!!!!!!",
  "1/10. Very very bad!! Oh wow.",
  "10/10! Yes for sure, very nice.",
  "9/10! I used to have my own once. Or wait, did I...?",
  "8/10 probably, I'm really just saying what you want me to say.",
  "Mmmmmm 7/10",
  "*b-b-b-b-bork, b-b-bork* Oh I'm sorry, I really should pay more attention. I tend to be absent minded sometimes...",
  "4/10. Do we need to have a talk about this?",
  "3/10. Not good.",
  "2/10; I can't recommend.",
  "BORK!!!!!!!!!!!!!!!!!!!!!!! I sure do love borking around, even if it isn't greatly helpful!",
  "1/10, just like Palutena.",
  "NO",
  "1436957/10 if I ran those numbers right!",
  "I think whatever you think. At least that's what I'll tell you.",
  "I'm not so sure. Let's revisit this later!",
  "Mediocre. Or rather, should I say, mediYOKER?",
  "Please, not so early!",
  "6.9 out of 10. Heehee!",
  "5/10 leaning towards a 6/10. But not bad... Maybe a 7/10? Perhaps 8/10. Oh my... 9/10, final answer! Wait, 10/10! Oh dear... 4/10.",
  "I'm not sure so I'll just say 7/10.",
  "8/10!",
  "On a scale of Palutena to really good, I'd say that's really good!",
  "3/10.....",
  "I can't talk about this yet.",
  "Oh...... *falls asleep*",
  "Reminds me of my childhood! I have to give high marks, but I think it's just nostalgia. What can I say?",
  "9/10. Something I can commit to! *finally, something that isn't tax fraud..*",
  "12/10, but don't tell my brother I said that. He'd have a fit!",
  "I.. Um....",
  "I really can't decide! I guess that's a 5/10?",
  "0 out of 10. Please, let's move on. I'm sorry to be frank but I really feel strongly about this. And don't just ask me again and expect a different answer.",
  "7/10 is fair in my book.",
  "Not that bad!!",
  "Decent I suppose?",
  "Good. Just good!",
  "I really need to read up some more before I can answer... I'm sorry!"
];

var InfiniteLoop = require('infinite-loop');
var il = new InfiniteLoop;

function randomItem5(myArray5) {
	return myArray5[Math.floor(Math.random() * myArray5.length)];
};
il.add(randomItem5, []);

il.run();

var myArray5 = [
  "At your service!",
  "Of course!",
  "Sure thing!",
  "Sure!",
  "Happy to help!",
  "I hope I made your day just a little bit better!",
  "Let me know if there's anything else I can do!",
  "I'm here to help!",
  "Anytime! Have a good day!"

];


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(auth.token);


client.on('message', msg => {
 if (msg.author == client.user) {
        return
    }
  if (msg.content === 'Bork bork!') {
    msg.reply(randomItem3(myArray3));
  }

});

client.on('message', msg => {
 if (msg.author == client.user) {
        return
    }
  if (msg.content === 'bork bork') {
    msg.reply(randomItem3(myArray3));
  }

});

client.on('message', msg => {
 if (msg.author == client.user) {
        return
    }
  if (msg.content === 'bork bork?') {
    msg.reply(randomItem3(myArray3));
  }

});

client.on('message', msg => {
 if (msg.author == client.user) {
        return
    }
  if (msg.content === 'BORK BORK?') {
    msg.reply(randomItem3(myArray3));
  }

});

client.on('message', msg => {
 if (msg.author == client.user) {
        return
    }
  if (msg.content === 'BORK BORK') {
    msg.reply(randomItem3(myArray3));
  }

});

client.on('message', msg => {
 if (msg.author == client.user) {
        return
    }
  if (msg.content === 'BORK BORK!') {
    msg.reply(randomItem3(myArray3));
  }

});

client.on('message', msg => {
 if (msg.author == client.user) {
        return
    }
  if (msg.content === 'Can I get a bork bork?') {
    msg.reply(randomItem3(myArray3));
  }

});

client.on('message', msg => {
 if (msg.author == client.user) {
        return
    }
  if (msg.content === 'can I get a bork bork') {
    msg.reply(randomItem3(myArray3));
  }

});

client.on('message', msg => {
 if (msg.author == client.user) {
        return
    }
  if (msg.content === 'can I get a BORK BORK') {
    msg.reply(randomItem3(myArray3));
  }

});

client.on('message', msg => {
 if (msg.author == client.user) {
        return
    }
  if (msg.content === 'can I get a BORK BORK?') {
    msg.reply(randomItem3(myArray3));
  }

});

client.on('message', msg => {
 if (msg.author == client.user) {
        return
    }
  if (msg.content === 'can i get a BORK BORK?') {
    msg.reply(randomItem3(myArray3));
  }

});

client.on('message', msg => {
 if (msg.author == client.user) {
        return
    }
  if (msg.content === 'can i get a BORK BORK') {
    msg.reply(randomItem3(myArray3));
  }

});

client.on('message', msg => {
 if (msg.author == client.user) {
        return
    }
  if (msg.content === 'bork') {
    msg.reply(randomItem3(myArray3));
  }

});

client.on('message', msg => {
 if (msg.author == client.user) {
        return
    }
  if (msg.content === 'BORK') {
    msg.reply(randomItem3(myArray3));
  }

});

client.on('message', msg => {
 if (msg.author == client.user) {
        return
    }
  if (msg.content === 'can i get a bork bork') {
    msg.reply(randomItem3(myArray3));
  }

});

client.on('message', msg => {
 if (msg.author == client.user) {
        return
    }
  if (msg.content === 'can I get a BORK BORK?') {
    msg.reply(randomItem3(myArray3));
  }

});

client.on('message', msg => {
 if (msg.author == client.user) {
        return
    }
  if (msg.content === 'CAN I GET A BORK BORK') {
    msg.reply(randomItem3(myArray3));
  }

});

client.on('message', msg => {
 if (msg.author == client.user) {
        return
    }
  if (msg.content === 'CAN I GET A BORK BORK?') {
    msg.reply(randomItem3(myArray3));
  }

});

client.on('message', msg => {
 if (msg.author == client.user) {
        return
    }
  if (msg.content === 'Do you agree or disagree, Isabelle?') {
    msg.reply(randomItem(myArray2));
  }

});


client.on('message', msg => {
  if (msg.content.startsWith("ISABELLE")) {
    msg.reply(randomItem(myArray));
  }

});

client.on('message', msg => {
  if (msg.content.startsWith("isabelle")) {
    msg.reply(randomItem(myArray));
  }

});

client.on('message', msg => {
  if (msg.content.startsWith("Isabelle")) {
    msg.reply(randomItem(myArray));
  }

});


client.on('message', msg => {
  if (msg.content.endsWith("Isabelle")) {
    msg.reply(randomItem(myArray));
  }

});

client.on('message', msg => {
  if (msg.content.endsWith("Isabelle!")) {
    msg.reply(randomItem(myArray));
  }

});


client.on('message', msg => {
  if (msg.content.endsWith("ISABELLE")) {
    msg.reply(randomItem(myArray));
  }

});

client.on('message', msg => {
 if (msg.author == client.user) {
        return
    }
  if (msg.content.includes(client.user.toString())) {
    msg.reply(randomItem(myArray));
  }

});

client.on('message', msg => {
  if (msg.content === 'What do you think, Isabelle?')  {
    msg.reply(randomItem4(myArray4));
  }

});

client.on('message', msg => {
  if (msg.content === 'what do you think isabelle?')  {
    msg.reply(randomItem4(myArray4));
  }

});

client.on('message', msg => {
  if (msg.content === 'what do you think isa')  {
    msg.reply(randomItem4(myArray4));
  }

});

client.on('message', msg => {
  if (msg.content === 'isa what do you think')  {
    msg.reply(randomItem4(myArray4));
  }

});

client.on('message', msg => {
  if (msg.content === 'Isabelle, how would you rate that?')  {
    msg.reply(randomItem4(myArray4));
  }

});

client.on('message', msg => {
  if (msg.content === 'isabelle how would you rate that')  {
    msg.reply(randomItem4(myArray4));
  }

});

client.on('message', msg => {
  if (msg.content === 'isabelle how would you rate this')  {
    msg.reply(randomItem4(myArray4));
  }

});

client.on('message', msg => {
  if (msg.content === 'Isabelle, how would you rate this')  {
    msg.reply(randomItem4(myArray4));
  }

});

client.on('message', msg => {
  if (msg.content === 'Isabelle, how would you rate that')  {
    msg.reply(randomItem4(myArray4));
  }

});

client.on('message', msg => {
  if (msg.content === 'isa how would you rate this')  {
    msg.reply(randomItem4(myArray4));
  }

});

client.on('message', msg => {
  if (msg.content === 'isa how would you rate that')  {
    msg.reply(randomItem4(myArray4));
  }

});

client.on('message', msg => {
  if (msg.content === 'What do you say Isabelle?')  {
    msg.reply(randomItem4(myArray4));
  }

});

client.on('message', msg => {
  if (msg.content.startsWith("Hey Isabelle, what do you think of"))  {
    msg.reply(randomItem4(myArray4));
  }

});

client.on('message', msg => {
  if (msg.content.startsWith("Hey Isabelle what do you think of"))  {
    msg.reply(randomItem4(myArray4));
  }

});

client.on('message', msg => {
  if (msg.content.startsWith("hey isabelle what do you think of"))  {
    msg.reply(randomItem4(myArray4));
  }

});


client.on('message', msg => {
  if (msg.content.startsWith("hey isabelle how would you rate"))  {
    msg.reply(randomItem4(myArray4));
  }

});

client.on('message', msg => {
  if (msg.content.startsWith("Hey Isabelle, how would you rate"))  {
    msg.reply(randomItem4(myArray4));
  }

});


client.on('message', msg => {
  if (msg.content.startsWith("hey isabelle, how would you rate"))  {
    msg.reply(randomItem4(myArray4));
  }

});

client.on('message', msg => {
  if (msg.content.startsWith("hey isabelle how would you rate"))  {
    msg.reply(randomItem4(myArray4));
  }

});

client.on('message', msg => {
  if (msg.content.startsWith("hey isa how would you rate"))  {
    msg.reply(randomItem4(myArray4));
  }

});

client.on('message', msg => {
  if (msg.content.startsWith("thank you Isa"))  {
    msg.reply(randomItem5(myArray5));
  }

});

client.on('message', msg => {
  if (msg.content.startsWith("thanks Isa"))  {
    msg.reply(randomItem5(myArray5));
  }

});

client.on('message', msg => {
  if (msg.content.startsWith("thanks isa"))  {
    msg.reply(randomItem5(myArray5));
  }

});

client.on('message', msg => {
  if (msg.content.startsWith("thank you isa"))  {
    msg.reply(randomItem5(myArray5));
  }

});

client.on('message', msg => {
  if (msg.content.startsWith("Thank you Isa"))  {
    msg.reply(randomItem5(myArray5));
  }

});

client.on('message', msg => {
  if (msg.content.startsWith("Thanks Isa"))  {
    msg.reply(randomItem5(myArray5));
  }

});

client.on('message', msg => {
  if (msg.content.startsWith("Thanks isa"))  {
    msg.reply(randomItem5(myArray5));
  }

});

client.on('message', msg => {
  if (msg.content.startsWith("Thank you isa"))  {
    msg.reply(randomItem5(myArray5));
  }

});

