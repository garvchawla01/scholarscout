# 🎓 ScholarScout

### Find the Right Opportunities. Build Your Future.

A student-focused platform for discovering scholarships, grants, internships, hackathons, and competitions.

🌐 **Live Website:** [Explore ScholarScout](https://scholarscout-sigma.vercel.app/)

📌 Overview

Finding scholarships and career-building opportunities can be time-consuming. Information is scattered across websites, application requirements differ, and deadlines can be difficult to track.

ScholarScout aims to make opportunity discovery simpler through a centralized, easy-to-use web interface.

From educational funding to internships and coding competitions, the platform provides a starting point for students looking to discover their next opportunity.

✨ Features

🔎 Opportunity Search

Search for opportunities using titles, providers, keywords, or fields of interest.

🎯 Multiple Categories

Explore opportunities across six categories:

🎓 Scholarships

💰 Grants and fellowships

💼 Internships

💻 Hackathons

🏆 Competitions

🌟 Other opportunities

🧭 Advanced Filtering

Narrow the opportunity list using available filters for:

- Keywords and providers
- Location
- Application deadlines
- Eligibility status

Benefits

📅 Deadline-Based Sorting

Sort listings by deadline to help prioritize opportunities and organize applications.

🔐 Authentication Integration

Built with Supabase integration to support authentication and student-focused functionality.

🌐 Live Web Application

Access ScholarScout through its deployed website without needing to install the application locally.

Current status: The Explore page includes sample listings marked as demo data. Live discovery and authentication-dependent functionality may require further configuration or testing. Always verify opportunity details and deadlines with the official provider before applying.

🖥️ Website Preview

Homepage

The homepage introduces ScholarScout with a prominent search bar and direct navigation to opportunity discovery.



Explore Opportunities

The Explore page provides category navigation, search and filtering controls, deadline sorting, and opportunity cards.



Live Demo: scholarscout-sigma.vercel.app

To display the screenshots above on GitHub, add your actual image files at the specified paths. If you haven't added them yet, you can temporarily remove these two image lines.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| TypeScript | Type-safe development |
| TanStack Start | Full-stack React framework |
| Vite | Development and build tooling |
| Supabase | Backend services and authentication |
| Vercel | Hosting and deployment |
| Git and GitHub | Version control and collaboration |

⚙️ Getting Started

Follow these steps to run ScholarScout on your local machine.

1. Prerequisites
2. Node.js
3. npm
4. Git

A Supabase project if required by the application configuration

1. Clone the repository

git clone https://github.com/garvchawla01/scholarscout.git

2. Enter the project directory

cd scholarscout

3. Install dependencies

npm install

4. Configure environment variables

Create a .env file in the project root if required.

Use the exact variable names expected by the application. Check your existing environment configuration and src/integrations/supabase/ files before adding variables.

For example, a Supabase configuration may use:

VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_publishable_or_anon_key

These names are examples only. Confirm the actual names used by your project before configuring them.

Security: Never commit private API keys, database passwords, Supabase service-role keys, or other secrets to GitHub.

5. Start the development server

npm run dev

Open the local URL printed in your terminal. If the development server uses port 8080, visit:

http://localhost:8080/

6. Build for production

npm run build

Resolve any build errors before deploying.

☁️ Deployment

ScholarScout is deployed using Vercel.

To deploy your own instance:

1. Import the GitHub repository into Vercel.
2. Configure the required environment variables.
3. Verify the framework and build configuration.
4. Deploy the application.
5. Test the homepage, Explore page, authentication, and discovery features.

When Vercel is connected to the production branch, new commits pushed to that branch can trigger automatic deployments.

🔒 Security and Reliability

- Keep secrets and private credentials out of source control.
- Apply appropriate Supabase Row Level Security (RLS) policies.
- Validate requests and protect server-side operations.
- Verify external application links and opportunity details.
- Clearly label demo listings and distinguish them from verified live opportunities.
- Test authentication and server-side functions in the deployed environment.

🗺️ Roadmap

Potential improvements for future releases include:

- Reliable live opportunity discovery
- Verification of official opportunity sources
- Personalized opportunity recommendations
- Improved eligibility matching
- Advanced search and filtering
- Saved opportunities and bookmarks
- Application deadline reminders
- Personalized student dashboard
- Improved loading and error states
- Mobile responsiveness and accessibility improvements

🤝 Contributing

Contributions, suggestions, and bug reports are welcome.

1. Fork the repository.
2. Create a feature branch:
   git checkout -b feature/your-feature
3. Make your changes.
4. Test the application and production build.
5. Commit your changes and push the branch.
6. Open a pull request describing your improvements.

👨‍💻 Project Links

- Live Website: https://scholarscout-sigma.vercel.app/
- GitHub Repository: https://github.com/garvchawla01/scholarscout
- Hosting Platform: Vercel
- Backend Platform: Supabase

<p align="center">
  <strong>Discover opportunities. Unlock your future.</strong>
  <br />
  Built to help students explore more possibilities. 🎓
</p>
