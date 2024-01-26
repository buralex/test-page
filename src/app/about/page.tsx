"use client";
import { basePath } from "@/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";

// function ActiveLink({ children, href }) {
//   const router = useRouter()
//   const style = {
//     marginRight: 10,
//     color: router.asPath === href ? 'red' : 'black',
//   }

//   const handleClick = (e) => {
//     e.preventDefault()
//     router.push(href)
//   }

//   return (
//     <a href={href} onClick={handleClick} style={style}>
//       {children}
//     </a>
//   )
// }

// export default ActiveLink

const About = () => {
  const router = useRouter();
  // const handleClick = (e: any) => {
  //   e.preventDefault();
  //   console.log("__LOG__.cli", `/${basePath}`);

  //   router.push(basePath || `/`);
  //   // router.push(`/${basePath}`);
  // };
  return (
    <div>
      <h1>About</h1>

      <p>
        {/* <i style={{ cursor: "pointer" }} onClick={handleClick}>
          Home push aaa
        <i/> */}
        <Link prefetch={false} href="/">
          Home page
        </Link>
        {/* <br />
        <Link href={basePath || "/"}>basePath Home page</Link>
        <br />
        <Link href="/test-page">test-page</Link> */}
        <br />
        <Link href="/contact">Contact</Link>
        <br />
        {/* <Link href={`${basePath}/contact`}>basePath Contact</Link> */}
      </p>
    </div>
  );
};

export default About;
