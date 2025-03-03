import Header from './components/header';
import Footer from './components/footer';

export async function getStaticProps() {
  const posts = [
    { id: 1, title: 'Deploy to ECS with Fargate using Terraform', date: 'Nov 3, 2023' },
    { id: 2, title: 'IaaS vs PaaS vs SaaS', date: 'Oct 24, 2023' },
    { id: 3, title: 'Scalability for Dummies', date: 'Sep 24, 2023' },
    { id: 4, title: 'Load IP addresses for EC2 in Ansible Inventory', date: 'Sep 6, 2023' },
    { id: 5, title: 'Generate Terraform from existing AWS infrastructure', date: 'Sep 6, 2023' },
    { id: 6, title: 'Setup and Install PostgreSQL Using Docker', date: 'Apr 18, 2023' },
    { id: 7, title: 'Add Multiple SSH keys to an EC2 Server', date: 'Apr 7, 2023' },
    { id: 8, title: 'How to push to a Different git Branch?', date: 'Apr 7, 2023' },
    { id: 9, title: 'How to get Username and Group in Linux', date: 'Apr 6, 2023' },
    { id: 10, title: 'Everything You Need to Know About DNS', date: 'Mar 26, 2023' },
  ];

  return {
    props: { posts }, // Pass data as props
  };
}

export default function Home({ posts }) {
  return (
    <div>
      <Header />
      <section className="w-screen max-h-full">
        <div class="flex flex-col max-w-screen-md mx-auto text-left pt-9">
            <h1 class="text-9xl font-bold text-white">cs.fyi</h1>
            <h2 class="text-gray-400 mt-6 text-xl">Frontend, Backend, DevOps and everything in between.</h2>
        </div>
        {posts.map((post) => (
          <div key={post.id}>
            <div className="flex justify-between max-w-screen-md mx-auto pt-4 text-left">
              <a className="text-white text-2xl">{post.title}</a>
              <a className="text-gray-600 text-lg hover:text-white">{post.date}</a>
            </div>
            <hr className="w-full max-w-screen-md mx-auto my-4 border-gray-500" />
          </div>
        ))}
        <Footer />
      </section>
    </div>
  );
}
