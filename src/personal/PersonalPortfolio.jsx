import { useEffect } from 'react'
import './PersonalPortfolio.css'

const siteBase = window.location.hostname.endsWith('.github.io') ? '/Portfolio/' : '/'
const sitePath = (path) => `${siteBase}${path}`

const pages = {
  tcgs: {
    label: "TCG's",
    title: 'Collect, build, play.',
    intro: 'Trading card games combine collecting, strategy, and the excitement of finding the perfect play.',
    color: 'pink',
    icon: '🃏',
    tags: ['Deck building', 'Collecting', 'Strategy', 'Card artwork'],
  },
  anime: {
    label: 'Anime',
    title: 'Stories worth staying up for.',
    intro: 'Anime gives me memorable characters, imaginative worlds, and stories that can be exciting, funny, or unexpectedly heartfelt.',
    color: 'blue',
    icon: '✦',
    sections: [
      ['What I enjoy', 'I enjoy anime that makes its world feel alive and gives its characters room to grow. Big adventures are great, but quiet character moments are often what I remember most.'],
      ['The watchlist', 'There is always another series to discover. This page is a place for favourite genres, recommendations, and the shows that made an impression.'],
    ],
    tags: ['Adventure', 'Characters', 'World building', 'Soundtracks'],
  },
  games: {
    label: 'Games',
    title: 'Play, explore, repeat.',
    intro: 'Games are my way to unwind, explore new worlds, solve problems, and spend time with friends.',
    color: 'yellow',
    icon: '🎮',
    sections: [
      ['What I enjoy', 'I can enjoy a game for many different reasons: exploring somewhere new, mastering a challenge, getting lost in a story, or simply having a good laugh with friends.'],
      ['The backlog', 'There is always a new world waiting to be explored. I like keeping track of the games I am playing, the ones I want to try, and the ones I keep coming back to.'],
    ],
    tags: ['Exploration', 'Co-op', 'Challenges', 'Story'],
  },
}

function PersonalHeader({ currentPage }) {
  return (
    <header className="personal-nav">
      <a className="personal-brand" href={sitePath('personal')} aria-label="Go to personal home">
        <span className="personal-brand-mark">S</span>
        <span>Steff&apos;s corner</span>
      </a>
      <nav className="personal-nav-links" aria-label="Personal portfolio navigation">
        <a className={currentPage === 'home' ? 'personal-nav-active' : ''} href={sitePath('personal')}>Home</a>
        <a className={currentPage === 'tcgs' ? 'personal-nav-active' : ''} href={sitePath('personal/tcgs')}>TCG&apos;s</a>
        <a className={currentPage === 'anime' ? 'personal-nav-active' : ''} href={sitePath('personal/anime')}>Anime</a>
        <a className={currentPage === 'games' ? 'personal-nav-active' : ''} href={sitePath('personal/games')}>Games</a>
      </nav>
      <a className="personal-switch-link" href={sitePath('')}>Professional site ↗</a>
    </header>
  )
}

function PersonalFooter() {
  return (
    <footer className="personal-footer">
      <span>Made with curiosity &amp; a little too much enthusiasm.</span>
      <a href="#personal-top">Back to top ↑</a>
    </footer>
  )
}

