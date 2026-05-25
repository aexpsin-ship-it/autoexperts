import Link from "next/link";

export default function DashboardHome() {
  return (
    <div className="space-y-8">
      <section className="rounded-[32px] bg-white p-6 shadow-md sm:p-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[.3em] text-yellow-500">
            Admin Dashboard
          </p>
          <h1 className="text-3xl font-black text-slate-900 sm:text-4xl">
            Welcome back, Admin
          </h1>
          <p className="text-sm text-slate-500 sm:text-base">
            Use the dashboard below to manage blog posts, support requests, and website content. Create, edit, or remove blog posts with image upload support.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <Link
          href="/admin/dashboard/blog-add"
          className="group rounded-[32px] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
        >
          <h2 className="text-xl font-bold text-slate-900">Add New Blog</h2>
          <p className="mt-3 text-sm text-slate-500">
            Create a new blog post with title, description, content, category and cover image.
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-black">
            Open form
            <span className="transition group-hover:translate-x-1">→</span>
          </span>
        </Link>

        <Link
          href="/admin/dashboard/blog-list"
          className="group rounded-[32px] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
        >
          <h2 className="text-xl font-bold text-slate-900">Blog List</h2>
          <p className="mt-3 text-sm text-slate-500">
            Review the current blog posts, edit entries, or remove outdated content in one place.
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-black">
            View posts
            <span className="transition group-hover:translate-x-1">→</span>
          </span>
        </Link>

        <Link
          href="/admin/dashboard/contacts"
          className="group rounded-[32px] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
        >
          <h2 className="text-xl font-bold text-slate-900">Contact Requests</h2>
          <p className="mt-3 text-sm text-slate-500">
            Check customer inquiries and manage contact form submissions from your website.
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-black">
            Open inbox
            <span className="transition group-hover:translate-x-1">→</span>
          </span>
        </Link>
      </section>
    </div>
  );
}
