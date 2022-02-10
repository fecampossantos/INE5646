import CharacterPage from "../../components/CharacterPage";
import { charactersList } from "../../helpes/mockData";

export default CharacterPage;

export async function getStaticPaths() {
  return {
    paths: [{ params: { charID: "1" } }, { params: { charID: "2" } }],
    fallback: true,
  };
}

export async function getStaticProps(ctx) {
  const { charID } = ctx.params;
  console.log(charactersList);
  let char = charactersList.filter((c) => c.id == charID);
  console.log(char);

  if (char.length > 0) char = char[0];
  return {
    props: { character: char }, // will be passed to the page component as props
  };
}
