import blogImage from '../../assets/blog-image.jpg'
import avatarImage from '../../assets/avatar.jpg'
import { A } from "@solidjs/router";

export const Card = ({ post }) => {

    function truncateText(description) {
        // Split the text into lines
        const lines = description.split('\n');

        // Take the first two lines
        const truncatedText = lines.slice(0, 2).join('\n');

        return truncatedText;
    }
    const readTimeCalculation = (description) => {
        const wordsPerMinute = 200;
        const wordCount = description.split(/\s+/).length;
        const readTimeInMinutes = Math.ceil(wordCount / wordsPerMinute);
        return readTimeInMinutes;
    }
    return (
        <div>
            <img src={blogImage} alt="" srcset="" />
            <div class="flex justify-between items-center my-5">
                <div class="flex gap-3 items-center">
                    <img src={avatarImage} alt="" class='rounded-full w-12 h-12' />
                    <p class="text-lg">{post.author.name}</p>
                </div>
                <p class="text-lg">{readTimeCalculation(post.description)} min read </p>
            </div>
            {/* <h1 > */}
            <A
                class="font-semibold my-1 text-[22px]"
                href={`/about/${post.id}`}
            >
                {post.title}
            </A>
            {/* </h1> */}
            <p class="my-3 text-lg leading-9">{post.description.slice(0, 100)} ...</p>
        </div>
    )
}
