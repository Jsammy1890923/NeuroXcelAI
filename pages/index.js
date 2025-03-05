import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white">
      <Head>
        <title>NeuroXcel AI</title>
      </Head>
      <h1 className="text-4xl font-bold">Welcome to NeuroXcel AI</h1>
      <p className="text-lg mt-4">AI-powered automation for business growth.</p>
      <img src="/logo.png" alt="NeuroXcel Logo" className="mt-6 w-48" />
    </div>
  );
}
