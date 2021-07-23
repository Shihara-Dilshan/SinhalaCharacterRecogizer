from operator import mod
import sklearn
from sklearn.utils import shuffle
from sklearn.neighbors import KNeighborsClassifier
import pandas as pd
import numpy as np

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
