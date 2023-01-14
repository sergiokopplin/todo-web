import { makeHomePage } from "@/main/factories/pages";

const HomeIndex = ({ data }: { data: any }) => {
  console.log(data);

  return makeHomePage();
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:5050/api/workspaces/123456/todos`, {
    method: "GET",
    headers: {
      "x-access-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4IiwiaWF0IjoxNjczNzMxNDIzfQ.sTy_L8JqBWprKUh5kIBb3H8w1qgcd3nz6lXLLy3BW_w",
    },
  });

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default HomeIndex;
