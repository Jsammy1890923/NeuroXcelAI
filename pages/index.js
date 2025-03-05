import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Head>
        <title>NeuroXcel AI</title>
      </Head>

      <Navbar />  {/* Added Navbar Here */}

      <main className="flex flex-col items-center justify-center flex-grow py-10">
        <h1 className="text-4xl font-bold">Welcome to NeuroXcel AI</h1>
        <p className="text-lg mt-4">AI-powered automation for business growth.</p>
        <img src="/logo.png" alt="NeuroXcel Logo" className="mt-6 w-48" />
      </main>

      <Footer />  {/* Added Footer Here */}
    </div>
  );
}
