import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import ContainerWidth from "../Components/ContainerWidth";
import Reveal from "../Components/Reveal";
import logo from "../assets/Images/Logo e.png";
import blog1 from "../assets/Images/hh.jpg";
import React from "react";
import Footer from "../Sections/Footer";
import { Helmet } from "react-helmet-async";


const Blogs = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => String(b.id) === id);

  if (!blog) {
    return (
      <section className="my-10 px-4 text-center text-gray-500">
        <ContainerWidth>
          <h2>Blog not found.</h2>
        </ContainerWidth>
      </section>
    );
  }

  const metaDescriptions = {
    1: "Learn how to write a persuasive final merits argument for your EB-1A petition. Discover strategies, examples, and common pitfalls — and see how Visarocraft helps professionals, academics, and entrepreneurs present a winning case.",
    2: "Not sure whether EB-1A or EB-2 NIW is right for you? Learn how to choose between the two self-petition green card categories, what USCIS looks for, and how Visarocraft helps you maximize your chances of success.",
    3: "Discover what USCIS considers 'extraordinary ability' for the O-1 visa. Learn the criteria, how to present your achievements, and how Visarocraft helps professionals, academics, and entrepreneurs build winning petitions.",
    4: "Understand why presentation matters as much as evidence in your immigration petition. Learn how to structure, package, and present your EB-1A, EB-2 NIW, or O-1 case for maximum impact with Visarocraft.",
    5: "Learn how to strengthen your EB-1A petition with independent recommendation letters. Discover why they matter, how to get them, and how Visarocraft helps professionals, academics, and entrepreneurs maximize their EB-1A success.",
    6: "Learn how to strengthen your EB-2 NIW petition by making a powerful national interest argument. Discover key strategies, common mistakes, and how Visarocraft helps professionals, academics, and entrepreneurs win approval.",
  };

  const renderContent = (text, key) => {
    if (typeof text !== "string") return null;

    if (text.toLowerCase().includes("insert table")) {
      return (
        <div key={`img-${key}`} className="my-10 flex justify-center items-center">
          <img
            src={blog1}
            alt="Blog visual"
            className="rounded-xl shadow-md w-full object-cover min-h-[10rem] h-full"
          />
        </div>
      );
    }

    if (text.trim().startsWith("•")) {
      return (
        <ul key={`bullet-${key}`} className="list-disc pl-8 mb-4 text-[#5B5C66] text-base md:text-xl">
          <li>{text.replace("•", "").trim()}</li>
        </ul>
      );
    }

    if (/^\d+\./.test(text.trim())) {
      return (
        <p
          key={`num-${key}`}
          className="text-[#5B5C66] font-normal text-base md:text-xl mb-2 leading-relaxed"
        >
          {text}
        </p>
      );
    }

    return (
      <p
        key={`text-${key}`}
        className="text-[#5B5C66] font-normal text-base md:text-xl mb-5 leading-relaxed"
      >
        {text}
      </p>
    );
  };

  const renderSubSection = (section, i) => {
    if (blog.id === 1) {
      return (
        <React.Fragment key={i}>
          <div className="mt-10 mb-5">
            <Reveal>
              <h2 className="text-black font-semibold text-2xl md:text-[1.8rem]">
                {section.subTitle}
              </h2>
            </Reveal>
          </div>

          {section.content?.map((c, j) => (
            <p
              key={`content-${i}-${j}`}
              className="text-[#5B5C66] text-base md:text-xl mb-5 leading-relaxed"
            >
              {c}
            </p>
          ))}

          {section.list && (
            <ul className="list-disc pl-8 mb-5 text-[#5B5C66] text-base md:text-xl">
              {section.list.map((item, j) => (
                <li key={`list-${i}-${j}`} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          )}

          {section.steps && (
            <div className="pl-4">
              {section.steps.map((step, j) => (
                <div key={`step-${i}-${j}`} className="mb-4">
                  <h3 className="text-black font-semibold text-lg md:text-xl mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#5B5C66] text-base md:text-lg mb-2">{step.description}</p>

                  {step.example && (
                    <p className="text-[#5B5C66] text-base md:text-lg mb-2">{step.example}</p>
                  )}

                  {step.exampleApproach && (
                    <ul className="list-disc pl-6 text-[#5B5C66] text-base md:text-lg mb-3">
                      {step.exampleApproach.map((ex, k) => (
                        <li key={`example-${i}-${j}-${k}`} className="mb-1">
                          {ex}
                        </li>
                      ))}
                    </ul>
                  )}

                  {step.tip && (
                    <p className="text-[#5B5C66] text-base md:text-lg mb-2">{step.tip}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {section.note && (
            <p className="text-[#5B5C66] text-base md:text-xl mt-4 mb-5 leading-relaxed">
              {section.note}
            </p>
          )}

          {section.cta && (
            <p className="text-[#5B5C66] text-base md:text-xl mt-4 leading-relaxed">
              {section.cta}
            </p>
          )}
        </React.Fragment>
      );
    }

    return (
      <React.Fragment key={i}>
        <div className="mt-10 mb-5">
          <Reveal>
            <h2 className="text-black font-semibold text-[1.8rem]">{section.subTitle}</h2>
          </Reveal>
        </div>

        <div className="mt-2 pl-6">
          {section?.content?.map((c, j) => renderContent(c, `${i}-${j}`))}
        </div>
      </React.Fragment>
    );
  };

  return (
    <>
      <Helmet>
        <title>{blog.title} | Visarocraft</title>
        <meta name="description" content={metaDescriptions[blog.id]} />

        <link rel="canonical" href={`https://visarocraft.com/blogs/${id}`} />

        <meta
          name="keywords"
          content="EB1A, EB2 NIW, O1 visa, immigration, extraordinary ability, green card"
        />

        <meta property="og:title" content={`${blog.title} | Visarocraft`} />
        <meta property="og:description" content={metaDescriptions[blog.id]} />
        <meta property="og:image" content={blog1} />
        <meta property="og:url" content={`https://visarocraft.com/blogs/${id}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Visarocraft" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${blog.title} | Visarocraft`} />
        <meta name="twitter:description" content={metaDescriptions[blog.id]} />
        <meta name="twitter:image" content={blog1} />

        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Language" content="en" />
      </Helmet>

      <section className="my-10 lg:my-[2rem] px-4">
        <ContainerWidth>
          <h1 className="text-black font-semibold text-[2rem] mb-4">
            <Reveal>{blog.title}</Reveal>
          </h1>

          <div className="flex items-center justify-center w-full rounded-xl bg-[#FCE0D3] p-6 mt-10 max-w-[80%] mx-auto">
            <img src={logo} alt="visaro logo" className="max-w-16" />
          </div>

          <div className="mt-14 max-w-[1090px] mx-auto">
            {blog.details.map((p, i) => renderContent(p, i))}
          </div>

          <div className="mt-12">{blog.subSections.map(renderSubSection)}</div>
        </ContainerWidth>

        <div className="mt-20" />
        <Footer />
      </section>
    </>
  );
};

export default Blogs;
