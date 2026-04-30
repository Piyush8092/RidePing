import PolicyLayout from "@/components/common/PolicyLayout";

export default function TermsPage() {
  return (
    <PolicyLayout title="Terms & Conditions">
      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">1. Acceptance of Terms</h2>
        <p>
          By using RidePing, you agree to these terms. If you do not agree, do not use the platform.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">2. Services</h2>
        <p>
          RidePing provides school ERP, transport tracking, communication tools, and administrative
          features.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">3. User Responsibilities</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Provide accurate information</li>
          <li>Maintain account security</li>
          <li>Use the platform legally</li>
          <li>Avoid misuse or hacking attempts</li>
        </ul>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">4. Payments</h2>
        <p>
          Paid plans are billed per student/month. Services may be suspended if payment is not
          completed.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">5. Data Ownership</h2>
        <p>
          Schools own their data. RidePing acts as a service provider and does not claim ownership.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">6. Service Availability</h2>
        <p>We aim for high uptime but do not guarantee uninterrupted service.</p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">7. Limitation of Liability</h2>
        <p>
          RidePing is not responsible for data loss, misuse, or interruptions beyond our control.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">8. Termination</h2>
        <p>
          Accounts may be suspended for violations or non-payment. Users may stop using the service
          anytime.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">9. Governing Law</h2>
        <p>These terms are governed by the laws of India.</p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">10. Contact</h2>
        <p>Email: contact@rideping.com</p>
        <p>Phone: +91 9002831877</p>
      </section>
    </PolicyLayout>
  );
}
