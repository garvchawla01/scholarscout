
import { createFileRoute } from "@tanstack/react-router";
import { PublicPage, PageHeading } from "@/components/site/PublicPage";
import {
  ShieldCheck,
  Globe,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

const trustPoints = [
  {
    icon: Globe,
    title: "Discover opportunities",
    description:
      "Explore scholarships, grants, internships, hackathons, and competitions from across the web.",
  },
  {
    icon: GraduationCap,
    title: "Assess your fit",
    description:
      "Review eligibility criteria, deadlines, and opportunity details before deciding to apply.",
  },
  {
    icon: ShieldCheck,
    title: "Verify before applying",
    description:
      "Use official sources to confirm requirements, deadlines, and application instructions.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Trust — ScholarScout" },
      {
        name: "description",
        content:
          "Learn how ScholarScout helps students discover and assess academic opportunities.",
      },
      { property: "og:title", content: "About & Trust — ScholarScout" },
      {
        property: "og:description",
        content:
          "Discover opportunities, assess your fit, and verify details with ScholarScout.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PublicPage>
      <PageHeading title="About & Trust" />

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <ShieldCheck className="h-7 w-7" />
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Built for student opportunities
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Find opportunities. Make informed decisions.
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            ScholarScout helps students discover and assess scholarships,
            grants, internships, hackathons, and competitions. Our goal is to
            make opportunities easier to find and their requirements easier to
            understand.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {trustPoints.map((point) => {
            const Icon = point.icon;

            return (
              <article
                key={point.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {point.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {point.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-muted/40 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />

            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Transparency matters
              </h3>

              <p className="mt-2 leading-7 text-muted-foreground">
                ScholarScout is built to make discovering academic and career opportunities simpler, smarter, and more accessible. By bringing scholarships, grants, internships, hackathons, and competitions into one streamlined platform, we help students spend less time searching and more time pursuing their ambitions. Our intelligent discovery experience helps surface relevant opportunities and makes essential information easier to explore, so students can approach their next big step with greater clarity and confidence.

**Your ambition deserves to be discovered. We're here to help you find the opportunities that move you forward.**
              </p>
            </div>
          </div>
        </div>
      </section>
    </PublicPage>
  );
}
