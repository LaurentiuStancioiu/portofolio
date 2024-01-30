<script>

    export let y;
    let tabs = [
        {name: "Home", link: "/"},
        {name: "About", link: "#about"},
        {name: "Projects", link: "#projects"}];

</script>

<header class={'sticky z-[10] top-0 duration-250 px-6 flex items-center justify-between border border-solid'
 + (y > 0 ? ' py-4 bg-slate-950 border-violet-950': ' py-6 bg-transparent border-transparent'
 )}>
    <h1 class="font-medium">
        <b class="font-bold Lato">Laurentiu</b> Stancioiu
    </h1>
    <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
        {#each tabs as tab, index}
            <a 
                href={tab.link} class="duration-250 hover:text-violet-400"
                target={index === 4 ? "_blank" : ""}>
                <p>{tab.name}</p>
            </a>    
        {/each}
        <a 
            href="#footer" 
            class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950">
            <div
                class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"/>
            <h4 class="relative z-9">Get in touch</h4>
        </a>
    </div>
    
</header>