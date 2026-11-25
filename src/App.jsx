import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function Navbar() {
  return (
    <nav className="bg-blue-900 p-4 text-white">
      My Website
    </nav>
  );
}

function Header() {
  return (
    <header className="bg-blue-100 p-10 text-center">
      <h1 className="text-4xl font-bold">
        Welcome to My Website
      </h1>
      <p>Learn React step by step</p>
    </header>
  );
}

function Main() {
  return (
    <main className="p-10">
      <h2 className="text-2xl font-bold">
        Our Services
      </h2>

      <p>HTML, CSS and React</p>
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-blue-900 p-4 text-center text-white">
      © My Website
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;