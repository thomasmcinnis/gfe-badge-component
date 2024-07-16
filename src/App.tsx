import BadgeSection from './components/BadgeSection.tsx';
import Credits from './components/Credits.tsx';

function App() {
  return (
    <>
      <main className="flex flex-column justify-center">
        <div className="mt-[200px]">
          <BadgeSection />
        </div>
      </main>
      <Credits />
    </>
  );
}

export default App;
