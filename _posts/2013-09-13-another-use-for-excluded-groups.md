---
layout: post
title: Another Use for Excluded Test Groups
tags: [A/B testing, analytics]
---

In my last post, I touched on how you can [use excluded groups in your A/B tests](/2013/09/12/common-AB-testing-mistakes/) to gradually ramp up a test while maintaining the integrity of your statistics. There are a few other uses for this concept of excluded groups.

At a basic level, an excluded group lets you separate the two concerns that underlie a basic A/B test:
* what a user sees 
* what you are measuring

Many organizations treat the two issues as one, which can be very restrictive if you want to maintain accurate measurement. (Or more likely, your results will be invalid because you weren't aware of the restrictions.) 

But by using an excluded group you can play fast and loose with what a user sees without ever impacting your measurement plans. {{end_excerpt}} The basic premise was explained in [my last post](/2013/09/12/common-AB-testing-mistakes/):

>The excluded group is a throwaway group that you aren't measuring, but will see the control experience. So to start it will look something like this:

<table class="table">
	<tr>
		<th width="20%">Traffic %</th>
		<th width="20%">Experience</th>
		<th width="20%">Measurement Group</th>
	</tr>
    <tr>
        <td>10%</td>
        <td>Test</td>
        <td>Test</td>
    </tr>
    <tr>
        <td>10%</td>
        <td>Control</td>
        <td>Control</td>
    </tr>
    <tr>
        <td>80%</td>
        <td>Control</td>
        <td>Not measured</td>
    </tr>
</table> 

This was written specifically about gradual deployment of test groups, but the concept applies to several situation.

#### Test Group Opt-Ins

The first actually comes courtesy again of [Dr. Jason Davis](http://drjasondavis.com/2013/09/12/eight-ways-youve-misconfigured-your-ab-test/) and his post of common A/B testing mistakes. The mistake in question is utilizing a feature flag to let users preview a feature. For example you allow a query string to set your test group: "foo.com?test_group=yes", then start sending traffic to that URL for people who are requesting the feature. It's a great idea, and can be a great marketing tactict, especially if you target early adopters. 

Jason digs into some likely implementation problems with this idea, but the problem is fundamentally unsolvable. If you're letting users select themselves into a test group, your test group is no longer a random sample! That's where excluded groups come into play. Seperate the concern of what a user sees with what you're measuring, and now it's easy to imagine that you can let people in for a sneak peak, but simply exclude them from your A/B test measurement.[^1]

#### Experience Requirements

Similar to the "sneak peek" scenario, you may have customer segments that need a particular feature enabled, but you still want to measure the feature separately for other segments. For example you may have a channel partner that has been close to the feature development, and you've already validated the feature with that customer segment, so you'd like to roll it out to that channel and allow your partner to start advertising it. If you're still planning on testing the feature for other segments, however, you have two options. 

The first option is to simply collect the data from all segments and attempt to filter out your segments during analysis. This is certainly a valid approach, but can be cumbersome for your analysts depending on your analytics packages. The other option, and my preferred approach, is to use an excluded group so you're only capturing the data you actually care about. If you're already using this concept for other purposes, it should be easy to configure and will save you lots of headaches during analysis.

I'm sure you can think of other scenarios where you can apply this concept -- it just takes a slight mindshift to understanding that your measurement concerns do not have to be directly tied to enabling features.

[^1]: You have to exclude them from your A/B test measurement to maintain a valid test, but that doesn't mean you should ignore these users entirely. They're likely an important cohort to draw insights from.