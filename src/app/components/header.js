
export default function Header(){
    return(
        <div>
            <header class="text-gray-400 body-font">
                <div class="max-w-screen-md mx-auto flex justify-between items-center p-8">
                <a class="flex title-font font-medium items-center text-gray mb-4 md:mb-0 hover:text-white" href="./index.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml">
                        <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
                    </svg>
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base">
                    <a class="mr-5 hover:text-white text-xl" href="./index.html">Home</a>
                    <a class="mr-5 hover:text-white text-xl" href="./explore.html">Explore</a>
                </nav>
                </div>
            </header>
        </div>
    )
}