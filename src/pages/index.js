import Head from "next/head";
import { useSession } from "next-auth/react";

const HomePage = () => {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>Welcome To Next Auth Home Page</h1>
      {
        session?.user ? <div>
          <p style={{ textAlign: "center", marginTop: "10%" }}>
            <b>Your Name:</b> {session?.user?.name}
          </p>
          <p style={{ textAlign: "center" }}> <b>Github Email:</b> {session?.user?.email}</p>
        </div> : ""
      }
    </div>
  );
};

export default HomePage;
