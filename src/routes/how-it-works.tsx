
import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicPage, PageHeading } from "@/components/site/PublicPage";
import {
  UserRound,
  Search,
  ClipboardCheck,
  BookmarkCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserRound,
    title: "Start with your goals",
    description:
      "Create your profile and tell ScholarScout about your academic interests, background, and aspirations.",
    detail: "Make your search more relevant to you.",
  },
  {
    number: "02",
    icon: Search,
    title: "Discover opportunities",
    description:
      "Explore scholarships, grants, internships, hackathons, and competitions through opportunity discovery.",
    detail: "Explore possibilities beyond your usual search.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Review the details",
    description:
      "Check eligibility criteria, important deadlines, and application requirements before deciding what fits.",
    detail: "Make informed decisions with confidence.",
  },
  {
    number: "04",
    icon: BookmarkCheck,
    title: "Save and stay organized",
    description:
      "Save interesting opportunities and use the available tracking tools to keep your next steps organized.",
    detail: "Turn promising discoveries into action.",
  },
];

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — ScholarScout" },
      {
        name: "description",
        content:
          "Discover academic opportunities, review eligibility, and organize your next steps with ScholarScout.",
      },
      { property: "og:title", content: "How It Works — ScholarScout" },
      {
        property: "og:description",
        content:
          "A clearer path from discovering opportunities to planning your next move.",
      },
    ],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <PublicPage>
      <PageHeading title="How It Works" />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Sparkles className="h-7 w-7" />
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Your next opportunity starts here
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From searching to taking your next big step.
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Finding the right opportunity shouldn't feel overwhelming.
            ScholarScout brings discovery, essential details, and organization
            together in one streamlined experience.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="text-sm font-bold tracking-widest text-muted-foreground/70">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>

                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-xs font-medium leading-5 text-primary">
                    {step.detail}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl bg-primary px-6 py-8 text-primary-foreground sm:px-10 sm:py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Your ambition deserves an opportunity.
              </h3>

              <p className="mt-3 leading-7 text-primary-foreground/85">
                Start exploring possibilities and take a confident step toward
                your academic and professional goals.
              </p>
            </div>

            <Link
              to="/explore"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-background px-5 py-3 font-semibold text-foreground transition-opacity hover:opacity-90"
            >
              Explore opportunities
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PublicPage>
  );
}
