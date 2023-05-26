---
slug: other-10
title: Other 10 😎
authors: [mambo, sheliza]
tags: [droidcon, kotlin,]
---

## Updates

### May 2023 Kotlin Challenge
As per the usual we have this month's challenge for those who'd like to test their mettle in the Kotlin language.

:::info
 This month we're giving away two Jetbrains licenses for the first two people to solve this month's challenge
:::

```kotlin
import junit.framework.TestCase.assertEquals
import junit.framework.TestCase.assertTrue

class PrintingScope(val separator: String = "|")

context(PrintingScope)
fun <K, V> Map<K,V>.customPrint(): String = this.map { (k,v) -> "$k:$v" }.joinToString("$separator")

fun main() {
    val scope = PrintingScope()
    val map = mapOf("a" to 1, "b" to 2, "c" to 3)
    assertEquals(
        "a:1|b:2|c:3", // expected
        evaluate(scope, map) // actual
    )
    println("Everything Passed!!!")
}

/**
 * Without changing anything above
 * Write an evaluate function that makes the test case pass
 */

```

:::tip 
You can start by creating the `evaluate` function
:::

## Droidcon Kenya Updates
The largest android developer event in Africa has finally announced it's dates. This year droidconke is happening from the **8<sup>th</sup> to 10<sup>th</sup> November 2023**. Ensure you clear your calendars and also look forward for the Call For Speakers (CFS). Follow the droidconke on [here](https://droidcon.co.ke/) for more updates. If you'd like to sponsor this event head over to [this](https://droidcon.co.ke/sponsors) page.

## KotlinConf'23 Videos
KotlinConf'23 happened a few months ago and we got a chance to listen to Kotlin updates along with very nice technical sessions. Incase you didn't have the opportunity to livestream, the recorded sessions have been uploaded on YouTube and you can watch them. Click [here](https://kotlinconf.com/talks/) for more. 

## Saving The Best For Last  :tada:
And this last one is truly the best news. We'd like to congratulate :tada: one of our community members [Beatrice Kinya](https://twitter.com/B__Kinya) on becoming an Android GDE (Google Developer Expert) 🤩. We're looking forward to more amazing contributions... :tada: You can also join us in congratulating her [here](https://twitter.com/B__Kinya/status/1659618615568506880). 🥳🥳🥳

## Featured 

|ARTICLES|
|:-------|
|[An In-depth overview of Android's Recyclerview - with Example](https://janetmutua.hashnode.dev/an-in-depth-overview-of-androids-recycler-view-with-example)|
|[Animating Content Size in Compose](https://jacquigitau.hashnode.dev/animating-content-size-in-compose)|
|[Firebase in Jetpack Compose (Authentication & Adding Data To Cloud Firestore)](https://medium.com/@emmanuelmuturia/firebase-in-jetpack-compose-authentication-adding-data-to-cloud-firestore-a6a8e5ebee19)|
|[Android Development with Jetpack Compose: The Future of Android UI Development](https://normannuthu.hashnode.dev/android-development-with-jetpack-compose-the-future-of-android-ui-development)|
|[Custom Theming in Jetpack Composenimating Content Size in Compose](https://kenstarry.hashnode.dev/custom-theming-in-jetpack-compose)|
|[Exploring Kotlin's Abstract Classes and Specialized Class Types](https://dev.to/dbriane208/exploring-kotlins-abstract-classes-and-specialized-class-types-a-guide-to-object-oriented-programming-concepts-2hpl)|

|REPOSITORIES|
|:------|
|[ML Kit Sample](https://github.com/BKMbigo/MLKit_Sample)|
|[Gamepedia](https://github.com/ndiritumichael/GamePedia-KMM)|
|[RecipeApp](https://github.com/robert-nganga/RecipeApp)|
|[Simple TODO List Ktor Backend](https://github.com/JayExtra/ktor-todo)|
|[OnBoarding](https://github.com/mtali/Onboarding)|

|VIDEOS|
|:------|
|[Migrating to Kotlin Scripts and Version Catalog](https://www.youtube.com/watch?v=nwORxiiKuEc)|
|[Error Handling and Unit Testing: MVI Compose Weather App](https://youtu.be/k4hXdkaWhvM)|

|Apps|
|:------|
|[Palette Lab](https://play.google.com/store/apps/details?id=com.risma.palettelab&pli=1)|

You can also suggest any article, library, video or podcast for upcoming newsletters, click **[here](https://forms.gle/Dqr2pUHwMWzTfcSH7)** to submit!

That's it folks till next time, happy coding & *HAVE A NICE KOTLIN!*