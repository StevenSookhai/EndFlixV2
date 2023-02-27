from app.models import db, Video
from datetime import datetime
from sqlalchemy.sql import text
def seed_videos():
    video1 = Video(
        title="Shang-Chi and the Legend of the Ten Rings",
        description="Martial-arts master Shang-Chi confronts the past he thought he left behind when he's drawn into the web of the mysterious Ten Rings organization.",
        genre=["Action", "Adventure", "Fantasy"],
        cast="Simu Liu",
        director="Destin Daniel Cretton",
        year=2021,
        duration=132,
        rating=7.8,
        image="https://image.tmdb.org/t/p/w500/lXhgCODAbBXL5buk9yEmTpOoOgR.jpg",
        tags=["Marvel", "Shang-Chi", "Ten Rings"]
    )

    video2 = Video(
        title ="Vincenzo",
        description="A Korean lawyer with a hidden past heads to Italy to take revenge on the Mafia.",
        genre=["Crime", "Drama", "Mystery"],
        cast="Song Joong-Ki",
        director="Park Joon-Hwa",
        year=2021,
        duration=60,
        rating=8.5,
        image="https://image.tmdb.org/t/p/w500/9rVqQYXWlKZfQIYjw1yL9XnOcJa.jpg",
        tags=["Vincenzo", "Korean", "Mafia"]
    )

    video3 = Video(
        title="Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train",
        description="A boy raised by boars, who wears a boar's head, boards the Infinity Train on a new mission with the Flame Pillar along with another boy who reveals his true power when he sleeps. Their mission is to defeat a demon who has been tormenting people and killing the demon slayers who oppose it.",
        genre=["Action", "Animation", "Adventure"],
        cast="Natsuki Hanae",
        director="Haruo Sotozaki",
        year=2020,
        duration=117,
        rating=8.5,
        image="https://image.tmdb.org/t/p/w500/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
        tags=["Demon Slayer", "Mugen Train", "Infinity Train"]
    )
    
    video4 = Video(
        title="Princess Mononoke",
        description="A young prince embarks on a dangerous journey to stop a demon plague that is ravaging his kingdom.",
        genre=["Action", "Adventure", "Animation"],
        cast="Yôji Matsuda",
        director="Hayao Miyazaki",
        year=1997,
        duration=134,
        rating=8.4,
        image="https://image.tmdb.org/t/p/w500/xvYCZ740XvngXQbL9E0qjw8wJj2.jpg",
        tags=["Princess Mononoke", "Studio Ghibli", "Hayao Miyazaki"]
    )

    db.session.add(video1)
    db.session.add(video2)
    db.session.add(video3)
    db.session.add(video4)
    db.session.commit()
def undo_videos():
    db.session.execute(text('TRUNCATE videos RESTART IDENTITY CASCADE;'))
    db.session.commit()

