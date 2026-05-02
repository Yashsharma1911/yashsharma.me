// Compose the homepage in section order.
function App() {
  const {
    Nav, Hero, LogoWall, Credibility, About,
    SignatureTalks, PullQuote, TalkList, PhotoMarquee,
    Content, OpenSource, Social, Press, Footer,
  } = window;

  return (
    <div className="bg-paper text-ink min-h-screen">
      <Nav />
      <Hero />
      <LogoWall />
      <Credibility />
      <About />
      <SignatureTalks />
      <PullQuote
        quote={`The talk that finally made our director understand why our observability bill kept doubling. I rewrote our quarterly platform plan on the flight home.`}
        attribution="staff sre · series-c fintech · after kubecon na 2023"
      />
      <TalkList />
      <PhotoMarquee />
      <Content />
      <OpenSource />
      <PullQuote
        quote={`Sahil is one of maybe ten people in cloud-native I trust to give an honest answer about a system, including the parts where they got it wrong.`}
        attribution="cncf tag observability co-chair"
      />
      <Social />
      <Press />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
