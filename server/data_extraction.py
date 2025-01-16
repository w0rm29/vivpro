import json
import pandas as pd

with open('playlist.json') as f:
    parsed_json = json.load(f)

df = pd.DataFrame(parsed_json)

if df.shape[0] == 1:
    df = df.transpose().reset_index()

df.to_csv('normalized_playlist.csv', index=False)


