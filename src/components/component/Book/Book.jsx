import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
  const { bookName, author, image, tags, rating, category } = book;
  return (
    <div>
      <div className="card border border-gray-300 p-5">
        <figure className="bg-gray-100 px-4 py-6 rounded-xl">
          <img className="h-[200px] rounded-md" src={image} alt={bookName} />
        </figure>
        <div className="py-6 space-y-3">
          <div className="card-actions justify-first">
            {tags.map((tag) => (
              <div className="badge badge-outline">{tag}</div>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p className="font-semibold text-sm">By: {author}</p>
        </div>
        <div className="border-b border-gray-200"></div>
        <div className="flex justify-between items-center mt-4">
          <div>
            <span className="">{category}</span>
          </div>
          <div>
            <div className="flex items-center justify-center gap-3">
              <div>
                <span>{rating}</span>
              </div>
              <div className="text-[25px]">
                <CiStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
