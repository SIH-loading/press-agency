import Image from "next/image";
import React from "react";
import img from "../assets/div.svg";
export default function About() {
  return (
    <section className="flex flex-col justify-center items-center gap-8 my-6">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-semibold underline underline-offset-4">
          Press Information Bureau PIB
        </h1>
        <h3 className="font-semibold text-2xl text-[#868787]">
          Maximising governance through effective government communication
        </h3>
        <div className="w-2/3 flex justify-center text-center items-center flex-col gap-4">
          <p>
            Press Information Bureau is the nodal agency of the Government of
            India to disseminate information to the print and electronic media
            on government policies, programmes, initiatives and achievements. It
            functions as an interface between the government and media & also
            serves to provide feedback to the government on people reaction as
            reflected in the media.
          </p>
          <p>
            PIB disseminates information through different modes of
            communication viz. press releases, press notes, explainer,
            factsheets & feature articles, photographs, videos, infographics and
            also through social media platforms. Information disseminated is
            released in English, Hindi & Urdu and subsequently translated in
            other Indian languages to reach out to about 8400 newspapers and
            media organisations in different parts of the country.
          </p>
          <p>
            In addition, the PIB also organizes Press Conferences, Press
            Briefings, Interviews of the Ministers/Secretaries and other senior
            officers for sensitizing media persons on important policy
            initiatives of the Government. The Bureau also conducts press tours
            to select project sites to enable the media to have a first hand
            account of developmental activities going on in the country and help
            them in communicating the important policies of the government.
          </p>
        </div>
      </div>
      <div className="flex flex-row gap- justify-center items-center">
        <Image src={img} alt="img" />
      </div>
      <div className="flex flex-col justify-center items-center gap-6 text-center w-2/3 ">
        <h1 className="text-3xl font-semibold underline underline-offset-4">
          History of PIB
        </h1>
        <p>
          The history of Press Information Bureau can be traced back to the
          first World War Years, when a Central Publicity Board came into
          existence under the Home Member of the colonial Government. Later, a
          Cell was set up in the Home Department in June 1919 under Dr. L.F.
          Rushbrook Williams, to prepare a yearly report on India, for
          presentation to the British Parliament.
        </p>
        <p>
          In the following year, the functions of the Cell were amplified to
          provide and supervise “the distribution of correct information on all
          India questions and to inform Departments of Government of particular
          questions on which public opinion is exercised and on which further
          information is needed
        </p>
        <p>
          Towards the end of 1920, the Cell was rechristened as Central Bureau
          of Information & Dr. L.F. Rushbrook Williams became its Director. The
          designation of the Head of the Bureau was changed from Director to
          Principal Information Officer in 1938.
        </p>
        <p>
          Sh. J. Natarajan became the first Indian in 1941 to be appointed as
          Principal Information Officer and the Organizations name was changed
          to Press Information Bureau in 1946
        </p>
        <p>
          The bureaus functions, as visualized by Dr. Rushbrook Williams, were
          as follows:
        </p>
        <h2 class="text-xl font-semibold mb-2">
          1. Present material in the form required by the Press, i.e., news
          stories.
        </h2>
        <h2 class="text-xl font-semibold mb-2">
          2. Provide an agency news service, reporting facts without comment.
        </h2>
        <h2 class="text-xl font-semibold mb-2">
          3. Exclude any material of a communal nature.
        </h2>
        <h2 class="text-xl font-semibold mb-2">
          4. Rigorously exclude material of a political or controversial nature,
          except when attributable to a definite source.
        </h2>
      </div>
    </section>
  );
}
