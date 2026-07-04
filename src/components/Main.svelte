<script lang="ts">
    import Step from "./Step.svelte";

    let steps = [
        {
            name: "Enterprise AI Agents",
            icon: "fa-solid fa-cloud",
        },
        {
            name: "Power Tool Feature Recommender",
            icon: "fa-solid fa-screwdriver-wrench",
        },
        {
            name: "Creance — DORA Compliance AI",
            icon: "fa-solid fa-file-contract",
            href: "https://www.creance.ai/",
        },
        {
            name: "Document Intelligence for Manufacturing",
            icon: "fa-solid fa-microchip",
        },
        {
            name: "Legal Document Classifier",
            icon: "fa-solid fa-scale-balanced",
        },
        {
            name: "SAP Automation Agent",
            icon: "fa-solid fa-gear",
        },
    ];

    let benefits = [
        {
            name: "An AI Engineer",
            description:
                "ML developer specializing in NLP and tabular data, building production agents and LLM systems for enterprises across Germany. From spectroscopy research to DORA compliance to multi-agent systems — I deliver AI that ships.",
        },
        {
            name: "A fast-moving consultant",
            description:
                "My approach is built on communication and speed: quick POCs that show clients what's possible, fast feedback loops, and iterative development from POC to MVP to production. I close the gap between what AI can do and what clients can see.",
        },
        {
            name: "A problem solver first",
            description:
                "Programming is a means to solve complex problems. My approach is tool-agnostic and cloud-agnostic — AWS, Azure, GCP, whatever the problem demands. From spectroscopy to compliance to power-tool design, I learn and apply whatever technology is needed.",
        },
    ];

    let publications = [
        {
            title: "Finding Specific Spectral Features for Surface Enhanced Raman Response of Enterococcus Faecalis Assisted by Multivariate Analysis when using Common Silver Sols",
            href: "https://rrp.nipne.ro/2021/AN73604.pdf",
        },
        {
            title: "Component identification of liquid mixtures by using computational models",
            href: "https://pim.itim-cj.ro/2021/pages/t310.html",
        },
        {
            title: "Vibrational spectral analysis of Sorafenib and its molecular docking study compared to other TKIs",
            href: "https://www.sciencedirect.com/science/article/abs/pii/S0022286021016355",
        },
    ];
</script>

