export interface Solution {
    id: string;
    name: string;
    subName: string;
    tagline: string;
    folderPath: string; // For the canvas 3D image sequence (e.g., rotating neural globe)
    themeColor: string;
    gradient: string;
    features: string[];
    metrics: { label: string; val: string }[];
    section1: { title: string; subtitle: string };
    section2: { title: string; subtitle: string };
    section3: { title: string; subtitle: string };
    section4: { title: string; subtitle: string };
    detailsSection: { title: string; description: string; imageAlt: string };
    impactSection: { title: string; description: string };
    deploymentSection: {
        model: string;
        architecture: string;
        processingParams: string[];
        integrationPromise: string;
        securityPolicy: string;
    };
}

export const solutions: Solution[] = [
    {
        id: "society",
        name: "Civic Intelligence",
        subName: "Empowering communities.",
        tagline: "AI solutions designed to optimize societal infrastructure.",
        folderPath: "/images/civic-nodes",
        themeColor: "#2563EB", // Blue
        gradient: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)",
        features: ["Predictive Analytics", "Resource Allocation", "Citizen-Centric AI"],
        metrics: [{ label: "Latency", val: "<10ms" }, { label: "Uptime", val: "99.99%" }, { label: "Data Integrity", val: "100%" }],
        section1: { title: "Civic Intelligence.", subtitle: "Empowering communities." },
        section2: { title: "Data-driven urban ecosystems.", subtitle: "Deploying autonomous agentic networks to manage traffic, energy, and public safety in real-time." },
        section3: { title: "Human-centered automation.", subtitle: "Streamlining public services while maintaining ethical oversight and absolute privacy." },
        section4: { title: "Building tomorrow's infrastructure, today.", subtitle: "" },
        detailsSection: {
            title: "The Neural City",
            description: "Our Civic Intelligence platform utilizes advanced machine learning models to predict societal needs before they become critical. From optimizing emergency response routes to managing smart grid energy distribution, AGENTX provides the digital nervous system for modern municipalities.",
            imageAlt: "Abstract glowing city grid"
        },
        impactSection: {
            title: "Ethical AI by Design",
            description: "We believe in transparent, bias-free algorithms. Our systems are rigorously audited to ensure equitable service delivery across all demographics, proving that high-tech automation can coexist with profound human empathy."
        },
        deploymentSection: {
            model: "Enterprise License",
            architecture: "Cloud & Edge Hybrid",
            processingParams: ["End-to-End Encryption", "Edge Computing", "Real-time Processing"],
            integrationPromise: "Seamless API integration with existing municipal legacy systems.",
            securityPolicy: "Military-grade data protection. Fully compliant with global privacy standards."
        }
    },
    {
        id: "environment",
        name: "Eco-Automation",
        subName: "Planetary defense.",
        tagline: "Smart systems monitoring and restoring the natural world.",
        folderPath: "/images/eco-sphere",
        themeColor: "#10B981", // Emerald
        gradient: "linear-gradient(135deg, #064E3B 0%, #10B981 100%)",
        features: ["Climate Modeling", "Deforestation Tracking", "Smart Agriculture"],
        metrics: [{ label: "Carbon Offset", val: "Optimized" }, { label: "Analysis", val: "Real-time" }, { label: "Sensors", val: "IoT Ready" }],
        section1: { title: "Eco-Automation.", subtitle: "Planetary defense." },
        section2: { title: "Precision environmental monitoring.", subtitle: "Processing terabytes of satellite imagery and IoT sensor data to protect vital ecosystems." },
        section3: { title: "Algorithmic sustainability.", subtitle: "Optimizing agricultural yields while minimizing water usage and chemical runoff." },
        section4: { title: "Technology for a living planet.", subtitle: "" },
        detailsSection: {
            title: "Global Sensor Networks",
            description: "AGENTX leverages low-power edge computing devices deployed in remote environments. These smart agents analyze environmental shifts locally, transmitting only critical anomalies to our central hubs, reducing bandwidth while maximizing response times to ecological threats.",
            imageAlt: "Holographic earth showing data points"
        },
        impactSection: {
            title: "Reversing the Trend",
            description: "AI is our most powerful tool against climate change. By automating the analysis of global carbon sinks and ocean temperatures, we provide actionable intelligence to conservationists and policymakers worldwide."
        },
        deploymentSection: {
            model: "SaaS / Partnership",
            architecture: "Decentralized Edge",
            processingParams: ["Low Latency", "Neural Rendering", "Predictive Modeling"],
            integrationPromise: "Plug-and-play compatibility with major environmental data repositories.",
            securityPolicy: "Open-source data availability for vetted research institutions."
        }
    }
];
