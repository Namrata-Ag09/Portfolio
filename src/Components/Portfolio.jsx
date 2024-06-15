/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "/workspaces/Portfolio/src/images/nathan-da-silva-k-rKfqSm4L4-unsplash.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Skills and Interests",
    description:
      "I possess a diverse set of skills that include proficiency in programming language like Java and Python, along with a strong foundation in web development and problem solving. My interests lies in exploring new technologies, creating innovative solutions through programming and contributing to impactful projects that make a positive difference in society. I am committed to continuous learning and staying abreast of the latest trends in technology and programming.",
  },
  {
    title: "Projects",
    description:
      "I am currently working on a project to develop a website that links government hospitals, checks bed and and doctor availability in rural areas, and facilitates appointment bookings and complaint filings. The technologies I am using to design the front end is the combination of HTML,CSS and Javascript while for Back End I am going with Django. There is use of some other required technologies too",
  },
  {
    title: "Extracurricular Activities",
    description:
      "In order to enhance my current knowledge I have taken part in several hackathones and coding competions in which I gained valuable experience and learned about the things which were unknown to me.",
  },
  {
    title: "Career Goals",
    description:
      "My career goals are to become a proficient software developer or engineer, to work on innovative projects leveraging emerging technologies like artificial intelligence or machie learning, and contribute to software solutions addressing real-world challenges such as sustainability, healthcare, or education to make a positive impact on society.",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
