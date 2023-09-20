import Link from "next/link"
import Image from "next/image"

type BlogCardProps = {
  tag: string;
  title: string;
  image: string;
  id: number;
  desc: string;
}
const BlogCard: React.FC<BlogCardProps> = ({ tag, title, image, id, desc }) => {
  return (
    <div>
      <Link href={`/post/${id}`}>
        <div className="rounded-lg object-cover">
          <Image
          src={image}
          alt={title}
          className="rounded-lg object-cover h-40 w-full"
          />
          <div className="p-4">
            <div className="text-sm font-medium text-gray-400">
              {tag}
            </div>
            <p className="text-cl font-semibold text-gray-800 block mt-2 h-10">
              {title}
            </p>
            <p className="mt-4 text-gray-600 h-20">
              {desc}
            </p>
            <button className="mt-4 text-white bg-green-600 font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition duration-300 ease-in-out flex items-center">
              Read More
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BlogCard
