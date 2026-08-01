import './style.css';
import { CanvasBackground } from './canvas-background.js';

// --- MOCK STORY DATABASE (The Story Keepers focus) ---
const STORIES = {
  overgrown: {
    id: 'overgrown',
    title: 'The Story Keepers',
    author: 'Matthew Landis',
    theme: 'overgrown',
    synopsis: 'In the not-to-distant future, siblings Max (13) and Julia (17) wander a ravaged Southeast PA in the wake of a national power grid blackout, famine, and disease, staying alive as revered “Story Keepers” who gather and tell oral histories of the fractured communities they visit, all while searching for their younger siblings and parents in this post-apocalyptic version of Paulette Jiles’s <i>News of the World</i> meets HBO’s <i>Station Eleven</i>.',
    chapters: [
      {
        title: 'Chapter 1: Arrival',
        paragraphs: [
          '“Gun,” I say. “Blue house, attic window.”',
          'Julia keeps walking up the two-lane road, farther into town. It’s cold for October, but we’ve walked five miles since lunch. Our wagon—a two-wheeled trailer pulled by a mule named <i>Eliza</i> that once dragged canals up the Delaware—rolls on behind her. “He won’t shoot.”',
          'True, but the dark muzzle still makes me nervous. Short boy with a limp, white spruce walking stick. Tall girl with a mangled face. Anybody still alive in the county knows to leave us alone.',
          'The attic window creaks. A rifle barrel slowly pulls back, replaced by a face. A boy, no older than eight.',
          'No, they won’t shoot. They knew what we have. They’re starving for it.',
          'Ahead is the town’s intersection—a kill zone, if I didn’t have a limp and Julia wasn’t six feet with a burn scar covering half her face. Eight cars push together to form a barricade big enough only for a person to squeeze through. There was one like it at the overrun aid station where we found Mom.',
          'I stop at the makeshift barricade. Five bullet holes spray the panel of a car. Julia unslings <i>Ginger</i>, the maple stock rifle Dad gave her when she turned twelve. She holds it casually, like a confident hunter. Deer mostly, since the herds exploded in size after their main predator—cars—died out.',
          'But also people, if we have to. Sometimes we <i>have</i> to.',
          '“Greetings!” Julia calls out. The sound bounces off the houses around them. She loves this part. “We are the—”',
          '“We know who you are.”',
          'The words come from the wraparound porch of a brick house behind the barricade. A short woman steps into view. Buzzed brown hair, cheekbones like knives. Hard eyes of a leader who has had to do her own killing. I grip Bulldog, Dad’s snub-nose revolver hidden under my coat.',
          '“Heard you were on the move,” she says. Two men walk out of the house to join her. Sons, maybe. No weapons I can see. “We hoped you’d come this way.”',
          '“I’m Julia,” my sister says. “This is Max.”',
          '“Alice.” She nods at me. “Pleased to meet you.”',
          'One of the men whispers in her ear.',
          '“Forgive me,” Alice says, “But I’ll need to see the boy’s leg up close. Eyes don’t work like they used to at this distance.”',
          'Julia smiles, further mangling the burned half of her face. She has enough hair in her wavy ponytail to cover it, but she gave that up a year ago when we first heard about the imposters. Last month, she’d let a blind woman in her eighties touch the charred flesh to make sure she was really who she claimed to be. Then she’d told Julia her story.',
          'A younger man steps off the porch and weaves through barricade. He moves like a hunting dog, efficient and with purpose. Julia’s age, but the beard makes him look older. I flex my fingers on Bulldog’s handle as I shift my arm. Haven’t had to point it at somebody in a while. Haven’t had to fire it for almost three.',
          '“Apologies,” he says reverently. “Just gotta make sure.”',
          'I let him lift the right pant leg of my jeans, exposing the prosthetic that rises to my knee. It’s a miracle, but more than anything, it’s a passport.',
          '“Thank you.” He lowers the pant leg, even brushing a piece of caked mud off. “Welcome to Blooming Glen.”',
          'I let go of Bulldog and shake his hand. “Thank you for having us.”',
          '“Hope you like pork,” the woman says. “We got a whole lot of it.”'
        ],
        dramaticMomentIndex: 17 // Max reaches for the gun in his coat
      },
      {
        title: 'Chapter 2: Feast',
        paragraphs: [
          'Eliza eats hay in a garage now used to shoe horses. We eat in Alice’s house by candlelight.',
          'The table is a long rectangle flanked by homemade benches. A fire roars in the connected room, filled with two dozen silent onlookers. Like most houses we visit, there are no TVs. Paintings, plants, or gun racks fill the space once occupied by screens.',
          '“We don’t pray anymore, not since our more religious minded neighbors went a little nuts.” Alice folds her hands. “But we do bow for a moment of silence to honor the departed.”',
          'I lower my head and hear the man next to me whisper something. A woman to my right makes the sign of the cross.',
          '“Okay,” Alice sighs. “Let’s eat.”',
          'Julia waits for the young woman next to her to take a bite. As she chews, Julia switches plates with her. I do the same with the man next to me who is almost halfway done his meal. The others watch us, forks in midair. Only Alice keeps eating.',
          '“I’m starting to see how you two stayed alive so long.”',
          'Julia samples a potato. “Delicious.”',
          'The man who inspected my leg smiles. He sits to Alice’s right. She called him Quinn in a way our mother used to say our names.',
          '“Neighbor was the largest pig farmer in the area,” Alice explains. “Bob Clemens. We nearly ate out the herd that first winter, but now…” she trails off, pain creasing her eyes. “With so many gone, we’ve got more than enough. We’re curing and salting for trade, mostly.”',
          '“When will you read?” A small boy stands in the corner. His plate is mounded with food, but he hasn’t touched it. I recognize him: the second story sniper. “We all want to hear a story.”',
          '“Manners, Jack,” Alice says. I catch a warning in her voice. “Let our guests eat.”',
          '“Are they really true?” Jack comes closer, eyes wide. “Are there really hundreds of them?”',
          'Before Alice scolds him, I set my fork down and pull a small notebook from my jacket. Its cover is worn from the endless friction in my pocket, the pages frayed from constant flipping. I hold it out to Jack. Someone in the other room gasps. His eyes go wide, and he shrinks back.',
          '“It isn’t magic,” I say, waggling it at him. It is magic, of course. It’s the reason we’re alive. “Go on.”',
          'He gently elbows a space between adults and sets his plate down. Cautiously, he takes the notebook from me and opens to the first page.',
          '“Don’t be greedy, now, nephew,” Alice says, smirking. “Tell us a tale.”',
          'Jack flips through each page, the smile on his face widening. “You have really neat handwriting.”',
          'The room erupts in laughter. Julia winks at me. She knows the power of the routine, and how much joy I get from sharing what we’ve built.',
          '“You know, Jack,” Julia says. “When Max and I were your age, our dad would bring books to the dinner table. Mom hated it, said it was rude.” She smiles at the memory. “So he started reading it out loud. I found it boring, but Max here…he ate it up.”',
          'Jack hands the notebook back to me with both hands like an offering.',
          '“Could you, sir, read us some?”',
          'And so I do.'
        ],
        dramaticMomentIndex: 13
      },
      {
        title: 'Chapter 3: Miracle',
        paragraphs: [
          'The man I traded plates with now slides a candle close.',
          '“This is the account of Will Butler,” I begin, “told to me by his wife Carina Butler, witnessed by their three sons who corroborated the story. It was told to me on the second month of the second year after the lights went out.”',
          'The page crinkles loud in the silence as I turn it.',
          '<i>Will and Carina were married in 1998 at Zion Mennonite Church, Souderton. They had three sons: Colton, John, and Braxton. Will taught high school math and coached any sport the school would let him, but on the weekends, the boys were his joy. He would take them to the Perkasie Library and then the playground behind it, chasing them around and pushing them on the swings. Many dads back then brought their phones to the park and stared at them while the kids played. Will left his in the car.</i>',
          '<i>One of Will’s favorite games was called “Catch a Daddy by the Toe”, which was really just his version of tag—but in reverse. He would set a perimeter, like the paved area where the older playground was, and challenge the boys to catch him. Any one of them could tag him and win. But Will was fast. Remember what I said about him coaching.</i>',
          'A quiet laughter ripples around the dining room. The listeners from the other room have crowded in now too.',
          '<i>Colton was the fastest, begin the oldest, but Braxton had the most to prove, being the youngest. One Saturday, Will challenged the boys: if they could catch him in under two minutes, he would take them out for ice cream on the way home. They all agreed, and the game was on.</i>',
          '<i>But the thing about catching daddy, the boys had learned, had little to do with speed and everything to do with teamwork. Colton lead the way, ordering John to flush daddy to the perimeter while he hung back. Braxton, meanwhile, was supposed to flank daddy on the other side by the swings, but being the youngest, he went for another method: stealth. See, one of Dad’s favorite moves was to climb the large metal slide ladder to escape.</i>',
          '<i>But not this time, Braxton thought. As dad ran toward the ladder, Braxton raced up the tall metal slide, his shoes slipping as his hands gripped the sides. His four year old arms were small but stubborn, and after a few seconds he had made it to the top, triumphantly staring down at his dad. “Only twenty seconds left!” Dad taunted them, unaware that Braxton was about to end the game.</i>',
          '<i>But just as Dad’s foot hit the lowest rung, a shadow crossed his face. Braxton’s head, peeking over the side, blocked the sun for a split second, enough for Dad to sense something was amiss.</i>',
          '<i>And that’s when Braxton fell.</i>',
          '<i>Seeing that he’d been spotted, Braxton had whirled back around intending to slide down, but had slipped. Now he tumbled backwards from a height of nearly twenty feet toward the unforgiving pavement.</i>',
          '<i>Will Butler cannot explain what happened next, only that he felt like his body was moving in slow motion; as if he was underwater, desperately trying to get his arms in position to save his son. Colton and John both remember that he’d actually taken several steps away from the ladder, and as their brother fell, though there was no way that Dad could ever get to him in time.</i>',
          '<i>Lunging with all his strength, Will Butler reached for the falling boy—</i>',
          'They lean forward, and I let them hang in suspense. Even Julia, who’s heard the story a hundred times, can’t look away. Light bounces off two tiny pools of liquid in Jack’s eyes.',
          '<i>—and caught him by the ankle, his head just inches from the pavement.</i>',
          'The crowd groans in relief. They grab each other’s arms, smiling and laughing. Then they clap, building to a standing ovation. Not for me, but Will, and the world that we left behind. A world of local libraries and parks and ice cream. A world of miracles.',
          'When they sit, I read the last page.',
          '<i>“I cannot explain it,’ Will would tell his wife. ‘I don’t know how I reached him. It was a miracle.’ Carina would squeeze his hand, a twinkle in her eye. ‘No, coach,’ she would say, “it was a good catch.”</i>'
        ],
        dramaticMomentIndex: 13
      },
      {
        title: 'Chapter 4: Secret',
        paragraphs: [
          'We set up camp in Alice’s backyard, our tent butted up against the trailer. A post and rail fence rings in two acres around the house. Overgrown fields race out in every direction under a darkening sky. Tree forts on stilts act as guard towers a few hundred yards from the house. Julia and I both shot our first deer from a structure like that, Before. Dad was there.',
          '“Sure you don’t want to stay in the guest room?” Quinn asks. He holds a gas lantern. Kerosene, by the smell. “Gonna be cold tonight.”',
          '“Cold’s fine.” Julia takes the armful of blankets he carries. “We like the fresh air.”',
          'I put the rain tarp on, one eye on Quinn. He’s been staring at Julia all night, the way some of the men do. Some of them try to do more.',
          '“What about the books?” Quinn points to the trailer, where a metal gun safe packed with notebooks sits next with our food and supplies. “Might rain.”',
          '“It’s waterproof,” I say. “And we cover it with canvas, just to slow the rust.”',
          'I see candlelight in the window above us. A woman’s shadow hovers behind it. Alice.',
          '“There’s two guards in each tower, so you can sleep easy. Another by the garage for your mule.” Quinn scans the fields. “Haven’t had raiders in a while.”',
          'Julia plops the blankets in our tent. “Good to know.”',
          '“Thank you for hosting us,” I say. “We’re very grateful.”',
          'Quinn moves fast, stepping close to me. His voice is low. “I want to give an account, but I can’t do it in front of them.”',
          'He smells like sharp, homemade soap. My hand feels the pistol grip. “Why not?”',
          '“It’s not a good story. Some don’t want it told.”',
          'Julia’s only remaining eyebrow arches. It’s a message, part of our other language. Danger? I shake my head. If I’d blinked, the knife hidden in her boot would be buried in Quinn’s kidney.',
          '“Give us a tour of the community tomorrow,” I say. “We’ll take your account then.”',
          'He nods, relieved.',
          '“But you’ll need a witness,” I add. “To corroborate. Those are the rules.”',
          'He hands me the lantern. He’s trembling. “I understand.”',
          'When he’s gone, Julia finishes setting up our tent. I replace the large canvas over the containers and secure it with bungee cords. We found it last year in the basement of a man who was once a Civil War reenactor. I knew what the fabric was because my 5th grade teacher had once done a live demonstration of how soldiers built them during the war. His name was Mr. Sanderson.',
          'We duck inside the tent and zip it shut. As I get changed, Julie unzips a hidden exit in the back and silently slides her sleeping bag out under the trailer. She prefers first watch.',
          '“Think he knows something?” she whispers.',
          'I shrug. “He’s worried.”',
          '“Could be them.”',
          '“Maybe.”',
          'Julia pulls her hair into a tight ponytail, then digs around for a mason jar full of yellow salve. Scooping out a handful, she gently rubs it on the burned half of her face. I take off my prosthetic socket and spread the homemade gel on what’s left of my knee.',
          '“Dad talked about this place,” she says. “Didn’t he take us here, once?”',
          '“Pulled pork sandwiches for the Super Bowl.”',
          '“Oh yeah. They were good.”',
          '“Brisket, coleslaw, and sauce.” My mouth waters at the memory of tangy Carolina Gold. “Fifty-six dollars.”',
          '“Guess we’ll see if he has anything to confess.” Julia screws the top back on the salve and wipes her hand on a blanket. From her bag, she draws out a worn but well oiled army pistol: Rat Killer. Our grandfather carried it down tunnels of a far away jungle war when he was a few years older than her. He said it saved his life no less than eight times.',
          '“Sleep with your gun and the Maglite,” she says. “Wake you in four hours.”',
          'I turn the gas lantern knob and watch the flame go out.'
        ],
        dramaticMomentIndex: 10
      },
      {
        title: 'Chapter 5: Witch Hunt',
        paragraphs: [
          'In my dreams, I still have both legs.',
          'I’m on a baseball field in brilliant sunlight. I steal second base, taking huge leads and taking off just at the right moment. The catcher throws, but I’m safe by a mile. I am the fastest one on my team. The ball trickles into center field, and Coach Justin waves me on to third base. I break for home and slide head first. <i>Safe</i>. The team pours out of the dugout and tackles me—Logan, Anthony, Brayden. Clayton and Ethan. Tanner and Sonny. All my friends.',
          'Mom and Julia rush the field. The twins run with Dad, their small legs whirling toward us, half eaten popsicles in their hands. They tackle me and shout our team name. <i>River Dogs! River Dogs!</i>',
          'Whispers wake me.',
          'Someone on the other side fumbles for the zipper. They don’t find it—can’t, because we tuck it in for safety. I point the pistol at the door.',
          '“Prison break,” I say.',
          'Behind me, I hear her moving.',
          'There’s a tearing sound as something punctures the tent door in front of me. I fumble for the Maglite and ready a thumb on the button. In a world that’s gone dark, the thirteen-year-old boy with light is king.',
          '“Jules!” I yell. <i>“Prison break!”</i>',
          'I flick on the Maglite and see a rusted knife sliding down the nylon. Another pair of hands yanks at the fabric, fingers stained with dirt.',
          '“Two!” I yell, so she knows what she’s running towards.',
          'I put pressure on the trigger and ready my target. Julia would’ve already blown them away, but I need to make sure.',
          '<i>“Witch!”</i> A woman topples inside, screeching like a demon. She stabs the ground, missing my good leg by an inch. <i>“Medium!”</i>',
          'I hear a crunch outside—metal on bone.',
          '“Shoot her, Max!” Julia calls.',
          '<i>“Servant of the beast!”</i> the lady whines. <i>“Harlot of Babylon!”</i>',
          'Still on my back, I thrust the heel of my boot into the woman’s jaw. At the last second, she thrashes left and avoids most of the blow. Still blinded, she rears up and brings the knife down two-handed in a wild plunging stab. I roll to the right and barely avoid getting skewered.',
          '<i>“Max! Kill her!”</i>',
          'Behind a wall of dirty hair, I see tears streaking down her face. She claws at my thigh with iron nails. As she raises the knife this time, I smash the side of her head with the Maglite.',
          'The woman crumples to the tent floor. I scramble up, pain shooting through my stump as I balance on it. Shouts come from the house and doors open. I find the knife underneath her unconscious body and pocket it before strapping on my prosthetic.',
          'Outside, Julia stands behind a man on his knees, Rat Killer pressed against the back of his head. His beard must be two feet long, gnarled and full of debris. He recites something over and over as Alice stumbles onto the porch wearing a pink bathrobe, a gigantic revolver in her hand. Quinn rounds the corner of the house aiming a shotgun.',
          '“A man or a woman who is a medium or a necromancer shall surely be put to death,” the man says. “Their blood shall be upon their heads.” A dark suit hangs on his emaciated frame, complete with a battered tie. The dress shirt was once white, but is now stained brown. “A man or woman who is a medium or necromancer shall surely be put to death. Their blood shall be upon their heads.”',
          '<i>“Shut up,”</i> Julia hisses. “You good?” she says to me.',
          '“Good.”',
          'Julia grabs the man by the back of his collar and swings him around to face the crowd. Dragging him, we scoot backwards so our backs are against the trailer.',
          '“A is yours,” she directs. Code: First threat, left to right. That’s Quinn. “B and C are mine.” Alice and the man I swapped plates with at dinner. “Watch the windows.”',
          '“…Samuel?” Alice lowers her revolver, peering at the man on his knees. “Samuel—what are doing?”',
          '“A man or woman—”',
          'Julia jerks on the shirt collar, finally choking him into silence. “Alice: this is where you start talking.”',
          'My gun sits on top of my left wrist, which still holds the Maglite. I rehearse the move mentally. <i>Gun up. Blind Quinn with my light. Fire.</i> I don’t think I can do it.',
          'He inspects the scene, and within a second understand my intent. Slowly, he takes one hand of the shotgun and lowers it to the grass. Hands raised, he peers into the tent and drags out the woman.',
          '“Rachel,” he tells him mom.',
          'Alice storms over and shines her own beam on the woman’s face. Guess we weren’t the only ones with battery power.',
          '“She meant you harm?” Alice asks me.',
          '“Yeah,” Julia spits back. Lantern lights bounce off the melted mess of her burns. With her hair pulled back, she looks every bit the nightmare. “I think we can all agree she meant us harm.”',
          'My hand with the Maglite moves quickly to my pocket for the knife. I toss it on the ground between us. “She tried to stab me.”',
          'Quinn picks it up and shows Alice. She stares down at Samuel.',
          '“Life taker?” Alice asks the prisoner.',
          '“She’s <i>evil</i>,” he groans. “Her blood is upon her—”',
          'Alice slaps him. She turns to the gathering. “Samuel and Rachel Snyder, former members of this community, came here to assault our guests and take their lives. Will you bear witness?”',
          '“Witness,” they murmur.',
          '“For the crime of attempted life taking without cause; for the crime of sojourner assault. I find Rachel and Samual Snyder guilty.”',
          '“Guilty,” they respond.',
          'Quinn pulls handcuffs from his back pocket and secures a limp Rachel. Alice motions for another man to take Samuel.',
          '“Forgive us,” Alice says to Julia. “We will make it right.”',
          'Julia shoves Samuel to the ground with her foot, gun still trained on him. He’s cuffed and marched off with his wife around the side of the house.',
          'I see Jack watching from the second floor. He clutches a teddy bear under one arm, his rifle perched on the open window sill. He’s aiming at Alice.'
        ],
        dramaticMomentIndex: 7
      },
      {
        title: 'Chapter 6: Justice',
        paragraphs: [
          '“Why didn’t you shoot?” Julia asks.',
          'I haul up the bucket from Alice’s well and fill our water jugs. A bloody sun rises behind us. In a nearby field, two men dig a grave each. “Didn’t want to hit you.”',
          '“As if I would ever put myself in your line of fire.”',
          '“Couldn’t take that chance,” I lie again.',
          '“Right. So instead you almost took a knife to the guts.” Julia eyes Quinn, who walks between the guard towers delivering food. “A knife that was absolutely covered in bacteria. That crazy freak. She probably had lice.”',
          '“I said I was sorry.” A few times, before I went to sleep in Alice’s attic guest room and Julia watched the door. Then again when I woke up.',
          '“She was gonna die anyway.” Julia always knows when I’m lying. “Your little act of mercy only spared her a night.”',
          'She’s right, but I don’t regret it. Killing isn’t my job. I’ll do it if I have to, but I didn’t. Not then.',
          '“There’s something wrong here,” I say.',
          '“No kidding.”',
          '“Did you see the kid last night? Jack?”',
          'She eats a biscuit from the batch Quinn dropped off. “The little sniper? Yeah. I saw him.”',
          '“He wasn’t aiming at us.”',
          'Julia munches. “You think he wants to tell us something?”',
          '“Maybe.”',
          'A bell rings from deeper inside the town. <i>Clang clang clang.</i> People file out of homes toward the crossroads barricade. Quinn jogs over to us.',
          '“They’ll be executed now,” he says. “Shot.”',
          'My stomach tightens. After all we’ve seen, I still can’t stand it. Every death, even justified, makes me think of the twins. Of Dad.',
          '“You said you had an account,” I say.',
          'Alice comes out the back door and waves at him to join her.',
          '“After the burial,” he says. “I’ll find you.” He waits, awkwardly.',
          '“Oh—we’re not coming,” Julia says. “Go carry out your justice.”',
          '“It shouldn’t have happened.” His eyes lower, ashamed. “Please don’t judge us because of those two. They were kicked out of the community a long time ago.”',
          '“So how’d they get back in?” Julia asks. “You told us it was safe.”',
          '“They were squatting in an old storage cellar, sneaking out at night to find scraps,” he explains. “I swear, I didn’t know. I should’ve protected you better.”',
          '<i>Clang clang clang.</i>',
          'He looks like he wants to say more, but jogs off.',
          '“He likes you,” I say.',
          'Julia stares blankly after him. “They’re afraid of us. The witch and her storyteller. That’s all it is.”',
          'She knows it’s not.',
          '“It’s actually the storyteller and his witch,” I correct.',
          '“That’s way less mysterious.”',
          '“You could always wear a mask.”',
          '“Ooo—now <i>that</i> would be creepy.”',
          '“And make you easier to look at.”',
          'She throws a piece of biscuit at me. Julia rarely smiles anymore, but when she does, it’s brighter than a noon sun. I’ve gotten so used to her mangled face, I don’t even notice it anymore. She is more lovely than she is fierce, even if I’m the only one who gets to see it. Mom would approve.',
          'We watch the grave diggers shovel dirt. They toss it in neat piles on either side of the holes. Both men wear overalls like farmers from a hundred years ago, back when electricity still hadn’t reached them. I wonder how many bodies are in those fields, and in fields like it across the country.',
          'A gunshot rings out. Then a second.',
          'The grave diggers don’t stop their work.'
        ],
        dramaticMomentIndex: 37
      },
      {
        title: 'Chapter 7: The Bridge',
        paragraphs: [
          'The Snyders get no funeral, only burial witnesses. Vultures perch in dead treetops along the field’s edge, but the grave diggers do their job too well. When dirt forms a neat mound over each hole, Quinn comes for us.',
          '“Gonna show them around, mom,” he tells Alice, who wanders up from the house. He kisses her on the cheek. “We’ll be back by supper.”',
          'She glances at my leg. “Would you like a horse?”',
          '“I can walk.” I hold up the white pine walking stick. “But thank you”',
          '“Take Elias,” Alice tells Quinn.',
          'Quinn adjusts the shotgun slung on one shoulder. “I’ll be going by the bridge. Wanted to show them what we did.”',
          'Silence.',
          '“I see,” Alice says, slowly. “Perhaps, don’t take Elias.” She looks to Julia. “Elias lost a brother there last year during the rebuilding. Terrible accident.”',
          '“Jack is a good shot,” I offer. It’s a hunch, but Quinn’s quick glance tells me I’ve hit the mark, pun intended. “You had him on sniper duty when we came into town. And again last night.”',
          'Alice meets my eye. Did she see his aim, too? Or was I confused by the adrenaline rush?',
          '“My nephew is an excellent shot,” she says. “Maybe he’ll get a deer.”',
          'Quinn leads us through town, past the barricade. A town square has been set up in front of Alice’s house where justice was found earlier this morning. Jack rides a black mare named Blaze, his rifle in a holster sewn into the saddle. The rest of us walk.',
          'We follow the road east out of town, past a tire shop that’s been turned into a checkpoint with four guards. They watch Julia in that mix of fear and longing, hands lazily on weapons. Half a mile later I smell the pigs. Even in a world where few shower regularly, a stye stinks.',
          '“Got the herd up to a hundred,” Quinn says, pointing down a driveway toward the pens. I spot four towers and a barb wire fence. More sentries watch us. “Without those pigs, we’d be dead.”',
          '“What do you feed them?” I ask.',
          '“Everything. Anything.”',
          '“Venison,” says a small voice. Jack. “They love deer.”',
          'Quinn points to a neighboring field. “Fodder beets and field peas over there. They just can’t get enough food, those pigs.”',
          'I wait, wondering if his story is about this place, or things that happened here. But then he waves at the sentries and continues down the road.',
          'We walk past abandoned fields, hay that grew six feet until gravity forced it over. On a distant hillside, a swayback barn burns.',
          '“We searched it this morning,” Quinn explains. “Signs of squatters.”',
          '“Burn it to rubble so they can’t squat,” Julia says. “Smart.”',
          '“You could let them into the community,” I say. “Alice said you have plenty of food, and I saw all the homes.”',
          '“We used to do that.” Quinn watches the fire. “But we stopped.”',
          'The road steepens we climb. At the top of a ridge, Quinn pulls a radio from his pack and sends a series of clicks.',
          '<i>Dah-Dah-Di-Dah.</i>',
          '<i>Q</i> in Morse Code. Julia catches it too.',
          'They radio back in code. <i>Ok.</i>',
          '“We share the bridge with another community,” Quinn explains. I see the bridge ahead as we descend. “It’s the only one that crosses the Tinicum into Perkasie. Flood last year took the others.”',
          'Two guards exit a wooden hut: a man and a woman. Lean like Quinn, they wear jeans, flannel, and police body armor. A similar hut sits on the other side of the bridge along a parallel road. Two sentries give a friendly wave.',
          '“Heard the shots,” the male guard says to Quinn. He’s older and much taller, maybe a foot. A gun sits in a holster strapped to his leg. “It’s done, then.”',
          '“It’s done.”',
          '“Paul,” the tall one says to us. “Nice to meet you. This is my wife, Sadie.”',
          'Sadie shakes both our hands. “Pleasure to have you.”',
          '“And this is the famous bridge.” Julia says.',
          'We follow Quinn down the embankment. Four squat towers made of logs rise up from the creek bed to support the underside of the bridge.',
          '“Crib piers,” Quinn says. “Build ‘em like Lincoln Logs and fill with stone along the way. Elias was an engineer. His idea.”',
          '“How did his brother die?” I ask.',
          'Quinn picks up a smooth stone and rubs a thumb over it. Julia keeps one eye on the opposing guard hut. “Log fell on him.”',
          '“I’m sorry.”',
          '“Took him a few days to pass.” Quinn pockets the stone. “Doctor came down from Perkasie to try and help. Sign of good faith and all, since the bridge was helping them too. Nothing he could do.”',
          'I see him glance at my leg. Like most, he wonders how a cripple survived.',
          '“It was a car accident,” I tell him. “Happened before the lights went out.”',
          'He nods. “Kind of a blessing.”',
          '“That’s how we see it,” Julia says.',
          'Movement to my right—Jack. He’s standing in the stirrups, rifle aimed at down river. A massive buck steps out from the underbrush and pauses to watch us.',
          '<i>Ka-boom.</i>'
        ],
        dramaticMomentIndex: 46
      },
      {
        title: 'Chapter 8: Quinn’s Story',
        paragraphs: [
          'Quinn and Jack gut the deer in a nearby field, away from the creek. Paul carries a hindquarter to the opposing guard house and returns with a clear bottle of white pills.',
          '“Use to call that ‘Christian charity,’” he says. It takes all three of them to haul the deer carcass onto Jack’s horse. “But it was always a trade.”',
          'Quinn leads us back another way. We wind through woods instead of fields, coming on his community from the north. He stops in a glen and Jack dismounts. We pick wild blueberries that remind me of Mom’s spring baking. Julia munches on a few, her hand never far from Rat Killer.',
          'Quinn begins his story.',
          '“They were sick.” Quinn sits on a rock and sips water from his canteen. Jack and I join him on the ground, my notebook out, staff across my lap. Julia wanders to find thicker cover. “It’s important you know that.”',
          '“You could hear them screaming at night.” Jack sits cross legged picking deer blood off his nails. “They were skinny, too. So skinny.”',
          '“Who was?” I scribble shorthand notes. Tonight, I’ll copy down the complete record. “And when was this?”',
          'Quinn thinks. “Last winter. December.”',
          '“Six months after the lights went out,” I say.',
          'He nods.',
          '“And who were they?”',
          '“South of here. Doylestown.” Quinn shrugs. “Came up like everyone to find food. We had a big house on the edge of town. Alice let them stay there.”',
          'Julia puts herself behind a large oak tree. Only Ginger’s muzzle sticks out.',
          '“We gave them food and water,” Jack says. He stares at me, eyes wide. Pleading. “We even gave them some medicine.”',
          '“The Burn Up. That’s what we called it.” Quinn offers me water, and I take some. “No pill can stop a fever that high. They just…burned up. Like human candles.”',
          'The virus and its many names tore through most communities we’ve visited: the Flu, the Fever, Scorch, God’s Wrath, Devil’s Baptism. Most accounts I collected mentioned some form of it. Julia thinks it killed more people in the county than hunger that first winter. We avoided any dwelling with more than one family after first hearing about a sickness, like Dad warned us. He’d read a book about the lights going out, Before. Reading it saved our lives.',
          '“We burned them.”',
          'My stubby pencil hovers over the page. I look up and notice Jack is crying.',
          '“Aunt Alice said we had to do it to save the town.”',
          '“You burned the bodies,” I say, hoping.',
          'Quinn leans on his elbows. “We set up a quarantine around the place. Dropped off food and water every day, but they wanted a doctor. Perkasie had two back then, but they wouldn’t send one. I tried to cross the creek myself once and they shot at me. Nobody up there wanted the fever.”',
          '“I shot two, before the fire,” Jack says. He pulls his knees up hand hugs them. “A group tried to escape and we shouted for them to stop. They wouldn’t listen. I was scared they would spread the sickness. Aunt Alice said we had to.”',
          'I write slow, giving them both time. The hardest part is keeping the emotion from my own face. I’ll cry later, when I’m alone with Julia and the full narrative is safely in the gun safe.',
          '“There was ten or so left in the house, mostly too sick to move,” Quinn says quietly. “Food couldn’t save them anymore, and every bit counted for us. They were gonna die, no matter what. I know that. Still don’t make it right, what we did.”',
          'A breeze whips through the trees and for a few seconds, orange leaves blow sideways like rain. I turn my face toward the afternoon sun and feel warmth. This ugly new world still has beauty in it.',
          '“Elias and his brother used gasoline to get it going,” Quinn goes on. “Me and Jack were on overwatch in case anybody tried to run again. Nobody did.”',
          'Jack hangs his head, shoulders shifting in a silent sob. Quinn leaves the rock to cradle his cousin, both arms wrapped tight around the boy. I catch the perfect half of Julia’s face watching us from behind her post. She nods.',
          '“Do you remember any names?” I ask. “We try to be as accurate with each account as possible.”',
          '“They didn’t have like, a leader,” Quinn says. “But the guy who did all the talking was named John. Said he was a pastor.”',
          'I write that down. “And they were all adults?”',
          'Julia and I debated that question over and over. If I asked what I really wanted to know—<i>were there any kids</i>—it sounds like an interrogation. I need to tread carefully for the confession to go on.',
          '“There was a baby, I think,” Jack says. “A woman was holding it really close. I never heard it cry, so, I wasn’t sure if it was still alive. We had that around here, the first year. Parents holding onto their kids….after.”',
          'A bell clangs in the distance. <i>Clang clang clang</i>. Dinner, maybe. I felt the story ending, but wanted an epilogue. Julia and I have been searching so long for it.',
          'Then Quinn says, “There were kids, in the breakout group. I remember because I thought I was seeing double. They looked the same.”',
          'My throat constricts. Movement to my right: Julia walking silently toward us, knife out.',
          '<i>No</i>. This cannot be how our search ends.',
          '“They looked the same,” I repeat, praying that this new world with all its cruelty will not deliver more. Wondering how we will explain Quinn and Jack’s disappearance if Julia gets her justice. If the first swing of my staff will knock Jack out or kill him. “What do you mean?”',
          '“Twins.” It’s almost a whisper. “They were twins. Couldn’t been more than five.”',
          '<i>Six</i>. They always looked small. Mom said that’s because she had them early. Nine days they spent in the hospital, kept alive by machines and nurses.',
          '“That’s who you shot?” I ask Jack. I see them fleeing into the darkness, legs motoring like in my baseball dream.',
          '<i>Run, boys. Run. Faster.</i>',
          'Julia stops three steps away, tears streaming down the unburned side of her face. The other eye won’t cry anymore. I wrap my fingers around the smooth white pine.',
          '<i>Run, Abe.</i>',
          '<i>Run, Theo.</i>',
          '“No.” Jack sniffles, shaking his head. “I shot an older man and lady. The others got away.”'
        ],
        dramaticMomentIndex: 34
      }
    ]
  }
};

