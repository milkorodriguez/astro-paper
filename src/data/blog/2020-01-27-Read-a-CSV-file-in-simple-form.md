---
layout: post
title: Read a CSV file in simple form
date: 2020-01-27 14:43:00
categories: [Data, Python]
tags: [csv]
---

**Read a CSV file in simple form**

{% highlight csv %}
#file to read

Product ID, Department ID, Product code, Product name, Product price
1,1,1001,A,1000
2,1,1002,B,1000
3,1,1003,C,1000
4,1,1004,D,2000
5,1,1005,E,2000
6,1,1006,F,2000
{% endhighlight %}

The simplest form to understand it is as follows: 

{% highlight python %}
import csv # (1)

file = './products.csv' # (2)

f = open (file, 'r') #  (3)

rows = csv.reader (f) # (4)

for row in rows: #  (5)

    print (row) #  (6)

f.close () # (7)
 {% endhighlight %}


```
* (1) Load csv module to operate csv with python.
* (2) Specify the path of the file to read.
* (3) Open the file in read mode using the open function.
* (4) Extract all the data of the opened file and save it in the rows variable.
* (5) Use a for statement to retrieve the data stored in rows one by one.
* (6) Use the print function to display line information on the screen.
* (7)Close the file opened in step 3.
```

