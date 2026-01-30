export const verifyAccountTemplate = (receiverEmail, serviceDescription, title) => {
  return {
    to: receiverEmail,
    subject: `COMMUNITY SERVICES - ${title}`,
    from: `COMMUNITY SERVICES <${process.env.SMTP_GMAIL_SENDER_EMAIL}>`,
    text: `Hello from COMMUNITY SERVICES! Please verify your account using the following info: ${serviceDescription}`,
    html: `
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: linear-gradient(135deg, #E8F4FD 0%, #D6E9F7 100%); min-height: 100vh;">
      <tr>
        <td align="center" style="padding: 40px 20px;">
          <table style="max-width: 700px; width: 100%; background-color: #FFFFFF; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); overflow: hidden;">
            <tr>
              <td style="background: #408BF6; padding: 10px 0; text-align: center;">
                <span style="color: #fff; font-size: 24px; font-weight: 600;">COMMUNITY SERVICES</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px 40px;">
                <h2 style="color: #408BF6; font-size: 28px; text-align: center;">Verify Your Account</h2>
                <p style="text-align: center; font-size: 16px; color: #5A6C7D;">
                  Welcome to COMMUNITY SERVICES! Please verify your account to access all features.
                </p>
                <div style="text-align:center; margin:20px 0;">
                  <p style="display:inline-block; background:#408BF6; color:#fff; padding:16px 32px; border-radius:8px; font-weight:600; font-size:16px;">
                    ${title} - ${serviceDescription}
                  </p>
                </div>
                <p style="color:#5A6C7D; font-size:14px; text-align:center;">
                  This verification info will expire in 24 hours. If you didn't request this, ignore this email.
                </p>
              </td>
            </tr>
            <tr>
              <td style="background:#F8FAFC; padding:10px 40px; text-align:center; border-top:1px solid #E2E8F0;">
                <p style="color:#94A3B8; font-size:14px;">Need help? Contact <a href="mailto:support@lvpetroleum.com" style="color:#4A90E2;">support@lvpetroleum.com</a></p>
                <p style="color:#CBD5E1; font-size:12px;">© 2026 COMMUNITY SERVICES. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    `,
  };
};
