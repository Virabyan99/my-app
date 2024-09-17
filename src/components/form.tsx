import { createPost } from '@/actions/actions'


export default function Form() {
  return (
    <form
      action={createPost}
      className="flex flex-col max-w-[400px] mx-auto gap-2 my-10 ">
      <input
        className="border rounded px-3 h-10 "
        type="text"
        name="title"
        placeholder="Title for new post"
        required
      />
      <textarea
        name="body"
        placeholder="Content for new posts"
        className="border rounded px-3 py-2"
        rows={3}
        required></textarea>
      <button className="h-10 bg-blue-500 rounded px-5 text-white">
        Submit
      </button>
    </form>
  )
}
