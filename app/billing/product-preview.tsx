export function BillingProductPreview() {
  return (
    <section
      className="billing-product-preview section-pad"
      aria-labelledby="billing-preview-title"
    >
      <div className="container">
        <div className="billing-preview-heading">
          <span className="billing-story-kicker">
            A WORKING VIEW OF YOUR BUSINESS
          </span>

          <h2 id="billing-preview-title" className="display-heading">
            See the work. <span>See the bigger picture.</span>
          </h2>

          <p>
            Sales, collections, receivables, expenses, purchase orders and
            recent activity come together on the Techabanca Billing dashboard,
            helping you move from individual records to a broader view of
            everyday business activity.
          </p>
        </div>

        <figure className="billing-screen-frame billing-dashboard-frame">
          <div className="billing-screen-toolbar">
            <span className="billing-screen-dots">
              <i />
              <i />
              <i />
            </span>

            <span>TECHABANCA BILLING / DASHBOARD</span>
          </div>

          <div className="billing-screen-crop billing-dashboard-crop">
            <img
              src="/images/billing/dashboard.png"
              alt="Techabanca Billing dashboard with business performance, receivables, expenses overview, purchase orders and recent sales"
            />
          </div>

          <figcaption>
            A connected view across sales, collections, receivables, expenses,
            purchases and customers.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