// --- APP STATE ---
let currentStoryId = 'overgrown';
let currentChapterIdx = 0;
let userComfortSettings = {
  fontFamily: 'auto',
  fontSize: 18,
  lineHeight: 1.6
};
let canvasBg = null;

// Mock database of beta feedback loaded from localStorage
let betaNotes = JSON.parse(localStorage.getItem('aura_reader_feedback') || '[]');
// Real-time reader mood data (for drawing tension graph)
let moodLogs = JSON.parse(localStorage.getItem('aura_reader_moods') || '[]');

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  // Initialize canvas
  canvasBg = new CanvasBackground('bg-canvas');
  
  // Set initial story
  loadStory(currentStoryId, currentChapterIdx);
  
  // Setup Event Listeners
  setupEventListeners();
  
  // Load feedback lists
  updateFeedbackUI();
  
  // Render visual pacing map
  renderPacingMap();
  
  // Set initial settings values
  applyComfortSettings();
});

// --- STORY MANAGEMENT ---
function loadStory(storyId, chapterIdx = 0) {
  const story = STORIES[storyId];
  if (!story) return;

  currentStoryId = storyId;
  currentChapterIdx = chapterIdx;
  
  // Apply story theme to body
  applyTheme();

  // Populate viewport
  const viewport = document.getElementById('story-viewport');
  viewport.innerHTML = '';

  // Cover page if chapterIdx is 0
  if (chapterIdx === 0) {
    const cover = document.createElement('div');
    cover.className = 'story-cover';
    cover.innerHTML = `
      <h1>${story.title}</h1>
      <div class="author">by ${story.author}</div>
      <div class="synopsis">${story.synopsis}</div>
      <button id="start-reading-btn" class="start-reading-btn">Start Reading</button>
    `;
    viewport.appendChild(cover);
    
    // Add event listener to start button
    cover.querySelector('#start-reading-btn').addEventListener('click', () => {
      // Jumps straight to reading paragraphs
      const firstPara = document.querySelector('.reading-paragraph');
      if (firstPara) firstPara.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Load Chapter Content
  const chapter = story.chapters[chapterIdx];
  // Strip "Chapter X: " prefix from title for the navbar display
  const displayTitle = chapter.title.replace(/^Chapter\s+\d+:\s*/i, '');
  document.getElementById('current-chapter-title').textContent = displayTitle;

  // Add Chapter Title Header directly at the top of the text viewport
  const chapterHeader = document.createElement('h2');
  chapterHeader.className = 'story-chapter-header';
  chapterHeader.textContent = displayTitle;
  viewport.appendChild(chapterHeader);
  
  // Insert paragraphs
  chapter.paragraphs.forEach((text, idx) => {
    const p = document.createElement('p');
    p.className = 'reading-paragraph';
    p.dataset.paraIndex = idx;
    p.innerHTML = text;
    
    // Inline paragraph overlays for Chapter 1
    if (chapterIdx === 0) {
      if (idx === 1) {
        // Paragraph 2: Mule named Eliza
        const overlay = document.createElement('div');
        overlay.className = 'para-overlay-right';
        overlay.innerHTML = `<img src="/mule-eliza.jpg" alt="Eliza the mule" />`;
        p.appendChild(overlay);
      } else if (idx === 6) {
        // Paragraph 7: Bullet-holed car
        const overlay = document.createElement('div');
        overlay.className = 'para-overlay-right';
        overlay.innerHTML = `<img src="/bullet-car.jpg" alt="Bullet-holed car panel" />`;
        p.appendChild(overlay);
      } else if (idx === 19) {
        // Paragraph 20: Prosthetic leg inspection
        const overlay = document.createElement('div');
        overlay.className = 'para-overlay-right';
        overlay.innerHTML = `<img src="/prosthetic-leg.jpg" alt="Prosthetic leg inspection" />`;
        p.appendChild(overlay);
      }
    }
    
    // Highlight if this is marked as a dramatic moment in the metadata
    if (chapter.dramaticMomentIndex === idx) {
      p.classList.add('drama-section');
    }

    // Load comment badge count
    const commentCount = countCommentsForParagraph(storyId, chapterIdx, idx);
    p.setAttribute('data-comment-count', commentCount);
    
    if (commentCount > 0) {
      p.classList.add('has-notes');
    }

    // Click handler for inline commenting
    p.addEventListener('click', (e) => {
      e.stopPropagation();
      openCommentBubble(p, e);
    });

    viewport.appendChild(p);
  });
  
  // Footer navigation at the bottom of the reading content
  if (chapterIdx < story.chapters.length - 1) {
    const nextChapter = story.chapters[chapterIdx + 1];
    const nextCleanTitle = nextChapter.title.replace(/^Chapter\s+\d+:\s*/i, '');
    
    const footerNav = document.createElement('div');
    footerNav.className = 'reading-footer-nav';
    footerNav.innerHTML = `
      <button class="footer-next-btn">
        Next Chapter: ${nextCleanTitle} <span class="footer-arrow">→</span>
      </button>
    `;
    
    footerNav.querySelector('.footer-next-btn').addEventListener('click', () => {
      loadStory(storyId, chapterIdx + 1);
    });
    
    viewport.appendChild(footerNav);
  } else {
    // End of available chapters message
    const footerNav = document.createElement('div');
    footerNav.className = 'reading-footer-nav';
    footerNav.innerHTML = `
      <div class="end-of-story-message">
        <h3>End of Available Chapters</h3>
        <p>Thank you for beta reading <strong>${story.title}</strong>!</p>
        <p style="font-size: 0.85rem; opacity: 0.7; margin-top: 8px;">Please click the <strong>Copy Notes</strong> button in the sidebar to share your feedback with the author.</p>
      </div>
    `;
    viewport.appendChild(footerNav);
  }

  // Update navigation buttons
  document.getElementById('prev-chapter-btn').disabled = chapterIdx === 0;
  document.getElementById('next-chapter-btn').disabled = chapterIdx === story.chapters.length - 1;

  // Reset scroll position of reading pane
  document.querySelector('.reading-pane').scrollTop = 0;
  updateScrollProgress();

  // Redraw pacing map for current story/chapter
  renderPacingMap();
}

function applyTheme() {
  document.body.className = '';
  document.body.classList.add('theme-overgrown');
  
  // Update canvas
  if (canvasBg) {
    canvasBg.setTheme('overgrown');
  }
}

// --- COMMENTS & FEEDBACK SYSTEM ---
function countCommentsForParagraph(storyId, chapterIdx, paraIdx) {
  return betaNotes.filter(note => 
    note.storyId === storyId && 
    note.chapterIdx === chapterIdx && 
    note.paraIdx === paraIdx
  ).length;
}

function openCommentBubble(paraElement, event) {
  const bubble = document.getElementById('comment-bubble');
  const preview = document.getElementById('paragraph-preview');
  const existingContainer = document.getElementById('existing-comments');
  const paraIdx = parseInt(paraElement.dataset.paraIndex);
  
  // Set paragraph details
  preview.textContent = paraElement.textContent;
  bubble.dataset.paraIndex = paraIdx;
  
  // Load existing comments
  const comments = betaNotes.filter(note => 
    note.storyId === currentStoryId && 
    note.chapterIdx === currentChapterIdx && 
    note.paraIdx === paraIdx
  );
  
  existingContainer.innerHTML = '';
  if (comments.length === 0) {
    existingContainer.innerHTML = '<div class="empty-state">No comments yet. Be the first to leave a note!</div>';
  } else {
    comments.forEach(c => {
      const div = document.createElement('div');
      div.className = 'existing-comment';
      
      let icon = '❤️';
      if (c.category === 'critique') icon = '⚠️';
      if (c.category === 'typo') icon = '✏️';
      if (c.category === 'question') icon = '❓';

      div.innerHTML = `
        <div class="existing-comment-header">
          <span class="existing-comment-cat">${icon} ${c.category}</span>
          <button class="delete-comment-btn" style="background: none; border: none; color: #ff5252; cursor: pointer; font-size: 0.7rem; opacity: 0.6; transition: opacity 0.2s;">Delete</button>
        </div>
        <div style="margin-top: 4px; word-break: break-word;">${escapeHtml(c.text)}</div>
      `;
      
      div.querySelector('.delete-comment-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        deleteNote(c.timestamp);
      });
      
      existingContainer.appendChild(div);
    });
  }

  // Calculate coordinates to float the bubble next to the paragraph
  const rect = paraElement.getBoundingClientRect();
  const readingPane = document.querySelector('.reading-pane');
  const paneRect = readingPane.getBoundingClientRect();
  
  bubble.classList.remove('hidden');
  
  // Calculate relative top scroll and offset
  const relativeTop = rect.top - paneRect.top + readingPane.scrollTop;
  
  // Position bubble on right side of content pane (desktop style)
  let topPos = relativeTop + rect.height / 2 - bubble.offsetHeight / 2;
  let leftPos = rect.left - paneRect.left + rect.width / 2 - bubble.offsetWidth / 2;
  
  // Constrain bubble within reading pane
  if (window.innerWidth > 768) {
    // Desktop layout: place bubble slightly aligned right
    leftPos = Math.min(paneRect.width - bubble.offsetWidth - 20, rect.right - paneRect.left + 15);
    topPos = relativeTop;
  } else {
    // Mobile: center on paragraph
    leftPos = Math.max(10, (paneRect.width - bubble.offsetWidth) / 2);
    topPos = relativeTop + rect.height + 10;
  }

  bubble.style.top = `${topPos}px`;
  bubble.style.left = `${leftPos}px`;
}

function handleCommentSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('comment-input');
  const category = document.getElementById('comment-category').value;
  const bubble = document.getElementById('comment-bubble');
  const paraIdx = parseInt(bubble.dataset.paraIndex);
  
  if (!input.value.trim()) return;

  const newNote = {
    storyId: currentStoryId,
    chapterIdx: currentChapterIdx,
    paraIdx: paraIdx,
    text: input.value.trim(),
    category: category,
    timestamp: Date.now(),
    scrollDepth: document.querySelector('.reading-pane').scrollTop / document.querySelector('.story-viewport').scrollHeight
  };

  betaNotes.push(newNote);
  localStorage.setItem('aura_reader_feedback', JSON.stringify(betaNotes));
  
  // Update visual indicators in the paragraph
  const p = document.querySelector(`.reading-paragraph[data-para-index="${paraIdx}"]`);
  if (p) {
    const commentCount = countCommentsForParagraph(currentStoryId, currentChapterIdx, paraIdx);
    p.setAttribute('data-comment-count', commentCount);
    p.classList.add('has-notes');
  }

  // Clear and close
  input.value = '';
  bubble.classList.add('hidden');
  
  // Update UI lists & pacing map (which plots comments too)
  updateFeedbackUI();
  renderPacingMap();
}

function updateFeedbackUI() {
  const container = document.getElementById('feedback-list');
  const exportBtn = document.getElementById('export-notes-btn');
  container.innerHTML = '';
  
  const myNotes = betaNotes.filter(n => n.storyId === currentStoryId);
  
  if (myNotes.length === 0) {
    container.innerHTML = '<div class="empty-state">Click paragraphs in the text to leave inline annotations.</div>';
    if (exportBtn) exportBtn.style.display = 'none';
    return;
  }
  if (exportBtn) exportBtn.style.display = 'block';

  myNotes.forEach((n, idx) => {
    const chapterTitle = STORIES[n.storyId].chapters[n.chapterIdx].title;
    const div = document.createElement('div');
    div.className = 'feedback-item';
    
    let icon = '❤️';
    if (n.category === 'critique') icon = '⚠️';
    if (n.category === 'typo') icon = '✏️';
    if (n.category === 'question') icon = '❓';

    div.innerHTML = `
      <div class="feedback-item-header">
        <span class="feedback-item-tag">${icon} ${n.category}</span>
        <span style="display: flex; gap: 8px; align-items: center;">
          <span style="opacity: 0.5;">${chapterTitle}</span>
          <button class="delete-sidebar-note-btn" style="background: none; border: none; color: #ff5252; cursor: pointer; font-size: 0.85rem; opacity: 0.6; padding: 0 4px; transition: opacity 0.2s;" title="Delete Note">&times;</button>
        </span>
      </div>
      <div class="feedback-item-text">"${escapeHtml(n.text)}"</div>
    `;

    // Click trash to delete note
    div.querySelector('.delete-sidebar-note-btn').addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent scrollIntoView handler
      deleteNote(n.timestamp);
    });

    // Click item to scroll to that paragraph
    div.addEventListener('click', () => {
      if (currentChapterIdx !== n.chapterIdx) {
        loadStory(n.storyId, n.chapterIdx);
      }
      setTimeout(() => {
        const p = document.querySelector(`.reading-paragraph[data-para-index="${n.paraIdx}"]`);
        if (p) {
          p.scrollIntoView({ behavior: 'smooth', block: 'center' });
          p.style.backgroundColor = 'rgba(var(--accent-rgb), 0.15)';
          setTimeout(() => {
            p.style.backgroundColor = '';
          }, 2000);
        }
      }, 100);
    });

    container.appendChild(div);
  });
}

