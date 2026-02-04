export default function Home() {
  return (
    <>
      <header>
        <meta name="homepage"></meta>
        <h2>Upcoming Event</h2>
      </header>
      <main className="home">
        <div>
          <img
            id="foo-fighters"
            className="band-image"
            src="https://stitchedsound.com/wp-content/uploads/2018/09/IMG_1007-620x400.jpg"
            alt="Dave Grohl playing guitar"
            style={{ width: "800px" }}
          />
          <a href="https://foofighters.com/tour-dates">
            <p>Foo Fighters Tour Dates</p>
          </a>
        </div>
      </main>
    </>
  );
}
