---
layout: post
title: "Titanic_Data_2(Get the first 10 rows) "
date: 2020-02-18 1:45:30
categories: [Data, Python, Modules]
tags: [sys, cvs]

---

For a quick view, we can print only the first 10 rows  of the huge Titanic.csv file.

With this simple code:

{% highlight python %}
#open_just_10.py  
import csv  
with open('titanic_csv.csv') as csvfile:  
    reader = csv.DictReader(csvfile)  
    for i,row in enumerate(reader):  
        print(row['survived'], row['pclass'], row['name'], row['sex'], row['age'], row['parch'], row['ticket'], row['fare'], row['cabin'], row['embarked'], row['boat'], row['body'], row['home.dest'])  
        if(i >= 9):  
            break
{% endhighlight %}
    
You can execute the file directly 
```
$ python3 open_just_10.py  

```

{% highlight csv %}
/usr/local/bin/python3.7 /Users/milko/Documents/lbloom/Titanic-csv/open_just_10.py
1 1 Allen, Miss. Elisabeth Walton female 29 0 24160 211.3375 B5 S 2  St Louis, MO
1 1 Allison, Master. Hudson Trevor male 0.9167 2 113781 151.55 C22 C26 S 11  Montreal, PQ / Chesterville, ON
0 1 Allison, Miss. Helen Loraine female 2 2 113781 151.55 C22 C26 S   Montreal, PQ / Chesterville, ON
0 1 Allison, Mr. Hudson Joshua Creighton male 30 2 113781 151.55 C22 C26 S  135 Montreal, PQ / Chesterville, ON
0 1 Allison, Mrs. Hudson J C (Bessie Waldo Daniels) female 25 2 113781 151.55 C22 C26 S   Montreal, PQ / Chesterville, ON
1 1 Anderson, Mr. Harry male 48 0 19952 26.55 E12 S 3  New York, NY
1 1 Andrews, Miss. Kornelia Theodosia female 63 0 13502 77.9583 D7 S 10  Hudson, NY
0 1 Andrews, Mr. Thomas Jr male 39 0 112050 0 A36 S   Belfast, NI
1 1 Appleton, Mrs. Edward Dale (Charlotte Lamson) female 53 0 11769 51.4792 C101 S D  Bayside, Queens, NY
0 1 Artagaveytia, Mr. Ramon male 71 0 PC 17609 49.5042  C  22 Montevideo, Uruguay
{% endhighlight %}
