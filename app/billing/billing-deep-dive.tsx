import {
  ArrowUpRight,
  CalendarClock,
  ChartNoAxesCombined,
  FileText,
  Paperclip,
  ShoppingCart,
} from "lucide-react";
import { billingProduct } from "../product-catalog";

const expenseDetails = [
  {
    number: "01",
    icon: <FileText aria-hidden="true" />,
    title: "Record the essentials",
    description:
      "Add an expense with its date, amount, category, payment method, and relevant details.",
  },
  {
    number: "02",
    icon: <Paperclip aria-hidden="true" />,
    title: "Keep receipts connected",
    description:
      "Attach a receipt file to an expense record so the supporting document stays close to the entry.",
  },
  {
    number: "03",
    icon: <CalendarClock aria-hidden="true" />,
    title: "Organize repeating costs",
    description:
      "Set up recurring-expense rules for costs that follow a regular schedule.",
  },
  {
    number: "04",
    icon: <ChartNoAxesCombined aria-hidden="true" />,
    title: "Review the bigger picture",
    description:
      "Explore expenses by date and category, with recorded and projected amounts shown separately.",
  },
];

export function BillingDeepDive() {
  return (
    <>
      <section className="section-pad billing-story" aria-labelledby="billing-story-title">
        <div className="container">
          <div className="billing-story-heading">
            <span className="billing-story-kicker">03 / BEYOND THE INVOICE</span>
            <h2 id="billing-story-title" className="display-heading">
              More of your daily work. <span>One clearer view.</span>
            </h2>
            <p>
              An invoice is one part of running a business. Techabanca Billing
              also gives you dedicated places to manage purchase orders,
              record expenses, and review business activity.
            </p>
          </div>

          <div className="billing-story-split">
            <div className="billing-story-icon">
              <ShoppingCart size={42} strokeWidth={1.5} aria-hidden="true" />
              <span>PURCHASES / 01</span>
            </div>
            <div>
              <span className="billing-story-kicker">PURCHASE ORDERS</span>
              <h3>Keep purchasing records within reach.</h3>
              <p>
                Prepare and manage purchase orders alongside your other
                business records. Find the information you need without
                treating purchasing as an unrelated workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-pad billing-expenses-story"
        aria-labelledby="billing-expenses-title"
      >
        <div className="container">
          <div className="billing-story-heading">
            <span className="billing-story-kicker">
              04 / EXPENSE MANAGEMENT ? NOW AVAILABLE
            </span>
            <h2 id="billing-expenses-title" className="display-heading">
              Every expense <span>has a place.</span>
            </h2>
            <p>
              Everyday costs deserve more than a scattered collection of
              notes and receipts. Record expenses, organize them into
              categories, and keep supporting files connected to the right
              entries.
            </p>
          </div>

          <figure className="billing-screen-frame billing-feature-screen">
            <div className="billing-screen-toolbar billing-screen-toolbar-light">
              <span className="billing-screen-dots">
                <i />
                <i />
                <i />
              </span>

              <span>TECHABANCA BILLING / EXPENSES</span>
            </div>

            <div className="billing-screen-crop billing-expenses-crop">
              <img
                src="/images/billing/expenses.png"
                alt="Techabanca Billing expense list with filters, categories, payment methods and recorded business expenses"
                loading="lazy"
              />
            </div>

            <figcaption>
              Find and review expenses by date, category, vendor, payment
              method and source.
            </figcaption>
          </figure>

          <div className="billing-expenses-grid">
            {expenseDetails.map((item) => (
              <article className="billing-expenses-card" key={item.number}>
                <div className="billing-expenses-card-top">
                  <span>{item.number} / 04</span>
                  {item.icon}
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="billing-expenses-note">
            <span className="billing-story-kicker">AN IMPORTANT DISTINCTION</span>
            <p>
              Recorded expenses show entries already created in Billing.
              Projected expenses show upcoming occurrences from active
              recurring-expense rules. A projection is not a payment.
            </p>
          </div>
        </div>
      </section>

      <section
        className="section-pad billing-reports-story"
        aria-labelledby="billing-reports-title"
      >
        <div className="container billing-reports-grid">
          <figure className="billing-screen-frame billing-reports-screen">
            <div className="billing-screen-toolbar">
              <span className="billing-screen-dots">
                <i />
                <i />
                <i />
              </span>

              <span>TECHABANCA BILLING / EXPENSE REPORTS</span>
            </div>

            <div className="billing-screen-crop billing-reports-crop">
              <img
                src="/images/billing/expense-reports.png"
                alt="Techabanca Billing expense reporting with recorded totals, charts, category analysis and projected recurring costs"
                loading="lazy"
              />
            </div>

            <figcaption>
              Recorded expenses, trends, categories and upcoming recurring
              costs are presented separately and clearly.
            </figcaption>
          </figure>
          <div>
            <span className="billing-story-kicker">05 / BUSINESS VISIBILITY</span>
            <h2 id="billing-reports-title" className="display-heading">
              See what your <span>records are telling you.</span>
            </h2>
            <p>
              Explore expense summaries, category breakdowns, and charts
              using date filters. View recorded expenses alongside
              separately identified upcoming recurring costs, and use the
              dashboard to see expenses in the context of your business
              activity.
            </p>
            <a
              className="button button-primary"
              href={billingProduct.appHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Techabanca Billing <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
