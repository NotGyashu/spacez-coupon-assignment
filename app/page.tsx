import Header from './components/Header';
import SignOutPage from './signout/page';

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-4 ">
    
      <main className="">
        <SignOutPage />
      </main>
    </div>
  );
}
