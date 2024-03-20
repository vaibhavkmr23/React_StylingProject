import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className='flex flex-col items-center mt-8 mb-8 md:mb-16'>
      <img src={logo} alt="A canvas" className='size-64 object-contain'/>
      <h1 className='text-xl font-semibold text-center tracking-widest uppercase text-amber-800 font-title md:text-4xl'>ReactArt</h1>
      <p className='text-stone-500'>A community of artists and art-lovers.</p>
    </header>
  );
}
