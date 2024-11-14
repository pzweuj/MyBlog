<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow">
      <nav class="container mx-auto px-4 py-6">
        <div class="flex justify-between items-center">
          <RouterLink to="/" class="text-xl font-bold">MyBlog</RouterLink>
          <div class="space-x-6">
            <RouterLink to="/" class="hover:text-gray-600">博客</RouterLink>
            <RouterLink to="/archive" class="hover:text-gray-600">归档</RouterLink>
            <RouterLink to="/practice" class="hover:text-gray-600">实践</RouterLink>
            <RouterLink to="/about" class="hover:text-gray-600">关于</RouterLink>
          </div>
        </div>
      </nav>
    </header>

    <main class="container mx-auto px-4 py-8">
      <slot></slot>
    </main>

    <footer class="bg-white border-t">
      <div class="container mx-auto px-4 py-6 text-center text-gray-600">
        © 2024 MyBlog. All rights reserved.
      </div>
    </footer>
  </div>
</template> 