function deleteNote(timestamp) {
  // Filter out the note
  betaNotes = betaNotes.filter(n => n.timestamp !== timestamp);
  localStorage.setItem('aura_reader_feedback', JSON.stringify(betaNotes));
  
  // Refresh UI
  updateFeedbackUI();
  renderPacingMap();

  // If the popup is open for a paragraph, refresh its comments
  const bubble = document.getElementById('comment-bubble');
  if (bubble && !bubble.classList.contains('hidden')) {
    const paraIdx = parseInt(bubble.dataset.paraIndex);
    const paraElement = document.querySelector(`.reading-paragraph[data-para-index="${paraIdx}"]`);
    if (paraElement) {
      openCommentBubble(paraElement);
    }
  }

  // Refresh comment badges on all paragraph tags
  document.querySelectorAll('.reading-paragraph').forEach((p, idx) => {
    const count = countCommentsForParagraph(currentStoryId, currentChapterIdx, idx);
    p.setAttribute('data-comment-count', count);
    if (count > 0) {
      p.classList.add('has-notes');
    } else {
      p.classList.remove('has-notes');
    }
  });
}

// --- MOOD LOGGING & PACING MAP CANVAS ---
function selectMood(mood) {
  // Highlight active button
  document.querySelectorAll('.mood-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mood === mood);
  });

  // Calculate current scroll position percentage
  const readingPane = document.querySelector('.reading-pane');
  const scrollTotal = readingPane.scrollHeight - readingPane.clientHeight;
  const scrollPercent = scrollTotal > 0 ? readingPane.scrollTop / scrollTotal : 0;

  // Log mood
  const moodVal = {
    storyId: currentStoryId,
    chapterIdx: currentChapterIdx,
    mood: mood,
    scrollPercent: scrollPercent,
    timestamp: Date.now()
  };

  moodLogs.push(moodVal);
  localStorage.setItem('aura_reader_moods', JSON.stringify(moodLogs));

  // Trigger brief canvas reaction
  if (canvasBg) {
    if (mood === 'tense') {
      canvasBg.scrollSpeed = 15;
    } else if (mood === 'excited') {
      canvasBg.scrollSpeed = 25;
    } else if (mood === 'melancholy') {
      canvasBg.scrollSpeed = 1;
    } else if (mood === 'peaceful') {
      canvasBg.scrollSpeed = 0;
    }
  }

  // Redraw map
  renderPacingMap();
}

