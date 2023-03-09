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

    video5 = Video(
        title="The Batman",
        description="The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.",
        genre=["Action", "Crime", "Drama"],
        cast="Robert Pattinson",
        director="Matt Reeves",
        year=2021,
        duration=120,
        rating=8.5,
        image="https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        tags=["The Batman", "Robert Pattinson", "Joker"]
    )

    video6 = Video(
        title="Spider Man: No Way Home",
        description="When a failed assassination attempt on the King of Wakanda results in the death of his father, T'Challa returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king.",
        genre=["Action", "Adventure", "Fantasy"],
        cast="Tom Holland",
        director="Jon Watts",
        year=2021,
        duration=135,
        rating=8.5,
        image="https://image.tmdb.org/t/p/w500/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg",
        tags=["Marvel", "Spider Man", "No Way Home"]
    )

    video7 = Video(
        title="Gundam Hathaway",
        description="After Char's rebellion, Hathaway Noa leads an insurgency against Earth Federation, but meeting an enemy officer and a mysterious woman alters his fate.",
        genre=["Action", "Animation", "Drama"],
        cast="Kazuya Nakai",
        director="Yoshiyuki Tomino",
        year=2021,
        duration=120,
        rating=8.5,
        image="https://image.tmdb.org/t/p/w500/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg",
        tags=["Gundam", "Hathaway", "Char"]
    )

    video8 = Video(
        title="Venom: Let There Be Carnage",
        description="When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego 'Venom' to save his life.",
        genre=["Action", "Adventure", "Science Fiction"],
        cast="Tom Hardy",
        director="Andy Serkis",
        year=2021,
        duration=120,
        rating=8.5,
        image="https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
        tags=["Venom", "Let There Be Carnage", "Eddie Brock"]
    )
    video9 = Video(
        title="Arcane",
        description="The origins of two iconic League champions, set in the utopian Piltover and the oppressed underground of Zaun.",
        genre=["Animation", "Action", "Adventure"],
        cast="Lana Condor",
        director="Marcin Przybyłowicz",
        year=2021,
        duration=120,
        rating=8.5,
        image="https://image.tmdb.org/t/p/w500/9kg73Mg8WJKlB9Y2SAJzeDKAnuB.jpg",
        tags=["Arcane", "League of Legends", "Piltover"]
    )
    video10 = Video(
        title="Attack on Titan",
        description="When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers, causing a flood of the giants into what had been the humans' safe zone.",
        genre=["Action", "Animation", "Drama"],
        cast="Yûki Kaji",
        director="Tetsuro Araki",
        year=2013,
        duration=120,
        rating=8.5,
        image="https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
        tags=["Attack on Titan", "Shingeki no Kyojin", "Eren Jaeger"]
    )
    video11 = Video(
        title="Spirited Away",
        description="Chihiro meets the mysterious Haku (Miyu Irino), who explains that the park is a resort for supernatural beings who need a break from their time spent in the earthly realm, and that she must work there to free herself and her parents. ",
        genre=["Animation", "Adventure", "Family"],
        cast="Rumi Hiiragi",
        director="Hayao Miyazaki",
        year=2001,
        duration=125,
        rating=8.5,
        image="https://image.tmdb.org/t/p/w500/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg",
        tags=["Spirited Away", "Hayao Miyazaki", "Studio Ghibli"]
    )
    video12 = Video(
        title="Howl's Moving Castle",
        description="Sophie has an uneventful life at her late father's hat shop, but all that changes when she befriends wizard Howl, who lives in a magical flying castle. ",
        genre=["Animation", "Adventure", "Family"],
        cast="Chieko Baishô",
        director="Hayao Miyazaki",
        year=2004,
        duration=119,
        rating=8.5,
        image="https://image.tmdb.org/t/p/w500/2lECpi35Hnbpa4y46JX0aY3AWTy.jpg",
        tags=["Howl's Moving Castle", "Hayao Miyazaki", "Studio Ghibli"]
    )
    video13 = Video(
        title="Violet Evergarden",
        description="An emotionally detached soldier settles into postwar life as a ghostwriter and begins to reconnect with her feelings while searching for the meaning behind her former commander's final words to her.",
        genre=["Animation", "Drama", "Fantasy"],
        cast="Yui Ishikawa",
        director="Taichi Ishidate",
        year=2018,
        duration=120,
        rating=8.5,
        image="https://image.tmdb.org/t/p/w500/9iI8o4l9nFy5jYs9xM4jP0l4YzQ.jpg",
        tags=["Violet Evergarden", "Taichi Ishidate", "Yui Ishikawa"]
    )
    video14 = Video(
        title="Your Name",
        description="Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
        genre=["Animation", "Drama", "Fantasy"],
        cast="Ryûnosuke Kamiki",
        director="Makoto Shinkai",
        year=2016,
        duration=106,
        rating=8.5,
        image="https://image.tmdb.org/t/p/w500/xq1Ugd62d23K2knRUx6xxuALTZB.jpg",
        tags=["Your Name", "Makoto Shinkai", "Ryûnosuke Kamiki"]
    )
    video15 = Video(
        title="Squid Game",
        description="Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
        genre=["Action", "Drama", "Mystery"],
        cast="Jin-ho Choi",
        director="Unknown",
        year=2021,
        duration=120,
        rating=8.5,
        image="https://image.tmdb.org/t/p/w500/klAIFewuqcyEmH1SMtR2XbMyqzM.jpg",
        tags=["Squid Game", "Jin-ho Choi", "Unknown"]
    )
    video16 = Video(
        title="While You Were Sleeping",
        description="A young woman has visions through her dreams of terrible things that will happen to people in the future. A prosecutor tries to prevent these dreams from happening in real life.",
        genre=["Comedy", "Drama", "Romance"],
        cast="Bae Suzy",
        director="Unknown",
        year=2017,
        duration=120,
        rating=8.5,
        image="https://image.tmdb.org/t/p/w500/6t6r1VGQTTQecN4V0sZeqsmdU9g.jpg",
        tags=["While You Were Sleeping", "Bae Suzy", "Studio Dragon"]
    )
    video17 = Video(
        title="The Alchemy of Souls",
        description="A powerful sorceress in a blind woman's body encounters a man from a prestigious family, who wants her help to change his destiny.",
        genre=["Romance", "Drama", "Fantasy"],
        cast="Jung So-min",
        director="Unknown",
        year=2022,
        duration=120,
        rating=10,
        image="https://image.tmdb.org/t/p/w500/6t6r1VGQTTQecN4V0sZeqsmdU9g.jpg",
        tags=["The Alchemy of Souls", "Jung So-min", "Unknown"]
    )
    video18 = Video(
        title="Business Proposal",
        description="n disguise as her friend, Ha-ri shows up on a blind date to scare away her friend's prospective suitor. However, plans go awry when he turns out to be Ha-ri's CEO and he makes a proposal.",
        genre=["Romance", "Comedy", "Drama"],
        cast="Kim Sejeong",
        director="Unknown",
        year=2022,
        duration=120,
        rating=10,
        image="https://image.tmdb.org/t/p/w500/6t6r1VGQTTQecN4V0sZeqsmdU9g.jpg",
        tags=["Business Proposal", "Kim Sejeong", "Unknown"]
    )
    video19 = Video(
        title="Encanto",
        description="The Madrigals are an extraordinary family who live hidden in the mountains of Colombia in a charmed place called the Encanto. The magic of the Encanto has blessed every child in the family with a unique gift -- every child except Mirabel.",
        genre=["Animation", "Adventure", "Family"],
        cast="Ynairaly Simo",
        director="Unknown",
        year=2021,
        duration=120,
        rating=8,
        image="https://image.tmdb.org/t/p/w500/6t6r1VGQTTQecN4V0sZeqsmdU9g.jpg",
        tags=["Encanto", "Ynairaly Simo", "Unknown"]
    )
    video20 = Video(
        title="Peaky Blinders",
        description="A gangster family epic set in 1919 Birmingham, England; centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
        genre=["Crime", "Drama"],
        cast="Cillian Murphy",
        director="Unknown",
        year=2013,
        duration=120,
        rating=8.8,
        image="https://image.tmdb.org/t/p/w500/6t6r1VGQTTQecN4V0sZeqsmdU9g.jpg",
        tags=["Peaky Blinders", "Cillian Murphy", "Unknown"]
    )
    video21 = Video(
        title="Sweet Home",
        description="A man and a woman move into an apartment only to be surrounded by peculiar neighbors and occurrences. When the disturbances become violent, they uncover a sinister truth.",
        genre=["Horror", "Drama", "Mystery"],
        cast="Kang-ho Song",
        director="Unknown",
        year=2021,
        duration=120,
        rating=8.5,
        image="https://image.tmdb.org/t/p/w500/6t6r1VGQTTQecN4V0sZeqsmdU9g.jpg",
        tags=["Sweet Home", "Kang-ho Song", "Unknown"]
    )
    video22 = Video(
        title="The Counjuring",
        description="Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
        genre=["Horror", "Mystery", "Thriller"],
        cast="Patrick Wilson",
        director="Unknown",
        year=2013,
        duration=120,
        rating=7.5,
        image="https://image.tmdb.org/t/p/w500/6t6r1VGQTTQecN4V0sZeqsmdU9g.jpg",
        tags=["The Counjuring", "Patrick Wilson", "Unknown"]
    )
    video23 = Video(
        title="The Conjuring 2",
        description="Lorraine and Ed Warren travel to north London to help a single mother raising four children alone in a house plagued by malicious spirits.",
        genre=["Horror", "Mystery", "Thriller"],
        cast="Patrick Wilson",
        director="Unknown",
        year=2016,
        duration=120,
        rating=7.5,
        image="https://image.tmdb.org/t/p/w500/6t6r1VGQTTQecN4V0sZeqsmdU9g.jpg",
        tags=["The Conjuring 2", "Patrick Wilson", "Unknown"]
    )
    video24 = Video(
        title="Hotel Del Luna",
        description="A hotel that caters to the afterlife's elite, where the manager and a skeleton receptionist try to resolve the hotel's guests' unfinished business.",
        genre=["Fantasy", "Drama", "Romance"],
        cast="IU",
        director="Unknown",
        year=2019,
        duration=120,
        rating=10,
        image="https://image.tmdb.org/t/p/w500/6t6r1VGQTTQecN4V0sZeqsmdU9g.jpg",
        tags=["Hotel Del Luna", "IU", "Unknown"]
    )
    video25 = Video(
        title="Paclfic Rim",
        description="When legions of monstrous creatures, known as Kaiju, started rising from the sea, a war began that would take millions of lives and consume humanity's resources for years on end.",
        genre=["Action", "Adventure", "Science Fiction"],
        cast="Charlie Hunnam",
        director="Unknown",
        year=2013,
        duration=120,
        rating=6.9,
        image="https://image.tmdb.org/t/p/w500/6t6r1VGQTTQecN4V0sZeqsmdU9g.jpg",
        tags=["Paclfic Rim", "Charlie Hunnam", "Unknown"]
    )
    db.session.add(video1)
    db.session.add(video2)
    db.session.add(video3)
    db.session.add(video4)
    db.session.add(video5)
    db.session.add(video6)
    db.session.add(video7)
    db.session.add(video8)
    db.session.add(video9)
    db.session.add(video10)
    db.session.add(video11)
    db.session.add(video12)
    db.session.add(video13)
    db.session.add(video14)
    db.session.add(video15)
    db.session.add(video16)
    db.session.add(video17)
    db.session.add(video18)
    db.session.add(video19)
    db.session.add(video20)
    db.session.add(video21)
    db.session.add(video22)
    db.session.add(video23)
    db.session.add(video24)
    db.session.add(video25)

    db.session.commit()
    
def undo_videos():
    db.session.execute(text('TRUNCATE videos RESTART IDENTITY CASCADE;'))
    db.session.commit()

