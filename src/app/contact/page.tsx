"use client";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>Now you are on the Contact page!</p>
      <p>
        Go back to the page.
        <br />
        <Link href="/about">About</Link>
      </p>
    </div>
  );
};

export default Contact;
