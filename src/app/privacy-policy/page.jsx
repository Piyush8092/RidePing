import PolicyLayout from "@/components/common/PolicyLayout";

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy">
      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">1. Introduction</h2>
        <p>
          RidePing provides a school ERP platform to manage student data, transport tracking,
          communication, and administrative operations.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">2. Information We Collect</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Student details (name, class, roll number)</li>
          <li>Parent/guardian contact information</li>
          <li>School staff information</li>
          <li>Login credentials</li>
          <li>Device and usage data</li>
          <li>Location data for transport tracking</li>
        </ul>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">3. How We Use Information</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Provide ERP services</li>
          <li>Enable transport tracking</li>
          <li>Improve system performance</li>
          <li>Send notifications and alerts</li>
          <li>Maintain platform security</li>
        </ul>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">4. Data Sharing</h2>
        <p>
          We do not sell user data. Data may be shared with schools using the platform or trusted
          third-party services when required.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">5. Data Security</h2>
        <p>
          We use secure systems, encryption, and controlled access. However, no system is completely
          secure.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">6. Data Retention</h2>
        <p>Data is retained as long as the school uses RidePing or as required by law.</p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">7. Children’s Privacy</h2>
        <p>
          Data is managed by schools and parents. We do not directly collect data from children
          without authorization.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">8. User Rights</h2>
        <p>
          Users may request access, correction, or deletion of data through the school
          administration.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">9. Contact Us</h2>
        <p>Email: contact@rideping.com</p>
        <p>Phone: +91 9002831877</p>
      </section>
    </PolicyLayout>
  );
}
