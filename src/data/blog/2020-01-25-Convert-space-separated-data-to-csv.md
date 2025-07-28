---
layout: post
title: "Convert space separated data to csv with python"
date: 2020-01-25 1:45:30
categories: [Data, Python, Modules]
tags: [sys, cvs]

---

**Convert space separated data to csv with python**

Use the Python standard module cvs and sys to convert the data separated by spaces as follows into a comma-separated csv file.
{% highlight txt %}
#Before conversion

datetime  data1 data2
2020-01-04 12 9
2020-01-05 24 18 
2020-01-06 36 27
{% endhighlight %}

{% highlight csv %}
#After conversion

datetime,data1,data2
2020-01-04,12,9
2020-01-05,24,18
2020-01-06,36,27
{% endhighlight %}

with this code
{% highlight python %}
#! /usr/bin/python3 

import csv
import sys

assert len(sys.argv) == 2
fname_in = sys.argv[1]
fname_out = 'c{}.csv'.format(
   ''.join(fname_in.split('.')[:-1])
)

with open(fname_in, newline='') as fin,  \
       open(fname_out, mode='w', newline='') as fout:

   reader = csv.reader(fin, delimiter=' ', skipinitialspace=True)
   writer = csv.writer(fout)

   writer.writerows(reader)

{% endhighlight %}
    
You can execute the file directly 
```
$ python3 makecsv.py nocommas.txt
```

