import "./App.css";
import Comment from "./Components/Comment";

function App() {
  const comments = [
    {
      name: "Aravind1",
      month: 2,
      post: "This is a great post",
      isHighlighted: true,
    },
    {
      name: "Aravind2",
      month: 3,
      post: "Awesome Post",
      isHighlighted: false,
    },
    {
      name: "Aravind3",
      month: 1,
      post: "Great Post",
      isHighlighted: true,
    },
    {
      name: "Aravind4",
      month: 4,
      post: "Nice One",
      isHighlighted: false,
    },
    {
      name: "Aravind5",
      month: 6,
      post: "Good Post",
      isHighlighted: true,
    },
    {
      name: "Aravind6",
      month: 8,
      post: "This is a great post",
      isHighlighted: false,
    },
    {
      name: "Aravind7",
      month: 9,
      post: "Excellant",
      isHighlighted: true,
    },
  ];
  return (
    <>
      <div className="parent">
        <div className="totalComments">{comments.length} Comments</div>
        <div className="comments">
          {comments.map((data) => (
            <Comment
              name={data.name}
              month={data.month}
              post={data.post}
              img={data.img}
              isHighlighted={data.isHighlighted}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
