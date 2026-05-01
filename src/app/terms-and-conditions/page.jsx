import PolicyLayout from "@/components/common/PolicyLayout";
import { siteConfig } from "@/config/site";

export default function TermsPage() {
  return (
    <PolicyLayout title="Terms of Service">
      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">1. Acceptance of Terms</h2>
        <p>
          By accessing or using RidePing, you agree to comply with these Terms & Conditions. If you
          do not agree, you should not use the platform.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">2. Services</h2>
        <p>
          RidePing provides a school ERP platform including attendance management, fee tracking,
          communication tools, transport tracking, and administrative features for schools.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">
          3. Eligibility & Account Usage
        </h2>
        <p>
          The platform is intended for use by schools, administrators, staff, and authorized users.
          The school is responsible for managing user access and ensuring proper usage.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">4. User Responsibilities</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Provide accurate and updated information</li>
          <li>Maintain account credentials securely</li>
          <li>Use the platform only for lawful purposes</li>
          <li>Not attempt to misuse, hack, or disrupt the system</li>
        </ul>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">5. Pricing & Payments</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Plans are billed on a per student / per month basis</li>
          <li>Minimum billing applies as per selected plan</li>
          <li>Premium plan may include a one-time setup fee</li>
          <li>Payments must be made on time to continue service</li>
        </ul>
        <p className="mt-2">
          Failure to complete payment may result in temporary suspension of services.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">
          6. Plan Changes & Cancellation
        </h2>
        <p>
          Schools may upgrade or downgrade plans based on their requirements. Changes may take
          effect from the next billing cycle unless stated otherwise.
        </p>
        <p className="mt-2">
          Services can be discontinued at any time, however, fees already paid are non-refundable
          unless explicitly agreed.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">7. Data Ownership</h2>
        <p>
          All school and student data belongs to the respective school. RidePing acts only as a
          service provider and does not claim ownership of any data.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">8. Service Availability</h2>
        <p>
          We strive to maintain high availability and performance. However, uninterrupted or
          error-free service cannot be guaranteed at all times.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">9. Limitation of Liability</h2>
        <p>
          RidePing shall not be liable for any indirect, incidental, or consequential damages
          arising from the use or inability to use the platform, including data loss or service
          interruptions.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">10. Termination</h2>
        <p>
          We reserve the right to suspend or terminate access in case of violation of these terms or
          non-payment. Schools may also stop using the service at any time.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">11. Governing Law</h2>
        <p>
          These Terms & Conditions are governed by and interpreted in accordance with the laws of
          India.
        </p>
      </section>

      <section>
        <h2 className="text-text-primary mb-2 text-xl font-semibold">12. Contact</h2>
        <p>Email: {siteConfig.contact.email}</p>
        <p>Phone: {siteConfig.contact.displayPhone}</p>
      </section>
    </PolicyLayout>
  );
}
