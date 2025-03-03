import Header from '../components/header.js'
import Footer from '../components/footer.js'

export default function Explore(){
    return(
        <div>
            <Header/>
        <section class="w-screen max-h-full">
            <div class="flex flex-col max-w-screen-md mx-auto text-left pt-9">
                <h1 class="text-6xl font-bold text-white">Explore</h1>
                <h2 class="text-gray-400 mt-6 text-xl">Navigate your way through the guides and tutorials.</h2>
            </div>
            <p class="text-gray-400 text-sm mt-14 flex max-w-screen-md mx-auto">GUIDES BY TAG</p>
            <div class="flex flex-row flex-wrap max-w-screen-md mx-auto">
                <button class="bg-zinc-800 text-gray-400 mt-4 py-1 px-3 rounded-md hover:bg-zinc-500 hover:text-zinc-950 mr-2">All</button>
                <button class="bg-zinc-800 text-gray-400 mt-4 py-1 px-3 rounded-md hover:bg-zinc-500 hover:text-zinc-950 mr-2">DevOps</button>
                <button class="bg-zinc-800 text-gray-400 mt-4 py-1 px-3 rounded-md hover:bg-zinc-500 hover:text-zinc-950 mr-2">Amazon Web Services</button>
                <button class="bg-zinc-800 text-gray-400 mt-4 py-1 px-3 rounded-md hover:bg-zinc-500 hover:text-zinc-950 mr-2">Distributed Systems</button>
                <button class="bg-zinc-800 text-gray-400 mt-4 py-1 px-3 rounded-md hover:bg-zinc-500 hover:text-zinc-950 mr-2">Linux</button>
                <button class="bg-zinc-800 text-gray-400 mt-4 py-1 px-3 rounded-md hover:bg-zinc-500 hover:text-zinc-950 mr-2">Web Development</button>
                <button class="bg-zinc-800 text-gray-400 mt-4 py-1 px-3 rounded-md hover:bg-zinc-500 hover:text-zinc-950 mr-2">System Design</button>
                <button class="bg-zinc-800 text-gray-400 mt-4 py-1 px-3 rounded-md hover:bg-zinc-500 hover:text-zinc-950 mr-2">AWS Web Services</button>
                <button class="bg-zinc-800 text-gray-400 mt-4 py-1 px-3 rounded-md hover:bg-zinc-500 hover:text-zinc-950 mr-2">Terraform</button>
                <button class="bg-zinc-800 text-gray-400 mt-4 py-1 px-3 rounded-md hover:bg-zinc-500 hover:text-zinc-950 mr-2">CSS</button>
                <button class="bg-zinc-800 text-gray-400 mt-4 py-1 px-3 rounded-md hover:bg-zinc-500 hover:text-zinc-950 mr-2">Psychology</button>
                <button class="bg-zinc-800 text-gray-400 mt-4 py-1 px-3 rounded-md hover:bg-zinc-500 hover:text-zinc-950 mr-2">Kubernetes</button>
                <button class="bg-zinc-800 text-gray-400 mt-4 py-1 px-3 rounded-md hover:bg-zinc-500 hover:text-zinc-950 mr-2">Cheatsheet</button>
                <button class="bg-zinc-800 text-gray-400 mt-4 py-1 px-3 rounded-md hover:bg-zinc-500 hover:text-zinc-950 mr-2">Data Structures</button>
                <button class="bg-zinc-800 text-gray-400 mt-4 py-1 px-3 rounded-md hover:bg-zinc-500 hover:text-zinc-950 mr-2">Scalability</button>
                <button class="bg-zinc-800 text-gray-400 mt-4 py-1 px-3 rounded-md hover:bg-zinc-500 hover:text-zinc-950 mr-2">Ansible</button>
                <button class="bg-zinc-800 text-gray-400 mt-4 py-1 px-3 rounded-md hover:bg-zinc-500 hover:text-zinc-950 mr-2">Docker</button>
                <button class="bg-zinc-800 text-gray-400 mt-4 py-1 px-3 rounded-md hover:bg-zinc-500 hover:text-zinc-950 mr-2">Git</button>
                <button class="bg-zinc-800 text-gray-400 mt-4 py-1 px-3 rounded-md hover:bg-zinc-500 hover:text-zinc-950 mr-2">Accessibility</button>
                <button class="bg-zinc-800 text-gray-400 mt-4 py-1 px-3 rounded-md hover:bg-zinc-500 hover:text-zinc-950 mr-2">Android</button>
                <button class="bg-zinc-800 text-gray-400 mt-4 py-1 px-3 rounded-md hover:bg-zinc-500 hover:text-zinc-950 mr-2">Career</button>
            </div>
            <p class="text-gray-400 text-sm mt-14 flex max-w-screen-md mx-auto">CHEATSHEETS</p>
            <div class="flex flex-row flex-wrap max-w-screen-md mx-auto">
                <button class="bg-zinc-800 text-gray-400 mt-4 py-1 px-3 rounded-md hover:bg-zinc-500 hover:text-zinc-950 mr-2">TypeScript Cheatsheet</button>
                <button class="bg-zinc-800 text-gray-400 mt-4 py-1 px-3 rounded-md hover:bg-zinc-500 hover:text-zinc-950 mr-2">Git Cheatsheet</button>
            </div>
            <Footer/>
        </section>
        </div>
    )
}