function renderPacingMap() {
  const canvas = document.getElementById('pacing-map-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const width = canvas.offsetWidth;
  const height = canvas.offsetHeight;
  
  // Set internal resolution matching DOM scale
  canvas.width = width;
  canvas.height = height;

  ctx.clearRect(0, 0, width, height);

  // Load mood logs for the current story/chapter
  const logs = moodLogs.filter(l => l.storyId === currentStoryId && l.chapterIdx === currentChapterIdx);
  
  // Draw base level line
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, height / 2);
  ctx.lineTo(width, height / 2);
  ctx.stroke();

  // Graph tension curve. Default baseline curve if no records.
  const points = [];
  const resolution = 20; // 20 steps across width
  
  // Standard preset curve to make map look interesting out-of-the-box
  const defaultTension = (x) => {
    // A sine wave curve representing chapter pacing (rising tension near the end)
    return 0.3 + 0.2 * Math.sin(x * Math.PI * 0.8) + (x > 0.8 ? 0.4 : 0);
  };

  // Build the tension curve points
  for (let i = 0; i <= resolution; i++) {
    const xPct = i / resolution;
    const xPos = xPct * width;
    
    // Mix default preset curve with user recorded moods if any
    let tension = defaultTension(xPct);
    
    const localMoods = logs.filter(l => Math.abs(l.scrollPercent - xPct) < 0.15);
    if (localMoods.length > 0) {
      // Average local logged moods
      const avgTension = localMoods.reduce((acc, m) => {
        let val = 0.5; // neutral
        if (m.mood === 'tense') val = 0.9;
        if (m.mood === 'excited') val = 0.8;
        if (m.mood === 'melancholy') val = 0.3;
        if (m.mood === 'peaceful') val = 0.1;
        return acc + val;
      }, 0) / localMoods.length;
      
      tension = tension * 0.4 + avgTension * 0.6; // Blend
    }

    const yPos = height - (tension * (height - 20) + 10);
    points.push({ x: xPos, y: yPos });
  }

  // Draw gradient under curve
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  const accentColor = getComputedStyle(document.body).getPropertyValue('--accent-color').trim() || '#7ab38d';
  gradient.addColorStop(0, `${accentColor}33`); // 20% opacity
  gradient.addColorStop(1, `${accentColor}00`); // transparent

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(0, height);
  points.forEach((p, idx) => {
    ctx.lineTo(p.x, p.y);
  });
  ctx.lineTo(width, height);
  ctx.closePath();
  ctx.fill();

  // Draw tension path line
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  points.forEach((p, idx) => {
    if (idx === 0) ctx.moveTo(p.x, p.y);
    else {
      const prev = points[idx - 1];
      const xc = (prev.x + p.x) / 2;
      const yc = (prev.y + p.y) / 2;
      ctx.quadraticCurveTo(prev.x, prev.y, xc, yc);
    }
  });
  ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
  ctx.stroke();

  // Draw small dots representing comments left by beta readers
  const comments = betaNotes.filter(n => n.storyId === currentStoryId && n.chapterIdx === currentChapterIdx);
  comments.forEach(c => {
    const xPos = c.scrollDepth * width;
    const idx = Math.min(points.length - 1, Math.max(0, Math.floor(c.scrollDepth * resolution)));
    const yPos = points[idx].y;

    ctx.beginPath();
    ctx.arc(xPos, yPos, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 1.5;
    ctx.fill();
    ctx.stroke();
  });
}

// --- EVENT HANDLERS ---
function setupEventListeners() {
  // Chapter navigation
  document.getElementById('prev-chapter-btn').addEventListener('click', () => {
    if (currentChapterIdx > 0) {
      loadStory(currentStoryId, currentChapterIdx - 1);
    }
  });

  document.getElementById('next-chapter-btn').addEventListener('click', () => {
    const story = STORIES[currentStoryId];
    if (currentChapterIdx < story.chapters.length - 1) {
      loadStory(currentStoryId, currentChapterIdx + 1);
    }
  });

  // Sidebar toggle
  const sidebar = document.getElementById('app-sidebar');
  document.getElementById('toggle-sidebar-btn').addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
  });

  // Settings Modal open/close
  const settingsModal = document.getElementById('settings-modal');
  document.getElementById('open-settings-btn').addEventListener('click', () => {
    settingsModal.classList.remove('hidden');
  });

  document.getElementById('close-settings-modal-btn').addEventListener('click', () => {
    settingsModal.classList.add('hidden');
  });

  window.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
      settingsModal.classList.add('hidden');
    }
    const bubble = document.getElementById('comment-bubble');
    if (!bubble.classList.contains('hidden') && !bubble.contains(e.target)) {
      bubble.classList.add('hidden');
    }
  });

  document.getElementById('close-comment-btn').addEventListener('click', () => {
    document.getElementById('comment-bubble').classList.add('hidden');
  });

  document.getElementById('comment-form').addEventListener('submit', handleCommentSubmit);

  const fontSelect = document.getElementById('font-family-select');
  const sizeSlider = document.getElementById('font-size-slider');
  const heightSlider = document.getElementById('line-height-slider');

  fontSelect.addEventListener('change', (e) => {
    userComfortSettings.fontFamily = e.target.value;
    applyComfortSettings();
  });

  sizeSlider.addEventListener('input', (e) => {
    userComfortSettings.fontSize = parseInt(e.target.value);
    document.getElementById('font-size-val').textContent = `${e.target.value}px`;
    applyComfortSettings();
  });

  heightSlider.addEventListener('input', (e) => {
    userComfortSettings.lineHeight = parseFloat(e.target.value);
    document.getElementById('line-height-val').textContent = e.target.value;
    applyComfortSettings();
  });

  const intensitySlider = document.getElementById('intensity-slider');
  intensitySlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    document.getElementById('intensity-val').textContent = `${val}%`;
    if (canvasBg) {
      canvasBg.setIntensity(val);
    }
  });

  const morphToggle = document.getElementById('scroll-morph-toggle');
  morphToggle.addEventListener('change', (e) => {
    if (canvasBg) {
      canvasBg.setScrollMorph(e.target.checked);
    }
  });

  document.querySelectorAll('.mood-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectMood(btn.dataset.mood);
    });
  });

  document.querySelector('.reading-pane').addEventListener('scroll', throttle(handleReadingPaneScroll, 50));

  // Export Notes Click Handler
  const exportBtn = document.getElementById('export-notes-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const myNotes = betaNotes.filter(n => n.storyId === currentStoryId);
      if (myNotes.length === 0) return;

      let text = `### Beta Feedback for "${STORIES[currentStoryId].title}" by ${STORIES[currentStoryId].author}\n\n`;
      
      const grouped = {};
      myNotes.forEach(n => {
        if (!grouped[n.chapterIdx]) grouped[n.chapterIdx] = [];
        grouped[n.chapterIdx].push(n);
      });

      Object.keys(grouped).sort().forEach(chapterIdxKey => {
        const chapterIdx = parseInt(chapterIdxKey);
        const chapter = STORIES[currentStoryId].chapters[chapterIdx];
        text += `#### ${chapter.title}\n`;
        
        grouped[chapterIdx].sort((a,b) => a.paraIdx - b.paraIdx).forEach(n => {
          let categoryEmoji = '❤️';
          if (n.category === 'critique') categoryEmoji = '⚠️';
          if (n.category === 'typo') categoryEmoji = '✏️';
          if (n.category === 'question') categoryEmoji = '❓';

          const rawPara = chapter.paragraphs[n.paraIdx] || '';
          const cleanPara = rawPara.replace(/<[^>]*>/g, '');
          const snippet = cleanPara.length > 60 ? cleanPara.substring(0, 57) + '...' : cleanPara;
          
          text += `- **Paragraph ${n.paraIdx + 1}** (${categoryEmoji} ${n.category}):\n`;
          text += `  *Context*: "${snippet}"\n`;
          text += `  *Note*: "${n.text}"\n\n`;
        });
      });

      navigator.clipboard.writeText(text).then(() => {
        const originalText = exportBtn.textContent;
        exportBtn.textContent = 'Copied!';
        exportBtn.style.background = '#2e7d32';
        setTimeout(() => {
          exportBtn.textContent = originalText;
          exportBtn.style.background = 'rgba(255,255,255,0.06)';
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy: ', err);
        alert('Could not copy automatically. Check console logs.');
      });
    });
  }
}

