function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="App"> {/* This is the Flex Container */}
      <Navbar setPage={setPage} />

      <main> {/* This part will grow to fill empty space */}
        {page === 'home' ? (
          <>
            <Hero />
            <Services />
          </>
        ) : (
          <PlumbingPage /> /* Or whatever your sub-page is */
        )}
      </main>

      <footer>
        <p>© 2024 FixMate Clone</p>
      </footer>
    </div>
  );
}