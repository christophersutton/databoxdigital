---
layout: post
title: Continuous Deployment & Customer Expectations
tags: [analytics, product management, continuous deployment]
---
Steve Blank has a new post up on the downsides of [continuous deployment](http://steveblank.com/2014/01/06/15756/). As always, it's a great read.[^1] I don't want to give away the details, or the great examples he uses, but here's the basic gist of his post.

In the old model of waterfall product development, customers had bounded expectations about what they were buying. Once a quarter, or once a year, or every few years a new product would be released. The features would be set in stone -- for good or for bad. Customers knew what they were getting and grew accustomed to that exact product with that exact feature set.

It can be harder to manage customer expectations in the brave new world of continuous deployment, where a product is never finished and a feature set never set in stone. {{end_excerpt}}	A customer could grow to love a feature that the team decides to cut. Or an entire department could be trained on a feature workflow, only to see the feature "improved" a month later. And many times, the product teams making those calls were making the right decisions. But it's not always positive for all customers, and the companies that can learn to navigate these disadvantages will be at a supreme advantage.

SaaS have some unique challenges with continuous deployment, and I plan to touch on them in a later post. Today though, I want to focus on consumer web and ecommerce companies.

### People Fear Change
It's in our very nature to fear change. Your user base is likely going to have strong reactions to any significant changes, but you can't let that initial reaction unduly influence your decision-making. That's why I strongly advocate two things when pushing out significant changes: segmentation and patience.

#### Segmentation
At a minimum, you have to segment your new vs. repeat visitors for measurement. Ideally you can extend this to new vs. repeat customers as well. Repeat customers are obviously an important part of any business. But a past customer may be used to the way things were, and the change could be a short-term disruption for them. Obviously nobody wants to see a key metric drop with repeat visitors. But what if that same metric is improved for new visitors by an offsetting amount? The overall results would look flat - like the feature is a wash. But is it?

The honest answer is... maybe. But it's not an automatic yes or no. A likely scenario is that you're giving up a one-time loss for repeat customers, but gaining a long-term improvement for new ones. That dip in the repeat visitor performance will rebound, as more and more of your customers are onboarded with the new experience as their baseline. Again this isn't automatic -- that's why you need a good analyst and active cohort tracking -- but without segmenting your data in the first place you're never going to be making the best decision.

#### Patience
The second recommendation seems easy, but can be harder in practice. It doesn't require any fancy tooling, measurement or a PhD in econometrics. But it does require willpower, which is often harder to come by. If you're willing to run longer, phased tests, you can actually see the phenomena I described above. It won't take any hunches or guesswork, just time.[^2]

Or think about feature rollouts for some of the bigger tech companies these days. Facebook, Twitter, Tumblr. How many times have they rolled out a change that had their user base up in arms? Happens all the time. They patiently wait out the initial uproar, maybe walk it back a bit, tweak something here or there. But eventually the users get used to it and are (in some cases) better off for it. I'm not advocating that pissing off your userbase is ok, but crowds are going to have knee-jerk reactions to any change, and you can't have your own knee-jerk reactions right back. Sometimes they'll be justified, sometimes not, but having the patience - both organizationally and individually - to weather the storm will allow you to make better decisions in the end.

[^1]: [Steve](http://steveblank.com/) really is at the top of the game - I don't think I've learned more from anyone else in the business. If you aren't already, please start following him immediately.

[^2]: Just remember that time itself is a precious commodity though, and the opportunity cost may simply not be worth it.
