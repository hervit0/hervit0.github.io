# From chemical engineering to software development

1st of April, 2016, Paris, _Gare du Nord_. With my backpack and my monitor in a bag, I onboard a Eurostar train to London with my cousin Tom and his wife Emma. I leave a chemical engineer position behind me, for a software developer one.

The year is now 2018, I work for a company called [Driftrock](https://www.driftrock.com/): we boost the marketing power of our clients through social media. I'm a software developer there, taking care of an awesome microservices fleet with an heavily-skilled team and juggling between back-end, front-end and DevOps, using various programming languages to achieve our goals. Before that, I have spent more than a year at [The App Business](http://www.theappbusiness.com/), a mobile applications agency, where I was a junior software engineer, learning key concepts like Agile, testing and clean code.

Time for a check-up after 2 years, isn't it?

I want to share here some insights on my career switch. Personal opinions and experiences are exposed, in the most honest way possible, far be it from me to bash the chemical engineering industry, nor force any chemical engineers to shift away from their jobs! I am still keen to take any feedback and comments if you disagree.

Unfortunately, I give here only the differences between a non-tech industry and the software industry, therefore, the purpose of this article is not about how to start your software engineer career (however, you can still drop me a message if you are looking for any pieces of advice).

The differences between the British and the French way of working are not tackled here, it is a wide subject deserving a full and proper article (trailer: I am writing from London, which gives you a good idea of my humble opinion).

## Where it all began...

With few words, the `Once upon a time` is: I grew up on a French island ([Reunion Island](https://www.google.co.uk/maps/place/Reunion/@-21.1351121,55.2471124,10z/data=!3m1!4b1!4m5!3m4!1s0x2178778110b8e43b:0x4a7f8e89ecdbeaf9!8m2!3d-21.115141!4d55.536384) - oversea territory), did a normal scholarship until my _baccalauréat_ (UK GCSE equivalent), attended to intensive courses in mathematics, physics and chemistry for 2 years (_Classe Preparatoire aux Grandes Ecoles_), was admitted into a national chemical engineering school ([ENSIC](https://ensic.univ-lorraine.fr/)) in the lovely town of Nancy (the Lorraine region, in the mainland), graduated after 3 years and found my first job as a chemical engineer in Paris.

From that point, the career path was almost sealed: I would have spent the next decades in the same company (because it shows loyalty and mind diversity is not really good you know?), painfully risen through the ranks, fought against this silly bureaucracy where more senior people teach you what to do in a world they can no longer understand, gone in retirement at 70 years old with nothing (stay lucid, this is going to happen).

Fortunately enough, I did not spend decades where I started. After only 2 years and a half in Paris, doing the same repetitive and boring tasks, under an awful and stressful management, I was on my knees, dreamless and buried below this dull routine under morphine.

After a lot of discussions with my cousin [Tom](https://github.com/ostapneko), his wife [Emma](https://github.com/emma-p), and her brother [Alex](https://github.com/onima) (all of them are developers), I decided to make the move. I will be forever thankful to them for having the patience and taking the time to onboard me in this amazing industry.
Like I said few lines above, I won't give any tips to set someone on the right tracks to become a software engineer (perhaps another article?), but I will present the main contrasts between my former job and my current one.

## Timescale and feedback loop are not the same

Let's start with the most obvious one: velocity of execution is nothing but comparable.

When you are designing a chemical plant, from the moment you are starting to design a pump to the moment where you press the button to kick it off, there might be years. Besides, pushing the button will not ensure you that it will work.
The timescale in the software industry is completely different: if I write this line in [Elixir](https://elixir-lang.org/) `String.upcase("bonjour")`, it will only take me few seconds to know if it works and if it's shippable to production or not.

Back to the chemical industry, the uncertainty on the ability of a machine to work or not, fosters over-design: your formula says `5 kW`, but you will not take any risk and make it `10 kW`, costing you extra money.
For the previous line of code, executing it on my machine will give me an instant feedback on the validity and the correctness of it. But we go way more beyond: how to make sure it works on another machine? Do I have to run it on my machine each time I need to prove that it still works?
I introduce here a fundamental principle in my job: testing. It is a wide, significant subject, but here are the main takeaways. The line of code above can be naively tested as `assert String.upcase("bonjour") == "BONJOUR"`: if it is correct it returns a positive response, otherwise it fails. We will encapsulate this assertion within a script with other assertions and run all our scripts whenever we are changing some parts of the code or whenever we want to deploy our applications. Testing gives confidence and brings a lot of quality in the developed pieces of software.

Here I underline the different timescales of the two industries. In the chemical industry, there are other ways to make your plant design resilient and reach the performances: over-design, performance extrapolations from running plants, water run-tests (testing your plant with only water)... Furthermore, the two industries are in perfect unison with one topic: security. Both industries are spending a lot of time and effort to comply with any security/safety standards or rules. Writing a security manifest for a chemical unit is very akin to testing a snippet of code: we tend to find all the possible edge-cases.

Due to the software industry fast pace, a bunch of interesting frameworks have popped up around software delivery. Instead of setting silly deadlines every 6 months with unrealistic goals which often would not be met (generating frustration on both stakeholders and engineering sides), the [Agile](http://agilemethodology.org/) methodology (software delivery) offers few frameworks to increment and fail quickly over software iterations. By "quickly", I mean weeks. Within a week or two, it's possible for software developers to share and show the produced amount of work: the feedback is immediate, clients instantly know if we are pointing towards the correct direction.
Of course, it sometimes does not work, but the existence of this kind of frameworks denotes the seriosity of the software industry to aim towards constant high quality and constant delivery.

## A perpetual evolution

When you work in an industry which is relying on fundamental sciences (chemistry, physics, mathematics), unless your industry is a very specific R&D one, you are often using old and solid principles, which have been discovered over the past 500 years, sometimes more for some core mathematics concepts.
Therefore, designing a chemical plant roughly consists in applying mature scientific principles. All the beauty of this kind of engineering is to know whenever using the appropriate theorem or the correct formula. This level of scientific maturity gives an enjoyable reliability while designing plants: for instance, you can be sure that gravity will suddenly stop working tomorrow.
Don't get me wrong here, even if there is no discovery every day in the chemical engineering area, it's a solid and experienced engineering, which, first and foremost, works and generates results.

The software industry is relatively a young one, which has taken off over the last century. Given that, we are constantly battlefield testing tools and frameworks, discovering things, striving to issue best practices and standards...
A fantastic technology worths here being mentioned: containerization of applications. In order to do not lose the reader into technical limbos, it roughly consists to bundle any pieces of software in small shippable containers, meaning that we only deploy containers and do not care what's inside anymore! The amount of effort to deploy a Java application with X and Y dependencies might be sometimes absurdly hard and unrepeatable for another Java application, this containerization technology is a serious game-changer in our industry. And it's only [5 years old](https://events.docker.com/events/docker-bday-5/)!
Also, the way frameworks are popping up and then dying is bloody scary, especially for the front-end frameworks.

It would be unfair here to blame fundamental sciences - in fact, the software industry is what it is, mainly because of efficient pieces of hardware (e.g. processors)... thanks to fundamental sciences!

## Modern tools and modern way of thinking

Even though the software industry is a pretty young one, it moves fast with incredible tools to make the developers lives easier. Ultimately, having smart and powerful tools allow you to push forward the quality of your thinking process and boost your productivity. Here, I have picked up one crucial tool which amazed me when I first discovered it and still surprises me every day.

How to share files and snippets of text while working on a project with a lot of people? And how to share any updates on a single file/document? How to resolve conflicts if several people are working on the same file?

In my previous life:
- all engineers have access to a shared disk
- you can not edit a file (or it is complicated) if someone has already opened it
- you pick a file `my-file-v32.txt`, copy it, make some enhancements, rename the copy to `my-file-v33.txt`, store `v32` in a folder called `old` with the 31 other files
- unless you have studied to Hogwarts, it is not possible to clearly see all the changes between `v32` and `v33`
- you can easily mess up in the shared folder and lose 4 hours of your time with the documentation controller

And no, all of this did not happen in the 80s, I have been undergoing a bunch of documentation crises when I started to work in the chemical industry in 2015...

As software engineers, we are using a version control software, the most famous one is [`git`](https://git-scm.com/):
- all engineers have access to a shared remote repository which has a "master" state
- if you want to alter a part of the code, you can create another version from the initial version of the code ("branching"), everybody can do so, there is no interference
- once you are happy with your enhancements, there is a review process ("pull request") - every single changed line is visible
- if successfully approved, your version becomes the master version ("merging), available for the other engineers

## Diversity of careers and domains

As I started as a chemical engineer, two main destinies stood out:
- do some repetitive and low-level tasks as a beginner for few years (4, 5...), then luckily start managing other juniors and become a senior, then maybe lead a team, and after decades maybe become chief of a department (if you are lucky enough: this kinds of position are rare and people live long nowadays)
- still do some boring junior tasks for some years, then start to dig in a very specific area of expertise (e.g. the pumps), then become an expert referent and do that for the rest of your career (yes, designing complicated pumps for 50 years).

Of course, I only describe (maybe with a little exaggeration) the paths for a chemical engineer in an engineering office context, chemical engineer on production fields (e.g. offshore platforms) is something very different.

Things are shaped differently in the software industry. As long as you can write a line of code, you can become: software developer, data scientist/analyst, automation/manual tester, DevOps engineer, embedded software engineer, software architect, implementation engineer...
Furthermore, upgrading your role level is pretty fair and is based on your skills, rather than being based on non-scientific parameters like the number of years spent with the role of "chief manager of a team composed of me and myself", or how grey my hair is (or no hair at all). If someone has all the required potential to reach the Moon, just let her/him go.

Also, the industries where chemical engineers are pretty defined in the marble (it is inherent in the fact that chemistry cannot be applied in finance for instance). Most of my former colleagues from engineering school ended up in those industries: oil and gas, pharmaceutical, consumer goods, high-specialized products (e.g. polymers) and nuclear.
When you think about software, you can find pieces of software everywhere. To an extent, as a developer, you can work for whatever you believe in: charity, weather forecasting, finance, marketing, mobile applications, spatial, military, navigation...
The fact that the discipline itself can generate new areas of expertise is also absolutely fantastic: as I write, the trend is currently around crypto-currency and machine learning.

## Learning, always learning

I really enjoy giving examples based on pumps: learning how to design a pump can take a couple of days, you will need basics in fluid mechanics and mathematics (of course, it takes longer if you deep dive in the pump technologies, firefight against cavitation phenomena and so on). When you know how to do it, it is the same calculus. Again. And again.

As the software industry is moving fast regarding tools and frameworks, you constantly learn how to use a new technology, how to improve an existing one, how to deprecate another...
On one side, it is pretty good for your brain, who likes to do the same thing every day for decades?
On the other hand, it forces you to reconsider your pool of knowledge more often than you think. A framework that you master now, might die in 6 months. A programming language that you are fluent in, might be not used in 1 year time - a stronger one will soar and make your language useless or less efficient. Don't be attached to syntax and frameworks (they die in a way or another): theories, concepts and principles will always prevail.

About the diversity of opportunities and domains, it's really easy to pick up new competencies and mint your set of skills by yourself: a lot of software developers are self-made. For instance, if you want to specialize in data science: a lot of books are available, a ton of online resource is spread over the Internet, even courses with official certificates are available via education websites like Coursera or Udemy.
But how to capitalize this know-how and prove your battlefield abilities for a future job?

## Side projects and own experimentations

Sadly, you cannot assemble your own nuclear reactor in your garden as a weekend hobby (or you would be in trouble, wouldn't you?). Or you cannot mount an industrial methanol pump in your garage. Difficult to make your husband/wife digest: "Just to see if it works".

By contrast, if you want to create a website for your personal hobby, or design an Android application for your children, or experimenting a framework or a language, all you need is... a computer.
Most of us have a public [Github](https://github.com/) account where we are exposing our personal projects and experiments. Don't worry, even if you copy-paste some snippets of code from here and there, I dare you to provision it correctly, run it, deploy it and maintain it. As you reach these lines, you have realized a while ago that a software developer is not just writing lines of code.

## Wrap up

There are still billions of things to say, but I will wrap up this article with these points:
- the community is awesome and always aims towards excellence: I have stopped counting meetups, conventions, conferences that I have been to during these past 2 years. But I can give you for sure the number of chemical engineering events I attended during 2 years and a half: 0.
- the majority of our technologies is open-source, meaning that you can always contribute to the latest and advanced framework if you want. Money for sure is a powerful motivation engine, but passion is the most rewarding one.

And you, what have you done these past few years? Where are you heading off for the next decade?
