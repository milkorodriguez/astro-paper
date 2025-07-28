---
layout: post
title: Titanic_Data_3(Get the top N rows)
date: 2020-02-22 07:30:00
categories: [Data, Python, Modules]
tags: [csv, operator, itemgetter]

---


We can get the top N  rows of the huge Titanic.csv file with itemgetter.

With this  code:

{% highlight python %}
#gettop-nrows.py
import csv
from operator import itemgetter
N=11 # to get 10 rows need use 10+1=11
fname='titanic_csv.csv'
get_columns=itemgetter('survived', 'pclass', 'name', 'sex', 'age')
with open(fname,'r') as csvfile:
    reader = csv.DictReader(csvfile.readlines()[0:N])
    [print(*get_columns(row)) for row in reader]
     # or for all fields : use [print(row)) for row in reader]
     
{% endhighlight %}
    
You can execute the file directly 
```
$ python3 ettop-nrows.py

```

<script src="https://gist.github.com/Milko-R/30a87e6e900e6a4949db358442f03d19.js"></script>
