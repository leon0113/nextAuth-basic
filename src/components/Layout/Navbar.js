import { Layout, Menu, Button } from "antd";
const { Header } = Layout;
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";


const Navbar = () => {

  const { data: session } = useSession();
  // console.log(session);

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="demo-logo">
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "25px",
          }}
        >
          NEXT AUTH
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          width: "20%",
          display: "flex",
          fontSize: "20px",
          justifyContent: "space-between",
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "white" }}
          href="/profile"
        >
          <Image width={40} height={40} style={{ borderRadius: "50%" }} src={session?.user?.image} alt="img" />
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          href="/profile"
        >
          <items>{session?.user?.name}</items>
        </Link>
        {session?.user ? <items>
          <Button onClick={() => signOut()} type="primary" danger>
            Logout
          </Button>
        </items> : <Link style={{ textDecoration: "none", color: "white" }} href="/login">
          <items>Login</items>
        </Link>
        }
      </Menu>
    </Header>
  );
};
export default Navbar;
