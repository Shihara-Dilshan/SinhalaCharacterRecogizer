from operator import mod
from flask import Flask
import sklearn
from sklearn.utils import shuffle
from sklearn.neighbors import KNeighborsClassifier
import pandas as pd
import numpy as np
from flask import request
import urllib.request 


app = Flask(__name__)

data = pd.read_csv('new_data.csv', header=None, sep=",")

x = np.array(data.drop(data.columns[0], axis=1))
y = np.array(data.iloc[:,0])

x_train, x_test, y_train, y_test = sklearn.model_selection.train_test_split(x,y, test_size=0.3)

model = KNeighborsClassifier(n_neighbors=3)

model.fit(x_train, y_train)
acc = model.score(x_test, y_test)

predicted = model.predict(x_test)

chars = {
    1.0: 'අ',
    21.0: 'ක',
    54.0: 'ව'
}

for x in range(len(predicted)):
    print("predicted : ", chars[predicted[x]], " Actual : ", chars[y_test[x]])

predicted = model.predict(x_test[[0]])
print(predicted, y_test[[0]])

@app.route("/ocr", methods=["GET"])
def index():
    urllib.request.urlretrieve("https://firebasestorage.googleapis.com/v0/b/confopla.appspot.com/o/21298323.png.png?alt=media&token=f8a13d22-c612-4f91-87b3-cd399136863c", "dsdsds")
    return "dsds"

if __name__ == "__main__":
    app.run(debug=True)