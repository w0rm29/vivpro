from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

df = pd.read_csv('normalized_playlist.csv')

@app.route('/', methods=['GET'])
def enter():
    return "Landing Page"

@app.route('/songs', methods=['GET'])
def get_all_songs():
    page = int(request.args.get('page', 1))
    per_page = int(request.args.get('per_page', 10))
    
    start = (page - 1) * per_page
    end = start + per_page
    
    songs = df.iloc[start:end].to_dict(orient='records')
    return jsonify(songs)

@app.route('/songs/<title>', methods=['GET'])
def get_song_by_title(title):
    song = df[df['title'].str.lower() == title.lower()]
    if song.empty:
        return jsonify({'error': 'Song not found'}), 404
    return jsonify(song.to_dict(orient='records')[0])


if __name__ == '__main__':
    app.run(debug=True)
