export default function Page() {
  return (
    <>
      <section class="bg-white dark:bg-black">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-neutral-900">
              Come meet your new road partner.
            </h1>
            <p class="max-w-2xl mb-6 font-light text-neutral-500 lg:mb-8 md:text-lg lg:text-xl dark:text-neutral-400">
              We take care of and resell vehicles in amazing condition. Approved
              by our happy customers.
            </p>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-neutral-900 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Take a look
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-neutral-900 border border-orange-300 rounded-lg hover:bg-orange-400 focus:ring-4 focus:ring-neutral-900 dark:text-neutral-900 dark:border-neutral-200 dark:hover:bg-orange-300 dark:focus:ring-neutral-300"
            >
              Buy a ride
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="../images/vecteezy_american-muscle-car-vector-illustration_23063844.jpg"
              alt="mockup"
            />
          </div>
        </div>
      </section>
    </>
  );
}
