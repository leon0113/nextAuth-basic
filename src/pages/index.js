import Head from "next/head";
import { useSession } from "next-auth/react";
import Image from "next/image";

const HomePage = () => {
  const { data: session, status: status } = useSession();
  console.log(session);
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>Welcome To Next Auth Home Page</h1>
      {
        session?.user ? <div>
          <Image width={150} height={200} src={session?.user?.image} style={{ marginLeft: "46%", marginTop: "10%", borderRadius: "10%" }} alt="userImage" />
          <p style={{ textAlign: "center" }}>
            <b>User Name:</b> {session?.user?.name}
          </p>
          <p style={{ textAlign: "center" }}> <b>User Email:</b> {session?.user?.email}</p>
          <p style={{ textAlign: "center" }}> <b>User Status:</b> {status}</p>
        </div> : ""
      }
    </div>
  );
};

export default HomePage;
