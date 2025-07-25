import Rating from "./components/Rating";

const App = () => {
  return (
    <div>
      <Rating
        heading="Rate this quiz"
        color="red"
        feedbackMessages={[
          "Hate it",
          "Dislike it",
          "Meh",
          "Like it",
          "Love it",
        ]}
      />
    </div>
  );
};

export default App;