function PersonalHome() {
  return (
    <>
      <section className="personal-hero personal-home-hero">
        <div className="personal-hero-copy">
          <p className="personal-kicker">A small corner of the internet</p>
          <h1>Hi, I&apos;m Steff.<br /><span>Welcome to my world.</span></h1>
          <p className="personal-hero-text">This is where I share the things I enjoy outside of work and code: cards, animated stories, games, and all the little obsessions in between.</p>
          <a className="personal-primary-button" href="#hobbies">Explore my hobbies <span>↓</span></a>
        </div>
        <div className="personal-hero-art" aria-label="Decorative illustration">
          <div className="personal-orbit personal-orbit-one" />
          <div className="personal-orbit personal-orbit-two" />
          <div className="personal-sun">✦</div>
          <span className="personal-sticker personal-sticker-card">♥</span>
          <span className="personal-sticker personal-sticker-star">✦</span>
          <span className="personal-sticker personal-sticker-game">A</span>
          <div className="personal-art-caption">curious by nature<br /><strong>always collecting stories</strong></div>
        </div>
      </section>

      <section className="personal-section personal-hobbies" id="hobbies">
        <div className="personal-section-heading">
          <p className="personal-kicker">What keeps me busy</p>
          <h2>Things I&apos;m into <span>✦</span></h2>
          <p>Different hobbies, same feeling: discovering something new and wanting to share it.</p>
        </div>
        <div className="personal-interest-grid">
          {Object.entries(pages).map(([id, page]) => (
            <a className={`personal-interest-card personal-interest-${page.color}`} href={sitePath(`personal/${id}`)} key={id}>
              <span className="personal-interest-icon">{page.icon}</span>
              <span className="personal-card-arrow">↗</span>
              <h3>{page.label}</h3>
              <p>{page.intro}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}

function HobbyPage({ page }) {
  if (page === pages.tcgs) {
    return <TcgPage />
  }
  if (page === pages.anime) {
    return <AnimePage />
  }
  if (page === pages.games) {
    return <GamesPage />
  }

  return (
    <main className="personal-page-main">
      <section className={`personal-page-hero personal-page-hero-${page.color}`}>
        <div className="personal-page-hero-inner">
          <span className="personal-page-icon" aria-hidden="true">{page.icon}</span>
          <div>
            <p className="personal-kicker">{page.label} / personal interests</p>
            <h1>{page.title}</h1>
            <p>{page.intro}</p>
          </div>
        </div>
      </section>
      <section className="personal-content-section">
        <div className="personal-content-column">
          {page.sections.map(([title, text]) => (
            <article className="personal-content-panel" key={title}>
              <p className="personal-kicker">{page.label}</p>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
          <div className="personal-tags">
            {page.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
        <aside className="personal-page-aside">
          <span className="personal-aside-icon">{page.icon}</span>
          <h2>More to come</h2>
          <p>This page will grow as I add favourites, recommendations, and things I discover along the way.</p>
        </aside>
      </section>
    </main>
  )
}

function AnimePage() {
  const favorites = [
    {
      type: 'Anime',
      title: 'Favourite anime',
      image: 'https://cdn.myanimelist.net/images/anime/1244/138851.jpg',
      imageAlt: 'One Piece cover art',
      text: 'One Piece is my favourite anime. The adventure, the crew, and the world make it easy to keep coming back to. It is also a very original choice... probably nobody has ever picked One Piece as a favourite before.',
    },
    {
      type: 'Manga',
      title: 'Favourite manga',
      image: 'https://cdn.myanimelist.net/images/anime/1136/138410.jpg',
      imageAlt: 'Undead Unluck cover art',
      text: 'Undead Unluck is my favourite manga. I enjoy its unusual ideas, energetic storytelling, and the way its characters grow as the story keeps getting bigger.',
    },
  ]

  return (
    <main className="personal-page-main">
      <section className="personal-page-hero personal-page-hero-blue">
        <div className="personal-page-hero-inner">
          <span className="personal-page-icon" aria-hidden="true">✦</span>
          <div>
            <p className="personal-kicker">Anime &amp; manga / personal interests</p>
            <h1>Stories worth staying up for.</h1>
            <p>Anime and manga give me memorable characters, imaginative worlds, and stories that can be exciting, funny, or unexpectedly heartfelt.</p>
          </div>
        </div>
      </section>

      <section className="personal-anime-section">
        <div className="personal-anime-favorites">
          <div className="personal-anime-heading">
            <p className="personal-kicker">01 / Personal favourites</p>
            <h2>Stories that stuck with me</h2>
          </div>
          <div className="personal-favorite-grid">
            {favorites.map((favorite) => (
              <article className="personal-favorite-card" key={favorite.type}>
                <div className="personal-cover-placeholder">
                  <img src={favorite.image} alt={favorite.imageAlt} />
                </div>
                <div className="personal-favorite-content">
                  <p className="personal-deck-number">{favorite.type}</p>
                  <h3>{favorite.title}</h3>
                  <p>{favorite.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <article className="personal-anime-collection">
          <div>
            <p className="personal-kicker">02 / My collection</p>
            <h2>Things I&apos;m watching and reading</h2>
            <p>
              I like keeping track of the series I have watched, the manga I am
              reading, and the stories I still want to discover.
            </p>
          </div>
          <div className="personal-anime-collection-action">
            <span className="personal-anime-collection-icon">▤</span>
            <div>
              <h3>My lists</h3>
              <p>Keep up with what I am watching and reading.</p>
              <div className="personal-collection-links">
                <a href="https://myanimelist.net/animelist/coolaap" target="_blank" rel="noreferrer">Anime list <span>↗</span></a>
                <a href="https://myanimelist.net/mangalist/coolaap" target="_blank" rel="noreferrer">Manga list <span>↗</span></a>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}

function GamesPage() {
  const gameSections = [
    {
      type: 'Roguelike / roguelite',
      title: 'The Binding of Isaac',
      image: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co949f.jpg',
      imageAlt: 'The Binding of Isaac cover art',
      text: 'The Binding of Isaac is one of my favourite games in the genre. The strange world, huge number of items, and endless combinations make every run feel a little different.',
      icon: '✦',
    },
    {
      type: 'Metroidvania',
      title: 'Hollow Knight: Silksong',
      image: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/cobebu.jpg',
      imageAlt: 'Hollow Knight: Silksong cover art',
      text: 'Silksong is the Metroidvania I am most looking forward to. I enjoy the atmosphere and exploration of this genre, and I am excited to see where Hornet’s adventure goes.',
      icon: '◇',
    },
  ]

  return (
    <main className="personal-page-main">
      <section className="personal-page-hero personal-page-hero-yellow">
        <div className="personal-page-hero-inner">
          <span className="personal-page-icon" aria-hidden="true">🎮</span>
          <div>
            <p className="personal-kicker">Games / personal interests</p>
            <h1>Play, explore, repeat.</h1>
            <p>Games are my way to unwind, explore new worlds, solve problems, and spend time with friends.</p>
          </div>
        </div>
      </section>

      <section className="personal-games-section">
        <div className="personal-games-heading">
          <p className="personal-kicker">The genres I keep coming back to</p>
          <h2>Favourite games</h2>
        </div>
        <div className="personal-game-list">
          {gameSections.map((game) => (
            <article className="personal-game-card" key={game.title}>
              <div className="personal-game-cover">
                <img src={game.image} alt={game.imageAlt} />
              </div>
              <div className="personal-game-content">
                <p className="personal-deck-number">{game.type}</p>
                <h3>{game.title}</h3>
                <p>{game.text}</p>
              </div>
            </article>
          ))}
        </div>
        <article className="personal-games-collection">
          <div>
            <p className="personal-kicker">Collection</p>
            <h2>Games I&apos;ve played</h2>
            <p>A growing list of games I have played, explored, and spent far too many hours on.</p>
          </div>
          <a className="personal-resource-link" href="https://backloggd.com/u/coolaap/played/" target="_blank" rel="noreferrer">
            View my Backloggd collection <span>↗</span>
          </a>
        </article>
      </section>
    </main>
  )
}

function TcgPage() {
  return (
    <main className="personal-page-main">
      <section className="personal-page-hero personal-page-hero-pink">
        <div className="personal-page-hero-inner">
          <span className="personal-page-icon" aria-hidden="true">🃏</span>
          <div>
            <p className="personal-kicker">TCG&apos;s / personal interests</p>
            <h1>Collect, build, play.</h1>
            <p>Trading card games combine collecting, strategy, and the excitement of finding the perfect play.</p>
          </div>
        </div>
      </section>

      <section className="personal-tcg-section">
        <article className="personal-tcg-panel personal-tcg-riftbound">
          <div className="personal-tcg-panel-heading">
            <p className="personal-kicker">01 / Riftbound</p>
            <h2>My first Riftbound decks</h2>
            <p>
              I started playing Riftbound when <strong>Spiritforged</strong> came out.
              Since then, I have enjoyed learning the game, testing different ideas,
              and finding decks that match the way I like to play.
            </p>
          </div>
          <div className="personal-deck-list">
            <article className="personal-deck-card personal-deck-azir">
              <span className="personal-deck-icon">☀</span>
              <div>
                <p className="personal-deck-number">Deck 01</p>
                <h3>Azir</h3>
                <p>A deck I enjoy taking to the board and building a strong position over time.</p>
                <a className="personal-deck-link" href="https://piltoverarchive.com/decks/view/58c77dac-e943-40f2-9767-3d39fcc8958c" target="_blank" rel="noreferrer">View Azir deck <span>↗</span></a>
              </div>
            </article>
            <article className="personal-deck-card personal-deck-ziggs">
              <span className="personal-deck-icon">✹</span>
              <div>
                <p className="personal-deck-number">Deck 02</p>
                <h3>Ziggs</h3>
                <p>A more explosive option that makes every turn feel like it could change the game.</p>
                <a className="personal-deck-link" href="https://piltoverarchive.com/decks/view/cb981cf2-1273-41fa-a2cf-16114ebdec80" target="_blank" rel="noreferrer">View Ziggs deck <span>↗</span></a>
              </div>
            </article>
          </div>
          <a className="personal-resource-link" href="https://piltoverarchive.com/users/coolaap/collection/1b666509-502d-497e-910d-34cad93be03f" target="_blank" rel="noreferrer">
            Browse my Riftbound collection <span>↗</span>
          </a>
        </article>

        <article className="personal-tcg-panel personal-tcg-magic">
          <div className="personal-tcg-panel-heading">
            <p className="personal-kicker">02 / Magic: The Gathering</p>
            <h2>Still learning the ropes</h2>
            <p>
              I am pretty new to Magic, so I am still exploring formats, colours,
              and the kind of decks I enjoy playing. This is where I will keep track
              of the decks I am trying and the lists I want to improve.
            </p>
          </div>
          <div className="personal-magic-links">
            <div className="personal-link-placeholder">
              <span>♢</span>
              <div>
                <p className="personal-deck-number">Commander 01</p>
                <h3>Otrimi, the Ever Playful</h3>
                <p>A commander deck I am exploring while getting more familiar with Magic.</p>
                <a className="personal-deck-link" href="https://moxfield.com/decks/CB1RG9ZuVUi5-5YlSlA5UA" target="_blank" rel="noreferrer">View Otrimi deck <span>↗</span></a>
              </div>
            </div>
            <div className="personal-link-placeholder">
              <span>♤</span>
              <div>
                <p className="personal-deck-number">Commander 02</p>
                <h3>Toph, Hardheaded Teacher</h3>
                <p>Another commander I am looking forward to building and learning to play.</p>
                <a className="personal-deck-link" href="https://moxfield.com/decks/V4igAf8Ts3mWCbYT6Acogg" target="_blank" rel="noreferrer">View Toph deck <span>↗</span></a>
              </div>
            </div>
          </div>
          <a className="personal-resource-link personal-moxfield-link" href="https://moxfield.com/collection/wVAPjjiMlEqxx0ztYdjG2Q" target="_blank" rel="noreferrer">
            View my Magic collection <span>↗</span>
          </a>
        </article>
      </section>
    </main>
  )
}

function PersonalPortfolio() {
  const path = window.location.pathname.replace(/\/+$/, '')
  const currentPage = path.split('/').pop()
  const hobbyPage = pages[currentPage]

  useEffect(() => {
    document.title = hobbyPage ? `Steff | ${hobbyPage.label}` : 'Steff | Personal corner'
  }, [hobbyPage])

  return (
    <div className="personal-site" id="personal-top">
      <PersonalHeader currentPage={hobbyPage ? currentPage : 'home'} />
      {hobbyPage ? <HobbyPage page={hobbyPage} /> : <main><PersonalHome /></main>}
      <PersonalFooter />
    </div>
  )
}

export default PersonalPortfolio