// --- READING VIEW INTERACTIONS & PROGRESS ---
function handleReadingPaneScroll(e) {
  const readingPane = e.target;
  const scrollTop = readingPane.scrollTop;
  
  if (canvasBg) {
    canvasBg.updateScroll(scrollTop);
  }

  updateScrollProgress();

  // Dynamic dramatic transitions
  const dramaEl = document.querySelector('.drama-section');
  if (dramaEl) {
    const rect = dramaEl.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const distToCenter = Math.abs((rect.top + rect.height/2) - viewportHeight/2);
    
    if (distToCenter < 180) {
      // Trigger rain ripples when near the dramatic moment, but do NOT shift background gradient contrast
      if (canvasBg && Math.random() > 0.96) {
        canvasBg.triggerElectricalSpark();
      }
    }
  }
}

function updateScrollProgress() {
  const readingPane = document.querySelector('.reading-pane');
  const scrollTotal = readingPane.scrollHeight - readingPane.clientHeight;
  const scrollPercent = scrollTotal > 0 ? readingPane.scrollTop / scrollTotal : 0;
  
  document.getElementById('scroll-progress-fill').style.width = `${scrollPercent * 100}%`;
  
  const mapMarker = document.getElementById('pacing-map-marker');
  if (mapMarker) {
    const mapContainerWidth = document.querySelector('.pacing-map-container').offsetWidth;
    mapMarker.style.left = `${scrollPercent * (mapContainerWidth - 2)}px`;
  }
}

function getDramaBgGradient(storyId, intensity) {
  // Overgrown drama: temporary pulsing gray-to-slate-silver shadow glow
  return `linear-gradient(to bottom, #161819 0%, rgba(55, 65, 75, ${0.7 + intensity * 0.3}) 100%)`;
}

function applyComfortSettings() {
  const viewport = document.getElementById('story-viewport');
  if (!viewport) return;

  if (userComfortSettings.fontFamily === 'dyslexic') {
    viewport.classList.add('font-dyslexic');
    viewport.style.fontFamily = '';
  } else {
    viewport.classList.remove('font-dyslexic');
    viewport.style.fontFamily = userComfortSettings.fontFamily === 'auto' ? '' : userComfortSettings.fontFamily;
  }

  viewport.style.setProperty('--user-font-size', `${userComfortSettings.fontSize}px`);
  viewport.style.setProperty('--user-line-height', userComfortSettings.lineHeight);
}

// --- HELPER UTILITIES ---
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}
