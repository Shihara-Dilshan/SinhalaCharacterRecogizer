import os
from PIL import Image
  
temp_list = []

arr = os.listdir()

for i in arr:
	try:
		image_path = i
		image_file = Image.open(image_path)
		image_file = image_file.resize((28, 28), Image.ANTIALIAS)
		image_file.save(str(i)+"low.png", quality=95)
	except Exception as e:
	 	print("Unknown file")
