<script>
    import Step from "./Step.svelte";
    let steps = [
        {name: 'Holiday Planner AI', icon: 'fa-solid fa-compass', href: 'https://holidayplannerai.fly.dev/'},
        {name: 'Malicious Website Detection', icon: 'fa-solid fa-file-shield', href: 'https://huggingface.co/spaces/LaurentiuStancioiu/Malicious_website_detector'},
        {name: 'Cluj Napoca Temperature Prediction', icon: 'fa-solid fa-temperature-high', href: 'https://huggingface.co/datasets/LaurentiuStancioiu/Cluj-Napoca-Weather-OpenWeather-data'},
        {name: 'Data Analysis in Rust', icon: 'fa-brands fa-rust', href: 'https://github.com/LaurentiuStancioiu/data_vizualization'},
        {name: 'RoadSense', icon: 'fa-solid fa-car', href: 'https://github.com/MohiRZV/AndroidSensorMQTT/tree/dev'}
    ];

    let benefits = [
        {name: 'A self taught developer', description: "First code I have written for a project were some plots that were  \
        included in a scientific article during an internship in 2020. The problem to solve was how can we \
        make our plots prettier and also perform Principal Component Analysis on the data. Having known\
        some basic coding from highschool, I decided to help them with the plots that were made using Python and matplolib. From there I've used various \
        programming languages, frameworks and libraries, mostly because they solved a problem I had at that time."},
        {name: 'A Machine Learning Enthusiast', description: 'My fascination with Machine Learning started with its applications in physics, \
        sparking a broader exploration into fields like NLP, Forecasting, and Computer Vision. I\'ve expanded my \
        knowledge through articles, online courses, and books, continually applying what I learn in practical settings.\
        I also enjoy a good hackathon and answer one Machine Learnig question per day on a page called Bnomial.'},
        {name: 'A problem solver first', description: 'Programming, to me, is more than just coding; it\'s a\
         means to solve complex problems. My approach is tool-agnostic—I thrive on learning and applying\
          whatever technology is needed to find effective solutions.'},
    ]

</script>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="Lato text-violet-400">Laurentiu</span> Stancioiu <br/> Machine Learning
                 <span class="Lato text-violet-400">Engineer</span>   
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                My <span class="text-violet-400"> favorite tech</span> includes Python, FastAPI, Docker, 
                AWS Services, SvelteKit and Rust.
            </p>
            <a 
                class="blueShadow mx-auto lg:mr-auto text-base lg:ml-0 sm:text-lg md:text-xl Lato relative 
                overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer" 
                href="#footer">
                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 
                group-hover:translate-x-full z-0 duration-250"></div> 
                <h4 class="relative z-9">Get in touch &rarr;</h4>
            </a>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <img src={"images/result.png"} alt="Profile image" class="object-cover z-[2] max-h-[70vh]"/>
        </div>
    </section>
    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class= "flex flex-col gap-2 text-center">

            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Some of my <span class="text-violet-400">projects</span>
            </h3>

        </div>
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <p> HolidayPlannerAI is a travel assistant that helps you with all information needed during a trip (weather, airports, attractions, hotels).
                    Developed with <strong class="text-violet-400">Python, Solara, CSS, OpenAI API, Auth0</strong></p>
            </Step>
            <Step step={steps[1]}>
                <p> Malicious Website Detection is a web application that detects malicious websites using machine learning.
                    Developed with <strong class="text-violet-400">Python, Gradio, Docker, Scikit-learn, OpenAI API</strong></p>
            </Step>
            <Step step={steps[2]}>
                <p> Cluj Napoca Temperature Prediction is  an experimental report that studies how good are transformer models at predicting weather data.
                    Developed with <strong class="text-violet-400">Python, Keras, Huggingface</strong></p>
            </Step>
            <Step step={steps[3]}>
                <p> Jupyter Notebook that gives helpful code on how to make Exploratory Data Analysis using Rust.
                    Developed with <strong class="text-violet-400">Rust, Polars, Plotly</strong></p>
            </Step>
            <Step step={steps[4]}>
                <p> A big data project that uses mobile phone sensors to predict bumps on the road in real time.
                    Developed with <strong class="text-violet-400">Amazon IoT, Amazon Timestream, S3, Amazon EMR, Amazon Athena, Amazon Glue, Kotlin</strong></p>
            </Step>
    
    
    
        </div>
    </section>
    <section id = "about" class="py-20 pt-10 lg:pt-16 lg:pt-32 flex flex-col
    gap-16 sm:gap-20 md:gap-24 relative">
        <div class="flex flex-col gap-2 text-center relative before:absolute 
        before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 
        after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
        <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl"> 
            A bit <span class="Lato text-violet-400">about</span> me. </h3>
        </div>
        <p class="mx-auto Lato font-semibold text-lg sm:text-xl md:text-2xl"> I am . . . </p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <div class="flex flex-col gap-6 sm:gap-8">
                    <p class="Lato text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">0{index+1}</p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="font-semibold text-2xl sm:text-3xl md:text-4xl">{benefit.name}</h3>
                        <p class="text-base sm:text-lg md:text-xl">{benefit.description}</p>
                    </div>
                    
                    
                </div>
            {/each}
            
        </div>

    </section>
</main>