<main class="flex flex-col flex-1 p-4">
    <section
        id="introPage"
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
    >
        <div
            class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
        >
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="Lato text-violet-400">Laurentiu</span>
                Stancioiu <br /> AI
                <span class="Lato text-violet-400">Engineer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                I build production AI systems across
                <span class="text-violet-400">AWS, Azure, and Google Cloud</span>
                — with
                <span class="text-violet-400"
                    >Python, LangGraph, Dagster, A2A Protocol, and MCP</span
                >.
            </p>
            <a
                class="blueShadow mx-auto lg:mr-auto text-base lg:ml-0 sm:text-lg md:text-xl Lato relative
                overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"
                href="#footer"
            >
                <div
                    class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20
                group-hover:translate-x-full z-0 duration-[250ms]"
                ></div>
                <h4 class="relative z-[9]">Get in touch &rarr;</h4>
            </a>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <img
                src={"images/photo-nobg.png"}
                alt="Laurentiu Stancioiu"
                class="object-contain z-[2] max-h-[70vh]"
            />
        </div>
    </section>
    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Selected <span class="text-violet-400">work</span>
            </h3>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <p>
                    A2A-protocol compliant agents on Google Cloud that
                    collaborate to solve enterprise customer problems.
                    Infrastructure as code, deployed on Cloud Run with BigQuery
                    analytics. Developed with <strong class="text-violet-400"
                        >Google Cloud, Cloud Run, BigQuery, A2A Protocol, Gemini,
                        Terraform</strong
                    >
                </p>
            </Step>
            <Step step={steps[1]}>
                <p>
                    Multi-agent system that researches power tools, analyzes
                    Amazon reviews and web opinions, then recommends new
                    features. Won 1st place in an internal competition.
                    Developed with <strong class="text-violet-400"
                        >Python, LangGraph, Firecrawl, Tavily, Amazon
                        Reviews</strong
                    >
                </p>
            </Step>
            <Step step={steps[2]}>
                <p>
                    AI-powered contract analysis for EU DORA regulation
                    compliance. Built evaluation pipelines to govern LLM
                    behavior and ensure audit-ready reproducibility. Developed
                    with <strong class="text-violet-400"
                        >Python, Pandas, Dagster, LLM Evaluation</strong
                    >
                </p>
            </Step>
            <Step step={steps[3]}>
                <p>
                    AI agent that retrieves verifiable insights from sensitive
                    and complex technical documentation at a global chip
                    manufacturer. Reducing search time by 90%. Developed with
                    <strong class="text-violet-400"
                        >Python, OCR, Small LLMs, MCP</strong
                    >
                </p>
            </Step>
            <Step step={steps[4]}>
                <p>
                    Legal classification system with full frontend and backend
                    for a major European retailer, automating document
                    categorization at scale. Developed with <strong
                        class="text-violet-400">Python, Angular, GitHub Actions, CI/CD</strong
                    >
                </p>
            </Step>
            <Step step={steps[5]}>
                <p>
                    POC agent that reads SAP release notes via browser
                    automation, interprets changelogs, and programmatically
                    adjusts SAP configurations when updates require it.
                    Developed with <strong class="text-violet-400"
                        >Python, Playwright, AI Agents</strong
                    >
                </p>
            </Step>
        </div>
    </section>
    <section
        id="about"
        class="py-20 pt-10 lg:pt-16 lg:pt-32 flex flex-col
    gap-16 sm:gap-20 md:gap-24 relative"
    >
        <div
            class="flex flex-col gap-2 text-center relative before:absolute
        before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700
        after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
        >
            <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="Lato text-violet-400">about</span> me.
            </h3>
        </div>
        <p class="mx-auto Lato font-semibold text-lg sm:text-xl md:text-2xl">
            I am . . .
        </p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <div class="flex flex-col gap-6 sm:gap-8">
                    <p
                        class="Lato text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                    >
                        0{index + 1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3
                            class="font-semibold text-2xl sm:text-3xl md:text-4xl"
                        >
                            {benefit.name}
                        </h3>
                        <p class="text-base sm:text-lg md:text-xl">
                            {benefit.description}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
    </section>
    <section
        id="background"
        class="py-20 pt-10 lg:pt-16 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >
        <div
            class="flex flex-col gap-2 text-center relative before:absolute
        before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700
        after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
        >
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                <span class="Lato text-violet-400">Education</span> &amp;
                publications
            </h3>
        </div>
        <div class="flex flex-col gap-12 w-full mx-auto max-w-[800px]">
            <div class="flex flex-col gap-6 sm:gap-8">
                <p
                    class="Lato text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                >
                    01
                </p>
                <div class="flex flex-col gap-6 sm:gap-8">
                    <h3 class="font-semibold text-2xl sm:text-3xl md:text-4xl">
                        Bachelor of Engineering Physics
                    </h3>
                    <p class="text-base sm:text-lg md:text-xl">
                        Applied Engineering Sciences, Universitatea
                        &ldquo;Babe&#351;-Bolyai&rdquo; Cluj-Napoca
                        (2018&ndash;2022)
                    </p>
                </div>
            </div>
            <div class="flex flex-col gap-6 sm:gap-8">
                <p
                    class="Lato text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                >
                    02
                </p>
                <div class="flex flex-col gap-6 sm:gap-8">
                    <h3 class="font-semibold text-2xl sm:text-3xl md:text-4xl">
                        Publications
                    </h3>
                    <ol class="flex flex-col gap-6 sm:gap-8 list-none">
                        {#each publications as pub, index}
                            <li class="text-base sm:text-lg md:text-xl">
                                <span class="text-violet-400 font-medium"
                                    >{index + 1}.</span
                                >
                                <a
                                    href={pub.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="duration-[250ms] hover:text-violet-400 underline decoration-violet-700/50 hover:decoration-violet-400 underline-offset-4"
                                    >{pub.title}</a
                                >
                            </li>
                        {/each}
                    </ol>
                </div>
            </div>
        </div>
    </section>
</main>
