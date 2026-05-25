export default function BlogsPage() {
  return (
    <div className="mx-auto max-w-4xl rounded-[32px] bg-white p-8 shadow-md">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[.3em] text-yellow-500">
          Blog Editor
        </p>
        <h1 className="text-3xl font-black text-slate-900">Blog Edit</h1>
        <p className="text-sm text-slate-500">
          Use the Blog List page to select a post for editing. This route is reserved for editing individual blog posts.
        </p>
      </div>
    </div>
  );
}
