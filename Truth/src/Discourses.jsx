import React from "react";
import img1 from "./components/images/budhha.png";
import img2 from "./components/images/No-Excuse-For-Nonsense-1024x574-978x400.jpg";
import img3 from "./components/images/The-Quality-And-The-Riff-Raff-1024x678-978x400.jpg";
import img4 from "./components/images/Intellectuals-And-Influencers-1024x683-978x400.jpg";
import img5 from "./components/images/It-Is-Understandable-1024x681-978x400.jpg";
import img6 from "./components/images/Accessing-The-Real-1024x682-978x400.jpg";
const Discourses = () => {
  const toggleExpand = (event, sectionType) => {
    const clickedElement = event.currentTarget;
    const teaserSection = clickedElement.classList.contains('teaser') ? clickedElement : clickedElement.parentElement.querySelector('.teaser');
    const fullSection = clickedElement.classList.contains('full') ? clickedElement : clickedElement.parentElement.querySelector('.full');
  
    if (sectionType === 'teaser') {
      teaserSection.style.display = 'none';
      fullSection.style.display = 'block';
    } else {
      teaserSection.style.display = 'block';
      fullSection.style.display = 'none';
    }
  };
  
  
  return (
    <div>
      <h1 className="heading">DISCOURSES</h1>

      <img className="images" src={img1} />
      <h1 className="title">Where Buddha Went Wrong</h1>
      <article className="article" id="description">
      <section className="teaser" onClick={(e) => toggleExpand(e, 'teaser')} style={{ cursor: "pointer" }}>
          In realizing The Truth, it becomes apparent that its depth and complexities are violently removed from what humans have believed and been taught throughout the ages. Because it is so far removed from normal human concepts and tenets, and the status quo, the human has no way to process it. It practically requires an entirely […]
        </section>
        <section className="full" onClick={(e) => toggleExpand(e, 'full')} style={{ display: "none" }}>
        In realizing The Truth, it becomes apparent that its depth and complexities are violently removed from what humans have believed and been taught throughout the ages.

Because it is so far removed from normal human concepts and tenets, and the status quo, the human has no way to process it. It practically requires an entirely new mental machinery to digest it.

The human’s mind has been conditioned to the tenets and concepts it has been brainwashed by throughout the generations. The human’s Mind has adapted and conformed itself around these tenets and concepts.

To such a Mind, Truth is an entirely foreign entity, spoken in an entirely foreign tongue, in an entirely foreign way.

 

In any case, as the story goes . . . after Buddha achieved Enlightenment, he intended to keep it to himself. For he felt that no one would understand what he had found.

(And he was CORRECT to feel this way).

Then, according to the story, Brahma came to him and said that he absolutely must share his knowledge with the world and teach others.

Buddha acquiesced.

Going against his original instinct, he set off to “teach mankind.”

 

As a result, communes were made.

Disciples were born.

His words were reduced into how-to manuals like the four noble truths and the eightfold paths.

Buddh-ism was created.

Which led to legions of head-shaving and robed copycat “practitioners” and “Buddh-ists.”

 

Buddha abandoned his original instinct.

He succumbed to, admittedly noble, ideas to “help mankind.”

A man who has achieved this level of wisdom knows full well the the way of human beings. He knows full well the insincerity and unseriousness that flows through their blood.

Despite this, I do not know of any great man in the history of human civilization who Has Not succumbed to this notion of “helping mankind.”

 

Buddh-ism goes on preaching “help all sentient beings.”

This is disingenuous.

(And perhaps it started with the Buddha’s preaching and teaching to help “mankind.”)

 

All of this nonsense needs to stop. But, of course, it never will.

Because it is far easier to Hide Behind the safe and comfortable notion of  “helping others,” “helping sentient beings,” and “helping mankind,” than it is to transform One’s Own Self.

Stop the games. Stop the insincerity. Stop all this sound-good, feel-good, wishy-washy spiritual clever nonsense. But, of course, it never will.

For humans crave, covet, and frolic in their gamesmanship, cleverness, and insincerities.

 

If a man is True, he won’t give two cents about “helping sentient beings.”

He will focus his eyes squarely and unflinchingly upon Himself. And, in fact, doing so is the greatest possible “help” he could possibly give to “mankind.”

(But thank goodness, and what a relief, that he has been given an OUT, by focusing on “helping others.” So he can conveniently avoid Himself.)

 

Buddha’s landmark achievement was his Enlightenment.

An enlightenment borne of his own Sincerity.

An enlightenment borne of a refusal to follow guru’s and teachings.

An enlightenment borne of a deathly Serious pursuit.

 

His greatest error was in attempting to help “sentient beings.”

Whom, to this day, have not become a Buddha.

 

Namaste.
        </section>
      </article>

      <img className="images" src={img2} />
      <h1 className="title">No Excuse For Nonsense</h1>
      <article className="article" id="description">
      <section className="teaser" onClick={(e) => toggleExpand(e, 'teaser')} style={{ cursor: "pointer" }}>
      No matter who a person is . . . No matter what station he is in . . . No matter his level of success . . . No matter his level of wealth . . .   There is no excuse for Nonsense. There is no excuse to Waste Time. There is no excuse […]
        </section>
        <section className="full" onClick={(e) => toggleExpand(e, 'full')} style={{ display: "none" }}>
        No matter who a person is . . .

No matter what station he is in . . .

No matter his level of success . . .

No matter his level of wealth . . .

 

There is no excuse for Nonsense.

There is no excuse to Waste Time.

There is no excuse to Fritter Away months and years.

There is no excuse for empty chitchat and frequent socialization.

 

Each man is given some form of Talent.

May this talent not be wasted.

 

Each man is given some amount of Time.

May this time not be wasted.

 

Within the confines of a human life,

There is much to learn,

Much to Understand.

 

The Most critical of Understandings

Are the Truths

About Life

And Mind.

 

Period.

Full Stop.

End of Story.

 

When there is so much to Understand

And so little time,

How a man can fritter away his time

And his life

Is something I shall never understand.

 

Nor is it something I Wish to understand.

 

There are Great things

To be Achieved.

 

There are Great things

To be Understood.

 

There are Great Journeys

To Pursue.

 

There is no time

For Nonsense.

 

Nonsense

Means a man is stupid.

 

He is stupid

Because he is Amenable

To Waste.

 

Shall a man never be forgiven

For wasting

A thing as rare and precious

As a human life.

 

Every man,

More or less,

Needs a swift and cold slap

Across his face.

 

Because it is a virtual certainty

That he is a Time-Waster

And a Life-Waster.

 

Even if he has earned Billions,

And is world famous,

He still knows NOTHING about the inner workings of his Mind.

 

He still knows NOTHING about how life actually works.

 

He still knows NOTHING about the forces at play

And the effect of these forces

Upon his day-to-day existence.

 

Every man

Needs a cold slap across the face

So that perhaps he will manufacture enough shame

To ask,

What The Hell Am I Doing!

 

(Almost all humans have turned to stone. They are too numb and dense to be affected by these words).

 

Namaste.
        </section>
      </article>

      <img className="images" src={img3} />
      <h1 className="title">The Quality And The Riff Raff</h1>
      <article className="article" id="description">
      <section className="teaser" onClick={(e) => toggleExpand(e, 'teaser')} style={{ cursor: "pointer" }}>
      Society champions mediocrity. Thus, it caters to the Riff Raff.   There are humans who are Quality Humans. And there are humans who are Riff Raff Humans.   The Masses . . . are the Riff Raff.   A human may be born with exceptional and unique talents. Another human may be born with less […]
        </section>
        <section className="full" onClick={(e) => toggleExpand(e, 'full')} style={{ display: "none" }}>
        Society champions mediocrity.

Thus, it caters to the Riff Raff.

 

There are humans who are Quality Humans.

And there are humans who are Riff Raff Humans.

 

The Masses . . . are the Riff Raff.

 

A human may be born with exceptional and unique talents.

Another human may be born with less talent.

But it is not exceptional talent that makes one Quality.

And it is not less talent that makes one Riff Raff.

 

Every human, by virtue of him being a human, contains Quality within him.

For every human is borne of the hand of Divinity and Creation.

 

However, what he Becomes during his lifetime

Is what makes him a Quality human

Or Riff Raff.

 

In many ways, whether he realizes it or not, the Quality human has shown respect to the Hand that created him. By not wasting the precious Human birth he was gifted.

While the Riff Raff human, whether he realizes it or not, insults the Hand that created him. In wasting his life by living solely according to his most base insect and animal urges.

 

All humans are Not created equal.

Some are born with more exceptionalism than others.

But all humans Are created equal

With respect to the Divinity that resides within them.

 

A human may live his life in Honor of this divinity.

Or he may live his life in Insult of this divinity.

 

A quality human seeks to make something of himself. Not necessarily in the worldly and material realm, but also in the Interiority realm. Buddha, though he may have been born a Prince, became penniless and walked barefoot across the land.

Yet there is little greater example of a Quality human than he.

 

The Riff Raff human:

Has endless excuses.

Is prone to begging for handouts and “free stuff”

Has little motivation

Weeps endlessly about not having enough, yet does nothing substantial to change his situation

Expects others to do his work for him

Cries foul at the “wealthy” and the “privileged”

Feels he is cursed by ill fortune . . .

 

The Quality human:

Is willing and driven.

Seeks to learn.

Has a desire to Know.

Can detect quality and intelligence when he hears it.

Deeply considers, and contemplates, and does what is necessary.

Makes few to no excuses.

If he does not have the money, he makes it or finds a way.

If he has hardships, though he may struggle, he commits himself to overcoming it.

 

Every man has failures.

Every man has setbacks.

Every man has pain, sorrow, strife, and difficulties in this life.

 

The Quality man is . . . Amenable.

He is amenable to Possibilities.

He is amenable to ideas that are beyond his sphere of knowledge.

 

Quality humans do exist.

But they are fairly Rare.

The overwhelming majority of earth’s population consists of the masses and the Riff Raff.

These are what society caters to, because these are what society created.

 

As a result, all books, media, talks, podcasts, speeches, cater to the Riff Raff.

It is for this reason that lies are freely told.

It is for this reason that all of the garbage that Does Not Work is spread across all online media outlets, and bookstores, and conferences, and “mastermind” meetings.

The Riff Raff are receptacles for garbage.

And rightly so. Garbage dumpsters do not mind having garbage dumped into them.

 

Humans never get anywhere.

What percentage of the world’s population is successful. Materialistically, OR Internally.

What percentage of the world’s population is financially free.

What percentage of the world’s population Does Not live in one form of desperation or another.

 

Why is this so?

Is it because they are “cursed?”

Is it because “God chose” the others?

 

It is because they, by way of intent or conditioning, decided to go the way of the Riff Raff.

It is because they, by way of intent or conditioning, decided to go the way of the Masses.

When they could have gone the way of Quality.

 

Namaste.
        </section>
      </article>

      <img className="images" src={img4} />
      <h1 className="title">Influencers And Intellectuals</h1>
      <article className="article" id="description">
      <section className="teaser" onClick={(e) => toggleExpand(e, 'teaser')} style={{ cursor: "pointer" }}>
      Where there is a genuine desire to do something, there is. No wrong. No right.   If an intellectual and influencers has a deep and unwavering desire to “help,” so be it. If he wishes to list his “book recommendations,” so be it. If he wishes to host a podcast in which he interviews other […]
        </section>
        <section className="full" onClick={(e) => toggleExpand(e, 'full')} style={{ display: "none" }}>
        Where there is a genuine desire to do something, there is.

No wrong.

No right.

 

If an intellectual and influencers has a deep and unwavering desire to “help,” so be it.

If he wishes to list his “book recommendations,” so be it.

If he wishes to host a podcast in which he interviews other intellectuals, experts, and influencers, so be it.

Whatever is deep in a man’s heart, is deep in a man’s heart.

 

The above needs to be stated.

For it is Truth.

 

Having stated these things, it can also be stated that the majority percentage of everything in The World is . . . Impure.

Disingenuous.

Ego-motivated.

Self-congratulatory.

 

No one can point a finger to a particular man and state the degree to which he is being genuine.

No one can point a finger to an intellectual and an influencer and state the degree to which his actions are egoic and impure.

 

But a man, if he is made of a particular DNA, is able to point the finger at Himself.

IF . . . he so wishes.

 

There is no requirement to do so.

He is not a “bad” person if he does not.

 

Every man knows in his heart, the degree to which his actions are motivated by Ego,

Purity,

Or Genuineness.

 

Whatever he chooses to do,

Whether it is pure or impure,

Honest or deceitful,

Innocent or clever . . .

Is entirely up to him.

 

Morality officers are idiots.

What sort of “morality”is a morality that one is forced into.

 

Humans have their pleasure-chases.

They are free to chase pleasure, when, where, and as often as they like.

 

Humans live empty lives.

Thus, they attempt to fill the emptiness with pleasure.

 

The intellectual and the influencer enjoys applause.

He enjoys his robust followership.

He likes to be “tagged” and “liked” and “praised.”

 

He enjoys the authority of being able to recommend “books”

And “hacks”

And “practices.”

 

He is desperate . . .

Absolutely desperate . . .

For The World to know

How “intelligent” he is.

 

Without this,

His life

Has no meaning.

 

But after he has spewed his intellectualisms on a given day . . .

After he has delineated his morning routines . . .

After he has recommended his “weekly reading,” . . .

After he has finished his podcast, either as host or guest . . .

 

He returns to his emptiness.

The high of the stage wears off.

The applause comes to an end.

 

And he is left

Once again

With himself.

 

This becomes unbearable to him.

So he must re-engage with The World

In order to gain another dose of authority.

Of good feeling.

Of applause.

Of “liking” and “receiving positive comments.”

Of receiving “praise.”

 

Following which,

He returns once again to himself.

Back to the emptiness.

 

Truth does not lie

In an endless chase

To shield one from the emptiness.

 

It lies in the permanent fulfillment of it,

Once and for all.

 

It lies in the absence of need

For another dose of pleasure.

 

The automobile enthusiasts’s fix is antique cars.

The art collector’s fix is expensive art.

The intellectual’s fix is the spouting of his intellectual knowledge.

The influencer’s fix is the validation of the people of The World.

 

All humans

Return to emptiness.

To hollowness.

To shallowness.

To discontent.

 

Truth lies

In a systematic,

Sincere,

Serious,

And Devoted pursuit

Of that which puts an end

To a life of discontent.

 

 

Namaste.
        </section>
      </article>

      <img className="images" src={img5} />
      <h1 className="title">It Is Understandable</h1>
      <article className="article" id="description">
      <section className="teaser" onClick={(e) => toggleExpand(e, 'teaser')} style={{ cursor: "pointer" }}>
      Much of what humans do . . . is understandable.   A human is suffering. He suffers endlessly. There is perhaps no aspect of his life in which he does not suffer. Even a trip to the supermarket brings an element of suffering.   From his finances, to his work, to his family, to his […]


        </section>
        <section className="full" onClick={(e) => toggleExpand(e, 'full')} style={{ display: "none" }}>
        Much of what humans do . . . is understandable.

 

A human is suffering.

He suffers endlessly.

There is perhaps no aspect of his life in which he does not suffer.

Even a trip to the supermarket brings an element of suffering.

 

From his finances, to his work, to his family, to his dreams, to his relationships . . .

All things in life bring him suffering.

 

This is unbearable.

So he seeks doses of pleasure . . . for relief.

It is understandable.

 

He is struck constantly by bouts of unhappiness, sorrow, confusion, fear, and disappointment.

So he seeks methods and practices in order to feel a sense of relief.

It is understandable.

 

He latches on to principles espoused by spirituality and self-help.

They promise that if he practices X, Y, and Z it will bring him more happiness, or more calm, or whatever it may be.

So he spends his entire life chasing and practicing, trying one thing after another.

It is understandable.

 

He listens to experts.

And psychologists.

And guru’s.

And influencers.

And motivationalists.

And podcasters.

In an attempt to attain what he has been searching for.

It is understandable.

 

He spends his entire life doing this,

And in the last days of his life . . .

Despite the decades and decades of practicing and chasing and listening and reading and chanting and meditating and whatever-ing . . .

He still has not found what he has always been in search of.

 

The next generation does the same.

The next generation does the same.

 

With each new generation comes a proliferation of new practices.

New spiritualists.

New influencers.

The latest X.

The best and the greatest Y.

The fresh new Z.

It is understandable.

 

And with each generation that finds itself in its final days of life,

It still has not found what it has always been in search of.

Despite the latest and greatest’s.

Despite the fresh new Z’s.

Despite the hot new best-seller’s.

 

A human could be told

That The World can never give him what he wants.

 

He could be told

That no matter how many books he reads,

And how many how-to prescriptions he practices and follows,

It will not give him what he has forever been in search of.

Because what he is searching for

Is not found in those places.

 

But he will find this too fantastical a notion to accept.

It is understandable.

 

Yet though it may be too fantastical a notion

To accept that nowhere in the world of how-to prescriptions . . .

That nowhere in the land of self-help and spirituality . . .

Will his heart be satisfied,

And his longings be satiated . . .

 

It will perhaps not be too fantastical for him to understand

That a Human Life . . .

Is a tragic thing to waste.

 

Namaste.
        </section>
      </article>

      <img className="images" src={img6} />
      <h1 className="title">Accessing The Real</h1>
      <article className="article" id="description">
      <section className="teaser" onClick={(e) => toggleExpand(e, 'teaser')} style={{ cursor: "pointer" }}>
      Do you know what REAL means.   You will likely say Yes.   The reason that you will say Yes, Is because you are accustomed to responding To frivolous questions.   Thus, You give frivolous responses.   The Truth is, Either you do not know what REAL is. Or . . . You do not […]
        </section>
        <section className="full" onClick={(e) => toggleExpand(e, 'full')} style={{ display: "none" }}>
        Do you know what REAL means.

 

You will likely say Yes.

 

The reason that you will say Yes,

Is because you are accustomed to responding

To frivolous questions.

 

Thus,

You give frivolous responses.

 

The Truth is,

Either you do not know what REAL is.

Or . . .

You do not want what is REAL.

 

What evidence is there

For this.

 

Your behavior

Is the evidence.

 

What you do.

What you read.

What you follow.

What you chase after.

What you practice.

What you believe.

 

All of the things that you do,

And read,

And follow,

And chase,

And practice,

And believe . . .

If they have given you what you have desperately longed for,

They work.

 

If they have not,

They do not work.

 

What the human never seems to realize

Despite decades of chases,

Is that the things they have been taught to practice and to do

Do not work.

 

Their own failures

Are proof that they do not work.

 

Yet despite the fact

That they do not work,

They keep doing them.

 

Despite the fact

That they do not work,

They keep returning to the very places

That produced the non-working things.

 

You do not understand

That the world is composed of individuals

Who have no interest in Truth.

 

They have interest in spewing information.

They have interest in gaining followers.

They have interest in gaining likes.

They have interest in having you agree.

They have interest in having you join their group.

They have an interest in having you practice their practices.

 

The world

Is essentially a giant factory

Creating confetti

That is blasted throughout the world.

 

The world

Is essentially a giant computer

Creating spam messages

That are disseminated throughout the internet.

 

Is it malicious.

Is it ill-willed.

 

It matters not.

For these are irrelevant questions.

 

The point is,

It is not Real.

 

A thing that is Real

Is a thing that Works.

 

If you look at your own life,

And those of the people around the world,

You find yourself

And them

Chasing . . . Forever.

 

The reason that you continue to chase

Forever,

Is because you have not come across

That which is Real.

 

You swim in confetti

And spam messages.

 

And you have done so

For your entire life.

 

But it is presented so nicely,

That it appears legitimate.

 

It coincides so perfectly

With all that you have forever been told

It seems correct.

 

What you do not realize

Is that those who have forever told you these things

Have been infected by these same messages

Decades before you were.

 

Whether it is finding Peace,

Or Freedom,

Or acquiring Money,

Or gaining World Class Skill,

Or having Harmony-Filled Relationships,

Or gaining Mental Clarity,

Or anything at all . . .

When you peer out the window,

Into a bookstore,

On the television,

Or on a phone or computer screen,

What you are seeing is Confetti

And Spam.

 

What you are seeing

Is the Non-Real.

 

What you are seeing

Are things that Do Not Work.

 

What you are seeing

Is “for entertainment purposes only.”

 

This is too much

For you to accept.

 

Despite your own life

Being a living testament to this fact.

 

The problem is,

That the issues of your life

Are not an entertainment.

 

They are deep,

And profound,

And acute,

And heavy,

And as real as they come.

 

Thus,

They require something Real

To solve

And cure them.

 

Real is a thing

That Works.

 

Not-Real

Is a thing that Does Not Work.

 

If one Accesses a thing

That works,

He can reach his goal,

Whatever it may be.

 

If one shows his eyes and brain

A thing that does not work,

He is almost certain

To never reach his goal

Whatever it may be.

 

Namaste.
        </section>
      </article>
    </div>
  );
};

export default Discourses;
