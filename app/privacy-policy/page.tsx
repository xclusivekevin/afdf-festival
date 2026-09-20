import type { Metadata } from "next";
import Legal from "@/components/Legal";
export const metadata: Metadata = { title: "Privacy Policy" };
export default function Page() {
  return (
    <Legal title="Privacy Policy">
      <h2>1. Introduction</h2><p>Welcome to the African Food and Drinks Festival (“we,” “our,” “us”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at festival@afrifoodnetwork.com.</p>
      <h2>2. Information We Collect</h2><p>We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, or when you participate in activities on the website.</p><ul><li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details.</li><li><strong>Payment Data:</strong> Data necessary to process your payment if you make purchases, such as your payment instrument number (e.g., credit card number).</li><li><strong>Usage Data:</strong> Information about how you use our website, products, and services.</li></ul>
      <h2>3. How We Use Your Information</h2><p>We use personal information collected via our website for a variety of business purposes described below:</p><ul><li>To provide and deliver services to you.</li><li>To process and complete transactions.</li><li>To manage your account.</li><li>To improve our website, products, and services.</li><li>To communicate with you, including sending service-related messages.</li></ul>
      <h2>4. Sharing Your Information</h2><p>We only share and disclose your information in the following situations:</p><ul><li><strong>Compliance with Laws:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li><li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li></ul>
      <h2>5. Data Security</h2><p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.</p>
      <h2>6. Your Privacy Rights</h2><p>You have certain rights under applicable privacy laws, including the right to access, correct, or delete your personal data. To exercise these rights, please contact us at festival@afrifoodnetwork.com.</p>
      <h2>7. Changes to This Policy</h2><p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.</p>
      <h2>8. Contact Us</h2><p>If you have questions or comments about this policy, you may contact us at festival@afrifoodnetwork.com.</p>
    </Legal>
  );
}
