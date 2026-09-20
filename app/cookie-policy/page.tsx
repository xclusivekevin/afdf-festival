import type { Metadata } from "next";
import Legal from "@/components/Legal";
export const metadata: Metadata = { title: "Cookie Policy" };
export default function Page() {
  return (
    <Legal title="Cookie Policy">
      <h2>1. What Are Cookies?</h2><p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
      <h2>2. How We Use Cookies</h2><p>We use cookies to:</p><ul><li>Recognize you when you visit our websites.</li><li>Track your browsing patterns and to build up a profile of how you and other users use the website.</li><li>Make our website work as efficiently as possible.</li><li>Remember your preferences and settings.</li></ul>
      <h2>3. Types of Cookies We Use</h2><p>We use the following types of cookies:</p><ul><li><strong>Strictly Necessary Cookies:</strong> These are cookies that are required for the operation of our website.</li><li><strong>Performance Cookies:</strong> These cookies allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it.</li><li><strong>Functionality Cookies:</strong> These are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences.</li></ul>
      <h2>4. Managing Cookies</h2><p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.</p>
      <h2>5. Changes to This Cookie Policy</h2><p>We may update this Cookie Policy in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons.</p>
      <h2>6. Contact Us</h2><p>If you have any questions about our use of cookies or other technologies, please email us at festival@afrifoodnetwork.com.</p>
    </Legal>
  );
}
