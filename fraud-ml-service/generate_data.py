import pandas as pd
import numpy as np

data = []

for i in range(5000):
    amount = np.random.randint(10, 10000)
    hour = np.random.randint(0, 24)
    category = np.random.randint(0, 5)
    device = np.random.randint(0, 2)

    # Fraud logic
    fraud = 1 if (amount > 7000 and hour > 22) else 0

    data.append([amount, hour, category, device, fraud])

df = pd.DataFrame(data, columns=[
    "amount", "hour", "category", "device", "fraud"
])

df.to_csv("custom_fraud_data.csv", index=False)

print("Dataset created successfully!")