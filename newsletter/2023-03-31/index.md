---
slug: newsletter-9
title: Newsletter 9
authors: [mambo, sheliza]
tags: [ktor, test, compose, modifiers, animations, kotlin]
---

Hello 👋 there droids and welcome back to another newsletter edition for March 2023. We hope you enjoy it and won't speed through it like the CX-5 :wink: :wink:

## Monthly Meetup
Starting us off is our monthly meetup. Given that international women's day came around not that long ago, it was an all-ladies affair with just female speakers taking the stage.

### Testing Our Endpoints: Ktor
The first session led by [Rachel Nafula](https://twitter.com/nayfill) shed light on the importance of Ktor for any developer. We learned a lot from how it simply connects the client to the server by making a request and ensuring an appropriate response is returned. 
In the same breath, we were reminded the importance of **testing** our code before pushing to production, to ultimately prevent inevitable disaster. It was also brought to our attention that there two types of tests ie: manual & automated.
For demonstration purposes, she used _Insomnia_ but postman(and the like) is also viable.

### Compose Modifier
The second session by [Beatrice Kinya](https://twitter.com/B__Kinya) hailed Compose Modifiers from the word go. As the great migration from the traditional view system to compose is ongoing it was refreshing to understand a little bit more about Compose Modifier. We got to learn a few concepts we can use to change the appearance and behavior of composables.ie the order of precedence and constraints. We then proceeded into the types of Modifiers (add content). Lastly, we learnt of the three phases of compose which are; Composition, Layout and Drawings!

### Let's Animate In Compose
Last but not least the final session by [Jacqui Gitau](https://twitter.com/Jacqui_Gitau) was all about animations. It is imperative to mention how animations bring our apps to life and the little interactions contribute to a great user experience. In the final session, we learned how to animate, why we should animate and the overall benefits of adding animations to our apps. From sliding in to fading out, we enjoyed how simple she made animations feel.

We enjoyed this month's meetup and thank all the speakers and attendees. We're looking forward to the next meetup!

### Kotlin Quiz
After a few jokes and not-so-few laughs the stage was set for a brief Kotlin quiz to warm up the afternoon. Droids tried to attempt the quizes one after the other with no winner was in sight, **until** [Victor Kabata](https://github.com/VictorKabata) and [Jane Waitara](https://github.com/janewaitara) emerged victorious to take the win home. 

If you'd also want to attempt the two question shared during the meetup, here they are :thumbsup:.

```kotlin
import junit.framework.TestCase.assertEquals
import junit.framework.TestCase.assertTrue

/**
 * Without changing anything in the main function. 
 * Ensure all the test cases pass
 */

fun main() {
    
    assertEquals(
        "Welcome to Android254!", // expected
        sayHello { "Android254" } // actual
    )
    assertEquals(
        listOf(2,4,7),  // expected
        listOf(1,1,2,3,3,3,4,5,5,6,6,6,7).getNonRepeated() // actual
    )
    
    println("Everything Passed!")
    
}
```

:::tip 
You can start by creating the `sayHello` & `getNonRepeated` function
:::

## KotlinConf'23
The official conference devoted to the Kotlin Programming Language is finally here. From April 12<sup>th</sup> to 14<sup>th</sup> join the [Livestream](https://www.youtube.com/watch?v=c4f4SCEYA5Q) and benefit from the array of topic to boost your Koltin skills. 

We can't mention KotlinConf without celebrating our two community members who'd be attending the conference in person. [Brian Mbigo](https://github.com/BKMbigo) was one of the winners of the Kotlin Multiplatform contest with his amazing [VisioZoezi](https://github.com/BKMbigo/VisioZoezi) app and [Harun Wangereka](https://github.com/wangerekaharun) with an excellent talk _**Transforming Farmer's Lives Using Android In Kenya**_ on April 13<sup>th</sup> from 6:15 pm to 7:00 pm EAT. 

We'll also have a **KotlinConf 2023 Global - Nairobi Edition** to learn more about what went down at KotlinConf'23 and share your opinions... don't forget to [RSVP](https://www.meetup.com/kotlinkenya/events/289891337/) and watch out for the upcoming CFS...

## KotlinBits
Sometimes all you need is a different perspective when learning the Kotlin language. [KotlinBits](https://kotlinbits.vercel.app/) aims at trying to explain every `Kotlin` concept in small bits and sizes. Watch out for even more content from their website and YouTube channel.

- [Website](https://kotlinbits.vercel.app/)
- [YouTube](https://www.youtube.com/@kotlinbits/)


## Featured 

|ARTICLES|
|:-------|
|[Introduction To Kotlin Programming](https://dev.to/dbriane208/module-one-introduction-to-kotlin-programming-101-3ed0) by Dbraine.|
|[Custom Compose Layouts](https://kinya.hashnode.dev/custom-compose-layouts-clf5ua9jw01mms1nv5k6d84zp) by Beatrice Kinya.|

|REPOSITORIES|
|:------|
|[NFT-App](https://github.com/MuindiStephen/NFT-App) by Stephen Muindi|
|[Mars Rover Photos](https://github.com/VictorKabata/Mars-Rover-Photos) by Victor Kabata|
|[Fibonacci](https://github.com/janewaitara/Fibonacci) by Jane Waitara|
|[Harry Porter API](https://github.com/KenStarry/Harry_Potter_API) by Ken Starry|

|VIDEOS|
|:------|
|[Mastering the Fundamentals of Android App Development](https://www.youtube.com/watch?v=QDaEPi21iEQ)|
|[Getting Started as an Android Developer: Tips and Tricks for Success](https://www.youtube.com/watch?v=i8jgfehuBf8)|
|[Becoming an Android Developer](https://www.youtube.com/watch?v=l9wVJc_UBP4&list=PLeaqhGP_N1FmsQUEWjr3CPTCo1QdWYp03&index=1&t=3s)|
|[Foreground Location : MVI Compose Weather App Pt.1](https://www.youtube.com/watch?v=92Idrz2ztPA)|

|Apps|
|:------|
|[CarRental](https://play.google.com/store/apps/details?id=com.carrentalchienja.carrental) by Chienja Dev|
|[Mingle - Find Singles](https://play.google.com/store/apps/details?id=com.flexcode.wedatecompose) by Felix Kariuki|
|[MealTime](https://play.google.com/store/apps/details?id=com.kanyideveloper.mealtime) by Joel Kanyi|

You can also suggest any article, library, video or podcast for upcoming newsletters. Click **[here](https://forms.gle/Dqr2pUHwMWzTfcSH7)** to submit!

That's it folks till next time, happy coding.

:::info
We'd love to hear your feedback. Click **[here](https://forms.gle/K59uM3jgjDLYwvbb6)** to submit any feedback.
:::