export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

  <h1 className="p-6 text-red lg:text-9xl text-red-600 md:text-3xl lg:text-green-950">forms </h1>
  <form action="">
 <div className="text-red-600 lg:text-7xl md:text-4xl">
 <label htmlFor="">name</label><br />
 <label htmlFor="">email</label><br />
 </div>
  </form>
    </div>
  );
}
