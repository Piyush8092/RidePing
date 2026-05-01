import PolicyLayout from "@/components/common/PolicyLayout";
import { siteConfig } from "@/config/site";

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy">
      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">1. Introduction</h2>
        <p>
          RidePing is a school ERP and management platform designed for Indian schools. We help
          institutions manage attendance, fees, communication, transport, and administrative
          operations in a secure and efficient way.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">2. Information We Collect</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Student information (name, class, roll number, attendance, academic records)</li>
          <li>Parent/guardian contact details (phone number, email)</li>
          <li>School staff and administrator data</li>
          <li>Login credentials (securely stored)</li>
          <li>Payment-related information (processed via secure third-party gateways)</li>
          <li>Device, log, and usage data</li>
          <li>Location data (only when transport tracking is enabled)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">3. How We Use Information</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Provide and operate the school ERP system</li>
          <li>Manage attendance, fees, results, and communication</li>
          <li>Enable transport tracking and safety features</li>
          <li>Send notifications, alerts, and updates</li>
          <li>Improve performance, reliability, and user experience</li>
          <li>Ensure platform security and prevent misuse</li>
        </ul>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">4. Data Ownership</h2>
        <p>
          All student and school data belongs to the respective school. RidePing acts only as a
          service provider and processes data on behalf of the school.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">5. Data Sharing</h2>
        <p>We do not sell or rent user data. Data may be shared only in the following cases:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>With the school administration using the platform</li>
          <li>With trusted third-party providers (such as SMS, hosting, and payment gateways)</li>
          <li>When required by law or regulatory authorities</li>
        </ul>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">6. Data Security</h2>
        <p>
          We implement industry-standard security practices including encryption, secure servers,
          and role-based access control to protect data. Access is restricted to authorized users
          only.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">7. Data Retention</h2>
        <p>
          Data is retained as long as the school continues to use RidePing or as required by
          applicable laws. Schools may request data export or deletion where applicable.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">8. Children’s Privacy</h2>
        <p>
          RidePing does not directly collect data from children. All data is provided and managed by
          schools and parents under proper authorization.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">9. User Rights</h2>
        <p>
          Schools and users may request access, correction, or deletion of data through the school
          administration or by contacting us directly.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">10. Updates to This Policy</h2>
        <p>We may update this policy from time to time. Any changes will be posted on this page.</p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">11. Contact Us</h2>
        <p>Email: {siteConfig.contact.email}</p>
        <p>Phone: {siteConfig.contact.displayPhone}</p>
      </section>
    </PolicyLayout>
  );
}
