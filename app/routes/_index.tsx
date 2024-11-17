import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">
              MyBlog
            </Link>
            <div className="space-x-6">
              <Link to="/" className="hover:text-gray-600">
                博客
              </Link>
              <Link to="/archive" className="hover:text-gray-600">
                归档
              </Link>
              <Link to="/practice" className="hover:text-gray-600">
                实践
              </Link>
              <Link to="/about" className="hover:text-gray-600">
                关于
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">最新文章</h1>
          <div className="space-y-8">
            <article className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">欢迎来到我的博客</h2>
              <p className="text-gray-600 mb-4">
                这是一个使用 Remix + TypeScript + TailwindCSS 构建的博客系统...
              </p>
              <div className="text-sm text-gray-500">发布于: 2024-01-01</div>
            </article>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          © 2024 MyBlog. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
