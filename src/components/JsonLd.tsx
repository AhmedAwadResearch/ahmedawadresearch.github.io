export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Ahmed Awad",
        alternateName: "NullC0d3",
        givenName: "Ahmed",
        familyName: "Awad",
        additionalName: "NullC0d3",
        description:
          "Cybersecurity Researcher, Threat Intelligence Analyst, and creator of the AnubisX Framework for behavioral digital attribution.",
        image: "https://ahmedawadresearch.github.io/images/ahmedawadnullc0d3.jpg",
        url: "https://ahmedawadresearch.github.io",
        sameAs: [
          "https://www.linkedin.com/in/nullc0d3",
          "https://github.com/nullc0d30",
          "https://orcid.org/0009-0005-0654-3393",
          "https://www.researchgate.net/profile/Ahmed-Awad-118",
          "https://osf.io/37bhn/",
          "https://zenodo.org/records/21393392",
          "https://figshare.com/authors/Ahmed_Awad/24415733",
        ],
        jobTitle: [
          "Cybersecurity Researcher",
          "Threat Intelligence Analyst",
          "AI Attribution Specialist",
        ],
        knowsAbout: [
          "Behavioral Digital Attribution",
          "Cyber Threat Intelligence",
          "Digital Forensics",
          "OSINT",
          "Artificial Intelligence",
          "Digital Identity",
          "Behavioral Biometrics",
        ],
        researchInterest: [
          "Behavioral Digital Attribution",
          "Cyber Threat Intelligence",
          "Digital Identity Attribution",
          "Behavioral Biometrics",
          "Cognitive Centroid Theory",
          "Multi-modal Behavioral Analysis",
        ],
        alumniOf: [],
        worksFor: [],
        author: {
          "@type": "Person",
          name: "Ahmed Awad",
        },
      },
      {
        "@type": "ResearchProject",
        name: "AnubisX Framework",
        alternateName: "AnubisX Attribution Framework",
        description:
          "A formal framework for behavioral digital attribution comprising an axiomatic system, Cognitive Centroid theory, mathematical framework, algorithmic catalog, and validation infrastructure.",
        url: "https://anubisxframework.github.io",
        sameAs: [
          "https://github.com/AnubisXFramework/AnubisXFramework",
          "https://zenodo.org/records/21393392",
        ],
        creator: {
          "@type": "Person",
          name: "Ahmed Awad",
          sameAs: "https://ahmedawadresearch.github.io",
        },
        license: "https://creativecommons.org/licenses/by/4.0/",
        funder: [],
        keywords: [
          "behavioral attribution",
          "digital identity",
          "stylometry",
          "cognitive centroid",
          "cyber threat intelligence",
          "digital forensics",
        ],
      },
      {
        "@type": "WebSite",
        name: "Ahmed Awad (NullC0d3)",
        alternateName: "NullC0d3",
        url: "https://ahmedawadresearch.github.io",
        description:
          "Official academic website of Ahmed Awad (NullC0d3), Cybersecurity Researcher and creator of the AnubisX Framework.",
        author: {
          "@type": "Person",
          name: "Ahmed Awad",
        },
        publisher: {
          "@type": "Person",
          name: "Ahmed Awad",
        },
        inLanguage: "en-US",
        copyrightHolder: {
          "@type": "Person",
          name: "Ahmed Awad",
        },
        copyrightYear: 2026,
        isAccessibleForFree: true,
        license: "https://creativecommons.org/licenses/by/4.0/",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ahmedawadresearch.github.io/" },
          { "@type": "ListItem", position: 2, name: "About", item: "https://ahmedawadresearch.github.io/about/" },
          { "@type": "ListItem", position: 3, name: "Research", item: "https://ahmedawadresearch.github.io/research/" },
          { "@type": "ListItem", position: 4, name: "Projects", item: "https://ahmedawadresearch.github.io/projects/" },
          { "@type": "ListItem", position: 5, name: "AnubisX", item: "https://ahmedawadresearch.github.io/anubisx/" },
          { "@type": "ListItem", position: 6, name: "Publications", item: "https://ahmedawadresearch.github.io/publications/" },
          { "@type": "ListItem", position: 7, name: "Books", item: "https://ahmedawadresearch.github.io/books/" },
          { "@type": "ListItem", position: 8, name: "Contact", item: "https://ahmedawadresearch.github.io/contact/" },
        ],
      },
      {
        "@type": "CollectionPage",
        name: "Publications",
        description: "Research publications and articles by Ahmed Awad (NullC0d3)",
        url: "https://ahmedawadresearch.github.io/publications/",
        author: { "@type": "Person", name: "Ahmed Awad" },
      },
      {
        "@type": "SoftwareSourceCode",
        name: "AnubisX Framework",
        description:
          "A formal framework for behavioral digital attribution with 37 algorithms across 5 behavioral modalities.",
        url: "https://github.com/AnubisXFramework/AnubisXFramework",
        codeRepository: "https://github.com/AnubisXFramework/AnubisXFramework",
        programmingLanguage: "Python",
        license: "https://opensource.org/licenses/MIT",
        author: { "@type": "Person", name: "Ahmed Awad" },
      },
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://ahmedawadresearch.github.io/search/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
