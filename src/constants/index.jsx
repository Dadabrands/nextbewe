import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import Icon from "../assets/Icon.png";
import Icon2 from "../assets/Icon2.png";
import Icon3 from "../assets/Icon3.png";
import Icon4 from "../assets/Icon4.png";
import bp3 from "../assets/bp3.png";
import bp1 from "../assets/bp1.png";
import bp2 from "../assets/bp2.png";
import bp6 from "../assets/bp6.png";
import bp4 from "../assets/bp4.png";
import bp5 from "../assets/bp5.png";

export const navItems = [
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    subItems: [
      { label: "Remote Teams", href: "/remote-teams" },
      { label: "Build Operate Transfer", href: "/build-operate-transfer" },
      { label: "Managed Services", href: "/managed-services" },
      { label: "Market Entry Program", href: "/market-entry-program" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "FAQS", href: "/faqs" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export const testimonials = [
  {
    title: "What problem does Ariz solve in the Nigerian healthcare system?",
    text: "The Nigerian healthcare system faces challenges with inefficient claims processing, leading to delays and frustration for both hospitals and patients.",
  },
  {
    title: "How will Ariz benefit hospitals?",
    text: "Ariz aims to help hospitals by automating tasks, reducing administrative burdens, and expediting claims processing. This can lead to faster reimbursements, fewer denials, and improved cash flow.",
  },
  {
    title: "How will Ariz benefit patients?",
    text: "Ariz aims to empower patients by providing transparency around costs. This could involve features like estimated cost calculators and real-time claim tracking.",
  },
  {
    title: "Is Ariz secure?",
    text: "Security is a top priority. Ariz will implement robust data security measures to protect user information and comply with all relevant Nigerian data privacy regulations.",
  },
  {
    title: "When will Ariz be available?",
    text: " Ariz is currently under development. We're committed to launching a user-friendly platform that addresses the needs of the Nigerian healthcare system. Stay tuned for updates on our progress!",
  },
  {
    title: "How can I learn more about Ariz?",
    text: "You can sign up for our mailing list to receive updates on Ariz's development and be among the first to know when we launch.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    image: Icon,
    description:
      "ARIZ modernizes healthcare claims processing in Nigeria, eliminating paperwork and automating the process for hospitals while providing patients with transparent cost information.",
  },
  {
    image: Icon2,
    description:
      "Our AI-powered platform ensures hospitals receive payments quicker and reduces claim denials by proactively identifying and rectifying errors.",
  },
  {
    image: Icon3,
    description:
      "Patients benefit from upfront cost estimates, eliminating surprise bills, and allowing them to track their claims effortlessly.",
  },
  {
    image: Icon4,
    description:
      "By handling the paperwork efficiently, ARIZ enables healthcare providers and patients to concentrate on delivering and receiving quality care, respectively.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Cookie Policy" },
  { href: "#", text: "Sitemap" },
];

export const platformLinks = [
  { href: "#", text: "Accessibility" },
  { href: "#", text: "About Us" },
];

export const communityLinks = [
  { href: "#", text: "Legal Information" },
  { href: "#", text: "Customer Support" },
];
export const privacyLinks = [{ href: "#", text: "Privacy Policy" }];
export const BlogItems = [
  {
    id: 1,
    imageSrc: bp3,
    category: "Cost Effective Solutions",
    date: "July 10, 2024",
    link: "/page1",
    description:
      "Learn how cost-effective solutions can help you achieve your goals without breaking the bank.",
  },
  {
    id: 2,
    imageSrc: bp1,
    category: "Access to Skilled Talents",
    date: "July 15, 2024",
    link: "/page2",
    description:
      "Explore ways to access skilled talents and enhance your project outcomes with the right expertise.",
  },
  {
    id: 3,
    imageSrc: bp2,
    category: "Innovative Approaches",
    date: "August 1, 2024",
    link: "/page3",
    description:
      "Discover innovative approaches that can drive success and foster creativity in your endeavors.",
  },
  {
    id: 4,
    imageSrc: bp6,
    category: "Expert Guidance",
    date: "August 15, 2024",
    link: "/page4",
    description:
      "Get expert guidance on how to navigate complex challenges and achieve your objectives effectively.",
  },
  {
    id: 5,
    imageSrc: bp4,
    category: "Creative Solutions",
    date: "September 1, 2024",
    link: "/page5",
    description:
      "Uncover creative solutions that can provide unique perspectives and innovative problem-solving strategies.",
  },
  {
    id: 6,
    imageSrc: bp5,
    category: "Strategic Planning",
    date: "September 15, 2024",
    link: "/page6",
    description:
      "Learn about strategic planning techniques that can help you set clear goals and achieve long-term success.",
  },
];
