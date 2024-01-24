"use client";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Now you are on the About page!</p>
      <p>
        Go back to the page.
        <br />
        <Link href="/">Home</Link>
        <Link href="/test-page">Index</Link>
        <Link href="/contact">Contact</Link>
      </p>
    </div>
  );
};

export default About;
