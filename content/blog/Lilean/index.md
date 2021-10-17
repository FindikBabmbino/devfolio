---
title: Lilean
date: ''
description: 'Prototype game I have been working on'
---

##About The Project

Lilean was an idea I had at the start of the year, the idea was that I wanted a Half-Life esque fps story based game that had fast physics based combat.
I was always facinated with telekinesis in games, and felt like there could be a game about it where it is used fully, games like HL2 and Bioshock used it but it was not the centerpiece,
development of Lilean started with just me and we grew in size quick.

But every team needs a cool name and a logo, after a little thought we came up with this little piece.

![Logo](./galipguluplogo.png)

Just like that Galip Gulup was born!

##My Duties

I was the only programmer on this prototype, because of that I had to code everything from AI, player abilities, player controller, UI, Save Systems, Event systems and so on.
because of this there is a lot to talk about and I don't want to bore anybody so I will just give small explanations on how I tackled some systems. I also tackled VFX, Level Design and some SFX.

##Player Controller

Since Lilean is a physics based game and the player has certain abilities, I did not use Unity's pre existing player controller, I wrote my own controller that had slope detection, ground detection, player movement, and ability compatibility.

##Telekinesis

This was an extremely important part of the game, and has gone through a lot of iterations (like a lot :/), but the simple idea was:

-If player is pointing at object that can be picked up change shader to reflect it can be picked up
-If the player picks it up move to object to the parent by doing a simple vector math and once it reaches it child it to that parent and make it kinematic.
-If the player drops it unparent it and make it non kinematic.
-If the player decides to throw it unparent it and make it non kinematic first and then add force on top of it.

The damage of the thrown objects were calculated by their speed and mass. The player is also able to normally pick up objects which runs on the same system with a different parent and force values.

##Bounce 

Bounce was simple to do on papper but proved to have some challenges with balancing and had some bugs with the collision detection system, but the basic idea was adding a certain force to the player and changing the drag to make it so that the player would glide rather then be a human rocket, also enabling the player controlls to be used in the air to controll their movement.
One of the things I added to the bounce to make it more balance was add a timer to it, after a certain time the player would lose the ability to controll themselves in the air and the drag would return back to the normal drag turning the player into a human rocket.

##Weapon System

Early on I decided on making an universal weapon system that had everything, with this system the designer can select if it is burst or not(or have selection for both), being able to change damage falloff distance, fire rate and so on and so forth
there was another weapon that works in the game that does not appear in the prototype that ran on the same system as the P50.

##AI

The AI in the game uses a simple finite state machine that uses enums, I decided to go with an enum system because I knew that the grunt and the grenadier was going to use the same system, the only drawback was that the fly enemy needed a new system and the scaliblity was bad.
AI is customisable depending on what kind of enemy you want being able to change fire delay walk speed and distances of notice, the enemies don't really use a conce to detect the player but rather a distance, I went with this because it made the enemies more hostile, making the enemies hard was one of the decisions I made early be it from their fire rate to damage rate, I wanted the player to be constantly on the move.

##Event System

Now this bad boy deals with everything dealing with events, be it from enabling AI, audio, world events, enabling game objects, UI elements and so on, it works on a trigger based system depending on what is selected something might happen when the player enters the trigger, or when they enter the trigger a timer might start, when the timer reaches zero a event happens, the other option is killing certain enemies while in the event space,
and these are able to be chained toghether with many states, it works with unity events and is designer friendly.

##The Boring Stuff

I could talk about the data manager, the save and load, UI, and other managers but they are not that interesting or noteworthy in my opinion, and like I said I would rather fill this blog with simple explanations and talk about the interesting systems.
Now let's get this done, finally I'll talk about the vfx and level design.

##VFX

Everything related to vfx in this game was done by me, it is rather simple since I am not that skilled at it but it was fun none the less.

##Level Design

The prototype map was made by me, it went through lots of iterations and changes, what we knew from the begining was that the map was going to be a part of the main story (for reusability sake) and was going to feature everything the player could do with a healthy lenght, this lacked from the early versions but I am satisfied with the current version we have.
The map is based from the "Rooftops" and a part of the "Streets" chapte from the game.

##End notes

Lilean was always supposed to be homework for us, getting to know how to make games and see the struggles it had, we don't know if Lilean will every be a full game but we took away a lot from it, it was a real learning experience.