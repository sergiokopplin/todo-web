interface HomeData {
  data: {
    id: string;
    text: string;
    workspacesId: string;
  }[];
}

const HomeIndex = ({ data }: HomeData) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          {item.id} = {item.text} / {item.workspacesId}
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://0.0.0.0:5050/api/workspaces/987123/todos`, {
    method: "GET",
    headers: {
      "x-access-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4IiwiaWF0IjoxNjczODkzODIzfQ.mvO706nhInka2EFdlKzs_UDdLpw83CWEMfVl_DipyV8",
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
