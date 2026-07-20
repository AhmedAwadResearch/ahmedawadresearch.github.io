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
      },
      {
        "@type": "ResearchProject",
        name: "AnubisX Framework",
        alternateName: "AnubisX Attribution Framework",
        description:
          "A formal framework for behavioral digital attribution comprising an axiomatic system, Cognitive Centroid theory, mathematical framework, algorithmic catalog, and validation infrastructure.",
        url: "https://github.com/AnubisXFramework/anubisxframework.github.io",
        sameAs: [
          "https://github.com/AnubisXFramework/anubisxframework.github.io",
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
        author: { "@type": "Person", name: "Ahmed Awad" },
        publisher: { "@type": "Person", name: "Ahmed Awad" },
        inLanguage: "en-US",
        copyrightHolder: { "@type": "Person", name: "Ahmed Awad" },
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
        "@type": "ScholarlyArticle",
        name: "Inside the Mind of a Threat Actor: What CISOs Must Learn Before the Next Breach",
        author: { "@type": "Person", name: "Ahmed Awad" },
        datePublished: "2026",
        publisher: "Cyber Defense Magazine",
        description:
          "An exploration of threat actor psychology, decision-making processes, and cognitive patterns that security leaders must understand to anticipate and prevent sophisticated cyber attacks.",
        url: "https://ahmedawadresearch.github.io/publications/",
      },
      {
        "@type": "ScholarlyArticle",
        name: "The Financialization of Cybercrime",
        author: { "@type": "Person", name: "Ahmed Awad" },
        datePublished: "2025",
        publisher: "Cyber Defense Magazine",
        description:
          "An analysis of the evolving financial infrastructure supporting cybercrime operations, including ransomware-as-a-service, cyber insurance arbitrage, and cryptocurrency-based money laundering.",
        url: "https://ahmedawadresearch.github.io/publications/",
      },
      {
        "@type": "Article",
        name: "How Blockchain Could Disrupt Industries",
        author: { "@type": "Person", name: "Ahmed Awad" },
        datePublished: "2023",
        publisher: "Blocktelegraph.io",
        description:
          "An exploration of blockchain technology's potential to transform traditional industries through decentralized trust models and smart contract automation.",
        url: "https://blocktelegraph.io/how-blockchain-could-disrupt-industries/",
      },
      {
        "@type": "Book",
        name: "You Can Hide Your Name... Not Your Mind",
        alternateName: "How Artificial Intelligence Reveals the Human Behind Digital Identities",
        author: { "@type": "Person", name: "Ahmed Awad" },
        url: "https://www.amazon.com/dp/B0H8LCTTWW",
        description:
          "Explores how artificial intelligence and behavioral analysis can unmask anonymous digital identities, revealing the unique cognitive patterns that make each individual identifiable online.",
      },
      {
        "@type": "Book",
        name: "Inside the Hacker Hunter's Mind",
        author: { "@type": "Person", name: "Ahmed Awad" },
        url: "https://www.amazon.com/gp/product/B0FF1X2WS4",
        description:
          "A deep dive into the psychological and methodological approaches of those who track and apprehend cybercriminals.",
      },
      {
        "@type": "Book",
        name: "Inside the Hacker Hunter's Toolkit",
        author: { "@type": "Person", name: "Ahmed Awad" },
        url: "https://www.amazon.com/gp/product/B0FFSWB2XS",
        description:
          "Comprehensive guide to the tools, techniques, and technologies used by cybersecurity professionals.",
      },
      {
        "@type": "Book",
        name: "Inside the Hacker Hunter's Domain Cyber Intelligence",
        author: { "@type": "Person", name: "Ahmed Awad" },
        url: "https://www.amazon.com/gp/product/B0FXGTRCQT",
        description:
          "Examines the domain of cyber intelligence operations, from threat detection to attribution.",
      },
      {
        "@type": "Book",
        name: "Inside the Hacker Hunter's AI Identity War",
        author: { "@type": "Person", name: "Ahmed Awad" },
        url: "https://www.amazon.com/gp/product/B0GF23FBCN",
        description:
          "Investigates the emerging battlefield where artificial intelligence is used both to conceal and reveal digital identities.",
      },
      {
        "@type": "SoftwareSourceCode",
        name: "AnubisX Framework",
        description:
          "A formal framework for behavioral digital attribution with 37 algorithms across 5 behavioral modalities.",
        url: "https://github.com/AnubisXFramework/anubisxframework.github.io",
        codeRepository: "https://github.com/AnubisXFramework/anubisxframework.github.io",
        programmingLanguage: "Python",
        license: "https://opensource.org/licenses/MIT",
        author: { "@type": "Person", name: "Ahmed Awad" },
      },
      {
        "@type": "SoftwareSourceCode",
        name: "Anubis Twitter v2.5",
        description:
          "Prototype implementation of the AnubisX Framework's stylometric modality for Arabic Twitter data. 47 Python source files (~2,800 LOC).",
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