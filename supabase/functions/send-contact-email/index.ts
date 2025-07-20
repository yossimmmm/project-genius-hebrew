import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, subject, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact email:", { name, email, subject });

    // Send email to business
    const emailResponse = await resend.emails.send({
      from: "SOS Projects <onboarding@resend.dev>",
      to: ["projectssosil@gmail.com"],
      subject: `הודעה חדשה מהאתר - ${subject || 'ללא נושא'}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif;">
          <h2>הודעה חדשה מהאתר</h2>
          <p><strong>שם:</strong> ${name}</p>
          <p><strong>אימייל:</strong> ${email}</p>
          ${phone ? `<p><strong>טלפון:</strong> ${phone}</p>` : ''}
          ${subject ? `<p><strong>נושא:</strong> ${subject}</p>` : ''}
          <p><strong>הודעה:</strong></p>
          <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: "SOS Projects <onboarding@resend.dev>",
      to: [email],
      subject: "קיבלנו את הודעתך - SOS Projects",
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif;">
          <h2>שלום ${name},</h2>
          <p>תודה שפניתם אלינו! קיבלנו את הודעתכם ונחזור אליכם בהקדם האפשרי.</p>
          <p>פרטי ההודעה שלכם:</p>
          ${subject ? `<p><strong>נושא:</strong> ${subject}</p>` : ''}
          <p><strong>הודעה:</strong> ${message}</p>
          <br>
          <p>בברכה,<br>צוות SOS Projects</p>
          <p style="color: #666; font-size: 12px;">אימייל זה נשלח אוטומטית, אנא אל תשיבו אליו</p>
        </div>
      `,
    });

    console.log("Emails sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);