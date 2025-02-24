import Header from './components/header.js';
import Footer from './components/footer.js';

export default function Home() {
  return (
    <div>
        <Header />
        <section class="w-screen max-h-full">
            <div class="flex flex-col max-w-screen-md mx-auto text-left pt-9">
                <h1 class="text-9xl font-bold text-white">cs.fyi</h1>
                <h2 class="text-gray-400 mt-6 text-xl">Frontend, Backend, DevOps and everything in between.</h2>
            </div>
            <div class="flex justify-between max-w-screen-md mx-auto pt-16 text-left">
                <a class="text-white text-2xl">Deploy to ECS with Fargate using Terraform</a>
                <a class="text-gray-600 text-lg hover:text-white">Nov 3, 2023</a>
            </div>
            <hr class="w-full max-w-screen-md mx-auto my-4 border-gray-500"></hr>
            <div class="flex justify-between max-w-screen-md mx-auto text-left">
                <a class="text-white text-2xl">IaaS vs PaaS vs SaaS</a>
                <a class="text-gray-600 text-lg hover:text-white">Oct 24, 2023</a>
            </div>
            <hr class="w-full max-w-screen-md mx-auto my-4 border-gray-500"></hr>
            <div class="flex justify-between max-w-screen-md mx-auto text-left">
                <a class="text-white text-2xl">Scalability for Dummies</a>
                <a class="text-gray-600 text-lg hover:text-white">Sep 24, 2023</a>
            </div>
            <hr class="w-full max-w-screen-md mx-auto my-4 border-gray-500"></hr>
            <div class="flex justify-between max-w-screen-md mx-auto text-left">
                <a class="text-white text-2xl">Load IP addresses for EC2 in Ansible Inventory</a>
                <a class="text-gray-600 text-lg hover:text-white">Sep 6, 2023</a>
            </div>
            <hr class="w-full max-w-screen-md mx-auto my-4 border-gray-500"></hr>
            <div class="flex justify-between max-w-screen-md mx-auto text-left">
                <a class="text-white text-2xl">Generate Terraform from existing AWS infrastructure</a>
                <a class="text-gray-600 text-lg hover:text-white">Sep 6, 2023</a>
            </div>
            <hr class="w-full max-w-screen-md mx-auto my-4 border-gray-500"></hr>
            <div class="flex justify-between max-w-screen-md mx-auto text-left">
                <a class="text-white text-2xl">Setup and Install PostgreSQL Using Docker</a>
                <a class="text-gray-600 text-lg hover:text-white">Apr 18, 2023</a>
            </div>
            <hr class="w-full max-w-screen-md mx-auto my-4 border-gray-500"></hr>
            <div class="flex justify-between max-w-screen-md mx-auto text-left">
                <a class="text-white text-2xl">Add Multiple SSH keys to an EC2 Server</a>
                <a class="text-gray-600 text-lg hover:text-white">Apr 7, 2023</a>
            </div>
            <hr class="w-full max-w-screen-md mx-auto my-4 border-gray-500"></hr>
            <div class="flex justify-between max-w-screen-md mx-auto text-left">
                <a class="text-white text-2xl">How to push to a Different git Branch?</a>
                <a class="text-gray-600 text-lg hover:text-white">Apr 7, 2023</a>
            </div>
            <hr class="w-full max-w-screen-md mx-auto my-4 border-gray-500"></hr>
            <div class="flex justify-between max-w-screen-md mx-auto text-left">
                <a class="text-white text-2xl">How to get Username and Group in Linux</a>
                <a class="text-gray-600 text-lg hover:text-white">Apr 6, 2023</a>
            </div>
            <hr class="w-full max-w-screen-md mx-auto my-4 border-gray-500"></hr>
            <div class="flex justify-between max-w-screen-md mx-auto text-left">
                <a class="text-white text-2xl">Everything You Need to Know About DNS</a>
                <a class="text-gray-600 text-lg hover:text-white">Mar 26, 2023</a>
            </div>
            <hr class="w-full max-w-screen-md mx-auto my-4 border-gray-500"></hr>
            <Footer />
        </section>
    </div>
  );
}
