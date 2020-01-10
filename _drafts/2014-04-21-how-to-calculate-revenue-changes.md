---
layout: post
title: How to Analyze Revenue Changes with A/B Tests
description: Learn how to analyze A/B tests by measuring the differences in revenue, not just conversions.
tags: [analytics, a/b testing]
image:
  path:					/images/cash.jpg
  alt:					Cash rules everything around me
  source:				https://www.flickr.com/photos/pfala/2397388906
  credit:				Paul Falardeau
suggested_tweet:
  via:                  'sutterbomb'
  text:                 'Analyzing revenue numbers for A/B tests'
---
> Cash rules everything around me. 
> 
> -- <cite>Wu-Tang Clang</cite>

For many people, A/B tests are all about conversions. We want to find ways to increase the number of people who do X, where X could be anything from click a button to submit an email address or make a purchase. Because this is the default stance on A/B testing, there are countless how-to's, explainers and resources if you're looking to measure these types of A/B tests with proper statistics. 

Unfortunately not all conversions are created equal. An increase in conversions could actually hurt your bottom line if you're gaining cheap customers at the expense of high-revenue customers. Finding upsells & cross-sells that convert well can also be a huge incremental revenue driver, allowing you to either improve margins or grow faster by spending more on customer acquisition. 

Ultimately, cash in the bank is ultimate metric for most businesses. Unfortunately, measuring revenue across test groups is not the same process as measuring straight conversion -- and there's a dearth of information about measuring actual revenue impact. So I'd like to present the basic analysis steps to calculate revenue comparisons using R.

{{end_excerpt}}

###Plotting Your Data
The first step [I recommend in any analysis](2013/08/15/data-exploration/) is simply plotting your data. For revenue numbers like this, I like to look at a density plot to make sure that the data is close to a normal distribution. (Note that some business will have actually have something more like a bimodal distribution, which we'll cover in a later post.) 

So here are the basic steps to plot your revenue numbers. This assumes you have cleaned your data, and have a csv that looks something like this:

<table class="table">
<thead>
<tr>
<th>Customer_ID</th>
<th>Order_ID</th>
<th>Test_Group</th>
<th>Revenue</th>
</tr>
</thead>
<tr>
<td>194832</td>
<td>42301</td>
<td>control</td>
<td>121.91</td>
</tr>
<tr>
<td>202492</td>
<td>42302</td>
<td>test</td>
<td>121.91</td>
</tr>
<tr>
<td>184021</td>
<td>42303</td>
<td>control</td>
<td>164.15</td>
</tr>
</table>

You'll want to pull the data into R, load the ggplot package, then make a simple density plot.
{% highlight ruby %}
> dataset <- read.delim("TAB_DELIMITED_FILE_HERE")  
> library("ggplot2")
> m <- ggplot(dataset, aes(x = revenue))
> m + geom_density()
{% endhighlight %}

It should give you something like this. 

![Revenue Density Plot](/images/revenue-analysis/revenue-density.png)

As you can see, this isn't a perfectly normal distribution, but it's pretty close.[^1] Due to the [central limit theorum](http://en.wikipedia.org/wiki/Central_limit_theorem), we can use the student's t-test to compare these datasets even though they aren't perfectly normal.

So now all it takes is running the t-test.

{% highlight ruby %}
> t.test(dataset$Revenue ~ dataset$Test_Group
{% endhighlight %}

And you'll get an output like this:

{% highlight ruby %}
Welch Two Sample t-test

data:  Revenue by Test_Groupt = 0.5427, df = 7025.32, p-value = 0.5873alternative hypothesis: true difference in means is not equal to 095 percent confidence interval: -15.05498  26.58280sample estimates:mean in group control    mean in group test              263.8565              258.0926 
{% endhighlight %}

So what does this mean? The two most important pieces of data are the p-value and the means. You can see that the test group appeared to have a slightly
[^1]: It's rare to see a perfectly normal distribution in datasets like this, where we have a lower bound but no theoretical upper bound. 