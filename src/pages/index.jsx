// Step 1: Import React
import * as React from 'react'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
  {/*HEADER*/}
<header className="bg-yellow-50">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Jati Store</h1>

        <p className="mt-1.5 text-sm text-gray-500">Jual berbagai macam barang kebutuhan!!</p>
      </div>

      <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
        <button>


        </button>

        <button
          className="block rounded-lg bg-yellow-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-yellow-700 focus:outline-none focus:ring"
          type="button"
        >
          Hubungi Admin
        </button>
      </div>
    </div>
  </div>
</header>
  {/*END HEADER*/}
  {/*NAVBAR*/}
  
  {/*END NAVBAR*/}
  {/*CALL TO ACTION*/}
<section className="bg-gray-50">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
        
      </h2>

      <p className="hidden text-gray-500 sm:mt-4 sm:block">
        
      </p>
    </div>

    <div className="mx-auto mt-8 max-w-xl">
      <form action="#" className="sm:flex sm:gap-4">
        <div className="sm:flex-1">
          <label htmlFor="email" className="sr-only"></label>

          <input
            type="email"
            placeholder=""
            className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
          /> 
        </div>

        <button
          type="submit"
          className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-yellow-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
        >
          
        </button>
      </form>
    </div>
  </div>
</section>
  {/*END CALL TO ACTION*/}
  {/*PRODUCT LIST*/}
  <a href="#" class="grid grid-cols-3 gap-4 max-w-xl mx-auto py-8" className="group block">
  <img
    src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    alt=""
    className="aspect-square w-full rounded object-cover"
  />
  <div className="mt-3">
    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
      Simple Watch
    </h3>

    <p className="mt-1 text-sm text-gray-700">$150</p>
  </div>
</a>
  {/*END PRODUCT LIST*/}
  {/*FOOTER*/}
  {/*END FOOTER*/}
  






    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage