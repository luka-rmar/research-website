import { useState, useEffect } from "react";
import { connect, styled } from "frontity";
import Item from "./related-item";

const Related = ({ state }) => {
  const posts = state.source.post;
  const thisData = state.source.get(state.router.link);
  const { id, categories } = state.source[thisData.type][thisData.id];
  const [postsFiltered, setPostsFiltered] = useState([]);
  const [numberPosts, setNumberPosts] = useState(2);
  const [showButton, setShowButton] = useState(false);

  const postsRelated = Object.keys(posts)
    .filter((key) =>
      posts[key]?.categories?.find((c) => categories?.includes(c))
    ) // Get post some categories
    .filter((key) => key !== id.toString()) // Remove post active
    .sort((a, b) => a < b) // Sort in descending order
    // .sort(() => Math.random() - 0.5) // Sort in shuffle array
    .map((p) => posts[p]); // Get post by keys

  useEffect(() => {
    setShowButton(!!postsRelated.length);

    setPostsFiltered(postsRelated.filter((_, index) => index < numberPosts));
  }, [numberPosts, postsRelated.length]);

  useEffect(() => {
    if (postsFiltered.length === postsRelated.length) setShowButton(false);
  }, [postsFiltered.length]);

  useEffect(() => {
    setPostsFiltered(postsRelated.filter((_, index) => index < 2));
    setNumberPosts(2);
  }, [state.router.link]);

  return (
    <Container>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <Header>Artigos Relacionados</Header>
          <div className="flex flex-wrap -m-4">
            {postsFiltered.map((post) => (
              <Item
                key={post.id}
                item={post}
                onClick={() => setNumberPosts(2)}
              />
            ))}
          </div>
          {showButton && (
            <Button onClick={() => setNumberPosts(numberPosts + 2)}>
              Ver mais
            </Button>
          )}
        </div>
      </section>
    </Container>
  );
};

export default connect(Related);

const Container = styled.section`
  width: 80vw;
  margin: 0;
  padding: 24px;
  list-style: none;
`;

const Header = styled.h3`
  font-weight: bold;
  font-size: 30px;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  border: 1px solid #000;
  color: #000;
  border-radius: 5px;
  background-color: #fff;
`;
