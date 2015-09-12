import random
a=[]
for x in range(0,100):
	a.append(random.randint(0,10000))
def swap(x,y):
	x=a[i]
	y=a[i+1]
	if x > y:
		temp= a[i+1]
		a[i+1]=a[i]
		a[i]=temp
count=len(a)-1
while count>0:
	for i in range(0,len(a)-1):
		swap(a[i],a[i+1])
	count=count-1
	# count-=
print a
