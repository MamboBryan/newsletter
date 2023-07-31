---
slug: newsletter-12
title: Newsletter 12 🥵
authors: [mambo, sheliza, Emmanuel Muturia]
tags: [july meetup, ioextendedpwani, droidconke2023]
---

Hey there Droids and Droidettes! How are you? Hopefully you are able to read this newsletter as we hear some of our brothers and sisters are suffering Web Dev, sorry DDoS issues. Nevertheless, Episode 12 is finally here and we cannot wait to share with you the highlights of July as recorded:

## July Meetup
Android254, in liaison with Kotlin Kenya organised the July Meetup which hosted the three legends, namely: [Somet Kipchilat](https://twitter.com/Sometkip), [Peter Chege](https://twitter.com/peter__me), and our esteemed Droidette [Michelle Wainaina](https://twitter.com/mishwainaina). They each gave quite the talks that covered the latest hacks (pun intended, iykyk) in developing for a modern era. Here is a rundown of their talks in order of appearance:

### Building for The Next Billion Users
Somet, Africa's Okayest Developer, kicked off the meetup by introducing the aidence to the concept of building products for the enxt billion users. He provided the case study of Native Languages as an example of factors that largely contribute to the success of a product (app) in a large sacle market. Somet supported his point by mentioning Android 13 Go as a product that prioritizes users with less capable devices with respect to system resources and specs. He summarized his session by reminding the audience that their products should prioritize:

- Accessibility and Localization
- Affordability and Usability
- Resilience and Low Bandwidth Connections
- Multilingual Support

He concluded by asking the audience to think about 'Glocalization', a term denoting the merging of Global and Local markets for your products, MPESA being an example.

### SealedX
The next talk was given by the Juja Boy himself, Peter Chege which was about the SealedX library in Kotlin. He introduced it by mentioning the agony that comes with repeatedly writing Sealed Interfaces in your project such as those used to define UI States that depend on a given outcome. Peter highlighted that besides using the Kotlin Symbol Processor (KSP), the SealedX library also used two annotations to automatically generate Sealed Classes/Interfaces: @ExtensiveSealed (For code that is meant to be generated multiple times) and @ExtensiveModel (To wrap around your Data Classes). Juja Boy concluded by showcasing a demo on the same using a custom project that consumed REST APIs. 

### Firebase Firestore: A Coroutines Story
The July Meetup speaker session was remarkably concluded by the legendary Droidette, Michelle Wainaina who talked about the introduction of Coroutines in Cloud Firestore. She kicked off by recapping Coroutines and how they affect app performance in Android (Kotlin obviously, J*va people please click off) before announcing their introduction in Firebase's Cloud Firestore. She also used a demo project to not only present the use of Coroutines in Cloud Firestore but to also teach the audience why it was important to first include a Coroutine Scope before anything else. As a bonus, Michelle used the Chat App use case to demonstrate how the choice between Cloud Firestore and Realtime DB in Firebase was a matter of tradeoffs.

## Google I/O Extended (Pwani Edition -> Android)
Hayawi hayawi huwa! This segment takes us all the way to the Coast where the Google I/O Extended: Pwani Edition event was held at the Aga Khan Academy. The Android community was well represented as it starred a hot line of speakers:

### Android Keynote
The Android Keynote was given by soon to be Android GDE, [Annunziata Kinya](https://twitter.com/AnnieKobia), who eloquently went through the latest features and developments in Android, the most exciting one being the stable release of Android Studio: Giraffe. Annunziata also detailed the release of various Jetpack Compose libraries and features such as Compose for TV (Now in Alpha), Support for Compose by other libraries such as Glide and the Jetpack Glance library which allows you to develop highly customizable yet elegant widgets optimized for Android phones, tablets and foladable homescreens using Jetpack Compose.

### Building A Data Layer That Fits Your Overall App Architecture
The first Android session was spearheaded by our dear Droidette Co-Captain and WTM Ambassador, [Jacquiline Gitau](https://twitter.com/Jacqui_Gitau). She took the audience through the steps and factors to consider when building a data layer that was congruent with the best practices of Clean Architecture. Her recommendations included both a Local and Network Data Source that were synched to allow for a single source of truth, mapping Internal Models to External Models, and the use of Mutex which as she explained was a Kotlin-first approach to allow for synchronized sharing of resources within your application.

### What's New in Kotlin for Android
The final talk in the Android segment was given by none other than the Chief Dish Washer himself, [Mambo Bryan](https://twitter.com/mambo_bryan). He gave a session that introduced the latest exciting features and developments in Kotlin, starting with the Kotlin 2.0 compiler which was said to reduce build time by half! He mentioned the Kotlin DSL for Gradle which oversaw the introduction of Kotlin as the default language for Gradle in new projects leading to precise code hinting, realtime syntax errors and which has a rich and available documentation for reference. 

## DroidCon Kenya 2023
Alright, if you have not yet signed up for DroidCon Kenya 2023 then what are you doing? Don't you want to be part of something that catapaults your understanding of Android? Aren't you afraid that if you wait too long then the Early Bird Tickets will be gone and you will not have caught the worm? Don't worry, just [Click Me](https://t.co/P50pBnrI92) and this can be our little secret...

## Call For Speakers (Monthly Meetup)
Interested in becoming a speaker for the upcoming monthly meetups? For real for real? Then stop what you are doing and head over [here](https://forms.gle/nM7PoQE2FHbXTzsx9) to make your aspiration a reality!

## Featured 

|ARTICLES|
|:-------|
|[Getting more concise with Kotlin Generics](https://otsembo.hashnode.dev/getting-more-concise-with-kotlin-generics)|
|[Experiment #1 (Genesis)](https://medium.com/@emmanuelmuturia/experimentone-69d327534f62)|
|[Experiment #2 (Fire Away)](https://medium.com/@emmanuelmuturia/experiment-2-fire-away-cd7986dc9e77)|
|[Experiment #3 (Service Denied)](https://medium.com/@emmanuelmuturia/experiment-3-69d6dba3b95d)|

|VIDEOS|
|:-------|
|[Pinterest UI](https://www.youtube.com/watch?v=u6VrY7TBOL0&t=10s)|
|[Advanced Kotlin: Advanced Functions](https://youtu.be/lEMhgHVE8l8?si=bKIXH2_UPmWFYVJR)|

|APPS|
|:------|
|[Ewave](https://play.google.com/store/apps/details?id=dev.ciox.ewaveapp)|

|REPOSITORIES|
|:------|
|[SafePass](https://github.com/robert-nganga/SafePass)|
|[KomposeCountryCodePicker](https://github.com/JoelKanyi/KomposeCountryCodePicker)| 
|[BeeTablesCompose](https://github.com/Breens-Mbaka/BeeTablesCompose)|

Got any other resources that you want to have featured? That's alright, cause all you have to do is [click me](https://forms.gle/nM7PoQE2FHbXTzsx9). That's it. Congratulate yourself for being a winner!

You can also suggest any article, library, video or podcast for upcoming newsletters. Click **[here](https://forms.gle/Dqr2pUHwMWzTfcSH7)** to submit!

Enjoyed reading this episode of our Kotlin Newsletter? Worry not, for we will be back soon with another one so stick around, will ya? Until next time, happy coding & *HAVE A NICE KOTLIN!*