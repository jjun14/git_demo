import random
a=[]
for x in range(0,100):
	a.append(random.randint(0,10000))
def swap(a):
	for slot in range(len(a)-1,0,-1):
		maxposition=0
		for location in range(1,slot+1):
			if a[location]>a[maxposition]:
				maxposition=location
		temp=a[slot]
		a[slot]=a[maxposition]
		a[maxposition]=temp
swap(a)
print(a)
