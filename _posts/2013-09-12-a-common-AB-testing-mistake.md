---
layout: post
title: A Common Issue with A/B Tests and How to Fix It
tags: [A/B testing,analytics]
---

Dr. Jason Davis has a new post up with [eight common ways to screw up an A/B test](http://drjasondavis.com/2013/09/12/eight-ways-youve-misconfigured-your-ab-test/). He uses the polite term "misconfigured" but the end result is the same -- your test results will be invalid. It's a solid list that I recommend reading, but I wanted to expand on a simple solution for one of the issues he describes. {{end_excerpt}}

#### Changing Your Weights Mid-Flight
The first mistake he describes is one that I've seen bite teams - including my own - more than a few times. Many companies like to start a test at a low traffic percentage to reduce risk. By starting at 10% of traffic, instead of 50%, you can detect bugs or even just a flat out underperforming experience while reducing exposure to the business. But to reach your sample size faster, you'd like to increase that test percentage once you're confident in the change.

This is typically my recommended deploy strategy, but only if you set up your test to measure it correctly. Jason [dives into the core of the issue](http://drjasondavis.com/2013/09/12/eight-ways-youve-misconfigured-your-ab-test/), namely that your test groups won't be an evenly distributed random sample. If you have a 10/90 split on Monday, then up it to 50/50 on Thursday, your results could be skewed by day to day variations. Your new vs. repeat visitor split will also be skewed across test groups, which can seriously impact your results.[^1]

He recommends only measuring periods where the ratios are constant to get around this issue, but there's a better way. You can reap the benefits of a gradual test percentage ramp-up, while still maintaining the integrity of your test, by simply adding an "excluded" group to your test. The excluded group is a throwaway group that you aren't measuring, but will see the control experience. So to start it will look something like this:

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

As you want to ramp up, you increase both measurement groups equally and reduce the excluded group. (E.g. 10/10/80 goes to 30/30/40 or even 50/50/0.) This will keep your new vs. repeat splits equal across measurement groups, as well as eliminate other temporal distribution issues such as time of day or day of week. It's a very easy way to configure a low-risk deployment while maintaining evenly distributed test groups.

[^1]: Here's a simplified example to help explain. Let's say you have a 70/30 split for new/repeat traffic, and you start at a 10/90 split for your test. For the sake of this example, assume all of your repeat traffic repeats within 1 week and never returns. After one week, you raise the test to 50/50. What happens to the repeat percentage of your control group? Since we're assuming all of your repeat traffic is coming from the prior week, it means that 90% of your total repeat traffic will already be in the control group. It started out as a 70/30 split on day one, but every day you are pushing a higher percentage into the control group you are also increasing the liklihood for a repeat visitor in the control group down the line.
