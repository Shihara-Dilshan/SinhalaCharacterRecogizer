import numpy as np
import pandas as pd

data = pd.read_csv("data.csv", header=None, sep="\t")
print(str(data.loc[[0]])[112880:])
