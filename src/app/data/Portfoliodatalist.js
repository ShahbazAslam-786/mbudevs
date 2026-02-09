"use client"
const PortfolioDataList = [
  {
    id: 1,
    title: "PerfectGift",
    description:
      "The website PerfectGift.com specializes in personalized gift cards and eGifts. Here's a detailed overview based on the image you shared:..",
    src: "/assets/perfect-gift-2.png",
    alt: "Image",
    dataLine: "PerfectGift",
    additionalImages: [
      "/assets/perfect-gift-1.png",
      "/assets/perfect-gift-2.png",
      "/assets/perfect-gift-3.jpg",
      "/assets/perfect-gift-4.png",
    ],
    portfolioDescription: {
      ProjectDescription:
        "PerfectGift.com is a premier online platform for purchasing and sending gift cards—both virtual and physical. The site offers a wide selection of prepaid cards including Visa®, Mastercard®, and American Express® gift cards, as well as branded eGift cards from top retailers and restaurants.Designed for individuals and businesses alike, PerfectGift.com provides bulk ordering, corporate gifting solutions, personalized messages, and instant or scheduled delivery options. Whether it's for holidays, employee rewards, birthdays, or client appreciation, the platform ensures secure, fast, and customizable gifting experiences—all in one place.",
      TechStack:
        "PerfectGift is developed using Next.js for server-side rendering and enhanced performance, with Material UI ensuring a responsive and modern design system. The backend is powered by Node.js, featuring secure user authentication via Auth0 and integrated social login. The application maintains high code quality through unit and end-to-end (E2E) testing. Sentry is implemented for real-time error tracking, while the system is optimized for scalability, security, and smooth user experience.",
    },
  },
  {
    id: 2,
    title: "Giftya Mobile App",
    description:
      "GiftYa - the gift card app that allows you to send a gift card in a new way! From the makers of Giftcards.com, GifYa is an app that completely streamlines and...",
    src: "/assets/giftya.jpeg",
    alt: "Image",
    dataLine: "Check My Giftya App",
    additionalImages: [
      "/assets/giftya-1.png",
      "/assets/giftya-3.png",
      "/assets/giftya-2.png",
      "/assets/giftya-5.png",
    ],
    portfolioDescription: {
      ProjectDescription:
        "Giftya is a smart, personalized gifting app designed to revolutionize the way you give and receive gifts. With Giftya, users can send meaningful digital gift cards to friends and family in seconds—no addresses or physical delivery required. The app links the gift directly to the recipient’s debit card, making the process instant, secure, and seamless. Whether it’s a birthday, graduation, holiday, or a simple gesture of appreciation, Giftya offers a wide range of retailers and local businesses to choose from. The recipient can shop as usual, and the gift amount is automatically deducted from their purchase.",
      TechStack:
        "Giftya Mobile App is built using React Native with robust state management through Redux and Redux-Saga. It integrates social login, Apple Pay, Google Pay, Stripe, and PayPal for seamless transactions. The backend is powered by CakePHP, with secure authentication via Auth0. Continuous Integration and Deployment (CI/CD), Sentry for real-time monitoring, and comprehensive Unit and End-to-End (E2E) testing ensure stability and scalability across platforms.",
    },
  },

  {
    id: 3,
    title: "Giftya Web",
    description:
      "We created the next-generation of gifting that can never be lost or stolen. GiftYa is the true digital gift card that sends your gift when they need it most.",
    src: "/assets/giftya-web-1.png",
    alt: "Image",
    dataLine: "Giftya-wab",
    size: { width: 200, height: "auto" },
    additionalImages: [
      "/assets/giftya-web-1.png",
      "/assets/giftya-web-2.png",
      "/assets/giftya-web-3.jpg",
      "/assets/giftya-web-4.png",
    ],
    portfolioDescription: {
      ProjectDescription:
        "Giftya is a modern web platform designed to simplify and personalize digital gifting. Built as a seamless and intuitive experience, the Giftya website allows users to send thoughtful e-gifts that are directly linked to a recipient's debit card—no physical delivery or mailing address required. With just a few clicks, users can choose a retailer, personalize the gift, and send it instantly, making it perfect for birthdays, holidays, or simple expressions of appreciation.From a performance and security standpoint, the platform is engineered for scale and reliability. Giftya supports major payment integrations like Apple Pay, Google Pay, Stripe, and PayPal, and offers secure authentication through Auth0 with social login support. The interface, built using React.js and Material UI, ensures a responsive and user-friendly experience, while the backend and infrastructure leverage a robust CI/CD pipeline, real-time error monitoring via Sentry, and high code quality through unit and E2E testing.",
      TechStack:
        "Giftya's web platform is developed using React.js for a dynamic frontend, enhanced by Redux and Redux-Saga for state and side-effect management. Material UI provides a modern and responsive design system. User authentication is handled via Auth0 with support for social logins. Payment systems include Apple Pay, Google Pay, Stripe, and PayPal. Error monitoring is powered by Sentry, while automated deployment and quality assurance are achieved through CI/CD pipelines, unit testing, and E2E testing. The backend services are integrated with CakePHP for robust data handling and API management.",
    },
  },
  {
    id: 4,
    title: "Granny app",
    description:
      "Gift Card Granny App is a smart platform for buying, selling, and comparing gift cards at discounted rates. Users can easily find deals from top retailers and save money on every purchase. It offers secure transactions, real-time price tracking, and flexible gift card management—all in one app.",
    src: "/assets/granny.jpeg",
    alt: "Image",
    dataLine: "Granny app",
    additionalImages: [
      "/assets/granny-1.png",
      "/assets/granny-2.png",
      "/assets/granny-3.png",
      "/assets/granny-4.png",
    ],
    portfolioDescription: {
      ProjectDescription:
        "Gift Card Granny is a dynamic gift card comparison and discount app that simplifies the way users buy, sell, and save on gift cards. Based near Pittsburgh, Pennsylvania, the platform aggregates listings from multiple top-rated gift card retailers, enabling users to browse thousands of deals in one place. Whether you're looking to purchase gift cards at a discounted price or sell unused ones for cash, Granny provides a seamless and secure experience designed to maximize savings and convenience.The app offers a user-friendly interface where customers can quickly search by store, category, or discount level. With real-time updates and intelligent sorting features, users can instantly find the best value deals. Gift Card Granny not only helps people stretch their dollars but also provides a trustworthy marketplace backed by verified sellers. It's an ideal solution for savvy shoppers, corporate gifting, or anyone who wants more value from their everyday purchases.",
      TechStack:
        "Gift Card Granny’s mobile application is built using React Native for a cross-platform user experience. React Query and Context API are utilized for efficient data fetching and global state management, while Redux with Redux-Saga handles complex side effects. The UI integrates social login options including Apple and Google, and supports seamless payments via Stripe and PayPal. Authentication is managed through Auth0, ensuring secure access control. Sentry is used for real-time error tracking, and the development workflow is streamlined with CI/CD pipelines, unit testing, and E2E testing. Backend services are powered by CakePHP, offering reliable API integration and data management.",
    },
  },
  {
    id: 5,
    title: "HomeSchooling",
    description:
      "Homeschooling means teaching your child at home, where you can guide them closely and help them learn in fun, hands-on ways...",
    src: "/assets/homeSchooling.png",
    alt: "Image",
    dataLine: "HomeSchooling",
    additionalImages: [
      "/assets/home_sch_five.png",
      "/assets/home_sch_six.png",
      "/assets/Home_Schooling_four.png",
      "/assets/Home_Schooling_three.png",
    ],
    portfolioDescription: {
      ProjectDescription:
        "Homeschooling means teaching your child at home, where you can guide them closely and help them learn in fun, hands-on ways. Instead of just paying high school fees, you can buy learning toys and activities that will actually help your child grow. Homeschooling lets you teach through real-life experiences. For example, when you go to the mall, let your child pay using the ATM. When buying groceries, give them cash to pay. Take them to parks and play areas, or set up activities at home to help them learn. From ages 2 to 6, children need your time and attention. With homeschooling, they learn through play and everyday activities, rather than just from books. This makes learning more fun and meaningful!",
      TechStack:
        "HomeSchooling with MBU is developed using React.js for a fast, dynamic, and component-driven user interface. The platform features a custom-designed UI tailored to ensure a smooth and engaging user experience. To enhance user interaction and support, the system integrates an AI-based chat assistant, offering intelligent and responsive communication. Google Analytics is implemented for tracking user behavior and gaining actionable insights, enabling continuous platform optimization and personalized content delivery.",
    },
  },
  {
    id: 6,
    title: "Islam Basics",
    description:
      "Islam Basics is a beginner-friendly app designed to help users understand the core teachings of Islam in a simple and interactive way. It covers essential topics like the Five Pillars of Islam, daily prayers, and important Islamic values...",
    src: "/assets/islamBasics.png",
    alt: "Islam Basics App Image",
    dataLine: "Islam Basics",
    additionalImages: [
      "/assets/islam_screen_one.png",
      "/assets/islam_screen_two.png",
      "/assets/islam_screen_three.png",
      "/assets/islam_screen_four.png",
      "/assets/islam_screen_five.png",
      "/assets/islam_screen_six.png",
      "/assets/islam_screen_seven.png",
    ],
    portfolioDescription: {
      ProjectDescription:
        "Islam Basics is a simple and user-friendly mobile app that introduces users to the foundational teachings of Islam. The app includes sections on the Five Pillars of Islam—Shahada (faith), Salah (prayer), Zakat (charity), Sawm (fasting), and Hajj (pilgrimage). It also guides users on how to perform daily prayers with step-by-step instructions and audio support. The app features child-friendly illustrations and interactive activities to make learning engaging for all ages. Whether you're new to Islam or want to teach your kids, Islam Basics provides a peaceful and informative learning experience rooted in authenticity and simplicity.",
      TechStack:
        "Islam Basics is built using React Native, enabling seamless performance across both Android and iOS platforms. The app uses Redux for efficient state management, ensuring smooth navigation and data flow across screens. Analytics integration allows for user engagement tracking and behavior insights, which help in enhancing user experience and guiding future updates.",
    },
  },
  {
    id: 7,
    title: "Clublax",
    description:
      "ClubLax is a real-time lacrosse tracking app that lets users follow tournament and showcase games with live scoring and interactive updates. Fans can stream matches and stay connected with the action from anywhere.",
    src: "/assets/clublex.jpeg",
    alt: "Image",
    dataLine: "Clubax",
    additionalImages: [
      "/assets/clublax-1.png",
      "/assets/clublax-2.png",
      "/assets/clublax-3.png",
    ],
    portfolioDescription: {
      ProjectDescription:
        "ClubLax is a dynamic sports platform designed to enhance the experience of lacrosse tournaments and showcases. It allows users to track live scores, view interactive game updates, and stream matches in real-time, bringing the action directly to fans, players, and coaches. Whether you're at the field or miles away, ClubLax ensures you never miss a moment of the game.",
      TechStack:
        "Clublax is developed using React Native for cross-platform mobile application development, offering a unified and efficient user experience. Redux is utilized for state management, ensuring consistent data flow. Real-time interactions within the app are powered by WebSockets, allowing instant updates and notifications. The backend is built with Node.js, providing scalable and high-performance server-side logic. AWS Cognito is integrated for secure user authentication and identity management, ensuring robust data protection and seamless login experiences.",
    },
  },
  {
    id: 8,
    title: "Fert app",
    description:
      "FertApp is a business finance management app designed for traders and fertilizer dealers. It helps track receivables, payables, and live bank balances with smart analytics. The app offers secure login, intuitive dashboards, and real-time transaction insights.",
    src: "/assets/fert.jpeg",
    alt: "Image",
    dataLine: "Fert app",
    additionalImages: [
      "/assets/fert-1.png",
      "/assets/fert-2.png",
      "/assets/fert-3.png",
    ],
    portfolioDescription: {
      ProjectDescription:
        "FertApp is a modern financial tracking and business management mobile application tailored for traders and fertilizer businesses. With secure fingerprint authentication, users can seamlessly log in to manage receivables, payables, and real-time bank balances. The intuitive dashboards display transaction summaries, due amounts, and sales/purchase analytics—helping businesses make data-driven decisions and maintain clear financial visibility.",
      TechStack:
        "FertApp is built using Expo React Native to streamline cross-platform mobile development and simplify deployment. Redux-Saga is implemented for advanced state management and handling complex asynchronous operations. Formik is used to manage form state efficiently, while Yup provides robust form validation, ensuring a smooth and error-free user experience throughout the app",
    },
  },
  {
    id: 9,
    title: "NextHire",
    description:
      "NextHire is a sleek mobile app that simplifies the hiring process for both candidates and recruiters. Users can create professional profiles, log in securely via LinkedIn, and apply for jobs seamlessly. With a modern UI and smart features, it makes job searching and talent acquisition efficient and intuitive.",
    src: "/assets/next-hire.jpeg",
    alt: "Image",
    dataLine: "Next app",
    additionalImages: [
      "/assets/next-1.png",
      "/assets/next-2.png",
      "/assets/next-3.png",
      "/assets/next-4.png",
    ],
    portfolioDescription: {
      ProjectDescription:
        "NextHire is a modern mobile application designed to streamline the job search and hiring process for both candidates and recruiters. The app offers a sleek and intuitive interface where users can create detailed professional profiles, including job titles, education, personal quotes, and contact information.With secure login options—including LinkedIn integration—and a clean, responsive UI, NextHire enables candidates to apply for jobs with ease while allowing employers to discover qualified talent quickly. The app focuses on creating a smooth onboarding experience with features like profile management, resume sharing, and role-specific filtering—making hiring smarter and more efficient.",
      TechStack:
        "NextHire is developed using React Native for a seamless cross-platform mobile experience. Redux is used for state management, and Redux-Saga handles side effects like asynchronous operations, ensuring smooth and maintainable app performance.",
    },
  },
  {
    id: 10,
    title: "Appal",
    description:
      "Appal is a local marketplace app that allows users to easily buy and sell products within their area. It features user-friendly listing creation, real-time updates, and secure in-app chat. With intuitive navigation and smooth performance, Appal makes local trading fast and hassle-free.",
    src: "/assets/appol.png",
    alt: "Image",
    dataLine: "Appal",
    additionalImages: [
      "/assets/verify acc phone.jpg",
      "/assets/sell product.jpg",
      "/assets/sell product (1).jpg",
      "/assets/profile.jpg",
      "/assets/productbid.jpg",
      "/assets/product.jpg",
      "/assets/Your adds full.jpg",
      "/assets/onboarding.jpg",
      "/assets/notification.jpg",
      "/assets/edit profile.jpg",
      "/assets/edit post.jpg",
      "/assets/create acc phone.jpg",
      "/assets/verify acc phone.jpg",
      "/assets/Chats.jpg",
      "/assets/Chats texting.jpg",
      "/assets/categories final.jpg",
      "/assets/bid.jpg",
    ],
    portfolioDescription: {
      ProjectDescription:
        "Appal is a modern classified marketplace app designed for effortless buying and selling of products within your local area. Users can easily post listings with images, explore items by category or location, and communicate directly through in-app chat.The platform ensures secure logins, smooth user experience, and real-time updates for new listingsWhether it’s electronics, home appliances, vehicles, or daily-use goods—Appal provides a trusted and convenient space for everyday deals.",
      TechStack:
        "Appal is developed using Flutter for a cross-platform mobile experience, ensuring consistent performance on both Android and iOS. The app uses Firebase for real-time database, authentication, and push notifications. Cloud Firestore manages scalable and structured data storage. Provider or Bloc handles state management, ensuring smooth UI updates. Image uploads and storage are managed via Firebase Storage, while Google Maps API supports location-based listing discovery.",
    },
  },
  {
    id: 11,
    title: "Blood donation",
    description:
      "DonateBlood is a compassionate web platform designed to connect blood donors with individuals in urgent medical need. It offers multiple donation options including EasyPaisa, JazzCash, PayPal, and direct bank transfers—both locally and internationally. With an easy-to-navigate interface and a mission to save lives, every drop donated tells a meaningful story.",
    src: "/assets/blood-donating.png",
    alt: "Image",
    dataLine: "Blood donation",
    additionalImages: [
      "/assets/About us.png",
      "/assets/log in.png",
      "/assets/Contact us.png",
      "/assets/Donation.png",
      "/assets/Donor.png",
      "/assets/request.png",
    ],
    portfolioDescription: {
      ProjectDescription:
        "DonateBlood is a life-saving donation platform built to connect voluntary blood donors with individuals facing medical emergencies across cities. The website simplifies the donation process by offering multiple secure payment options, including local apps like EasyPaisa, JazzCash, NayaPay, and international gateways such as PayPal, Zelle, Stripe, and Apple Pay. It also supports direct bank and Payoneer transfers, making contributions seamless for everyone, everywhere. The platform aims to create a bridge of hope by encouraging community involvement in blood donation. With a clean and informative layout, it empowers donors to act quickly and save lives. Every drop truly saves a story.",
      TechStack:
        "The Blood Donation app is developed using Flutter for cross-platform mobile development, ensuring a smooth and responsive user experience across Android and iOS. It leverages Firebase for real-time database, authentication, and push notifications. The app is integrated with RESTful APIs, Google Maps, and state management (like Provider or BLoC) to efficiently connect donors with recipients based on location and urgency.",
    },
  },

  {
    id: 12,
    title: "Event planning app",
    description:
      "The Event Planning App streamlines the process of organizing weddings, parties, and corporate events. It offers features like guest management, scheduling, budgeting, and vendor coordination in one place. With real-time updates and easy collaboration, planning events becomes effortless and efficient.",
    src: "/assets/event-planing.jpeg",
    alt: "Image",
    dataLine: "Event planning app",
    additionalImages: [
      "/assets/WhatsApp Image 2025-01-10 at 6.18.52 PM (1).jpeg",
      "/assets/WhatsApp Image 2025-01-10 at 6.18.52 PM.jpeg",
      "/assets/WhatsApp Image 2025-01-10 at 7.27.25 PM.jpeg",
      "/assets/WhatsApp Image 2025-01-10 at 7.27.26 PM (1).jpeg",
      "/assets/WhatsApp Image 2025-01-10 at 7.27.26 PM.jpeg",
      "/assets/WhatsApp Image 2025-01-10 at 7.27.28 PM.jpeg",
      "/assets/WhatsApp Image 2025-01-13 at 7.55.05 PM.jpeg",
      "/assets/WhatsApp Image 2025-01-13 at 7.55.07 PM.jpeg",
    ],
    portfolioDescription: {
      ProjectDescription:
        "The Event Planning App is a smart, user-friendly platform designed to simplify the process of organizing and managing events. Whether it's weddings, corporate meetings, birthdays, or social gatherings, the app allows users to plan every detail—venue booking, guest lists, schedules, budgeting, and vendor coordination—all in one place. With real-time collaboration features, reminders, and customizable templates, it enhances efficiency and reduces stress for event organizers. Users can track progress, manage RSVPs, and even share updates with attendees instantly. It’s the perfect tool for turning ideas into flawless, well-executed events.",
      TechStack:
        "The Blood Donation app is built using Flutter, enabling a single codebase for both Android and iOS platforms. It utilizes Firebase for real-time database, authentication, and push notifications. The UI is crafted with Flutter’s Material Design components, ensuring a clean and responsive interface. Integration with REST APIs allows secure donor-recipient data exchange and location-based search functionality.",
    },
  },
  {
    id: 13,
    title: "Fitness App",
    description:
      "The Fitness App offers personalized workout plans, daily tracking, and progress analytics to help users stay healthy and active.It includes video tutorials, goal setting, and integration with wearables for a complete fitness experience.Whether you're a beginner or an athlete, the app supports every step of your fitness journey.",
    src: "/assets/Untitled design (42).png",
    alt: "Image",
    dataLine: "Fitness App",
    additionalImages: [
      "/assets/WhatsApp Image 2025-01-10 at 4.58.53 PM (1).jpeg",
      "/assets/WhatsApp Image 2025-01-10 at 4.58.53 PM (2).jpeg",
      "/assets/WhatsApp Image 2025-01-10 at 4.58.53 PM (3).jpeg",
      "/assets/WhatsApp Image 2025-01-10 at 4.58.53 PM.jpeg",
    ],
    portfolioDescription: {
      ProjectDescription:
        "The Fitness App is your all-in-one personal trainer, designed to help users of all levels stay active and healthy. It offers customized workout routines, daily tracking, and progress analytics to monitor your fitness journey. With guided video tutorials, nutrition tips, and integration with wearables, it ensures a complete health management experience.Users can set fitness goals, receive reminders, and track calories burned. The app also features a supportive community space to stay motivated and accountable. Whether you're aiming to lose weight, build muscle, or simply stay fit, this app keeps you on track.",
      TechStack:
        "This Fitness App is built using Flutter for cross-platform development, ensuring a smooth experience on both Android and iOS.It uses Firebase for real-time database, authentication, and push notifications, along with Provider or Bloc for state management.Integration with device sensors and APIs enables fitness tracking, while REST APIs support workout content and analytics.",
    },
  },
  {
    id: 14,
    title: "GPT App",
    description:
      "GPT App is a smart AI chatbot that offers real-time, human-like conversations. It helps users with questions, writing, and productivity tasks using advanced language processing. Simple, fast, and reliable—GPT App makes AI accessible for everyone.",
    src: "/assets/WhatsApp Image 2025-01-10 at 7.34.06 PM.jpeg",
    alt: "Image",
    dataLine: "GPT App",
    additionalImages: [
      "/assets/WhatsApp Image 2025-01-10 at 7.34.06 PM (1).jpeg",
      "/assets/WhatsApp Image 2025-01-10 at 7.34.07 PM.jpeg",
      "/assets/WhatsApp Image 2025-01-10 at 7.34.08 PM.jpeg",
      "/assets/WhatsApp Image 2025-01-10 at 7.34.07 PM (2).jpeg",
    ],
    portfolioDescription: {
      ProjectDescription:
        "GPT App is an intelligent AI chatbot designed to deliver human-like conversations in real-time. Powered by advanced natural language processing, it assists users with questions, tasks, and creative writing. Whether you're seeking quick information, casual chat, or productivity support, GPT App offers fast, accurate, and engaging responses. With a sleek and user-friendly interface, the app ensures a smooth and interactive experience. Ideal for students, professionals, and curious minds alike, GPT App brings the power of AI to your fingertips.",
      TechStack:
        "The GPT App is built using Flutter for a smooth and cross-platform mobile experience. It integrates OpenAI’s GPT API for AI-driven conversations and leverages Firebase for authentication, real-time database, and push notifications. State management is handled via Provider or Riverpod, ensuring efficient performance and responsiveness.",
    },
  },
  {
    id: 15,
    title: "Insta link clone App",
    description:
      "The Instagram Link Clone App allows users to create a personalized, mobile-friendly landing page to showcase multiple links from their bio.Built with Flutter and powered by Firebase, it ensures real-time updates, user authentication, and smooth performance.Ideal for influencers, creators, or businesses wanting to share all their important links in one place.",
    src: "/assets/insta-clone.png",
    alt: "Image",
    dataLine: "Insta link clone App",
    additionalImages: [
      "/assets/Varifying Phone Number.jpg",
      "/assets/Social.jpg",
      "/assets/Splash.jpg",
      "/assets/Upcoming Event.jpg",
    ],
    portfolioDescription: {
      ProjectDescription:
        "This is a custom-built Instagram Link-in-Bio Clone App, designed to help users share multiple links through a single smart profile.It allows influencers, brands, and creators to add links to websites, products, videos, or social platforms all in one place.The app features a clean UI, drag-and-drop customization, and real-time updates.Built with performance and mobile responsiveness in mind, it mimics the functionality of tools like Linktree.Perfect for boosting engagement and simplifying digital presence on Instagram.",
      TechStack:
        "The app is built using Flutter for cross-platform mobile development, ensuring smooth performance on both Android and iOS.Firebase is used for backend services including real-time database, authentication, and hosting.Provider or GetX (depending on your state management choice) handles state management efficiently.Image uploads and user content are managed via Cloud Storage, with secure login using Firebase Auth.The app is styled with custom widgets for a responsive, minimal, and user-friendly interface.",
    },
  },
];

export default PortfolioDataList;
