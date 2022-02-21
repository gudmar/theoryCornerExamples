print('Ranges')
print('range(3)')
r = range(3)
for i in r:
	print(i)
	
print('range(2, 8)')
r = range(2,8)
for i in r:
	print(i)
	
print('range(2, 10, 2)')
r = range(2,10,2)
for i in r:
	print(i)	
	
	
print('range(10, 2)')
r = range(10,2)
for i in r:
	print(i)	
	
	
print('range(10, 2, -1)')
r = range(10,2, -1)
for i in r:
	print(i)		
	
#print('Range mutability')
#r = range(3)
#rId = id(r)
#r.replace(range(4))
#print("Ranges are mutable: %s",rId == id(r))
	
print('SETs')
s = {'val1', 3, 5j}
#s[1] = 5
print(s)

print('STRING')
s = 'Some content'
print(s[-11:-6])

text = 'Hihihihi'                    
text2 = text.replace('i','a'); # outout == 'Hahahaha'
print(text2)
print(text)

print('Functions')
def printNr(nr):
	print(nr)
	
def invokeCb(cb, args):
	cb(args)
	
invokeCb(printNr, 6)


print('OPERAOTRS')
dict = {
	'a': 5, 
	'b': 6, 
	'c': 7, 
	'd': {
		'a': 8, 
		'x': 0
	}
}
print( 'a' in dict)
print(dict['a'])


print('Logical')
test=False
def check_test_side_effect():
	test = not test
	return True

print(True or check_test_side_effect())
print(test)

print('SET')

s = set([1, 2, 3, 4])
for item in s:
	print(item)
	
invalidSet = set([1,1,2,3,4,3])
print(invalidSet)




































