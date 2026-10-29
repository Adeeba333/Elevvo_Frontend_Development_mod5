
import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6 py-16">
    <section class="max-w-3xl text-center">

      <p class="text-sm md:text-base font-semibold tracking-widest text-purple-400 mb-4">
        FRONTEND DEVELOPMENT
      </p>

      <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-6">
        Build Better Web Experiences
      </h1>

      <p class="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
        Creating simple, responsive, and modern websites
        with HTML, CSS, JavaScript, and Tailwind CSS.
      </p>

      <a
        href="#projects"
        class="inline-block rounded-lg bg-purple-500 px-7 py-3 font-semibold text-white transition hover:bg-purple-600"
      >
        Explore Projects
      </a>

    </section>
  </main>
`
